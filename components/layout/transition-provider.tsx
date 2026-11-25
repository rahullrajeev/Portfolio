"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState, useRef, useCallback } from "react";

type Stage = "pre-intro" | "intro" | "idle" | "covering" | "uncovering";

const playPremiumIntroSound = (audioCtxRef: React.MutableRefObject<AudioContext | null>) => {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      try {
        audioCtxRef.current.close();
      } catch {}
    }

    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    // iOS/Safari priming: play 0s silent buffer synchronously inside user gesture
    try {
      const silentBuffer = ctx.createBuffer(1, 1, 22050);
      const silentSource = ctx.createBufferSource();
      silentSource.buffer = silentBuffer;
      silentSource.connect(ctx.destination);
      silentSource.start(0);
    } catch {}

    const t0 = ctx.currentTime;

    // Keystroke clicks (mechanical keyboard style)
    const text = "rahul rajeev";
    const typeStart = t0 + 0.5;
    const charTime = 1.0 / text.length;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") continue;
      const time = typeStart + i * charTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "square";
      osc.frequency.setValueAtTime(3000 + Math.random() * 500, time);
      osc.frequency.exponentialRampToValueAtTime(100, time + 0.015);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(2000, time);

      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.012, time + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.015);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 0.015);
    }

    // Soft fading chord
    const tFade = t0 + 1.8;
    const fadeGain = ctx.createGain();
    const fadeFilter = ctx.createBiquadFilter();

    fadeFilter.type = "lowpass";
    fadeFilter.frequency.setValueAtTime(550, tFade);
    fadeFilter.frequency.exponentialRampToValueAtTime(120, tFade + 2.8);

    fadeGain.gain.setValueAtTime(0, tFade);
    fadeGain.gain.linearRampToValueAtTime(0.035, tFade + 0.7);
    fadeGain.gain.exponentialRampToValueAtTime(0.0001, tFade + 3.0);

    fadeFilter.connect(fadeGain);
    fadeGain.connect(ctx.destination);

    const chordFreqs = [146.83, 220.0, 369.99];
    chordFreqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, tFade);

      osc.connect(fadeFilter);
      osc.start(tFade);
      osc.stop(tFade + 3.1);
    });
  } catch {
    // Audio autoplay blocked or not supported
  }
};

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const audioCtxRef = useRef<AudioContext | null>(null);

  const stopIntroAudio = useCallback(() => {
    if (audioCtxRef.current) {
      try {
        if (audioCtxRef.current.state !== "closed") {
          audioCtxRef.current.close();
        }
      } catch {}
      audioCtxRef.current = null;
    }
  }, []);

  const [stage, setStage] = useState<Stage>(() => (pathname === "/" ? "pre-intro" : "idle"));
  const [introStep, setIntroStep] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(() => pathname === "/");
  const prevPathname = useRef(pathname);

  const isNavigating = useRef(false);
  const routeReady = useRef(false);
  const coverFinished = useRef(false);
  const coverTimerRef = useRef<number | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);

  const clearNavTimers = useCallback(() => {
    if (coverTimerRef.current !== null) {
      window.clearTimeout(coverTimerRef.current);
      coverTimerRef.current = null;
    }
    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  }, []);

  // Skip cinematic pre-intro automatically for users who prefer reduced motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      stage === "pre-intro" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStage("idle");
      setIsFirstLoad(false);
      document.body.dataset.transitioning = "false";
    }
  }, [stage]);

  // Clean up audio & timers on unmount
  useEffect(() => {
    return () => {
      stopIntroAudio();
      clearNavTimers();
    };
  }, [stopIntroAudio, clearNavTimers]);

  // Handle initial cinematic intro sequence
  useEffect(() => {
    if (stage === "intro") {
      document.body.dataset.transitioning = "true";

      const t1 = window.setTimeout(() => setIntroStep(1), 500);
      const t2 = window.setTimeout(() => setIntroStep(2), 2000);
      const t3 = window.setTimeout(() => setIntroStep(3), 2500);
      const t4 = window.setTimeout(() => {
        setStage("uncovering");
      }, 3500);

      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
        window.clearTimeout(t3);
        window.clearTimeout(t4);
      };
    }
  }, [stage]);

  const checkUncover = useCallback(() => {
    if (isNavigating.current && routeReady.current && coverFinished.current) {
      clearNavTimers();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      setStage("uncovering");
      isNavigating.current = false;
    }
  }, [clearNavTimers]);

  useEffect(() => {
    const handleStart = () => {
      stopIntroAudio();

      if (isNavigating.current) return;

      clearNavTimers();
      setIsFirstLoad(false);
      isNavigating.current = true;
      routeReady.current = false;
      coverFinished.current = false;
      setStage("covering");

      coverTimerRef.current = window.setTimeout(() => {
        coverFinished.current = true;
        checkUncover();
      }, 320);

      fallbackTimerRef.current = window.setTimeout(() => {
        if (isNavigating.current) {
          routeReady.current = true;
          coverFinished.current = true;
          checkUncover();
        }
      }, 1500);
    };

    window.addEventListener("page-transition-start", handleStart);
    return () => {
      window.removeEventListener("page-transition-start", handleStart);
    };
  }, [checkUncover, stopIntroAudio, clearNavTimers]);

  // When route changes (pathname updates)
  useEffect(() => {
    stopIntroAudio();
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      routeReady.current = true;
      checkUncover();
    }
  }, [pathname, checkUncover, stopIntroAudio]);

  // Handle stage reset after uncovering animation completes
  useEffect(() => {
    if (stage === "uncovering") {
      stopIntroAudio();
      const durationMs = isFirstLoad ? 650 : 380;
      const timer = window.setTimeout(() => {
        setStage("idle");
        setIsFirstLoad(false);
        document.body.dataset.transitioning = "false";
      }, durationMs);
      return () => window.clearTimeout(timer);
    }
  }, [stage, isFirstLoad, stopIntroAudio]);

  const transformOrigin = stage === "uncovering" ? "bottom" : "top";
  const scaleY = stage === "covering" ? 1 : 0;

  return (
    <>
      <div className="relative w-full h-full min-h-screen flex flex-col">
        {children}
      </div>

      {/* Cinematic Intro Overlay — unmounted completely once idle to free full-screen GPU layer */}
      {isFirstLoad && stage !== "idle" && (
        <motion.div
          className={`fixed inset-0 w-full h-full bg-zinc-950 text-zinc-50 z-[99999] flex flex-col items-center justify-center overflow-hidden transform-gpu will-change-[opacity] ${
            stage === "pre-intro" ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
          animate={{ opacity: stage === "uncovering" ? 0 : 1 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          onClick={() => {
            if (stage === "pre-intro") {
              setStage("intro");
              playPremiumIntroSound(audioCtxRef);
            }
          }}
        >
          {stage === "pre-intro" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <span className="text-3xl font-bold tracking-tighter lowercase text-zinc-100">
                rr.
              </span>
              <button
                type="button"
                className="px-8 py-3 min-h-[44px] bg-zinc-100 text-zinc-950 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200"
              >
                enter.
              </button>
            </motion.div>
          ) : (
            <div className="flex items-center text-3xl sm:text-4xl text-zinc-100 font-bold tracking-tighter lowercase">
              {"rahul rajeev".split("").map((char, i) => {
                const isR = char === "r";
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, width: "auto" }}
                    animate={{
                      opacity: introStep >= 1 ? (introStep >= 2 && !isR ? 0 : 1) : 0,
                      width: introStep >= 2 && !isR ? 0 : "auto",
                      marginRight:
                        introStep >= 2 && char === " " ? 0 : char === " " ? "0.4em" : 0,
                    }}
                    transition={{
                      opacity: {
                        delay: introStep === 1 ? i * (1.0 / 12) : 0,
                        duration: introStep >= 2 ? 0.3 : 0.01,
                      },
                      width: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      marginRight: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className={`inline-block overflow-hidden whitespace-nowrap ${
                      introStep >= 2 && isR
                        ? "font-bold tracking-tighter"
                        : "font-medium tracking-tight"
                    }`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                );
              })}
              <motion.span
                initial={{ opacity: 0, x: -10, width: 0 }}
                animate={{
                  opacity: introStep >= 3 ? 1 : 0,
                  x: introStep >= 3 ? 0 : -10,
                  width: introStep >= 3 ? "auto" : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block font-bold tracking-tighter"
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: introStep >= 2 ? 0 : [1, 0, 1] }}
                transition={{ repeat: introStep >= 2 ? 0 : Infinity, duration: 0.8 }}
                className="inline-block w-[2px] sm:w-[3px] h-[0.9em] bg-zinc-100 ml-[2px] translate-y-[0.1em]"
              />
            </div>
          )}
        </motion.div>
      )}

      {/* Page Transition Shutter Sweep Overlay — mounted only during active route navigation */}
      {!isFirstLoad && stage !== "idle" && (
        <motion.div
          className="fixed inset-0 w-full h-full bg-zinc-950 text-zinc-50 z-[99998] pointer-events-none flex flex-col items-center justify-center overflow-hidden transform-gpu will-change-transform"
          style={{ transformOrigin }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY }}
          transition={{
            duration: stage === "covering" ? 0.32 : 0.38,
            ease: stage === "covering" ? [0.65, 0, 0.35, 1] : [0.33, 1, 0.68, 1],
          }}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: stage === "covering" ? 1 : 0,
              scale: stage === "covering" ? 1 : 0.96,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <span className="font-bold text-3xl sm:text-4xl tracking-tighter text-zinc-100 lowercase">
              rr.
            </span>
            <div className="w-12 h-0.5 bg-zinc-800 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white w-full"
                initial={{ x: "-100%" }}
                animate={{ x: stage === "covering" ? "0%" : "100%" }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
