"use client";

import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable custom smooth scroll on touch devices or when user prefers reduced motion
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) return;

    let cancelled = false;
    let rafId = 0;
    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;

    const startRaf = () => {
      if (cancelled || !lenisInstance || document.hidden || rafId) return;
      const tick = (time: number) => {
        if (cancelled || !lenisInstance || document.hidden) {
          rafId = 0;
          return;
        }
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      } else {
        startRaf();
      }
    };

    // Dynamically import Lenis only on desktop fine-pointer devices so mobile never downloads it
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenisInstance = new Lenis({
        lerp: 0.1,
        duration: 0.8,
        wheelMultiplier: 1,
        smoothWheel: true,
      });
      document.addEventListener("visibilitychange", handleVisibilityChange);
      startRaf();
    });

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
