"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Parallax transforms for forward and backward scrolling
  const bgY = useTransform(smoothScroll, [0, 1], [0, 60]);
  const bgScale = useTransform(smoothScroll, [0, 1], [1, 1.08]);
  const headerY = useTransform(smoothScroll, [0, 1], [0, -25]);
  const photoY = useTransform(smoothScroll, [0, 1], [0, 35]);
  const certsY = useTransform(smoothScroll, [0, 1], [0, -20]);
  const scrollCueOpacity = useTransform(smoothScroll, [0, 0.2], [1, 0]);

  const certifications = [
    "Certified Digital Marketing Specialist (CDMS)",
    "Semrush SEO Fundamentals",
    "Google Analytics Certification",
    "Google Ads Certification",
    "HubSpot SEO Certification"
  ];

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="relative min-h-screen"
      >
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-10 dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-luminosity"
        >
          <Image
            src="/IMG_0571.JPG.jpeg"
            alt="Minimal nature background"
            fill
            sizes="100vw"
            className="object-cover object-center grayscale"
            priority
          />
        </motion.div>
        <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto relative z-10">
          <motion.div
            style={{ y: headerY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 sm:mb-16"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
              The <span className="text-zinc-600 dark:text-zinc-400">Journey</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-display">
              From a B.Tech in Computer Science to mastering Digital Marketing & SEO, and ultimately engineering AI-powered digital products.
            </p>
          </motion.div>

          <Grid>
            <div className="col-span-4 md:col-span-8 lg:col-span-8 flex flex-col gap-8 sm:gap-12">
              <Reveal direction="up" delay={0.3}>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base font-light font-display leading-relaxed text-zinc-800 dark:text-zinc-300">
                  <p>
                    My foundation lies in Computer Science Engineering, where I cultivated a rigorous understanding of logic and architecture. However, my curiosity led me into the dynamic realm of Digital Marketing and SEO, merging technical precision with strategic visibility.
                  </p>
                  <p>
                    Today, I bridge the gap between discovery and interaction. I am deeply passionate about Generative AI and Frontend Development, building intuitive interfaces that leverage large language models to solve real-world problems.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-6 sm:space-y-8">
                 <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight pb-3 sm:pb-4 border-b border-zinc-200 dark:border-zinc-800">Education & Milestones</h3>
                 <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8 sm:space-y-12">
                   {[
                     { year: "Present", role: "Generative AI Developer & Web Developer", detail: "Developing SaaS tools, AI-driven platforms like ModuSpark, and modern responsive websites." },
                     { year: "2024 - Present", role: "SEO & Digital Marketing", detail: "Mastering technical SEO, AEO, and performance analytics." },
                     { year: "Prior", role: "B.Tech Computer Science", detail: "Core algorithmic foundations and system architecture." }
                   ].map((item, i) => (
                     <motion.div 
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.2 }}
                       key={item.year} 
                       className="relative"
                     >
                       <div className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full -left-[31px] sm:-left-[41px] top-1"></div>
                       <div className="font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 mb-1">{item.year}</div>
                       <div className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-zinc-900 dark:text-zinc-50">{item.role}</div>
                       <div className="text-xs sm:text-sm md:text-base text-zinc-800 dark:text-zinc-300 font-display font-light">{item.detail}</div>
                     </motion.div>
                   ))}
                 </div>
              </div>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-4 space-y-6 sm:space-y-8">
              <Reveal direction="up" delay={0.4}>
                 <motion.div
                   style={{ y: photoY }}
                   className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-xs mx-auto aspect-[4/5] rounded-3xl overflow-hidden group"
                 >
                    <Image 
                      src="/portrait.jpeg"
                      alt="Rahul Rajeev"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                 </motion.div>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <motion.div
                  style={{ y: certsY }}
                  className="bg-zinc-900 text-zinc-50 p-6 sm:p-8 rounded-2xl"
                >
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-wider mb-4 sm:mb-6">Certifications</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {certifications.map(cert => (
                      <li key={cert} className="flex items-start gap-3 sm:gap-4 text-xs sm:text-sm font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            </div>
          </Grid>
        </section>

        {/* Mouse Scroll Indicator Cue */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="flex fixed bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-20 pointer-events-none text-zinc-500 dark:text-zinc-400"
        >
          <div className="w-5 h-8 rounded-full border-2 border-zinc-400/60 dark:border-zinc-600/60 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-zinc-700 dark:bg-zinc-200"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
            Scroll
          </span>
        </motion.div>
      </div>
    </PageTransition>
  );
}
