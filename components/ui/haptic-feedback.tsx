"use client";

import { useEffect } from "react";

export function HapticFeedback() {
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // Check if the device supports vibrating
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        const target = e.target as HTMLElement;
        
        const closestInteractive = 
          target.closest('a') || 
          target.closest('button') || 
          target.closest('[role="button"]') || 
          target.closest('[role="link"]');

        if (closestInteractive) {
          // Provide an immediate light haptic tap (10ms)
          // Exceptionally short duration avoids lag and feels like a physical click
          try {
            navigator.vibrate(10);
          } catch (err) {
            // Ignore error if vibration fails or is blocked
          }
        }
      }
    };

    // Use pointerdown for zero-delay response (fires before click, touchstart)
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return null;
}
