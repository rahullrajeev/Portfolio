"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  innerClassName?: string;
}

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  className,
  innerClassName,
}: RevealProps) {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: isMobile ? "-4% 0px" : "-8% 0px" });

  const offset = isMobile ? 26 : 30;

  const getHiddenTransform = () => {
    if (isMobile) {
      return { opacity: 0, y: offset, x: 0 };
    }
    switch (direction) {
      case "up":
        return { opacity: 0, y: offset, x: 0 };
      case "down":
        return { opacity: 0, y: -offset, x: 0 };
      case "left":
        return { opacity: 0, x: offset, y: 0 };
      case "right":
        return { opacity: 0, x: -offset, y: 0 };
      default:
        return { opacity: 0, y: offset, x: 0 };
    }
  };

  return (
    <div
      ref={ref}
      style={className ? undefined : { width, position: "relative" }}
      className={className ? `relative ${className}` : undefined}
    >
      <motion.div
        variants={{
          hidden: getHiddenTransform(),
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: isMobile ? 0.72 : 0.8,
          delay: isMobile ? Math.min(delay, 0.36) : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={innerClassName}
      >
        {children}
      </motion.div>
    </div>
  );
}
