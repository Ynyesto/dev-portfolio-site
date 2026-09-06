"use client";

import { useEffect, useRef } from "react";

/**
 * Progressive-enhancement WebGPU network behind the home hero.
 * Renders nothing interactive; silent no-op without WebGPU or with reduced motion.
 */
export default function GpuNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!motionOk.matches) return;

    // Feature-detect before pulling the vgpu chunk
    if (typeof navigator === "undefined" || !("gpu" in navigator)) return;

    let cancelled = false;
    let dispose: (() => void) | undefined;

    void import("./startNetwork")
      .then(({ startNetwork }) => {
        if (cancelled) return;
        dispose = startNetwork(canvas, {
          onReady: () => {
            if (!cancelled) canvas.dataset.ready = "1";
          },
        });
      })
      .catch(() => {
        // Keep CSS fallback; never surface GPU errors
      });

    return () => {
      cancelled = true;
      dispose?.();
      delete canvas.dataset.ready;
    };
  }, []);

  return (
    <div aria-hidden className="gpu-network-slot">
      <canvas ref={canvasRef} className="gpu-network-bg" />
    </div>
  );
}
