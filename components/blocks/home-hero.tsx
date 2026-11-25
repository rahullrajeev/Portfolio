"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

export function HomeHero() {
  const [hoveredText, setHoveredText] = useState<"dev" | "seo" | "web" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const commonImageProps = {
    alt: "Rahul Rajeev",
    fill: true,
    priority: true,
    quality: 100,
    sizes: "100vw",
    referrerPolicy: "no-referrer" as const,
  };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...commonImageProps,
    src: "/assets/aistudio/desktop_hero_image_42865c92.png",
  });

  const {
    props: { srcSet: mobileTabletSrcSet, ...fallbackImgProps },
  } = getImageProps({
    ...commonImageProps,
    src: "/assets/aistudio/Mobile_hero_image_2a58e874.png",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Parallax scroll effects when scrolling towards (down) and backwards (up) — active on desktop (>= 1024px)
  const imageY = useTransform(smoothScroll, [0, 1], [0, 72]);
  const imageScale = useTransform(smoothScroll, [0, 1], [1, 1.06]);
  const imageOpacity = useTransform(smoothScroll, [0, 0.85, 1], [1, 0.85, 0.25]);

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
    <section
      ref={sectionRef}
      className="-mt-16 md:-mt-24 w-full min-h-[min(100svh,760px)] md:min-h-[min(100svh,980px)] lg:min-h-[100svh] pt-20 sm:pt-24 md:pt-24 lg:pt-24 pb-7 sm:pb-10 md:pb-12 lg:pb-10 px-5 sm:px-8 md:px-10 lg:px-12 flex flex-col justify-between lg:justify-center items-center relative overflow-hidden max-w-full bg-zinc-200 dark:bg-zinc-950"
    >
      {/* Full-Bleed Responsive Hero Images — Browser downloads ONLY the viewport-matched asset */}
      <motion.div
        style={isDesktop ? { y: imageY, scale: imageScale, opacity: imageOpacity } : undefined}
        className="absolute inset-0 z-0 pointer-events-none lg:will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {imageError ? (
            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-900" />
          ) : (
            <div className="relative w-full h-full overflow-hidden">
              <picture className="block relative w-full h-full hero-cinematic-pan">
                <source
                  media="(min-width: 1024px)"
                  srcSet={desktopSrcSet}
                  sizes="100vw"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet={mobileTabletSrcSet}
                  sizes="100vw"
                />
                <img
                  {...fallbackImgProps}
                  alt="Rahul Rajeev"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-[52%_14%] sm:object-[50%_14%] md:object-[50%_14%] lg:object-[62%_12%] xl:object-[58%_14%] 2xl:object-[54%_15%]"
                />
              </picture>
            </div>
          )}

          {/* Dark mode ambient balance (preserves existing dark mode readability) */}
          <div className="hidden dark:block absolute inset-0 bg-zinc-950/40 pointer-events-none" />

          {/* Mobile & Tablet bottom-up cinematic dark-olive gradient strictly behind lower title/subtitle, fading cleanly to transparent below subject's face */}
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-[62%] sm:h-[56%] md:h-[52%] hero-title-scrim-mobile pointer-events-none" />

          {/* Desktop localized feathered dark-olive gradient anchored behind left-aligned title with zero rectangular edges */}
          <div className="hidden lg:block absolute inset-0 hero-title-scrim-desktop pointer-events-none" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full flex-1 lg:flex-initial flex flex-col justify-between lg:justify-center text-center relative z-10"
      >
        {/* Top Centered Name — sits cleanly in open dark café glass above subject's head across all viewports */}
        <div className="w-full flex justify-center mb-6 md:mb-10 lg:mb-20 relative z-30 pt-1 sm:pt-2 md:pt-2 lg:pt-2">
          <motion.div
            variants={item}
            style={isDesktop ? { y: nameY } : undefined}
            className="flex items-center gap-4 md:gap-6 cursor-default"
          >
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-mono uppercase tracking-[0.22em] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-tight font-medium lg:font-normal cursor-default text-zinc-50 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)] text-center relative md:-translate-y-1 lg:-translate-y-3"
            >
              Rahul Rajeev
            </motion.h1>
          </motion.div>
        </div>

        {/* Left-Aligned In-Image Editorial Title + CTAs */}
        <div className="w-full flex flex-col mt-auto pt-40 sm:pt-48 md:pt-56 lg:mt-0 lg:pt-0">
          <div className="relative w-full flex justify-start py-2 md:py-4 lg:py-6">
            <div className="relative w-fit flex flex-col mb-0 md:mb-[-4px] lg:mb-[-5px] group px-0">
              {/* Main Text Container */}
              <div className="relative flex flex-col items-start w-full -space-y-1 sm:-space-y-2 md:-space-y-3 lg:-space-y-4 xl:-space-y-5 cursor-default max-w-full">
                <motion.h2
                  variants={item}
                  className={`seo-text relative whitespace-nowrap text-[clamp(1.6rem,7.2vw,2.45rem)] md:text-[clamp(2.25rem,4.8vw,2.95rem)] lg:text-[clamp(2.55rem,3.8vw,4.1rem)] font-display font-bold tracking-tighter leading-[0.92] md:leading-[0.86] lg:leading-[0.85] m-0 p-0 transition-transform transition-colors duration-200 ease-out text-zinc-50 [text-shadow:0_2px_8px_rgba(0,0,0,0.45)] ${
                    hoveredText === "seo"
                      ? "z-[20] scale-[1.02] sm:scale-[1.03] -translate-x-1 sm:-translate-x-2 [-webkit-text-fill-color:currentColor]"
                      : hoveredText !== null
                      ? "hero-title-stroke z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:transparent] [text-shadow:none]"
                      : "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:currentColor]"
                  }`}
                  style={isDesktop ? { x: seoX } : undefined}
                  onMouseEnter={() => setHoveredText("seo")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  SEO Specialist
                </motion.h2>

                <motion.h2
                  variants={item}
                  className={`dev-text relative whitespace-nowrap text-[clamp(1.6rem,7.2vw,2.45rem)] md:text-[clamp(2.25rem,4.8vw,2.95rem)] lg:text-[clamp(2.55rem,3.8vw,4.1rem)] font-display font-bold tracking-tighter leading-[0.92] md:leading-[0.86] lg:leading-[0.85] m-0 p-0 transition-transform transition-colors duration-200 ease-out text-zinc-300 [text-shadow:0_2px_8px_rgba(0,0,0,0.45)] ${
                    hoveredText === "dev"
                      ? "z-[20] scale-[1.02] sm:scale-[1.03] translate-x-1 sm:translate-x-2 [-webkit-text-fill-color:currentColor]"
                      : hoveredText !== null
                      ? "hero-title-stroke z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:transparent] [text-shadow:none]"
                      : "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:currentColor]"
                  }`}
                  style={isDesktop ? { x: devX } : undefined}
                  onMouseEnter={() => setHoveredText("dev")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  Generative AI Developer
                </motion.h2>

                <motion.h2
                  variants={item}
                  className={`web-text relative whitespace-nowrap text-[clamp(1.6rem,7.2vw,2.45rem)] md:text-[clamp(2.25rem,4.8vw,2.95rem)] lg:text-[clamp(2.55rem,3.8vw,4.1rem)] font-display font-bold tracking-tighter leading-[0.92] md:leading-[0.86] lg:leading-[0.85] m-0 p-0 transition-transform transition-colors duration-200 ease-out text-zinc-50 [text-shadow:0_2px_8px_rgba(0,0,0,0.45)] ${
                    hoveredText === "web"
                      ? "z-[20] scale-[1.02] sm:scale-[1.03] translate-x-2 sm:translate-x-4 [-webkit-text-fill-color:currentColor]"
                      : hoveredText !== null
                      ? "hero-title-stroke z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:transparent] [text-shadow:none]"
                      : "z-[1] scale-100 translate-x-0 [-webkit-text-fill-color:currentColor]"
                  }`}
                  style={isDesktop ? { x: webX } : undefined}
                  onMouseEnter={() => setHoveredText("web")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  &amp; Web Developer
                </motion.h2>
              </div>

              <motion.div
                variants={item}
                style={isDesktop ? { y: locationY } : undefined}
                className="mt-2.5 sm:mt-3 md:mt-4 lg:mt-6 ml-0 text-xs sm:text-sm md:text-sm font-medium lg:font-normal tracking-tight text-zinc-100 [text-shadow:0_2px_8px_rgba(0,0,0,0.45)] self-start relative z-[10]"
              >
                based in Kochi, India.
              </motion.div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row items-stretch md:items-end justify-between mt-5 sm:mt-6 md:mt-6 lg:mt-6 gap-4 md:gap-6 lg:gap-8 z-30 relative">
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-start gap-2.5 sm:gap-3.5 md:gap-4 w-full md:w-auto group/links"
            >
              <Link
                href="/projects"
                className="btn-slide btn-slide-solid w-full sm:w-auto min-h-[44px] md:min-h-[44px] lg:min-h-0 flex items-center justify-center text-center px-5 sm:px-6 md:px-6 lg:px-8 py-3 sm:py-3.5 md:py-3.5 lg:py-4 rounded-md border border-zinc-900 dark:border-zinc-50 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 tracking-wide text-sm md:text-sm font-medium whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                You need a developer
              </Link>
              <Link
                href="/seo"
                className="btn-slide btn-slide-outline w-full sm:w-auto min-h-[44px] md:min-h-[44px] lg:min-h-0 flex items-center justify-center text-center px-5 sm:px-6 md:px-6 lg:px-8 py-3 sm:py-3.5 md:py-3.5 lg:py-4 rounded-md border border-zinc-900 dark:border-zinc-50 bg-zinc-50/75 dark:bg-zinc-950/60 backdrop-blur-[2px] md:bg-zinc-50/70 md:dark:bg-zinc-950/55 lg:bg-zinc-50/65 lg:dark:bg-zinc-950/55 text-zinc-900 dark:text-zinc-50 tracking-wide text-sm md:text-sm font-medium whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                You need an SEO expert
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="w-full md:flex-1 flex justify-between md:justify-end items-center md:items-end gap-4 text-xs font-semibold group/tags cursor-default pt-1 md:pt-0"
            >
              <span className="md:hidden font-mono text-[10px] uppercase tracking-widest text-zinc-200/85">
                Scroll ↓
              </span>
              <div className="flex flex-wrap justify-end gap-3.5 md:gap-4 tracking-widest text-zinc-100 lg:text-zinc-900 lg:dark:text-zinc-200 opacity-85 lg:opacity-75 group-hover/tags:opacity-100 transition-opacity duration-300">
                <span className="hero-tag-stroke transition-all duration-300 ease-out hover:-translate-y-1 transform-gpu">
                  Next.js
                </span>
                <span className="hero-tag-stroke transition-all duration-300 ease-out hover:-translate-y-1 transform-gpu">
                  OpenAI
                </span>
                <span className="hero-tag-stroke transition-all duration-300 ease-out hover:-translate-y-1 transform-gpu">
                  Semrush
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mouse Scroll Indicator Cue (Tablet & Desktop) */}
      <motion.div
        style={{ opacity: scrollCueOpacity }}
        className="hidden lg:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-20 pointer-events-none text-zinc-700 dark:text-zinc-300"
      >
        <div className="w-5 h-8 rounded-full border-2 border-zinc-600/60 dark:border-zinc-400/60 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-zinc-800 dark:bg-zinc-200"
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-80">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
