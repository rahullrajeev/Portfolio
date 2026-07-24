"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { motion } from "motion/react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { ArrowUpRight, Activity, Zap, Search } from "lucide-react";

export default function SEOExpertise() {
  const skills = [
    "Technical SEO", "On-page SEO", "Off-page SEO", "Keyword Research",
    "Google Analytics", "Search Console", "Semrush", "Content Strategy",
    "AEO (Answer Engine Optimization)", "GEO (Generative Engine Optimization)",
    "Landing Page Optimization", "Crawlability Improvements", 
    "SERP Optimization", "Indexing Optimization"
  ];

  const trafficData = [
    { name: "Jan", traffic: 4000, keywords: 2400 },
    { name: "Feb", traffic: 5000, keywords: 2800 },
    { name: "Mar", traffic: 6500, keywords: 3900 },
    { name: "Apr", traffic: 8000, keywords: 4800 },
    { name: "May", traffic: 12000, keywords: 6200 },
    { name: "Jun", traffic: 18000, keywords: 8500 },
  ];

  const performanceMetrics = [
    { label: "Performance", score: 98, color: "text-green-500", icon: Zap },
    { label: "Accessibility", score: 100, color: "text-green-500", icon: Activity },
    { label: "Best Practices", score: 100, color: "text-green-500", icon: Search },
    { label: "SEO", score: 100, color: "text-green-500", icon: ArrowUpRight },
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
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-10 dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-luminosity">
        <Image
          src="/montera.jpeg"
          alt="Minimal nature background"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale"
          priority
        />
      </div>
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
            
            <div className="mt-12 mb-12 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-display font-bold tracking-widest text-xs opacity-80 mb-6 text-zinc-500 uppercase">Core Web Vitals</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {performanceMetrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800">
                    <div className="relative flex items-center justify-center w-16 h-16 mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-zinc-200 dark:text-zinc-800" />
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className={metric.color} strokeDasharray="175" strokeDashoffset={175 - (175 * metric.score) / 100} />
                      </svg>
                      <span className="absolute text-lg font-bold">{metric.score}</span>
                    </div>
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-[#2b3a20] dark:bg-[#a0b090] rounded-2xl text-zinc-50 dark:text-[#18181b] transition-colors border border-transparent">
               <h3 className="font-display font-bold tracking-widest text-xs opacity-80 mb-4">Strategic Focus</h3>
               <p className="font-light text-lg">
                 Transitioning beyond traditional keyword stuffing to holistic architecture: focusing on <strong>AEO</strong> and <strong>GEO</strong> to ensure content is digested properly by LLMs and AI Overviews, while maintaining rigid Technical SEO standards for legacy crawlers.
               </p>
            </div>
          </div>

          <div className="col-span-4 md:col-span-4 lg:col-span-6">
             <h2 className="font-display text-3xl font-bold tracking-tight mb-8">Performance & Metrics</h2>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800"
             >
               <div className="flex items-center justify-between mb-6">
                 <div>
                   <h3 className="font-display font-bold text-lg">Organic Growth Snapshot</h3>
                   <p className="text-xs text-zinc-500 dark:text-zinc-400">Traffic & Keyword Trajectory (6 Months)</p>
                 </div>
                 <div className="flex items-center gap-2 text-green-500 text-sm font-medium bg-green-50 dark:bg-green-500/10 px-3 py-1 rounded-full">
                   <ArrowUpRight size={16} />
                   <span>350%</span>
                 </div>
               </div>
               
               <div className="h-[250px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                     <defs>
                       <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#2b3a20" stopOpacity={0.3} />
                         <stop offset="95%" stopColor="#2b3a20" stopOpacity={0} />
                       </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} dx={-10} />
                     <RechartsTooltip 
                       contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", backgroundColor: "var(--background)" }}
                       itemStyle={{ color: "var(--foreground)" }}
                     />
                     <Area type="monotone" dataKey="traffic" stroke="#2b3a20" strokeWidth={2} fillOpacity={1} fill="url(#colorTraffic)" />
                   </AreaChart>
                 </ResponsiveContainer>
               </div>
             </motion.div>

             <h2 className="font-display text-3xl font-bold tracking-tight mb-8 mt-12">Experience Record</h2>
             
             <div className="space-y-12">
                {[
                  { 
                    title: "SEO Specialist — Vidhyarthi Mithram", 
                    date: "2025 – Present",
                    desc: "Performing complete SEO management including keyword research, on-page SEO, off-page SEO, and technical SEO optimization. Tracking and analyzing website performance using Google Analytics, Google Search Console, and Semrush. Optimizing AEO and GEO focused landing pages." 
                  },
                  { 
                    title: "Freelance Digital Marketer", 
                    date: "2024 – Present",
                    desc: "Providing SEO services for small businesses, managing social media marketing campaigns (Instagram, Facebook), and running Google Ads and Meta Ads campaigns. Designing landing pages & websites using WordPress." 
                  },
                  { 
                    title: "Digital Marketing Intern — Bluepin Digitals", 
                    date: "2025",
                    desc: "Conducted SEO keyword research, on-page optimization, and content improvements. Supported Meta Ads and Google Ads campaign setup, utilizing Google Analytics, Search Console, and SEMrush." 
                  },
                ].map((job, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    key={i} 
                    className="border-b border-zinc-200 dark:border-zinc-800 pb-12 last:border-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-2">
                      <h3 className="font-display text-xl font-bold">{job.title}</h3>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider whitespace-nowrap">{job.date}</span>
                    </div>
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
