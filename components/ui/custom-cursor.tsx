"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDeviceWithPointer, setIsDeviceWithPointer] = useState(false);
  const pathname = usePathname();

  
  // Mouse position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for smooth trailing
  const springConfig = { damping: 25, stiffness: 300, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Reset pointer state on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsPointer(false);
    if (isDeviceWithPointer) {
      document.body.style.cursor = 'none';
    }
  }, [pathname, isDeviceWithPointer]);

  useEffect(() => {
    const checkEnvironment = () => {
      const isTouch = (typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
      const isHoverable = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      
      if (isHoverable && !isTouch) {
        setIsDeviceWithPointer(true);
        document.body.style.cursor = 'none';
        return true;
      } else {
        setIsDeviceWithPointer(false);
        document.body.style.cursor = 'auto';
        return false;
      }
    };

    const isCapable = checkEnvironment();
    if (!isCapable) return;

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
    const handleTouchStart = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("touchstart", handleTouchStart);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [cursorX, cursorY]);

  if (!isDeviceWithPointer || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-[1.5px] border-zinc-500/50 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "rgba(113, 113, 122, 0.1)" : "transparent",
          borderColor: isPointer ? "rgba(113, 113, 122, 0.8)" : "rgba(113, 113, 122, 0.5)"
        }}
        transition={{ duration: 0.15 }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
          animate={{
            scale: isPointer ? 0 : 1,
            opacity: isPointer ? 0 : 1
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
