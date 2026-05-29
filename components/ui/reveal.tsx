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
        return { opacity: 0, y: 75, filter: "blur(4px)" };
      case "down":
        return { opacity: 0, y: -75, filter: "blur(4px)" };
      case "left":
        return { opacity: 0, x: 75, filter: "blur(4px)" };
      case "right":
        return { opacity: 0, x: -75, filter: "blur(4px)" };
      default:
        return { opacity: 0, y: 75, filter: "blur(4px)" };
    }
  };

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: getHiddenTransform(),
          visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
