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

fn routeGate(time: f32, idx: i32) -> f32 {
  // Stagger activity so ~a few pulses run at once, not all ten
  let t = time * (0.07 + f32(idx % 3) * 0.008) + f32(idx) * 1.73;
  return smoothstep(0.18, 0.42, abs(sin(t)));
}

// Fills pts with a Manhattan route; returns vertex count (3..6).
fn fillRoute(idx: i32, narrow: f32, pts: ptr<function, array<vec2f, 6>>) -> i32 {
  let n = narrow;
  if (idx == 0) {
    // Mid cross → portrait
    (*pts)[0] = snapToGridUv(mix(vec2f(0.16, 0.42), vec2f(0.14, 0.22), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.40, 0.42), vec2f(0.40, 0.22), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.40, 0.26), vec2f(0.40, 0.40), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.70, 0.26), vec2f(0.68, 0.40), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.70, 0.54), vec2f(0.68, 0.24), n));
    (*pts)[5] = snapToGridUv(mix(vec2f(0.90, 0.54), vec2f(0.88, 0.24), n));
    return 6;
  }
  if (idx == 1) {
    // Upper rail with a drop
    (*pts)[0] = snapToGridUv(mix(vec2f(0.10, 0.16), vec2f(0.10, 0.10), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.36, 0.16), vec2f(0.34, 0.10), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.36, 0.36), vec2f(0.34, 0.32), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.76, 0.36), vec2f(0.60, 0.32), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.76, 0.58), vec2f(0.60, 0.50), n));
    (*pts)[5] = (*pts)[4];
    return 5;
  }
  if (idx == 2) {
    // Lower feeder rising into mid-right
    (*pts)[0] = snapToGridUv(mix(vec2f(0.20, 0.68), vec2f(0.18, 0.56), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.46, 0.68), vec2f(0.46, 0.56), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.46, 0.44), vec2f(0.46, 0.34), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.84, 0.44), vec2f(0.84, 0.34), n));
    (*pts)[4] = (*pts)[3];
    (*pts)[5] = (*pts)[3];
    return 4;
  }
  if (idx == 3) {
    // Tall vertical spine, then right
    (*pts)[0] = snapToGridUv(mix(vec2f(0.28, 0.14), vec2f(0.24, 0.12), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.28, 0.62), vec2f(0.24, 0.58), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.58, 0.62), vec2f(0.52, 0.58), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.58, 0.34), vec2f(0.52, 0.30), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.86, 0.34), vec2f(0.80, 0.30), n));
    (*pts)[5] = (*pts)[4];
    return 5;
  }
  if (idx == 4) {
    // Right-side vertical zig
    (*pts)[0] = snapToGridUv(mix(vec2f(0.62, 0.72), vec2f(0.58, 0.62), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.62, 0.22), vec2f(0.58, 0.18), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.82, 0.22), vec2f(0.78, 0.18), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.82, 0.48), vec2f(0.78, 0.42), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.94, 0.48), vec2f(0.90, 0.42), n));
    (*pts)[5] = (*pts)[4];
    return 5;
  }
  if (idx == 5) {
    // Staircase down-right
    (*pts)[0] = snapToGridUv(mix(vec2f(0.14, 0.22), vec2f(0.12, 0.16), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.32, 0.22), vec2f(0.30, 0.16), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.32, 0.40), vec2f(0.30, 0.34), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.54, 0.40), vec2f(0.50, 0.34), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.54, 0.60), vec2f(0.50, 0.52), n));
    (*pts)[5] = snapToGridUv(mix(vec2f(0.78, 0.60), vec2f(0.74, 0.52), n));
    return 6;
  }
  if (idx == 6) {
    // Staircase up-right
    (*pts)[0] = snapToGridUv(mix(vec2f(0.18, 0.70), vec2f(0.16, 0.60), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.34, 0.70), vec2f(0.32, 0.60), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.34, 0.48), vec2f(0.32, 0.42), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.56, 0.48), vec2f(0.52, 0.42), n));
    (*pts)[4] = snapToGridUv(mix(vec2f(0.56, 0.24), vec2f(0.52, 0.20), n));
    (*pts)[5] = snapToGridUv(mix(vec2f(0.88, 0.24), vec2f(0.82, 0.20), n));
    return 6;
  }
  if (idx == 7) {
    // U-shape: down, across, up
    (*pts)[0] = snapToGridUv(mix(vec2f(0.24, 0.18), vec2f(0.20, 0.14), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.24, 0.64), vec2f(0.20, 0.56), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.68, 0.64), vec2f(0.64, 0.56), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.68, 0.20), vec2f(0.64, 0.16), n));
    (*pts)[4] = (*pts)[3];
    (*pts)[5] = (*pts)[3];
    return 4;
  }
  if (idx == 8) {
    // Inverted U: up-ish from mid, across top, down
    (*pts)[0] = snapToGridUv(mix(vec2f(0.30, 0.58), vec2f(0.26, 0.50), n));
    (*pts)[1] = snapToGridUv(mix(vec2f(0.30, 0.18), vec2f(0.26, 0.14), n));
    (*pts)[2] = snapToGridUv(mix(vec2f(0.80, 0.18), vec2f(0.74, 0.14), n));
    (*pts)[3] = snapToGridUv(mix(vec2f(0.80, 0.56), vec2f(0.74, 0.48), n));
    (*pts)[4] = (*pts)[3];
    (*pts)[5] = (*pts)[3];
    return 4;
  }
  // idx == 9 — vertical hop then long horizontal
  (*pts)[0] = snapToGridUv(mix(vec2f(0.12, 0.50), vec2f(0.12, 0.44), n));
  (*pts)[1] = snapToGridUv(mix(vec2f(0.12, 0.30), vec2f(0.12, 0.26), n));
  (*pts)[2] = snapToGridUv(mix(vec2f(0.50, 0.30), vec2f(0.48, 0.26), n));
  (*pts)[3] = snapToGridUv(mix(vec2f(0.50, 0.52), vec2f(0.48, 0.46), n));
  (*pts)[4] = snapToGridUv(mix(vec2f(0.92, 0.52), vec2f(0.86, 0.46), n));
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

  // Ten intentional routes — staggered pulses, mixed horizontal + vertical Manhattan
  for (var r = 0; r < 10; r++) {
    let count = fillRoute(r, narrow, &pts);
    let phase = f32(r) * 0.113 + 0.04;
    let speed = 0.038 + hash21(vec2f(f32(r), 3.7)) * 0.035;
    let idle = (0.30 + hash21(vec2f(f32(r), 0.9)) * 0.18) * params.railIdle;
    // Primary few routes read a bit stronger when idle
    let railScale = select(0.62, mix(0.85, 1.0, f32(2 - r) * 0.08), r < 3);
    let s = strokeRoute(
      uv,
      &pts,
      count,
      params.time,
      phase,
      speed,
      lineW,
      routeGate(params.time, r),
      idle,
    );
    rails += s.x * railScale;
    packets += s.y;
    wakes += s.z;
  }

  var probe = 0.0;
  if (params.mouseActive > 0.5) {
    let mu = snapToGridUv(params.mouse);
    let md = length(uv - mu);
    probe = smoothstep(lineW * 5.5, 0.0, md) * 0.45;
    probe += smoothstep(lineW * 1.4, 0.0, abs(uv.y - mu.y))
      * smoothstep(cellUv.x * 0.55, 0.0, abs(uv.x - mu.x)) * 0.2;
    probe += smoothstep(lineW * 1.4, 0.0, abs(uv.x - mu.x))
      * smoothstep(cellUv.y * 0.55, 0.0, abs(uv.y - mu.y)) * 0.2;
  }

  let accent = vec3f(0.20, 0.90, 0.80);
  let mute = vec3f(0.42, 0.52, 0.60);
  let railGain = mix(0.55, 0.48, narrow);
  let field = clamp(
    lattice * 0.65 + scaffold * 0.75 + rails * railGain + wakes * 0.85 + packets * 1.1 + probe * 0.7,
    0.0,
    1.8,
  );
  let tint = mix(mute, accent, clamp(0.25 + packets * 0.55 + wakes * 0.25 + probe * 0.2, 0.0, 1.0));
  let rgb = tint * field;

  let desktopCompose = mix(0.72, 1.0, smoothstep(0.12, 0.55, uv.x));
  let mobileCompose = mix(0.75, 1.0, smoothstep(0.88, 0.35, uv.y));
  let compose = mix(desktopCompose, mobileCompose, narrow);

  let vignette = smoothstep(0.0, 0.05, uv.y) * smoothstep(1.02, mix(0.72, 0.88, narrow), uv.y);
  let side = smoothstep(0.0, 0.02, uv.x) * smoothstep(1.0, 0.98, uv.x);
  let alpha = clamp(field * 0.78, 0.0, 0.9) * vignette * side * compose;

  return vec4f(rgb * alpha, alpha);
}
