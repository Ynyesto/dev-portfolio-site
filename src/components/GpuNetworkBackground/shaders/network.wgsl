// Sparse execution-trace field for the home hero.
//
// Suggests a tx/proof moving through engineered routes: faint rails on a quiet
// lattice, a small teal packet travelling a path, brief node wake behind it.
//
// Lattice + route waypoints snap to the site CSS grid (--bg-grid-size, 56px)
// using canvas origin/size in CSS pixels so traces sit on the same engineered
// surface as `.bg-grid` (fixed to the viewport).
//
// uv is 0..1. Full-hero coverage with a mild quieting under dense copy — not a
// hard crop to the portrait corner.

struct Params {
  time: f32,
  mouseActive: f32,
  gridPx: f32,
  railIdle: f32,
  resolution: vec2f,
  mouse: vec2f,
  originCss: vec2f,
  cssSize: vec2f,
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
  let css = params.originCss + uv * cssSizeSafe();
  let snapped = round(css / g) * g;
  return (snapped - params.originCss) / cssSizeSafe();
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

  let packetT = fract(time * speed + phase) * total;
  let wake = total * 0.16;

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
    rail += line * mix(idleStrength, idleStrength + 0.14, packetOn);

    let pd = abs(along - packetT);
    packet += line * exp(-pow(pd * (18.0 / total), 2.0)) * 1.6 * packetOn;

    let behind = packetT - along;
    if (behind > 0.0 && behind < wake) {
      let fade = 1.0 - behind / wake;
      wakeGlow += line * fade * fade * 0.85 * packetOn;
    }

    let nodeR = lineW * 2.8;
    let hitA = exp(-pow((packetT - acc) * (14.0 / total), 2.0)) * packetOn;
    let hitB = exp(-pow((packetT - (acc + segLen[i])) * (14.0 / total), 2.0)) * packetOn;
    wakeGlow += nodeGlow(p, a, nodeR) * hitA * 1.1;
    wakeGlow += nodeGlow(p, b, nodeR) * hitB * 1.1;

    acc += segLen[i];
  }

  return vec3f(rail, packet, wakeGlow);
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let res = max(params.resolution, vec2f(1.0));
  let aspect = res.x / res.y;
  let narrow = select(0.0, 1.0, aspect < 0.95);
  let g = max(params.gridPx, 1.0);

  let fw = max(fwidth(uv), vec2f(1e-4));
  let lineW = 1.15 * max(fw.x, fw.y) * mix(1.0, 1.25, narrow);

  let css = params.originCss + uv * cssSizeSafe();
  let gid = floor(css / g);
  let centerCss = (gid + 0.5) * g;
  let guv = (centerCss - params.originCss) / cssSizeSafe();
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

  let waveA = step(0.18, abs(sin(params.time * 0.085 + 0.2)));
  let waveB = step(0.42, abs(sin(params.time * 0.07 + 1.9)));
  let waveC = step(0.55, abs(sin(params.time * 0.095 + 3.4)));

  let idleA = 0.50 * params.railIdle;
  let idleB = 0.40 * params.railIdle;
  let idleC = 0.36 * params.railIdle;

  // Route A — crosses mid hero into the portrait side
  pts[0] = snapToGridUv(mix(vec2f(0.18, 0.42), vec2f(0.16, 0.20), narrow));
  pts[1] = snapToGridUv(mix(vec2f(0.42, 0.42), vec2f(0.42, 0.20), narrow));
  pts[2] = snapToGridUv(mix(vec2f(0.42, 0.28), vec2f(0.42, 0.38), narrow));
  pts[3] = snapToGridUv(mix(vec2f(0.72, 0.28), vec2f(0.72, 0.38), narrow));
  pts[4] = snapToGridUv(mix(vec2f(0.72, 0.52), vec2f(0.72, 0.22), narrow));
  pts[5] = snapToGridUv(mix(vec2f(0.88, 0.52), vec2f(0.88, 0.22), narrow));
  {
    let s = strokeRoute(uv, &pts, 6, params.time, 0.05, 0.07, lineW, waveA, idleA);
    rails += s.x;
    packets += s.y;
    wakes += s.z;
  }

  // Route B — upper rail across the field
  pts[0] = snapToGridUv(mix(vec2f(0.12, 0.18), vec2f(0.12, 0.12), narrow));
  pts[1] = snapToGridUv(mix(vec2f(0.38, 0.18), vec2f(0.38, 0.12), narrow));
  pts[2] = snapToGridUv(mix(vec2f(0.38, 0.34), vec2f(0.38, 0.30), narrow));
  pts[3] = snapToGridUv(mix(vec2f(0.78, 0.34), vec2f(0.62, 0.30), narrow));
  pts[4] = snapToGridUv(mix(vec2f(0.78, 0.58), vec2f(0.62, 0.48), narrow));
  pts[5] = pts[4];
  {
    let s = strokeRoute(uv, &pts, 5, params.time, 0.41, 0.055, lineW, waveB, idleB);
    rails += s.x * 0.85;
    packets += s.y;
    wakes += s.z;
  }

  // Route C — lower/mid feeder so mobile isn't only a top-right scrap
  pts[0] = snapToGridUv(mix(vec2f(0.22, 0.64), vec2f(0.20, 0.52), narrow));
  pts[1] = snapToGridUv(mix(vec2f(0.48, 0.64), vec2f(0.48, 0.52), narrow));
  pts[2] = snapToGridUv(mix(vec2f(0.48, 0.46), vec2f(0.48, 0.34), narrow));
  pts[3] = snapToGridUv(mix(vec2f(0.82, 0.46), vec2f(0.82, 0.34), narrow));
  pts[4] = pts[3];
  pts[5] = pts[3];
  {
    let s = strokeRoute(uv, &pts, 4, params.time, 0.73, 0.045, lineW, waveC, idleC);
    rails += s.x * 0.7;
    packets += s.y * 0.9;
    wakes += s.z * 0.9;
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
  let railGain = mix(0.62, 0.55, narrow);
  let field = clamp(
    lattice * 0.7 + scaffold * 0.8 + rails * railGain + wakes * 0.9 + packets * 1.15 + probe * 0.7,
    0.0,
    1.8,
  );
  let tint = mix(mute, accent, clamp(0.25 + packets * 0.55 + wakes * 0.25 + probe * 0.2, 0.0, 1.0));
  let rgb = tint * field;

  // Mild quieting under copy — never a hard half-screen crop
  let desktopCompose = mix(0.72, 1.0, smoothstep(0.12, 0.55, uv.x));
  let mobileCompose = mix(0.75, 1.0, smoothstep(0.88, 0.35, uv.y));
  let compose = mix(desktopCompose, mobileCompose, narrow);

  let vignette = smoothstep(0.0, 0.05, uv.y) * smoothstep(1.02, mix(0.72, 0.88, narrow), uv.y);
  let side = smoothstep(0.0, 0.02, uv.x) * smoothstep(1.0, 0.98, uv.x);
  let alpha = clamp(field * 0.78, 0.0, 0.9) * vignette * side * compose;

  return vec4f(rgb * alpha, alpha);
}
