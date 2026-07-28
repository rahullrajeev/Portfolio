"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal({ children, width = "100%", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getHiddenTransform = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 28 };
      case "down":
        return { opacity: 0, y: -28 };
      case "left":
        return { opacity: 0, x: 28 };
      case "right":
        return { opacity: 0, x: -28 };
      default:
        return { opacity: 0, y: 28 };
    }
  };

  return (
    <div ref={ref} style={{ width, position: "relative" }}>
      <motion.div
        variants={{
          hidden: getHiddenTransform(),
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
