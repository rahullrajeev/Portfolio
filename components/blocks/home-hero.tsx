"use client";

import { motion } from "motion/react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function HomeHero() {
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
    <section className="min-h-[calc(100svh-8rem)] pt-4 md:pt-8 pb-8 md:pb-12 px-6 md:px-12 flex flex-col justify-center items-center relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full flex flex-col justify-center text-center relative z-10"
      >
        <div className="w-full flex justify-center mb-10 md:mb-8 lg:mb-10 relative z-30 pt-4 md:pt-0">
          <motion.div
            variants={item}
            className="flex items-center gap-4 md:gap-6 cursor-default"
          >
            <h1 className="font-mono uppercase text-[12px] md:text-[16px] leading-tight font-normal tracking-[0.2em] text-zinc-900 dark:text-zinc-50 text-center">
              Rahul Rajeev
            </h1>
          </motion.div>
        </div>

        <div className="relative w-full flex justify-center py-6 md:py-12 lg:py-16">
          <div className="relative w-fit mx-auto flex flex-col mb-[-5px] group">
            {/* Main Text Container */}
            <div className="relative flex flex-col items-start w-full -space-y-3 md:-space-y-6 lg:-space-y-10 cursor-default">
              <motion.div
                variants={item}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none w-[150%] flex justify-center h-[280px] md:h-[450px] lg:h-[500px] mt-4 md:mt-8"
              >
                <Image
                  src="/rhll.png"
                  alt="Rahul"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center"
                />
              </motion.div>

              <motion.h2
                variants={item}
                className="dev-text relative z-[1] active:z-[20] hover:z-[20] text-[11vw] md:text-[7vw] font-display font-bold tracking-tighter leading-[0.85] m-0 p-0 transition-all duration-300 ease-out transform-gpu will-change-transform active:scale-[1.03] active:-translate-x-2 hover:scale-[1.03] hover:-translate-x-2 text-[#2b3a20] dark:text-[#a0b090] group-has-[.seo-text:active]:[-webkit-text-fill-color:transparent] group-has-[.seo-text:hover]:[-webkit-text-fill-color:transparent] [-webkit-text-fill-color:currentColor]"
                style={{ WebkitTextStroke: "1.5px currentColor" }}
                onTouchStart={() => {}}
                onClick={() => {}}
              >
                Generative AI Developer
              </motion.h2>

              <motion.h2
                variants={item}
                className="seo-text relative z-[1] active:z-[20] hover:z-[20] text-[11vw] md:text-[7vw] font-display font-bold tracking-tighter leading-[0.85] m-0 p-0 transition-all duration-300 ease-out transform-gpu will-change-transform active:scale-[1.03] active:translate-x-2 hover:scale-[1.03] hover:translate-x-2 text-[#2b3a20] dark:text-[#a0b090] [-webkit-text-fill-color:transparent] active:[-webkit-text-fill-color:currentColor] hover:[-webkit-text-fill-color:currentColor]"
                style={{ WebkitTextStroke: "1.5px currentColor" }}
                onTouchStart={() => {}}
                onClick={() => {}}
              >
                & SEO Specialist
              </motion.h2>
            </div>

            <motion.div
              variants={item}
              className="mt-2 md:mt-6 text-xs md:text-sm font-light tracking-tight text-zinc-600 dark:text-zinc-400 self-start relative z-[10]"
            >
              based in Kochi, India.
            </motion.div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between mt-8 md:mt-8 lg:mt-10 gap-6 md:gap-8 z-30 relative">
          <div className="flex-1 hidden lg:block" />

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 flex-1 group/links"
          >
            <Link
              href="/projects"
              className="px-8 py-4 rounded-md bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 border border-zinc-900 dark:border-zinc-50 transition-all duration-300 tracking-wide text-sm font-medium whitespace-nowrap hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-none group-hover/links:bg-transparent dark:group-hover/links:bg-transparent group-hover/links:text-zinc-900 dark:group-hover/links:text-zinc-50 group-hover/links:opacity-50 hover:!bg-zinc-900 dark:hover:!bg-zinc-50 hover:!text-zinc-50 dark:hover:!text-zinc-900 hover:!opacity-100"
            >
              You need a developer
            </Link>
            <Link
              href="/seo"
              className="px-8 py-4 rounded-md bg-transparent text-zinc-900 dark:text-zinc-50 border border-zinc-900 dark:border-zinc-50 transition-all duration-300 tracking-wide text-sm font-medium whitespace-nowrap hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-none group-hover/links:bg-transparent dark:group-hover/links:bg-transparent group-hover/links:text-zinc-900 dark:group-hover/links:text-zinc-50 group-hover/links:opacity-50 hover:!bg-zinc-900 dark:hover:!bg-zinc-50 hover:!text-zinc-50 dark:hover:!text-zinc-900 hover:!opacity-100"
            >
              You need an SEO expert
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="flex-1 flex justify-center lg:justify-end gap-6 text-xs font-semibold items-end group/tags cursor-default"
          >
            <div className="flex gap-4 tracking-widest text-zinc-800 dark:text-zinc-300 opacity-60 group-hover/tags:opacity-100 transition-opacity duration-300">
              <span
                className="transition-all duration-300 ease-out group-hover/tags:text-transparent dark:group-hover/tags:text-transparent hover:!text-zinc-900 dark:hover:!text-zinc-50 hover:-translate-y-1 transform-gpu"
                style={{ WebkitTextStroke: "1px currentColor" }}
              >
                Next.js
              </span>
              <span
                className="transition-all duration-300 ease-out group-hover/tags:text-transparent dark:group-hover/tags:text-transparent hover:!text-zinc-900 dark:hover:!text-zinc-50 hover:-translate-y-1 transform-gpu"
                style={{ WebkitTextStroke: "1px currentColor" }}
              >
                OpenAI
              </span>
              <span
                className="transition-all duration-300 ease-out group-hover/tags:text-transparent dark:group-hover/tags:text-transparent hover:!text-zinc-900 dark:hover:!text-zinc-50 hover:-translate-y-1 transform-gpu"
                style={{ WebkitTextStroke: "1px currentColor" }}
              >
                Semrush
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
