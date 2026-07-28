"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useRef } from "react";

export function Magnetic({
  children,
  strength = 15,
}: {
  children: React.ReactElement;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 20, mass: 0.1 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    rawX.set((middleX * strength) / width);
    rawY.set((middleY * strength) / height);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

