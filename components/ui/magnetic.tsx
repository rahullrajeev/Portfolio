"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useEffect, useRef } from "react";

const SPRING_CONFIG = { stiffness: 250, damping: 20, mass: 0.1 };

export function Magnetic({
  children,
  strength = 15,
}: {
  children: React.ReactElement;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const isDisabledRef = useRef(true);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarseMql = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const reducedMql = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      isDisabledRef.current = coarseMql.matches || reducedMql.matches;
    };

    update();
    coarseMql.addEventListener("change", update);
    reducedMql.addEventListener("change", update);
    return () => {
      coarseMql.removeEventListener("change", update);
      reducedMql.removeEventListener("change", update);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isDisabledRef.current || !ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
  };

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabledRef.current) return;
    const rect = rectRef.current ?? ref.current?.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) return;

    const middleX = e.clientX - (rect.left + rect.width / 2);
    const middleY = e.clientY - (rect.top + rect.height / 2);
    rawX.set((middleX * strength) / rect.width);
    rawY.set((middleY * strength) / rect.height);
  };

  const reset = () => {
    rectRef.current = null;
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-block max-w-full transform-gpu"
    >
      {children}
    </motion.div>
  );
}
