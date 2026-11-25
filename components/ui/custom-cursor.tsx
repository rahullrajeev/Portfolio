"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { usePathname } from "next/navigation";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], [role='link'], .cursor-pointer";
const POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribePointerCapability(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const pointerMql = window.matchMedia(POINTER_QUERY);
  const reducedMql = window.matchMedia(REDUCED_QUERY);
  pointerMql.addEventListener("change", callback);
  reducedMql.addEventListener("change", callback);
  return () => {
    pointerMql.removeEventListener("change", callback);
    reducedMql.removeEventListener("change", callback);
  };
}

function getPointerCapabilitySnapshot() {
  if (typeof window === "undefined") return false;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isHoverable = window.matchMedia(POINTER_QUERY).matches;
  const prefersReducedMotion = window.matchMedia(REDUCED_QUERY).matches;
  return isHoverable && !isTouch && !prefersReducedMotion;
}

function getServerPointerSnapshot() {
  return false;
}

export function CustomCursor() {
  const isDeviceWithPointer = useSyncExternalStore(
    subscribePointerCapability,
    getPointerCapabilitySnapshot,
    getServerPointerSnapshot
  );

  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const isPointerRef = useRef(false);
  const isVisibleRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Sync native cursor visibility on route change
  useEffect(() => {
    isPointerRef.current = false;
    if (isDeviceWithPointer) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [pathname, isDeviceWithPointer]);

  useEffect(() => {
    if (!isDeviceWithPointer) {
      document.body.style.cursor = "auto";
      return;
    }

    document.body.style.cursor = "none";

    const updatePosition = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tag = target.tagName;
      const isInteractive =
        tag === "A" ||
        tag === "BUTTON" ||
        tag === "INPUT" ||
        tag === "SELECT" ||
        tag === "TEXTAREA" ||
        Boolean(target.closest && target.closest(INTERACTIVE_SELECTOR));

      if (isInteractive !== isPointerRef.current) {
        isPointerRef.current = isInteractive;
        setIsPointer(isInteractive);
      }
    };

    const hideCursor = () => {
      if (isVisibleRef.current) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
    };

    const showCursor = () => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    window.addEventListener("touchstart", hideCursor, { passive: true });

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("touchstart", hideCursor);
    };
  }, [isDeviceWithPointer, cursorX, cursorY]);

  if (!isDeviceWithPointer || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border-[1.5px] border-zinc-500/50 rounded-full pointer-events-none z-[9999] flex items-center justify-center will-change-transform"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isPointer ? 1.5 : 1,
        backgroundColor: isPointer ? "rgba(113, 113, 122, 0.1)" : "rgba(113, 113, 122, 0)",
        borderColor: isPointer ? "rgba(113, 113, 122, 0.8)" : "rgba(113, 113, 122, 0.5)",
      }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
        animate={{
          scale: isPointer ? 0 : 1,
          opacity: isPointer ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}
