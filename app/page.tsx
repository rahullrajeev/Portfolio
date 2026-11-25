"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { HomeHero } from "@/components/blocks/home-hero";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <PageTransition>
      <HomeHero />

      {/* Featured Project Spotlight */}
      <section ref={showcaseRef} className="py-12 sm:py-16 md:py-24 px-5 sm:px-6 md:px-12 bg-black text-white overflow-hidden relative max-w-full">
        <Grid className="max-w-6xl mx-auto items-center relative z-10">
          <div className="col-span-4 md:col-span-4 lg:col-span-6 space-y-4 sm:space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h3 className="font-display text-sm sm:text-base md:text-lg opacity-60 lowercase font-mono">Featured Case Study</h3>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="font-display text-3xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9]">
                ModuSpark <br /> AI Studio
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="text-sm sm:text-base font-medium md:font-bold font-display opacity-85 md:opacity-80 max-w-sm leading-relaxed">
                AI-powered component generation platform converting natural-language prompts into React + Tailwind code.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-2 sm:gap-3 group/tags cursor-default transition-opacity duration-300">
                {['Next.js', 'Google Gemini AI', 'Tailwind', 'Monaco Editor'].map(tech => (
                  <span 
                    key={tech} 
                    className="mobile-no-stroke px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/25 md:border-white/20 text-[11px] sm:text-xs tracking-wider md:tracking-widest transition-all duration-300 ease-out md:group-hover/tags:text-transparent md:hover:!text-white md:hover:border-white md:hover:-translate-y-1 transform-gpu"
                    style={{ WebkitTextStroke: "1px currentColor" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            
            <Reveal direction="up" delay={0.5}>
              <Magnetic strength={15}>
                <Link href="/projects" className="inline-flex items-center gap-2 mt-2 sm:mt-4 md:mt-8 min-h-[44px] md:min-h-0 hover:opacity-70 active:opacity-70 transition-opacity text-xs sm:text-sm font-bold tracking-widest">
                  Explore Project <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
          
          <div className="col-span-4 md:col-span-4 lg:col-span-6 w-full aspect-[4/3] sm:aspect-square md:aspect-[4/5] relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 mt-4 sm:mt-6 md:mt-0">
            <div className="absolute inset-0 flex items-center justify-center font-display opacity-20 rotate-[-10deg] scale-150 text-5xl sm:text-7xl md:text-8xl blur-[4px]">
              MODUSPARK
            </div>
            {/* Minimal mock ui representing the project */}
            <div className="absolute inset-2.5 sm:inset-4 md:inset-10 bg-black rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden group">
               <div className="h-7 md:h-8 border-b border-white/10 flex items-center px-3 md:px-4 gap-1.5 bg-zinc-900/50">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
               </div>
               <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 pointer-events-none mix-blend-overlay z-10"></div>
                  <iframe 
                    src="https://moduspark-ai-component-studio.vercel.app/" 
                    title="ModuSpark AI Component Studio"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full border-none opacity-80 pointer-events-none origin-top"
                    style={{ transform: "scale(0.8)", width: "125%", height: "125%" }}
                  />
               </div>
            </div>
          </div>
        </Grid>
        
        {/* Parallax background elements (desktop only to avoid mobile repaint) */}
        <motion.div 
          style={{ y }}
          className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" 
        />
      </section>

      {/* Expertise */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-6 sm:mb-8 md:mb-12 text-center">
          Core <span className="text-zinc-600 dark:text-zinc-400">Expertise</span>
        </h2>
        
        <Grid className="gap-y-px gap-x-px bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 md:rounded-none md:overflow-visible md:border-0">
          {[
            { title: "SEO", desc: "Technical SEO, AEO & GEO optimization, schema architecture, crawlability, and search dominance via data-driven organic strategies.", num: "01", href: "/seo" },
            { title: "Web Design & Development", desc: "Designing and developing responsive, high-converting websites and landing pages tailored for modern web products.", num: "02", href: "/projects" },
            { title: "Frontend Engineering", desc: "Crafting fluid, high-performance interfaces with React, Next.js, and complex animation libraries.", num: "03", href: "/resume" },
            { title: "AI Integration", desc: "Orchestrating Gemini & other LLMs to synthesize intelligence within UI elements for seamless user workflows.", num: "04", href: "/seo-demo" },
          ].map((exp) => (
            <Link key={exp.num} href={exp.href} className="col-span-4 md:col-span-4 lg:col-span-6 block h-full">
              <div className="h-full bg-zinc-50 dark:bg-zinc-950 active:bg-zinc-900 dark:active:bg-zinc-50 md:hover:bg-zinc-900 md:dark:hover:bg-zinc-50 lg:hover:scale-105 lg:hover:-translate-y-4 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:lg:hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:z-50 z-0 p-5 sm:p-8 md:p-12 group transition-all duration-300 ease-out relative cursor-pointer outline outline-1 outline-transparent hover:outline-zinc-200 dark:hover:outline-zinc-800">
                <div className="text-zinc-500 dark:text-zinc-500 font-mono text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 group-hover:text-zinc-400 dark:group-hover:text-zinc-600 transition-colors duration-500">{exp.num}</div>
                <h3 className="font-display text-lg sm:text-lg md:text-xl font-bold tracking-tight mb-2 sm:mb-3 text-zinc-900 dark:text-zinc-50 group-active:text-zinc-50 dark:group-active:text-zinc-900 md:group-hover:text-zinc-50 md:dark:group-hover:text-zinc-900 transition-colors duration-500">{exp.title}</h3>
                <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-sans font-light leading-relaxed group-active:text-zinc-200 dark:group-active:text-zinc-700 md:group-hover:text-zinc-200 md:dark:group-hover:text-zinc-700 transition-colors duration-500">{exp.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-zinc-400 dark:bg-zinc-600 md:group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </Link>
          ))}
        </Grid>
      </section>

    </PageTransition>
  );
}
