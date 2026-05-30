"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsAnimatingOut(true);
    window.addEventListener("transition-start", handleStart);
    return () => window.removeEventListener("transition-start", handleStart);
  }, []);

  useEffect(() => {
    // When the path changes, wait a tiny bit to ensure the new content has mounted,
    // then open the shutters smoothly.
    const t = setTimeout(() => {
      setIsAnimatingOut(false);
    }, 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <div className="relative w-full h-full min-h-screen flex flex-col">
        {children}
      </div>

      {/* Fade Overlay */}
      <motion.div
        className="fixed inset-0 w-full h-full bg-zinc-50 dark:bg-zinc-950 z-[99999] pointer-events-none mix-blend-normal"
        initial={{ opacity: 1 }} 
        animate={{ 
          opacity: isAnimatingOut ? 1 : 0, 
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
