"use client";

import { motion } from "motion/react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { ArrowUpRight } from "lucide-react";

export function HomeHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full flex flex-col justify-center text-center relative z-10 -mt-12 md:-mt-20"
      >
        <div className="w-full flex justify-center mb-10 lg:mb-20 relative z-30">
          <motion.div variants={item} className="flex items-center gap-4 md:gap-6 cursor-default -ml-4 md:-ml-8">
            <h1 className="font-display text-[14px] leading-[16px] font-display font-bold tracking-[0.25em] text-zinc-900 dark:text-zinc-50 text-center">
              Rahul Rajeev
            </h1>
          </motion.div>
        </div>

        <div className="relative w-full flex justify-center py-12 md:py-24">
          <div className="relative w-fit mx-auto flex flex-col mb-[-5px] group">
            {/* Main Text Container */}
            <div className="relative flex flex-col items-start w-full -space-y-2 md:-space-y-6 lg:-space-y-10 cursor-default">
              
              <motion.div 
                variants={item}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none w-[150%] flex justify-center h-[350px] md:h-[600px] mt-8"
              >
                <img 
                  src="/rhll.png" 
                  alt="Rahul" 
                  className="w-full h-full object-contain object-center" 
                />
              </motion.div>

              <motion.h2 
                variants={item}
                className="dev-text relative z-[1] hover:z-[20] text-[11vw] md:text-[7vw] font-display font-bold tracking-tighter leading-[0.85] m-0 p-0 transition-all duration-300 ease-out transform-gpu will-change-transform hover:scale-[1.03] hover:-translate-x-2 text-[#2b3a20] dark:text-[#a0b090] group-has-[.seo-text:hover]:[-webkit-text-fill-color:transparent]"
                style={{ WebkitTextStroke: "1.5px currentColor" }}
              >
                Generative AI Developer
              </motion.h2>
              
              <motion.h2 
                variants={item}
                className="seo-text relative z-[1] hover:z-[20] text-[11vw] md:text-[7vw] font-display font-bold tracking-tighter leading-[0.85] m-0 p-0 transition-all duration-300 ease-out transform-gpu will-change-transform hover:scale-[1.03] hover:translate-x-2 text-[#2b3a20] dark:text-[#a0b090] [-webkit-text-fill-color:transparent] hover:[-webkit-text-fill-color:currentColor]"
                style={{ WebkitTextStroke: "1.5px currentColor" }}
              >
                & SEO Specialist
              </motion.h2>
            </div>
            
            <motion.div variants={item} className="mt-3 md:mt-6 text-xs md:text-sm font-light tracking-tight text-zinc-600 dark:text-zinc-400 self-start relative z-[10]">
              based in Kochi, India.
            </motion.div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between mt-12 lg:mt-16 gap-8 lg:gap-12 z-30 relative">
          <div className="flex-1 hidden lg:block" />

          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4 flex-1 group/links">
            <Link href="/projects" className="px-8 py-4 rounded-md bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 border border-zinc-900 dark:border-zinc-50 transition-all duration-300 tracking-wide text-sm font-medium whitespace-nowrap hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-none group-hover/links:bg-transparent dark:group-hover/links:bg-transparent group-hover/links:text-zinc-900 dark:group-hover/links:text-zinc-50 group-hover/links:opacity-50 hover:!bg-zinc-900 dark:hover:!bg-zinc-50 hover:!text-zinc-50 dark:hover:!text-zinc-900 hover:!opacity-100">
              You need a developer
            </Link>
            <Link href="/seo" className="px-8 py-4 rounded-md bg-transparent text-zinc-900 dark:text-zinc-50 border border-zinc-900 dark:border-zinc-50 transition-all duration-300 tracking-wide text-sm font-medium whitespace-nowrap hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-none group-hover/links:bg-transparent dark:group-hover/links:bg-transparent group-hover/links:text-zinc-900 dark:group-hover/links:text-zinc-50 group-hover/links:opacity-50 hover:!bg-zinc-900 dark:hover:!bg-zinc-50 hover:!text-zinc-50 dark:hover:!text-zinc-900 hover:!opacity-100">
              You need an SEO expert
            </Link>
          </motion.div>
          
          <motion.div variants={item} className="flex-1 flex justify-center lg:justify-end gap-6 text-xs font-semibold items-end group/tags cursor-default">
            <div className="flex gap-4 tracking-widest text-zinc-800 dark:text-zinc-300 opacity-60 group-hover/tags:opacity-100 transition-opacity duration-300">
                <span 
                  className="transition-all duration-300 ease-out group-hover/tags:text-transparent dark:group-hover/tags:text-transparent hover:!text-zinc-900 dark:hover:!text-zinc-50 hover:-translate-y-1 transform-gpu"
                  style={{ WebkitTextStroke: "1px currentColor" }}
                >Next.js</span>
                <span 
                  className="transition-all duration-300 ease-out group-hover/tags:text-transparent dark:group-hover/tags:text-transparent hover:!text-zinc-900 dark:hover:!text-zinc-50 hover:-translate-y-1 transform-gpu"
                  style={{ WebkitTextStroke: "1px currentColor" }}
                >OpenAI</span>
                <span 
                  className="transition-all duration-300 ease-out group-hover/tags:text-transparent dark:group-hover/tags:text-transparent hover:!text-zinc-900 dark:hover:!text-zinc-50 hover:-translate-y-1 transform-gpu"
                  style={{ WebkitTextStroke: "1px currentColor" }}
                >Semrush</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
