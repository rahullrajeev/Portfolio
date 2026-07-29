"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { ArrowUpRight, Activity, Zap, Search, ShieldCheck, Cpu, Layers } from "lucide-react";

export default function SEOExpertise() {
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
  const bgY = useTransform(smoothScroll, [0, 1], [0, 50]);
  const headerY = useTransform(smoothScroll, [0, 1], [0, -25]);
  const cardsY = useTransform(smoothScroll, [0, 1], [0, 20]);
  const scrollCueOpacity = useTransform(smoothScroll, [0, 0.2], [1, 0]);

  const skillCategories = [
    {
      icon: Cpu,
      title: "Technical & Indexing",
      skills: ["Technical SEO", "Crawlability & Sitemaps", "Schema & Canonical Tags", "Web Architecture"]
    },
    {
      icon: Layers,
      title: "Analytics & Tools",
      skills: ["Google Analytics (GA4)", "Search Console", "Semrush", "SERP Performance"]
    },
    {
      icon: ShieldCheck,
      title: "AEO, GEO & Growth",
      skills: ["AEO / GEO Optimization", "Keyword Research", "On-Page & Off-Page", "Conversion Landing Pages"]
    }
  ];

  const trafficData = [
    { name: "M1", traffic: 4200 },
    { name: "M2", traffic: 5400 },
    { name: "M3", traffic: 7100 },
    { name: "M4", traffic: 9500 },
    { name: "M5", traffic: 13200 },
    { name: "M6", traffic: 18400 },
  ];

  const performanceMetrics = [
    { label: "Performance", score: 98, color: "text-emerald-500", icon: Zap },
    { label: "Accessibility", score: 100, color: "text-emerald-500", icon: Activity },
    { label: "Best Practices", score: 100, color: "text-emerald-500", icon: Search },
    { label: "SEO Score", score: 100, color: "text-emerald-500", icon: ArrowUpRight },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="relative min-h-screen">
        <motion.div
          style={{ y: bgY }}
          className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-10 dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-luminosity"
        >
          <Image
            src="/montera.jpeg"
            alt="Minimal nature background"
            fill
            sizes="100vw"
            className="object-cover object-center grayscale"
            priority
          />
        </motion.div>

        <section className="min-h-screen py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto space-y-16 relative z-10">
          {/* Hero Header */}
          <motion.div 
            style={{ y: headerY }}
            initial={{ opacity: 0, y: 16 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="border-b border-zinc-200 dark:border-zinc-800 pb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-xs font-mono font-medium mb-4">
              Search Engine & AI Overview Engineering
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-none">
              SEO & Search Engineering
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light max-w-3xl text-zinc-600 dark:text-zinc-400">
              Structuring web properties for maximum search visibility, technical crawlability, and generative AI overview citations (AEO/GEO).
            </p>
          </motion.div>

          {/* Section 1: Streamlined Methodology & Skills */}
          <motion.div style={{ y: cardsY }} className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                Methodology & Skill Domains
              </h2>
              <span className="text-xs font-mono text-zinc-500">Structured Capabilities</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-zinc-900/80 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                        <Icon size={15} className="text-emerald-500" />
                        <span>{category.title}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 rounded-md text-xs font-medium border border-zinc-200/80 dark:border-zinc-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Web Vitals & Strategic Focus Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Core Web Vitals */}
              <div className="lg:col-span-7 bg-white dark:bg-zinc-900/80 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-4">
                  Core Web Vitals & Technical Health
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {performanceMetrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-3 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-100 dark:border-zinc-800/80 text-center">
                      <div className="relative flex items-center justify-center w-12 h-12 mb-1.5">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3.5" fill="none" className="text-zinc-200 dark:text-zinc-800" />
                          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3.5" fill="none" className={metric.color} strokeDasharray="125" strokeDashoffset={125 - (125 * metric.score) / 100} />
                        </svg>
                        <span className="absolute text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100">{metric.score}</span>
                      </div>
                      <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Focus */}
              <div className="lg:col-span-5 bg-zinc-900 text-zinc-100 p-5 rounded-xl border border-zinc-800 flex flex-col justify-center">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block mb-2 font-semibold">
                  Strategic Architecture
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Combining rigid <strong>Technical SEO</strong> (crawl budgeting, clean canonicals, sitemaps) with <strong>AEO/GEO</strong> entity optimization, ensuring content ranks on Google SERPs and gets cited by AI Overview engines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Performance Growth & Experience Record */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            {/* Organic Growth Chart */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                Organic Growth & Trajectory
              </h2>
              <div className="bg-white dark:bg-zinc-900/80 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Traffic Expansion (6-Month Campaign)</h3>
                    <p className="text-xs text-zinc-500">Validated GA4 & Search Console Sessions</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-mono font-bold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <ArrowUpRight size={14} />
                    <span>+350% Growth</span>
                  </div>
                </div>

                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" opacity={0.2} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#71717a" }} dy={5} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#71717a" }} />
                      <RechartsTooltip 
                        contentStyle={{ borderRadius: "8px", border: "1px solid #27272a", backgroundColor: "#09090b", color: "#f4f4f5", fontSize: "12px" }}
                      />
                      <Area type="monotone" dataKey="traffic" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorTraffic)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Experience Record */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                Experience Record
              </h2>
              <div className="space-y-4">
                {[
                  {
                    role: "SEO Specialist",
                    company: "Vidhyarthi Mithram",
                    period: "2025 – Present",
                    desc: "Complete SEO management: keyword research, technical audits, on/off-page SEO, GA4 & Search Console analytics, and AEO/GEO landing page development."
                  },
                  {
                    role: "Freelance Digital Marketer",
                    company: "Client Projects",
                    period: "2024 – Present",
                    desc: "SEO strategy for SMBs, Google & Meta Ads management, social media marketing, and WordPress website development."
                  },
                  {
                    role: "Digital Marketing Intern",
                    company: "Bluepin Digitals",
                    period: "2025",
                    desc: "Keyword research, content optimization, on-page SEO execution, and supporting ad campaign management."
                  },
                ].map((job, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-zinc-900/80 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{job.role} <span className="font-normal text-zinc-500">• {job.company}</span></span>
                      <span className="font-mono text-[11px] text-zinc-500">{job.period}</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{job.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Verified Case Study & Interactive Console */}
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">Featured Case Study</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                  Vidhyarthi Mithram Consultancy
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
                Live campaign results: Organic SERP ranking boost, +45% traffic growth, and AEO AI Overview citations in Kochi, India.
              </p>
            </div>

            <div className="bg-zinc-950 text-white rounded-2xl border border-zinc-800 p-5 sm:p-8 space-y-6">
              {/* Grid of 6 Key Accomplishments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] font-mono text-emerald-400 block mb-1">SERP Ranking Boost</span>
                  <p className="text-xs sm:text-sm font-bold text-white mb-1">Page 2/3 ➔ Top 6 (#5 Organic)</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Ranked high-intent term <em className="text-zinc-200">&quot;Best Study Abroad Consultants in Kochi&quot;</em> to Top 6 in 6 months.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] font-mono text-emerald-400 block mb-1">Traffic & Lead Growth</span>
                  <p className="text-xs sm:text-sm font-bold text-white mb-1">+45% Traffic & +30% Leads</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Increased qualified student consultation enquiries and organic search traffic significantly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-300 block mb-1">60+ Webpages Scaled</span>
                  <p className="text-xs sm:text-sm font-bold text-white mb-1">Metadata & Schema Mesh</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Optimized metadata, internal linking architecture, and structured JSON-LD schema across 60+ pages.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-300 block mb-1">Technical SEO Audits</span>
                  <p className="text-xs sm:text-sm font-bold text-white mb-1">Crawl & Indexing Health</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Resolved indexing warnings, optimized XML sitemaps, robots.txt, and canonical URL structures.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-300 block mb-1">AEO & GEO Engineering</span>
                  <p className="text-xs sm:text-sm font-bold text-white mb-1">AI Search Ready</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Built generative search landing pages resulting in verified Google AI Overview citations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-300 block mb-1">Analytics Tracking</span>
                  <p className="text-xs sm:text-sm font-bold text-white mb-1">GA4 & Search Console</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Continuous performance tracking, keyword ranking monitoring, and Core Web Vitals optimization.
                  </p>
                </div>
              </div>

              {/* Interactive Frame Wrapper */}
              <div className="pt-6 border-t border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>vidhyarthimithram.com • Performance & Diagnostic Showcase</span>
                    </span>
                  </div>
                  <a 
                    href="/seo-demo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono text-zinc-200 hover:text-white flex items-center gap-1.5 font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3 py-1.5 rounded-lg transition-colors shrink-0 self-start sm:self-auto"
                  >
                    <span>Full Screen Console</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="w-full h-[420px] sm:h-[580px] md:h-[680px] lg:h-[720px] rounded-xl border border-zinc-800 overflow-hidden relative shadow-2xl bg-zinc-950">
                  <iframe 
                    src="/seo-demo" 
                    title="Vidhyarthi Mithram SEO Performance & Audit Showcase"
                    loading="eager"
                    className="w-full h-full border-none rounded-xl"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  />
                </div>
              </div>
            </div>
          </div>
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
