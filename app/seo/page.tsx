"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { motion } from "motion/react";

export default function SEOExpertise() {
  const skills = [
    "Technical SEO", "On-page SEO", "Off-page SEO", "Keyword Research",
    "Google Analytics", "Search Console", "Semrush", "Content Strategy",
    "AEO (Answer Engine Optimization)", "GEO (Generative Engine Optimization)",
    "Landing Page Optimization", "Crawlability Improvements", 
    "SERP Optimization", "Indexing Optimization"
  ];

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <section className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Search <br/> <span className="text-zinc-600 dark:text-zinc-400">Architecture</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl font-sans text-zinc-700 dark:text-zinc-300">
            Structuring web properties for maximum visibility, crawlability, and generative engine performance.
          </p>
        </motion.div>

        <Grid>
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Methodology & Skills</h2>
            <motion.div 
              variants={stagger} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.map(skill => (
                <motion.span 
                  variants={item}
                  key={skill} 
                  className="px-4 py-3 bg-zinc-900 text-zinc-50 rounded-lg text-sm font-medium tracking-wide"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            
            <div className="mt-16 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl">
               <h3 className="font-display font-bold tracking-widest text-xs text-zinc-700 dark:text-zinc-400 mb-4">Strategic Focus</h3>
               <p className="font-light text-lg">
                 Transitioning beyond traditional keyword stuffing to holistic architecture: focusing on <strong>AEO</strong> and <strong>GEO</strong> to ensure content is digested properly by LLMs and AI Overviews, while maintaining rigid Technical SEO standards for legacy crawlers.
               </p>
            </div>
          </div>

          <div className="col-span-4 md:col-span-4 lg:col-span-6">
             <h2 className="font-display text-3xl font-bold tracking-tight mb-12">Experience Record</h2>
             
             <div className="space-y-12">
                {[
                  { title: "SEO Specialist", desc: "Orchestrating end-to-end SEO campaigns. Conducting comprehensive technical audits, optimizing site architecture for crawl budget efficiency, and implementing advanced schema markup." },
                  { title: "Freelance Digital Marketing", desc: "Partnering with diverse brands to elevate localized and global SERP presence through data-driven content strategies and intensive technical remediation." },
                  { title: "SEO Internship", desc: "Foundational experience analyzing massive datasets in Google Search Console and Analytics to identify bridging opportunities in search intent." },
                ].map((job, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    key={i} 
                    className="border-b border-zinc-200 pb-12 last:border-0"
                  >
                    <h3 className="font-display text-xl font-bold mb-4">{job.title}</h3>
                    <p className="text-zinc-800 dark:text-zinc-300 font-light leading-relaxed">{job.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </Grid>
      </section>
    </PageTransition>
  );
}
