"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { ArrowUpRight, Mouse } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function HomeHero() {
  const [hoveredText, setHoveredText] = useState<"dev" | "seo" | "web" | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<"dev" | "seo" | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Parallax scroll effects when scrolling towards (down) and backwards (up)
  const imageY = useTransform(smoothScroll, [0, 1], [0, 80]);
  const imageScale = useTransform(smoothScroll, [0, 1], [1, 1.08]);
  const imageOpacity = useTransform(smoothScroll, [0, 0.85, 1], [1, 0.85, 0.2]);

  const seoX = useTransform(smoothScroll, [0, 1], [0, -35]);
  const devX = useTransform(smoothScroll, [0, 1], [0, 35]);
  const webX = useTransform(smoothScroll, [0, 1], [0, -20]);

  const nameY = useTransform(smoothScroll, [0, 1], [0, -20]);
  const locationY = useTransform(smoothScroll, [0, 1], [0, 25]);
  const scrollCueOpacity = useTransform(smoothScroll, [0, 0.3], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <>
      {/* Dedicated Mobile Hero (< 768px) — Wide, Zoomed-Out Image + Clean Editorial Stack */}
      <section className="md:hidden -mt-16 w-full min-h-[100svh] flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden max-w-full">
        {/* Wide Zoomed-Out Hero Photo Stage (shows subject + sunlit wall, table, cafe surroundings) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[265px] max-h-[45svh] overflow-hidden shrink-0 bg-zinc-200 dark:bg-zinc-900"
        >
          <Image
            src="/assets/aistudio/IMG_1871_41c7d9ef.PNG"
            alt="Rahul Rajeev"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[66%_22%] sm:object-[62%_22%]"
          />
          {/* Top bar legibility gradient */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-zinc-50/75 via-zinc-50/25 to-transparent dark:from-zinc-950/75 dark:via-zinc-950/25 dark:to-transparent pointer-events-none" />
          {/* Bottom seamless feather into canvas */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-50 via-zinc-50/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 dark:to-transparent pointer-events-none" />
        </motion.div>

        {/* Clean Spacious Mobile Typography & CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col justify-between px-5 pt-4 pb-6 sm:px-8 sm:pt-6 sm:pb-8 w-full max-w-full"
        >
          <div>
            <h1 className="font-mono uppercase text-[11px] sm:text-xs tracking-[0.22em] font-medium text-zinc-700 dark:text-zinc-300 mb-3">
              Rahul Rajeev
            </h1>

            <div className="flex flex-col items-start -space-y-1 max-w-full">
              <h2 className="whitespace-nowrap text-[clamp(1.95rem,9.4vw,3.1rem)] font-display font-bold tracking-tighter leading-[0.9] text-[#2b3a20] dark:text-[#a0b090]">
                SEO Specialist
              </h2>
              <h2 className="whitespace-nowrap text-[clamp(1.95rem,9.4vw,3.1rem)] font-display font-bold tracking-tighter leading-[0.9] text-[#2b3a20] dark:text-[#a0b090]">
                Generative AI Developer
              </h2>
              <h2 className="whitespace-nowrap text-[clamp(1.95rem,9.4vw,3.1rem)] font-display font-bold tracking-tighter leading-[0.9] text-[#2b3a20] dark:text-[#a0b090]">
                &amp; Web Developer
              </h2>
            </div>

            <p className="mt-2.5 text-xs sm:text-sm font-normal tracking-tight text-zinc-600 dark:text-zinc-400">
              based in Kochi, India.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-2.5 w-full">
              <Link
                href="/projects"
                className="w-full sm:flex-1 min-h-[48px] flex items-center justify-center text-center px-6 py-3.5 rounded-md border border-zinc-900 dark:border-zinc-50 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap active:scale-[0.98] transition-transform"
              >
                You need a developer
              </Link>
              <Link
                href="/seo"
                className="w-full sm:flex-1 min-h-[48px] flex items-center justify-center text-center px-6 py-3.5 rounded-md border border-zinc-900 dark:border-zinc-50 bg-transparent text-zinc-900 dark:text-zinc-50 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap active:scale-[0.98] transition-transform"
              >
                You need an SEO expert
              </Link>
            </div>

            <div className="pt-3.5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-2 text-[11px] font-mono tracking-wider text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Next.js</span>
                <span aria-hidden="true">·</span>
                <span>OpenAI</span>
                <span aria-hidden="true">·</span>
                <span>Semrush</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-70">
                Scroll ↓
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Desktop Hero (>= 768px) — Completely Unchanged */}
      <section
        ref={sectionRef}
        className="hidden md:flex -mt-24 w-full min-h-[100svh] pt-24 sm:pt-28 md:pt-32 lg:pt-24 pb-10 sm:pb-12 md:pb-14 lg:pb-10 px-3 sm:px-6 md:px-12 flex-col justify-center items-center relative overflow-hidden max-w-full"
      >
        {/* Full-Bleed High-Resolution Hero Image */}
        <motion.div
          style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-x-0 -top-20 bottom-0 z-0 pointer-events-none will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/assets/aistudio/IMG_1871_41c7d9ef.PNG"
              alt="Rahul Rajeev"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-[80%_25%] sm:object-[80%_25%] md:object-[76%_25%] lg:object-[70%_25%]"
            />
            <div className="hidden dark:block absolute inset-0 bg-zinc-950/45 pointer-events-none" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto w-full flex flex-col justify-center text-center relative z-10"
        >
          <div className="w-full flex justify-center mb-28 sm:mb-12 md:mb-16 lg:mb-24 relative z-30 pt-1 sm:pt-2 md:pt-2 lg:pt-2">
            <motion.div
              variants={item}
              style={{ y: nameY }}
              className="flex items-center gap-4 md:gap-6 cursor-default"
            >
              <motion.h1 
                initial={{ opacity: 0, letterSpacing: '0em', filter: 'blur(8px)' }}
                animate={{ opacity: 1, letterSpacing: '0.22em', filter: 'blur(0px)' }}
                transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="font-mono uppercase text-xs sm:text-[13px] md:text-[16px] leading-tight font-medium sm:font-normal cursor-default text-zinc-900 dark:text-zinc-50 text-center relative -translate-y-2 sm:-translate-y-3"
              >
                Rahul Rajeev
              </motion.h1>
            </motion.div>
          </div>

          <div className="relative w-full flex justify-start py-1 sm:py-6 md:py-12 lg:py-6">
            <div className="relative w-full sm:w-fit flex flex-col mb-[-5px] group px-1 sm:px-0">
              {/* Main Text Container */}
              <div className="relative flex flex-col items-start w-full -space-y-1.5 sm:-space-y-2 md:-space-y-4 lg:-space-y-5 cursor-default max-w-full">
                <motion.h2
                  variants={item}
                  className={`seo-text relative whitespace-nowrap text-[7.5vw] sm:text-[6.8vw] md:text-[5.2vw] lg:text-[4.2vw] font-display font-bold tracking-tighter leading-[0.85] m-0 p-0 transition-transform transition-colors duration-200 ease-out text-[#2b3a20] dark:text-[#a0b090] ${
                    hoveredText === "seo"
                      ? "z-[20] scale-[1.02] sm:scale-[1.03] -translate-x-1 sm:-translate-x-2 [-webkit-text-fill-color:currentColor]"
                      : hoveredText !== null
                      ? "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:transparent]"
                      : "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:currentColor]"
                  }`}
                  style={{ WebkitTextStroke: "1.5px currentColor", x: seoX }}
                  onMouseEnter={() => setHoveredText("seo")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  SEO Specialist
                </motion.h2>

                <motion.h2
                  variants={item}
                  className={`dev-text relative whitespace-nowrap text-[7.5vw] sm:text-[6.8vw] md:text-[5.2vw] lg:text-[4.2vw] font-display font-bold tracking-tighter leading-[0.85] m-0 p-0 transition-transform transition-colors duration-200 ease-out text-[#2b3a20] dark:text-[#a0b090] ${
                    hoveredText === "dev"
                      ? "z-[20] scale-[1.02] sm:scale-[1.03] translate-x-1 sm:translate-x-2 [-webkit-text-fill-color:currentColor]"
                      : hoveredText !== null
                      ? "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:transparent]"
                      : "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:currentColor]"
                  }`}
                  style={{ WebkitTextStroke: "1.5px currentColor", x: devX }}
                  onMouseEnter={() => setHoveredText("dev")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  Generative AI Developer
                </motion.h2>

                <motion.h2
                  variants={item}
                  className={`web-text relative whitespace-nowrap text-[7.5vw] sm:text-[6.8vw] md:text-[5.2vw] lg:text-[4.2vw] font-display font-bold tracking-tighter leading-[0.85] m-0 p-0 transition-transform transition-colors duration-200 ease-out text-[#2b3a20] dark:text-[#a0b090] ${
                    hoveredText === "web"
                      ? "z-[20] scale-[1.02] sm:scale-[1.03] translate-x-2 sm:translate-x-4 [-webkit-text-fill-color:currentColor]"
                      : hoveredText !== null
                      ? "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:transparent]"
                      : "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:currentColor]"
                  }`}
                  style={{ WebkitTextStroke: "1.5px currentColor", x: webX }}
                  onMouseEnter={() => setHoveredText("web")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  & Web Developer
                </motion.h2>
              </div>

              <motion.div
                variants={item}
                style={{ y: locationY }}
                className="mt-2 md:mt-6 ml-2 sm:ml-4 md:ml-6 text-xs sm:text-sm font-light tracking-tight text-zinc-600 dark:text-zinc-400 self-start relative z-[10]"
              >
                based in Kochi, India.
              </motion.div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between mt-5 sm:mt-8 lg:mt-4 gap-3 sm:gap-6 md:gap-8 z-30 relative">
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-start gap-2.5 sm:gap-4 w-full sm:w-auto group/links"
            >
              <Link
                href="/projects"
                onMouseEnter={() => setHoveredBtn("dev")}
                onMouseLeave={() => setHoveredBtn(null)}
                onTouchStart={() => setHoveredBtn("dev")}
                onTouchEnd={() => setHoveredBtn(null)}
                className={`w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-md border border-zinc-900 dark:border-zinc-50 transition-all duration-300 tracking-wide text-xs sm:text-sm font-medium whitespace-nowrap active:translate-y-0 active:translate-x-0 active:shadow-none ${
                  hoveredBtn === "seo"
                    ? "bg-transparent text-zinc-900 dark:text-zinc-50 shadow-none translate-y-0 translate-x-0"
                    : hoveredBtn === "dev"
                    ? "bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 -translate-y-1 -translate-x-1 shadow-[4px_4px_0px_#18181b] dark:shadow-[4px_4px_0px_#fafafa]"
                    : "bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 shadow-none translate-y-0 translate-x-0"
                }`}
              >
                You need a developer
              </Link>
              <Link
                href="/seo"
                onMouseEnter={() => setHoveredBtn("seo")}
                onMouseLeave={() => setHoveredBtn(null)}
                onTouchStart={() => setHoveredBtn("seo")}
                onTouchEnd={() => setHoveredBtn(null)}
                className={`w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-md border border-zinc-900 dark:border-zinc-50 transition-all duration-300 tracking-wide text-xs sm:text-sm font-medium whitespace-nowrap active:translate-y-0 active:translate-x-0 active:shadow-none ${
                  hoveredBtn === "seo"
                    ? "bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 -translate-y-1 -translate-x-1 shadow-[4px_4px_0px_#18181b] dark:shadow-[4px_4px_0px_#fafafa]"
                    : "bg-transparent text-zinc-900 dark:text-zinc-50 shadow-none translate-y-0 translate-x-0"
                }`}
              >
                You need an SEO expert
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="flex-1 flex justify-center lg:justify-end gap-4 text-xs font-semibold items-end group/tags cursor-default"
            >
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 tracking-widest text-zinc-800 dark:text-zinc-300 opacity-60 group-hover/tags:opacity-100 transition-opacity duration-300">
                <span
                  className="transition-all duration-300 ease-out hover:-translate-y-1 transform-gpu"
                  style={{ WebkitTextStroke: "1px currentColor" }}
                >
                  Next.js
                </span>
                <span
                  className="transition-all duration-300 ease-out hover:-translate-y-1 transform-gpu"
                  style={{ WebkitTextStroke: "1px currentColor" }}
                >
                  OpenAI
                </span>
                <span
                  className="transition-all duration-300 ease-out hover:-translate-y-1 transform-gpu"
                  style={{ WebkitTextStroke: "1px currentColor" }}
                >
                  Semrush
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mouse Scroll Indicator Cue */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-20 pointer-events-none text-zinc-500 dark:text-zinc-400"
        >
          <div className="w-5 h-8 rounded-full border-2 border-zinc-400/60 dark:border-zinc-600/60 flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 rounded-full bg-zinc-700 dark:bg-zinc-200"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
            Scroll
          </span>
        </motion.div>
      </section>
    </>
  );
}

