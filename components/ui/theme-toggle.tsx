"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full flex items-center justify-center relative z-50">
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 w-10 h-10 rounded-full flex items-center justify-center relative cursor-none hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors pointer-events-auto"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
           initial={false}
           animate={{
             scale: theme === "dark" ? 0 : 1,
             opacity: theme === "dark" ? 0 : 1,
             rotate: theme === "dark" ? 90 : 0,
           }}
           transition={{ duration: 0.2, ease: "easeInOut" }}
           className="absolute"
        >
          <Sun size={20} />
        </motion.div>
        
        <motion.div
           initial={false}
           animate={{
             scale: theme === "dark" ? 1 : 0,
             opacity: theme === "dark" ? 1 : 0,
             rotate: theme === "dark" ? 0 : -90,
           }}
           transition={{ duration: 0.2, ease: "easeInOut" }}
           className="absolute"
        >
          <Moon size={20} />
        </motion.div>
      </div>
    </button>
  );
}
