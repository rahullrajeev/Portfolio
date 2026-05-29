"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for smooth trailing
  const springConfig = { damping: 20, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Quick response config for the dot
  const dotSpringConfig = { damping: 40, stiffness: 600, mass: 0.1 };
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    let hasMoved = false;

    const updatePosition = (e: MouseEvent) => {
      if (!hasMoved) {
        setIsVisible(true);
        hasMoved = true;
      }
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isPointerCursor = target.nodeType === 1 ? window.getComputedStyle(target).cursor === "pointer" : false;
      
      setIsPointer(
        isPointerCursor ||
        (target.tagName && target.tagName.toLowerCase() === "a") ||
        (target.tagName && target.tagName.toLowerCase() === "button") ||
        (target.closest && target.closest("a") !== null) ||
        (target.closest && target.closest("button") !== null)
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-zinc-900/40 rounded-full mix-blend-difference pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 3 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
