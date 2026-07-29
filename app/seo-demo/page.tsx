"use client";

import { useState } from "react";
import Image from "next/image";
import { PageTransition } from "@/components/layout/page-transition";
import { 
  Search, 
  CheckCircle2, 
  TrendingUp, 
  Globe, 
  FileCode2, 
  Sparkles, 
  ExternalLink,
  Filter,
  BarChart2,
  ShieldCheck,
  Layers,
  Smartphone,
  Laptop,
  Image as ImageIcon,
  Bot,
  ArrowUpRight,
  Zap
} from "lucide-react";

export default function SEODemoPage() {
  const [activeTab, setActiveTab] = useState<"serp" | "audit" | "analytics" | "pages">("serp");
  const [serpViewMode, setSerpViewMode] = useState<"results" | "interactive">("results");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [searchQuery, setSearchQuery] = useState("best study abroad consultants in kochi");

  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-2 sm:p-4 md:p-6 select-none">
      {/* Top Demo Header Bar */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 mb-4 sm:mb-6 border-b border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 font-bold shrink-0">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-semibold text-xs sm:text-sm text-zinc-100 font-mono tracking-tight">Vidhyarthi Mithram — Live SEO Performance & Audit</h1>
              <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">
                CLIENT CASE STUDY
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-zinc-400 font-mono">
              Study Abroad Consultancy • Kochi, India
            </p>
          </div>
        </div>

        {/* Device Switcher & Quick Metrics */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
            <button
              onClick={() => setDevice("desktop")}
              className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors ${
                device === "desktop" ? "bg-zinc-800 text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="Desktop View"
            >
              <Laptop size={14} />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors ${
                device === "mobile" ? "bg-zinc-800 text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="Mobile View"
            >
              <Smartphone size={14} />
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg">
            <TrendingUp size={13} />
            <span>Organic Pos #5 (From #28)</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 border-b border-zinc-800 pb-2.5 mb-4 sm:mb-6 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab("serp")}
          className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
            activeTab === "serp"
              ? "bg-zinc-100 text-zinc-950 shadow-md"
              : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-zinc-800"
          }`}
        >
          <Search size={13} />
          <span>SERP & AI Overview</span>
        </button>

        <button
          onClick={() => setActiveTab("audit")}
          className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
            activeTab === "audit"
              ? "bg-zinc-100 text-zinc-950 shadow-md"
              : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-zinc-800"
          }`}
        >
          <ShieldCheck size={13} />
          <span>Technical Audit</span>
        </button>

        <button
          onClick={() => setActiveTab("analytics")}
          className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
            activeTab === "analytics"
              ? "bg-zinc-100 text-zinc-950 shadow-md"
              : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-zinc-800"
          }`}
        >
          <BarChart2 size={13} />
          <span>GA4 Traffic</span>
        </button>

        <button
          onClick={() => setActiveTab("pages")}
          className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
            activeTab === "pages"
              ? "bg-zinc-100 text-zinc-950 shadow-md"
              : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-zinc-800"
          }`}
        >
          <Layers size={13} />
          <span>60+ Pages</span>
        </button>
      </div>

      {/* Main Content Showcase */}
      <div className={`mx-auto transition-all duration-300 ${device === "mobile" ? "max-w-md" : "max-w-full"}`}>
        {/* TAB 1: SERP & AI OVERVIEW */}
        {activeTab === "serp" && (
          <div className="bg-zinc-900/80 rounded-xl sm:rounded-2xl border border-zinc-800 p-2.5 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
            {/* View Mode Switcher Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 bg-zinc-950 p-2.5 sm:p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-1 rounded-md uppercase">
                  Keyword: best study abroad consultants in kochi
                </span>
              </div>
              <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-[11px] sm:text-xs">
                <button
                  onClick={() => setSerpViewMode("results")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded font-medium transition-colors ${
                    serpViewMode === "results"
                      ? "bg-emerald-500 text-zinc-950 font-bold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <ImageIcon size={13} />
                  <span>Results</span>
                </button>
                <button
                  onClick={() => setSerpViewMode("interactive")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded font-medium transition-colors ${
                    serpViewMode === "interactive"
                      ? "bg-emerald-500 text-zinc-950 font-bold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Search size={13} />
                  <span>Interactive</span>
                </button>
              </div>
            </div>

            {/* VIEW MODE 1: Results (Includes both Google SERP and Google AI Overview Proof Screenshots) */}
            {serpViewMode === "results" && (
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-zinc-950 p-3 sm:p-4 rounded-xl border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-emerald-400 font-semibold font-mono block text-[11px] sm:text-xs">VERIFIED RANKING PROOFS</span>
                    <p className="text-zinc-300 mt-0.5 text-[11px] sm:text-xs">
                      Vidhyarthi Mithram (<code className="text-emerald-400">vidhyarthimithram.com</code>) ranking proofs: Page 1 position & AI Overview citation.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 text-emerald-400 font-mono text-[10px] sm:text-[11px] border border-zinc-800 font-semibold">
                      Page 1 Organic #5
                    </span>
                    <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 font-mono text-[10px] sm:text-[11px] border border-zinc-800 font-semibold">
                      AEO Citation
                    </span>
                  </div>
                </div>

                {/* Both Proof Screenshots Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {/* Proof 1: Google SERP Page 1 */}
                  <div className="bg-zinc-950 rounded-xl sm:rounded-2xl border border-zinc-800 p-2 sm:p-3 space-y-2 shadow-lg">
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5 px-1">
                      <span className="text-[11px] font-mono font-semibold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        <span>Google SERP Ranking (#5 Organic)</span>
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">1 serp.png</span>
                    </div>
                    <div className="relative w-full max-h-[380px] sm:max-h-[500px] overflow-auto rounded-lg sm:rounded-xl border border-zinc-800/80 bg-zinc-900 flex justify-center p-1 sm:p-2 scrollbar-thin scrollbar-thumb-zinc-700">
                      <Image
                        src="/1 serp.png"
                        alt="Google SERP proof for best study abroad consultants in kochi"
                        width={841}
                        height={1870}
                        className="w-full min-w-[320px] sm:min-w-0 h-auto object-top rounded-lg shadow-xl"
                        priority
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Proof 2: Google AI Overview (AEO) */}
                  <div className="bg-zinc-950 rounded-xl sm:rounded-2xl border border-zinc-800 p-2 sm:p-3 space-y-2 shadow-lg">
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5 px-1">
                      <span className="text-[11px] font-mono font-semibold text-zinc-200 flex items-center gap-1">
                        <Sparkles size={12} className="text-emerald-400" />
                        <span>Google AI Overview (AEO / GEO)</span>
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">aeo.png</span>
                    </div>
                    <div className="relative w-full max-h-[380px] sm:max-h-[500px] overflow-auto rounded-lg sm:rounded-xl border border-zinc-800/80 bg-zinc-900 flex justify-center p-1 sm:p-2 scrollbar-thin scrollbar-thumb-zinc-700">
                      <Image
                        src="/aeo.png"
                        alt="Google AI Overview proof for Vidhyarthi Mithram"
                        width={841}
                        height={1870}
                        className="w-full min-w-[320px] sm:min-w-0 h-auto object-top rounded-lg shadow-xl"
                        priority
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW MODE 3: Interactive Search Breakdown */}
            {serpViewMode === "interactive" && (
              <div className="space-y-5">
                {/* Simulated Google Search Bar */}
                <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 shadow-inner">
                  <Search className="text-zinc-400 w-4 h-4 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm text-zinc-100 focus:outline-none w-full font-medium"
                  />
                  <span className="text-[10px] font-mono bg-zinc-900 text-emerald-400 border border-zinc-800 px-2 py-0.5 rounded shrink-0">
                    Rank #5
                  </span>
                </div>

                {/* AI Overview Box */}
                <div className="p-4 md:p-5 rounded-xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2 text-zinc-200 font-medium text-xs font-mono">
                      <Sparkles size={14} className="text-emerald-400" />
                      <span>Google AI Overview (AEO / GEO Optimised)</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">Generative Citation</span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-3">
                    Top study abroad consultants in Kochi like Vidhyarthi Mithram offer overseas admissions guidance for UK, Canada, Australia, and Germany. They provide personalized guidance, transparent processes, and university selection...
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-zinc-900 border border-zinc-800 text-zinc-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-mono text-[11px]">
                      <CheckCircle2 size={12} className="text-emerald-400" /> Cites Vidhyarthi Mithram Platform
                    </span>
                    <span className="bg-zinc-900 text-zinc-400 border border-zinc-800/60 px-2.5 py-1 rounded-lg text-[11px]">
                      100% Entity Match
                    </span>
                  </div>
                </div>

                {/* Organic Result Card for Vidhyarthi Mithram */}
                <div className="bg-zinc-950 rounded-xl p-4 sm:p-5 border border-zinc-800 relative group shadow-md">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                      <Globe size={13} className="text-zinc-400" />
                      <span>https://vidhyarthimithram.com</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded">
                      Pos #5 (Page 1)
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-zinc-100 hover:text-emerald-400 cursor-pointer mb-2 flex items-center gap-2 transition-colors">
                    Vidhyarthi Mithram: Top Study Abroad Consultants in Kochi
                    <ExternalLink size={14} className="text-zinc-500" />
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-4">
                    Vidhyarthi Mithram is one of the Best Study Abroad consultants in Kochi, With trusted personalized guidance and a transparent approach to an overseas education.
                  </p>

                  {/* Sitelinks Extension */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3 border-t border-zinc-800/80 text-xs text-zinc-300 font-medium">
                    <div className="bg-zinc-900/60 p-2 rounded border border-zinc-800 hover:border-zinc-700">
                      <span className="block font-semibold text-zinc-200">UK Admissions</span>
                      <span className="text-[10px] text-zinc-400 font-normal">University Guidance</span>
                    </div>
                    <div className="bg-zinc-900/60 p-2 rounded border border-zinc-800 hover:border-zinc-700">
                      <span className="block font-semibold text-zinc-200">Canada Visas</span>
                      <span className="text-[10px] text-zinc-400 font-normal">Transparent Process</span>
                    </div>
                    <div className="bg-zinc-900/60 p-2 rounded border border-zinc-800 hover:border-zinc-700">
                      <span className="block font-semibold text-zinc-200">Scholarships</span>
                      <span className="text-[10px] text-zinc-400 font-normal">Student Financial Aid</span>
                    </div>
                    <div className="bg-zinc-900/60 p-2 rounded border border-zinc-800 hover:border-zinc-700">
                      <span className="block font-semibold text-zinc-200">Free Counselling</span>
                      <span className="text-[10px] text-zinc-400 font-normal">1-on-1 Mentorship</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Campaign Summary Pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-zinc-800">
              <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-zinc-900 text-emerald-400 rounded-lg border border-zinc-800">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 font-mono uppercase block">SERP Jump</span>
                  <span className="text-xs font-bold text-zinc-100">Page 2/3 ➔ Page 1 Top 6</span>
                </div>
              </div>

              <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-800">
                  <Filter size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 font-mono uppercase block">Target Keyword</span>
                  <span className="text-xs font-bold text-zinc-100">best study abroad consultants in kochi</span>
                </div>
              </div>

              <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-800">
                  <Sparkles size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 font-mono uppercase block">Client Campaign</span>
                  <span className="text-xs font-bold text-zinc-100">Vidhyarthi Mithram</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TECHNICAL AUDIT */}
        {activeTab === "audit" && (
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-center">
                <div className="text-2xl font-bold text-emerald-400 font-mono">98/100</div>
                <div className="text-xs text-zinc-400 font-medium mt-1">Lighthouse Performance</div>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-center">
                <div className="text-2xl font-bold text-emerald-400 font-mono">0.8s</div>
                <div className="text-xs text-zinc-400 font-medium mt-1">LCP (Core Web Vital)</div>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-center">
                <div className="text-2xl font-bold text-emerald-400 font-mono">0 Errors</div>
                <div className="text-xs text-zinc-400 font-medium mt-1">Crawl & Index Health</div>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-center">
                <div className="text-2xl font-bold text-emerald-400 font-mono">100%</div>
                <div className="text-xs text-zinc-400 font-medium mt-1">Canonical Precision</div>
              </div>
            </div>

            {/* Technical Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-300 font-medium">XML Sitemap & Indexing Pipeline</span>
                <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Submitted & Active
                </span>
              </div>
              <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-300 font-medium">Robots.txt Crawl Directives</span>
                <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Clean & Optimized
                </span>
              </div>
              <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-300 font-medium">Mobile Friendliness Audit</span>
                <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Passed (100%)
                </span>
              </div>
              <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-300 font-medium">Internal Linking Mesh</span>
                <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Topic Cluster Enabled
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GA4 & TRAFFIC GROWTH */}
        {activeTab === "analytics" && (
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-zinc-400 font-mono uppercase block">Organic Traffic</span>
                <div className="text-2xl font-bold text-emerald-400 mt-1 flex items-center gap-2">
                  +45%
                  <ArrowUpRight size={18} />
                </div>
                <span className="text-xs text-zinc-500 mt-1 block">Sustained Growth YoY</span>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-zinc-400 font-mono uppercase block">Qualified Enquiries</span>
                <div className="text-2xl font-bold text-zinc-100 mt-1 flex items-center gap-2">
                  +30%
                  <ArrowUpRight size={18} />
                </div>
                <span className="text-xs text-zinc-500 mt-1 block">Lead Generation Funnel</span>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-zinc-400 font-mono uppercase block">Optimized Pages</span>
                <div className="text-2xl font-bold text-zinc-100 mt-1">
                  60+ Pages
                </div>
                <span className="text-xs text-zinc-500 mt-1 block">Meta, Schema & Content</span>
              </div>
            </div>

            {/* Analytics Dashboard Visualizer */}
            <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-widest font-mono">
                  Google Analytics 4 & Search Console Growth Pattern
                </h3>
                <span className="text-[11px] text-zinc-500 font-mono">Oct 2025 – Present</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-400">Month 1-2 (Baseline & Technical Fixes)</span>
                    <span className="text-zinc-400 font-mono">4,200 sessions</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
                    <div className="bg-zinc-700 h-full rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-400">Month 3-4 (On-Page & Cluster Launch)</span>
                    <span className="text-zinc-300 font-mono">8,500 sessions</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
                    <div className="bg-zinc-500 h-full rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-emerald-400 font-medium">Month 5-6 (Top 6 Ranking Achieved)</span>
                    <span className="text-emerald-400 font-mono font-bold">14,200 sessions (+45%)</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 60+ WEBPAGES & AEO/GEO */}
        {activeTab === "pages" && (
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-4 md:p-6 space-y-6">
            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-200 mb-2 font-display">
                60+ Webpages Optimization & Architecture Overhaul
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Complete structured optimization across 60+ target pages including destination guides (UK, Canada, Australia, Germany), course landing pages, fee structures, visa requirements, and FAQ modules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
                  <Zap size={14} className="text-emerald-400" />
                  <span>On-Page & Metadata Refinement</span>
                </div>
                <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
                  <li>• Custom Title Tags & Meta Descriptions tailored for high CTR in Kochi search intent.</li>
                  <li>• Canonical tag harmonization to prevent duplicate content indexing.</li>
                  <li>• Semantic H1/H2 header hierarchies for crawler topic understanding.</li>
                </ul>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
                  <Sparkles size={14} className="text-emerald-400" />
                  <span>AEO & GEO (AI Engine Optimization)</span>
                </div>
                <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
                  <li>• Formatted entity data so LLMs (ChatGPT, Gemini, Perplexity) summarize firm accurately.</li>
                  <li>• Q&A conversational content blocks engineered for Google SGE / AI Overviews.</li>
                  <li>• Fast Core Web Vitals to rank in zero-click answer engines.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </PageTransition>
  );
}
