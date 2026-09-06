// Procedural network field for the home hero.
//
// Coordinate system: fragment `uv` is 0..1. Remapped to aspect-corrected centered
// space so cells stay circular on wide screens.
//
// Design intent: a readable sparse graph (clear nodes + crisp links), not a soft
// fog. CPU only uploads { time, density, resolution, mouse } each frame.

struct Params {
  time: f32,
  density: f32,
  mouseActive: f32,
  _pad0: f32,
  resolution: vec2f,
  mouse: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn hash22(p: vec2f) -> vec2f {
  return vec2f(hash21(p), hash21(p + vec2f(19.1, 73.7)));
}

fn distToSegment(p: vec2f, a: vec2f, b: vec2f) -> f32 {
  let pa = p - a;
  let ba = b - a;
  let h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
  return length(pa - ba * h);
}

fn nodeAt(id: vec2f, cell: f32, time: f32) -> vec2f {
  let rnd = hash22(id);
  let offset = (rnd - 0.5) * 0.55;
  let speed = 0.07 + rnd.x * 0.11;
  let drift = vec2f(
    sin(time * speed + rnd.y * 6.28318),
    cos(time * (speed * 0.9) + rnd.x * 6.28318),
  ) * (0.04 + rnd.y * 0.025);
  return (id + 0.5 + offset) * cell + drift;
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let res = max(params.resolution, vec2f(1.0));
  let aspect = res.x / res.y;
  let p = (uv - 0.5) * vec2f(aspect, 1.0);

  // Larger cells → fewer, clearer nodes (reads as a graph, not noise)
  let density = clamp(params.density, 0.45, 1.2);
  let cell = 0.28 / density;

  var mouseP = vec2f(0.0);
  if (params.mouseActive > 0.5) {
    mouseP = (params.mouse - 0.5) * vec2f(aspect, 1.0);
  }

  let gi = floor(p / cell);
  var nodes = 0.0;
  var edges = 0.0;
  var pulse = 0.0;

  for (var oy = -2; oy <= 2; oy++) {
    for (var ox = -2; ox <= 2; ox++) {
      let id = gi + vec2f(f32(ox), f32(oy));
      // Drop ~30% of cells so the topology feels irregular, not a lattice
      if (hash21(id * 1.7) < 0.3) {
        continue;
      }

      var pos = nodeAt(id, cell, params.time);
      let rnd = hash22(id);

      if (params.mouseActive > 0.5) {
        let toM = pos - mouseP;
        let md = length(toM);
        let push = exp(-md * 2.2) * 0.07;
        if (md > 1e-4) {
          pos += (toM / md) * push;
        }
      }

      let d = length(p - pos);
      // Crisp cores + tiny halo — avoid mushy glow
      let radius = 0.0055 + rnd.x * 0.004;
      let core = smoothstep(radius, radius * 0.25, d);
      let halo = smoothstep(radius * 2.4, radius, d) * 0.35;
      nodes += (core + halo) * (0.75 + 0.25 * rnd.y);

      let dirs = array<vec2f, 3>(
        vec2f(1.0, 0.0),
        vec2f(0.0, 1.0),
        vec2f(1.0, 1.0),
      );
      for (var n = 0; n < 3; n++) {
        let nid = id + dirs[n];
        if (hash21(nid * 1.7) < 0.3) {
          continue;
        }
        // Connect more often so the graph actually reads
        if (hash21(id + nid * 17.0) > 0.72) {
          continue;
        }

        var npos = nodeAt(nid, cell, params.time);
        let nr = hash22(nid);
        if (params.mouseActive > 0.5) {
          let toM2 = npos - mouseP;
          let md2 = length(toM2);
          let push2 = exp(-md2 * 2.2) * 0.07;
          if (md2 > 1e-4) {
            npos += (toM2 / md2) * push2;
          }
        }

        let span = length(pos - npos);
        let maxSpan = cell * (1.35 + nr.x * 0.25);
        if (span > maxSpan || span < cell * 0.35) {
          continue;
        }

        let ld = distToSegment(p, pos, npos);
        let lineW = 0.0016 + nr.y * 0.0008;
        let line = smoothstep(lineW * 1.8, 0.0, ld)
          * smoothstep(maxSpan, maxSpan * 0.65, span);
        edges += line * 0.85;

        if (hash21(id * 3.1 + nid) > 0.7) {
          let along = clamp(
            dot(p - pos, npos - pos) / max(dot(npos - pos, npos - pos), 1e-5),
            0.0,
            1.0,
          );
          let wave = fract(along - params.time * (0.18 + nr.x * 0.12) + hash21(nid));
          let blob = exp(-pow((wave - 0.5) * 9.0, 2.0));
          pulse += line * blob * 1.35;
        }
      }
    }
  }

  // Accent-forward: teal graph on transparent dark, not washed cool fog
  let accent = vec3f(0.22, 0.92, 0.82);
  let soft = vec3f(0.55, 0.72, 0.78);
  let field = clamp(nodes * 1.05 + edges * 0.9 + pulse * 0.85, 0.0, 1.6);
  let tint = mix(soft, accent, clamp(0.35 + nodes * 0.4 + pulse * 0.35, 0.0, 1.0));
  let rgb = tint * field;

  // Keep strength under the copy a bit lower; stronger toward the portrait/right
  let textEase = mix(0.55, 1.0, smoothstep(0.0, 0.72, uv.x));
  let vignette = smoothstep(0.0, 0.1, uv.y) * smoothstep(1.02, 0.62, uv.y);
  let side = smoothstep(0.0, 0.04, uv.x) * smoothstep(1.0, 0.96, uv.x);
  let alpha = clamp(field * 0.72, 0.0, 0.82) * vignette * side * textEase;

  return vec4f(rgb * alpha, alpha);
}
