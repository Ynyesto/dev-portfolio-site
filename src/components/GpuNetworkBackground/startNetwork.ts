import { clock, effect, frameLoop, init, surface } from "vgpu";
import type { FrameLoopHandle } from "vgpu";
import networkShader from "./shaders/network.wgsl";

/** Mutable pointer state — updated outside React to avoid per-frame renders. */
type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

function pickDensity(width: number): number {
  // Sparse on purpose — clarity over particle count
  if (width < 480) return 0.7;
  if (width < 768) return 0.85;
  if (width < 1200) return 1.0;
  return 1.05;
}

/**
 * Starts the hero execution-trace effect on `canvas`. Returns a disposer that
 * stops the frame loop and releases the GPU device (Strict Mode remount-safe).
 *
 * Failures (no WebGPU, adapter loss, etc.) resolve to a no-op disposer — callers
 * must not surface errors to the user.
 */
export function startNetwork(
  canvas: HTMLCanvasElement,
  opts?: { onReady?: () => void },
): () => void {
  let disposed = false;
  let loop: FrameLoopHandle | undefined;
  let gpu: Awaited<ReturnType<typeof init>> | undefined;
  let removeListeners: (() => void) | undefined;

  const pointer: PointerState = { x: 0.5, y: 0.35, active: false };

  void (async () => {
    try {
      gpu = await init();
    } catch {
      return;
    }
    if (disposed) {
      gpu.dispose();
      return;
    }

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const canvasSurface = surface(gpu, canvas, {
      dpr: [1, 1.75],
      alphaMode: "premultiplied",
      label: "hero-trace",
    });

    const density = pickDensity(canvas.clientWidth || window.innerWidth);
    const network = effect(gpu, networkShader, {
      label: "hero-trace",
      set: {
        params: {
          time: 0,
          density,
          mouseActive: 0,
          _pad0: 0,
          resolution: [canvasSurface.size[0], canvasSurface.size[1]],
          mouse: [pointer.x, pointer.y],
        },
      },
    });

    const syncResize = () => {
      network.set({
        params: {
          density: pickDensity(canvas.clientWidth || window.innerWidth),
          resolution: [canvasSurface.size[0], canvasSurface.size[1]],
        },
      });
    };
    canvasSurface.onResize(syncResize);

    const time = clock(gpu);
    const device = gpu;

    const startLoop = (): FrameLoopHandle =>
      frameLoop(device, (frame) => {
        network.set({
          params: {
            time: time.time,
            mouseActive: pointer.active && finePointer.matches ? 1 : 0,
            mouse: [pointer.x, pointer.y],
          },
        });
        // Transparent clear so CSS grid / glow remain visible underneath
        frame.pass({ target: canvasSurface, clear: [0, 0, 0, 0] }, network);
      });

    const onPointerMove = (e: PointerEvent) => {
      if (!finePointer.matches) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        pointer.active = false;
        return;
      }
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
      pointer.active = true;
    };

    const onVisibility = () => {
      if (disposed) return;
      if (document.hidden) {
        loop?.stop();
        loop = undefined;
        return;
      }
      if (!loop) {
        loop = startLoop();
      }
    };

    if (finePointer.matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    document.addEventListener("visibilitychange", onVisibility);

    removeListeners = () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };

    loop = startLoop();
    if (!disposed) opts?.onReady?.();
  })();

  return () => {
    disposed = true;
    removeListeners?.();
    loop?.stop();
    loop = undefined;
    gpu?.dispose();
    gpu = undefined;
  };
}
