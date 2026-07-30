"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState, useRef, useCallback } from "react";

type Stage = "pre-intro" | "intro" | "idle" | "covering" | "uncovering";

const decodeAudio = (ctx: AudioContext, arrayBuffer: ArrayBuffer): Promise<AudioBuffer> => {
  return new Promise((resolve, reject) => {
    try {
      const res = ctx.decodeAudioData(
        arrayBuffer,
        (buffer) => resolve(buffer),
        (err) => reject(err)
      );
      if (res && typeof (res as any).then === 'function') {
        (res as Promise<AudioBuffer>).then(resolve).catch(reject);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const playPremiumIntroSound = (audioCtxRef: React.MutableRefObject<AudioContext | null>) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try { audioCtxRef.current.close(); } catch {}
    }

    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;
    
    if (ctx.state === 'suspended') {
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
    
    // Fetch and schedule the piano sound using Web Audio API for reliable playback
    fetch('/piano.mpeg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        if (audioCtxRef.current !== ctx || ctx.state === 'closed') return;
        return decodeAudio(ctx, arrayBuffer);
      })
      .then(audioBuffer => {
        if (!audioBuffer || audioCtxRef.current !== ctx || ctx.state === 'closed') return;
        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        
        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.15; // Decreased volume
        
        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        // 2.5s delay to play right after compression to rr.
        source.start(ctx.currentTime + 2.5);
      })
      .catch(e => console.log("Failed to load or play piano audio", e));
    
    const t0 = ctx.currentTime;
    
    // Keystroke clicks (mechanical keyboard style)
    const text = "rahul rajeev";
    const typeStart = t0 + 0.5;
    const charTime = 1.0 / text.length;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') continue;
        const time = typeStart + i * charTime;
        
        // Use a square wave with bandpass for a "clicky" transient
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(3000 + Math.random() * 500, time);
        osc.frequency.exponentialRampToValueAtTime(100, time + 0.015);
        
        filter.type = 'bandpass';
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

  } catch (e) {
    console.log("Audio autoplay blocked or not supported");
  }
};

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const audioCtxRef = useRef<AudioContext | null>(null);

  const stopIntroAudio = useCallback(() => {
    if (audioCtxRef.current) {
      try {
        if (audioCtxRef.current.state !== 'closed') {
          audioCtxRef.current.close();
        }
      } catch (e) {
        // Ignore
      }
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

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopIntroAudio();
    };
  }, [stopIntroAudio]);

  // Handle initial cinematic intro
  useEffect(() => {
    if (stage === "intro") {
      document.body.dataset.transitioning = "true";
      
      const t1 = setTimeout(() => setIntroStep(1), 500); // Start typing
      const t2 = setTimeout(() => setIntroStep(2), 2000); // Merge
      const t3 = setTimeout(() => setIntroStep(3), 2500); // Dot appears
      
      const t4 = setTimeout(() => {
        setStage("uncovering");
      }, 3500); // Fade to home
      
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      }
    }
  }, [stage]);

  const checkUncover = useCallback(() => {
    if (isNavigating.current && routeReady.current && coverFinished.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      setStage("uncovering");
      isNavigating.current = false;
    }
  }, []);

  useEffect(() => {
    const handleStart = () => {
      // Always stop intro audio if navigating or page transition starts
      stopIntroAudio();

      if (isNavigating.current) return;
      isNavigating.current = true;
      routeReady.current = false;
      coverFinished.current = false;
      setStage("covering");

      // Minimum cover duration before allowing uncover
      setTimeout(() => {
        coverFinished.current = true;
        checkUncover();
      }, 550);

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
  }, [checkUncover, stopIntroAudio]);

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
      const timer = setTimeout(() => {
        setStage("idle");
        setIsFirstLoad(false);
        document.body.dataset.transitioning = "false";
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [stage, stopIntroAudio]);

  const transformOrigin = stage === "uncovering" ? "bottom" : "top";
  const scaleY = stage === "idle" ? 0 : stage === "uncovering" ? 0 : 1;

  return (
    <>
      <div className="relative w-full h-full min-h-screen flex flex-col">
        {children}
      </div>

      {/* Cinematic Premium Intro Elements (Only on First Load on Homepage) */}
      <motion.div 
         className={`fixed inset-0 w-full h-full bg-zinc-950 text-zinc-50 z-[99999] flex flex-col items-center justify-center overflow-hidden transform-gpu ${stage === "pre-intro" ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}`}
         style={{ display: isFirstLoad ? "flex" : "none" }}
         animate={{ opacity: stage === "uncovering" ? 0 : 1 }}
         transition={{ duration: 0.8, ease: "easeInOut" }}
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-3xl font-bold tracking-tighter lowercase text-zinc-100">rr.</span>
            <button className="px-8 py-3 bg-zinc-100 text-zinc-950 rounded-full text-sm font-medium hover:bg-white transition-colors duration-300">
              enter.
            </button>
          </motion.div>
        ) : (
          <div className="flex items-center text-3xl sm:text-4xl text-zinc-100 font-bold tracking-tighter lowercase">
            {"rahul rajeev".split("").map((char, i) => {
            const isR = char === 'r';
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, width: "auto" }}
                animate={{
                  opacity: introStep >= 1 ? (introStep >= 2 && !isR ? 0 : 1) : 0,
                  width: introStep >= 2 && !isR ? 0 : "auto",
                  marginRight: introStep >= 2 && char === ' ' ? 0 : (char === ' ' ? "0.4em" : 0),
                }}
                transition={{
                  opacity: {
                    delay: introStep === 1 ? i * (1.0 / 12) : 0,
                    duration: introStep >= 2 ? 0.3 : 0.01,
                  },
                  width: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  marginRight: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                className={`inline-block overflow-hidden whitespace-nowrap ${introStep >= 2 && isR ? "font-bold tracking-tighter" : "font-medium tracking-tight"}`}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            );
          })}
          <motion.span
            initial={{ opacity: 0, x: -10, width: 0 }}
            animate={{ 
              opacity: introStep >= 3 ? 1 : 0, 
              x: introStep >= 3 ? 0 : -10,
              width: introStep >= 3 ? "auto" : 0
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

      {/* Page Transition Shutter Sweep Overlay (Dark) */}
      <motion.div
        className="fixed inset-0 w-full h-full bg-zinc-950 text-zinc-50 z-[99998] pointer-events-none flex flex-col items-center justify-center overflow-hidden transform-gpu"
        style={{ 
          transformOrigin,
          display: isFirstLoad ? "none" : "flex"
        }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY }}
        transition={{
          duration: stage === "covering" ? 0.45 : 0.55,
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
          <span className="font-bold text-3xl sm:text-4xl tracking-tighter text-zinc-100 lowercase">
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
