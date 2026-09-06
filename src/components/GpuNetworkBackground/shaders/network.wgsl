// Sparse execution-trace field for the home hero.
//
// Suggests a tx/proof moving through engineered routes: faint rails on a quiet
// lattice, a small teal packet travelling a path, brief node wake behind it.
//
// Lattice + route waypoints snap to a 56px pitch matching `--bg-grid-size`, in
// *canvas-local* CSS pixels. Viewport-fixed snapping jumped a full row on scroll
// as getBoundingClientRect().top crossed grid boundaries.

struct Params {
  time: f32,
  mouseActive: f32,
  gridPx: f32,
  railIdle: f32,
  resolution: vec2f,
  mouse: vec2f,
  cssSize: vec2f,
  _pad: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn distToSegment(p: vec2f, a: vec2f, b: vec2f) -> vec2f {
  let pa = p - a;
  let ba = b - a;
  let baba = max(dot(ba, ba), 1e-6);
  let h = clamp(dot(pa, ba) / baba, 0.0, 1.0);
  return vec2f(length(pa - ba * h), h);
}

fn nodeGlow(p: vec2f, c: vec2f, r: f32) -> f32 {
  let d = length(p - c);
  return smoothstep(r, r * 0.2, d) + smoothstep(r * 2.6, r, d) * 0.28;
}

fn cssSizeSafe() -> vec2f {
  return max(params.cssSize, vec2f(1.0));
}

fn snapToGridUv(uv: vec2f) -> vec2f {
  let g = max(params.gridPx, 1.0);
  // Canvas-local CSS px — stable while scrolling
  let css = uv * cssSizeSafe();
  let snapped = round(css / g) * g;
  return snapped / cssSizeSafe();
}

fn strokeRoute(
  p: vec2f,
  pts: ptr<function, array<vec2f, 6>>,
  count: i32,
  time: f32,
  phase: f32,
  speed: f32,
  lineW: f32,
  packetOn: f32,
  idleStrength: f32,
) -> vec3f {
  var total = 0.0;
  var segLen: array<f32, 5>;
  for (var i = 0; i < count - 1; i++) {
    let L = length((*pts)[i + 1] - (*pts)[i]);
    segLen[i] = L;
    total += L;
  }
  if (total < 1e-4) {
    return vec3f(0.0);
  }

  // Cycle: long travel with gradual absorb → destination hold → quiet gap
  let cycle = fract(time * speed + phase);
  let travelEnd = 0.62;
  let holdEnd = 0.88;
  let u = clamp(cycle / travelEnd, 0.0, 1.0);
  let inTravel = select(0.0, 1.0, cycle <= travelEnd);
  let inHold = select(0.0, 1.0, cycle > travelEnd && cycle <= holdEnd);

  // Decelerate into the destination (position ease-out)
  let uPos = 1.0 - pow(1.0 - u, 1.55);
  let packetT = uPos * total;

  // Long soft envelopes — absorb spans most of the second half of the route
  let emerge = smoothstep(0.0, 0.14, u);
  let absorb = pow(1.0 - smoothstep(0.38, 1.0, u), 1.25);
  let packetAlive = emerge * absorb * inTravel * packetOn;

  // Wake outlives the packet core slightly, then drains into the destination
  let wakeAlive = emerge * pow(absorb, 0.75) * inTravel * packetOn;
  let wake = total * mix(0.12, 0.22, absorb);

  let dest = (*pts)[count - 1];
  // Destination keeps glowing while swallowing, then fades through hold
  let holdT = clamp((cycle - travelEnd) / max(holdEnd - travelEnd, 1e-3), 0.0, 1.0);
  let swallowAmt =
    ((1.0 - absorb) * emerge * inTravel + (1.0 - smoothstep(0.0, 1.0, holdT)) * inHold) * packetOn;
  var swallow = nodeGlow(p, dest, lineW * mix(2.4, 6.0, swallowAmt)) * swallowAmt * 1.25;

  var rail = 0.0;
  var packet = 0.0;
  var wakeGlow = 0.0;
  var acc = 0.0;

  for (var i = 0; i < count - 1; i++) {
    let a = (*pts)[i];
    let b = (*pts)[i + 1];
    let ds = distToSegment(p, a, b);
    let along = acc + ds.y * segLen[i];

    let line = smoothstep(lineW * 1.9, 0.0, ds.x);
    rail += line * mix(idleStrength, idleStrength + 0.12, packetAlive);

    // Packet dims and tightens over a long approach — no sudden pop
    let pd = abs(along - packetT);
    let tightness = mix(14.0, 48.0, 1.0 - absorb);
    packet += line * exp(-pow(pd * (tightness / total), 2.0)) * 1.6 * packetAlive;

    let behind = packetT - along;
    if (behind > 0.0 && behind < wake) {
      let fade = 1.0 - behind / wake;
      wakeGlow += line * pow(fade, 1.35) * 0.8 * wakeAlive;
    }

    let nodeR = lineW * 2.8;
    let hitA = exp(-pow((packetT - acc) * (12.0 / total), 2.0)) * packetAlive;
    let hitB = exp(-pow((packetT - (acc + segLen[i])) * (12.0 / total), 2.0)) * packetAlive;
    wakeGlow += nodeGlow(p, a, nodeR) * hitA;
    wakeGlow += nodeGlow(p, b, nodeR) * hitB;

    acc += segLen[i];
  }

  wakeGlow += swallow;

  return vec3f(rail, packet, wakeGlow);
}

// Fills pts with a Manhattan route spanning the full viewport; returns count (3..6).
// y covers ~0.08–0.92 so pulses travel through sections below the hero, not only the top band.
fn fillRoute(idx: i32, narrow: f32, pts: ptr<function, array<vec2f, 6>>) -> i32 {
  let n = narrow;
  if (idx == 0) {
    // Top → deep vertical drop → right (into lower sections)
    (*pts)[0] = snapToGridUv(mix(vec2f(0.18, 0.12), vec2f(0.16, 0.10), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.42, 0.12), vec2f(0.40, 0.10), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.42, 0.78), vec2f(0.40, 0.82), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.72, 0.78), vec2f(0.70, 0.82), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.72, 0.48), vec2f(0.70, 0.50), n));
    (*pts)[5] = snapToGridUv(mix(vec2f(0.90, 0.48), vec2f(0.88, 0.50), n));
    return 6;
  }
  if (idx == 1) {
    // Upper start, long descent down the right
    (*pts)[0] = snapToGridUv(mix(vec2f(0.12, 0.18), vec2f(0.12, 0.14), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.55, 0.18), vec2f(0.50, 0.14), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.55, 0.88), vec2f(0.50, 0.90), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.88, 0.88), vec2f(0.86, 0.90), n));
    (*pts)[4] = (*pts)[3];
    (*pts)[5] = (*pts)[3];
    return 4;
  }
  if (idx == 2) {
    // Lower-half horizontal corridor (below hero on most desktops)
    (*pts)[0] = snapToGridUv(mix(vec2f(0.10, 0.72), vec2f(0.10, 0.68), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.40, 0.72), vec2f(0.38, 0.68), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.40, 0.58), vec2f(0.38, 0.55), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.78, 0.58), vec2f(0.74, 0.55), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.78, 0.86), vec2f(0.74, 0.88), n));
    (*pts)[5] = snapToGridUv(mix(vec2f(0.94, 0.86), vec2f(0.92, 0.88), n));
    return 6;
  }
  if (idx == 3) {
    // Full-height left spine
    (*pts)[0] = snapToGridUv(mix(vec2f(0.22, 0.08), vec2f(0.20, 0.08), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.22, 0.92), vec2f(0.20, 0.92), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.58, 0.92), vec2f(0.55, 0.92), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.58, 0.62), vec2f(0.55, 0.62), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.88, 0.62), vec2f(0.86, 0.62), n));
    (*pts)[5] = (*pts)[4];
    return 5;
  }
  if (idx == 4) {
    // Right-side full vertical zig into the bottom
    (*pts)[0] = snapToGridUv(mix(vec2f(0.68, 0.10), vec2f(0.64, 0.10), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.68, 0.55), vec2f(0.64, 0.52), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.86, 0.55), vec2f(0.84, 0.52), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.86, 0.90), vec2f(0.84, 0.90), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.50, 0.90), vec2f(0.48, 0.90), n));
    (*pts)[5] = (*pts)[4];
    return 5;
  }
  if (idx == 5) {
    // Staircase from top-left to bottom-right
    (*pts)[0] = snapToGridUv(mix(vec2f(0.12, 0.14), vec2f(0.12, 0.12), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.30, 0.14), vec2f(0.28, 0.12), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.30, 0.40), vec2f(0.28, 0.38), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.55, 0.40), vec2f(0.52, 0.38), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.55, 0.74), vec2f(0.52, 0.76), n));
    (*pts)[5] = snapToGridUv(mix(vec2f(0.90, 0.74), vec2f(0.88, 0.76), n));
    return 6;
  }
  if (idx == 6) {
    // Staircase from bottom-left up then across mid/lower
    (*pts)[0] = snapToGridUv(mix(vec2f(0.14, 0.88), vec2f(0.14, 0.88), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.14, 0.52), vec2f(0.14, 0.50), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.48, 0.52), vec2f(0.46, 0.50), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.48, 0.28), vec2f(0.46, 0.26), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.82, 0.28), vec2f(0.80, 0.26), n));
    (*pts)[5] = snapToGridUv(mix(vec2f(0.82, 0.70), vec2f(0.80, 0.72), n));
    return 6;
  }
  if (idx == 7) {
    // Deep U through the lower half
    (*pts)[0] = snapToGridUv(mix(vec2f(0.20, 0.35), vec2f(0.18, 0.32), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.20, 0.90), vec2f(0.18, 0.90), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.78, 0.90), vec2f(0.76, 0.90), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.78, 0.42), vec2f(0.76, 0.40), n));
    (*pts)[4] = (*pts)[3];
    (*pts)[5] = (*pts)[3];
    return 4;
  }
  if (idx == 8) {
    // Top arch then long drop on the right into lower page
    (*pts)[0] = snapToGridUv(mix(vec2f(0.24, 0.55), vec2f(0.22, 0.50), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.24, 0.10), vec2f(0.22, 0.10), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.84, 0.10), vec2f(0.82, 0.10), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.84, 0.85), vec2f(0.82, 0.86), n));
    (*pts)[4] = (*pts)[3];
    (*pts)[5] = (*pts)[3];
    return 4;
  }
  // idx == 9 — mid → bottom sweep
  (*pts)[0] = snapToGridUv(mix(vec2f(0.10, 0.45), vec2f(0.10, 0.42), n));
  (*pts)[1] = snapToGridUv(mix(vec2f(0.10, 0.82), vec2f(0.10, 0.84), n));
  (*pts)[2] = snapToGridUv(mix(vec2f(0.50, 0.82), vec2f(0.48, 0.84), n));
  (*pts)[3] = snapToGridUv(mix(vec2f(0.50, 0.60), vec2f(0.48, 0.58), n));
  (*pts)[4] = snapToGridUv(mix(vec2f(0.92, 0.60), vec2f(0.90, 0.58), n));
  (*pts)[5] = (*pts)[4];
  return 5;
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let res = max(params.resolution, vec2f(1.0));
  let aspect = res.x / res.y;
  let narrow = select(0.0, 1.0, aspect < 0.95);
  let g = max(params.gridPx, 1.0);

  let fw = max(fwidth(uv), vec2f(1e-4));
  let lineW = 1.15 * max(fw.x, fw.y) * mix(1.0, 1.25, narrow);

  let css = uv * cssSizeSafe();
  let gid = floor(css / g);
  let centerCss = (gid + 0.5) * g;
  let guv = centerCss / cssSizeSafe();
  let cellUv = vec2f(g, g) / cssSizeSafe();

  var lattice = 0.0;
  let anchor = hash21(gid + vec2f(2.3, 7.1));
  let sideBias = mix(
    mix(0.78, 1.0, smoothstep(0.15, 0.75, guv.x)),
    mix(0.85, 1.0, smoothstep(0.85, 0.2, guv.y)),
    narrow,
  );
  if (anchor > mix(0.7, 0.62, sideBias - 0.78)) {
    lattice += nodeGlow(uv, guv, lineW * 2.2) * 0.32 * sideBias;
  }

  var scaffold = 0.0;
  if (anchor > 0.8) {
    let right = guv + vec2f(cellUv.x, 0.0);
    let down = guv + vec2f(0.0, cellUv.y);
    if (hash21(gid + vec2f(0.4, 1.2)) > 0.5) {
      scaffold += smoothstep(lineW * 1.6, 0.0, distToSegment(uv, guv, right).x) * 0.2 * sideBias;
    }
    if (hash21(gid + vec2f(1.9, 0.3)) > 0.58) {
      scaffold += smoothstep(lineW * 1.6, 0.0, distToSegment(uv, guv, down).x) * 0.16 * sideBias;
    }
  }

  var pts: array<vec2f, 6>;
  var rails = 0.0;
  var packets = 0.0;
  var wakes = 0.0;

  // Succession: one route at a time through the pool of 10 (brief fade in/out)
  let routeCount = 10;
  let seq = params.time * 0.09;
  let routeIdx = i32(floor(seq)) % routeCount;
  let slotT = fract(seq);
  let routeEnv = smoothstep(0.0, 0.1, slotT) * (1.0 - smoothstep(0.86, 1.0, slotT));

  let count = fillRoute(routeIdx, narrow, &pts);
  let idle = 0.46 * params.railIdle;
  // slotT drives a single emerge→travel→swallow→gap within this route's window
  let s = strokeRoute(
    uv,
    &pts,
    count,
    slotT,
    0.0,
    1.0,
    lineW,
    routeEnv,
    idle * routeEnv,
  );
  rails += s.x;
  packets += s.y;
  wakes += s.z;

  var probe = 0.0;
  if (params.mouseActive > 0.5) {
    let mu = snapToGridUv(params.mouse);
    let md = length(uv - mu);
    probe = smoothstep(lineW * 5.5, 0.0, md) * 0.45 * 0.85;
    probe += smoothstep(lineW * 1.4, 0.0, abs(uv.y - mu.y))
      * smoothstep(cellUv.x * 0.55, 0.0, abs(uv.x - mu.x)) * 0.18;
    probe += smoothstep(lineW * 1.4, 0.0, abs(uv.x - mu.x))
      * smoothstep(cellUv.y * 0.55, 0.0, abs(uv.y - mu.y)) * 0.18;
  }

  let accent = vec3f(0.20, 0.90, 0.80);
  let mute = vec3f(0.42, 0.52, 0.60);
  // Quieter lattice on full-page so the active route stays the focus
  let field = clamp(
    lattice * 0.35 + scaffold * 0.4 + rails * 0.7 + wakes * 0.9 + packets * 1.2 + probe * 0.55,
    0.0,
    1.8,
  );
  let tint = mix(mute, accent, clamp(0.25 + packets * 0.55 + wakes * 0.25 + probe * 0.2, 0.0, 1.0));
  let rgb = tint * field;

  let desktopCompose = mix(0.78, 1.0, smoothstep(0.08, 0.5, uv.x));
  let mobileCompose = 1.0;
  let compose = mix(desktopCompose, mobileCompose, narrow);

  let vignette = smoothstep(0.0, 0.03, uv.y) * smoothstep(1.0, 0.97, uv.y);
  let side = smoothstep(0.0, 0.02, uv.x) * smoothstep(1.0, 0.98, uv.x);
  let alpha = clamp(field * 0.8, 0.0, 0.9) * vignette * side * compose;

  return vec4f(rgb * alpha, alpha);
}
