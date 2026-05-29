"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  const certifications = [
    "Certified Digital Marketing Specialist (CDMS)",
    "Semrush SEO Fundamentals",
    "Google Analytics Certification",
    "Google Ads Certification",
    "HubSpot SEO Certification"
  ];

  return (
    <PageTransition>
      <section className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            The <span className="text-zinc-600 dark:text-zinc-400">Journey</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-display">
            From a B.Tech in Computer Science to mastering Digital Marketing & SEO, and ultimately engineering AI-powered digital products.
          </p>
        </motion.div>

        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-8 flex flex-col gap-12">
            <Reveal direction="up" delay={0.3}>
              <div className="space-y-6 text-base font-light font-display leading-relaxed text-zinc-800">
                <p>
                  My foundation lies in Computer Science Engineering, where I cultivated a rigorous understanding of logic and architecture. However, my curiosity led me into the dynamic realm of Digital Marketing and SEO, merging technical precision with strategic visibility.
                </p>
                <p>
                  Today, I bridge the gap between discovery and interaction. I am deeply passionate about Generative AI and Frontend Development, building intuitive interfaces that leverage large language models to solve real-world problems.
                </p>
              </div>
            </Reveal>

            <div className="space-y-8">
               <h3 className="font-display text-2xl font-bold tracking-tight pb-4 border-b border-zinc-200">Education & Milestones</h3>
               <div className="relative pl-8 border-l-2 border-zinc-200 space-y-12">
                 {[
                   { year: "Present", role: "Generative AI Developer", detail: "Developing SaaS tools and AI-driven platforms like ModuSpark." },
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
                     <div className="absolute w-4 h-4 bg-black rounded-full -left-[41px] top-1"></div>
                     <div className="font-mono text-sm text-zinc-700 dark:text-zinc-400 mb-1">{item.year}</div>
                     <div className="text-xl font-bold mb-2">{item.role}</div>
                     <div className="text-zinc-800 dark:text-zinc-300 font-display font-light">{item.detail}</div>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-4 space-y-8">
            <Reveal direction="up" delay={0.4}>
               <div className="relative w-3/4 max-w-[240px] md:max-w-xs mx-auto aspect-[4/5] rounded-3xl overflow-hidden group">
                  <Image 
                    src="/portrait.jpeg"
                    alt="Rahul Rajeev"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="bg-zinc-900 text-zinc-50 p-8 rounded-2xl">
                <h3 className="font-display text-xl font-bold tracking-wider mb-6">Certifications</h3>
                <ul className="space-y-4">
                  {certifications.map(cert => (
                    <li key={cert} className="flex items-start gap-4 text-sm font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Grid>
      </section>
    </PageTransition>
  );
}
