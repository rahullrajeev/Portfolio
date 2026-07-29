"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState, useRef, useCallback } from "react";

type Stage = "idle" | "covering" | "uncovering";

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [stage, setStage] = useState<Stage>("idle");
  const prevPathname = useRef(pathname);
  
  const isNavigating = useRef(false);
  const routeReady = useRef(false);
  const coverFinished = useRef(false);

  const checkUncover = useCallback(() => {
    if (isNavigating.current && routeReady.current && coverFinished.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      setStage("uncovering");
      isNavigating.current = false;
    }
  }, []);

  useEffect(() => {
    const handleStart = () => {
      if (isNavigating.current) return;
      isNavigating.current = true;
      routeReady.current = false;
      coverFinished.current = false;
      setStage("covering");

      // Minimum cover duration before allowing uncover
      setTimeout(() => {
        coverFinished.current = true;
        checkUncover();
      }, 400);

      // Safety fallback: force uncover if route loading takes too long
      setTimeout(() => {
        if (isNavigating.current) {
          routeReady.current = true;
          coverFinished.current = true;
          checkUncover();
        }
      }, 2000);
    };

    window.addEventListener("page-transition-start", handleStart);
    return () => {
      window.removeEventListener("page-transition-start", handleStart);
    };
  }, [checkUncover]);

  // When route changes (pathname updates)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      routeReady.current = true;
      checkUncover();
    }
  }, [pathname, checkUncover]);

  // Handle stage reset after uncovering animation completes
  useEffect(() => {
    if (stage === "uncovering") {
      const timer = setTimeout(() => {
        setStage("idle");
        document.body.dataset.transitioning = "false";
      }, 460);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const transformOrigin = stage === "uncovering" ? "bottom" : "top";
  const scaleY = stage === "idle" ? 0 : stage === "uncovering" ? 0 : 1;

  return (
    <>
      <div className="relative w-full h-full min-h-screen flex flex-col">
        {children}
      </div>

      {/* Smooth Shutter Sweep Overlay */}
      <motion.div
        className="fixed inset-0 w-full h-full bg-zinc-950 text-zinc-50 z-[99999] pointer-events-none flex flex-col items-center justify-center overflow-hidden transform-gpu"
        style={{ transformOrigin }}
        animate={{ scaleY }}
        transition={{
          duration: stage === "covering" ? 0.32 : 0.42,
          ease: stage === "covering" ? [0.76, 0, 0.24, 1] : [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: stage === "covering" ? 1 : 0,
            scale: stage === "covering" ? 1 : 0.9,
          }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-display font-bold text-3xl sm:text-4xl tracking-tighter text-zinc-100 lowercase">
            rr.
          </span>
          <div className="w-12 h-0.5 bg-zinc-800 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white w-full"
              initial={{ x: "-100%" }}
              animate={{ x: stage === "covering" ? "0%" : "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
