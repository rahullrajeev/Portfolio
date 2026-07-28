"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

export default function Resume() {
  const [activeResume, setActiveResume] = useState<"SD" | "SEO">("SD");




  return (
    <PageTransition>
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-20 dark:opacity-10 mix-blend-luminosity">
        <Image
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2564&auto=format&fit=crop"
          alt="Minimal subtle background"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale"
          referrerPolicy="no-referrer"
          priority
        />
      </div>
      <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto flex flex-col relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-6 md:gap-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tighter leading-[0.9]">
              Curriculum <br/> <span className="text-zinc-600 dark:text-zinc-400">Vitae</span>
            </h1>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-800 rounded-full"
          >
             <button
                onClick={() => setActiveResume("SD")}
                className={`px-4 sm:px-6 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-widest transition-colors ${activeResume === "SD" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"}`}
             >
               Developer
             </button>
             <button
                onClick={() => setActiveResume("SEO")}
                className={`px-4 sm:px-6 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-widest transition-colors ${activeResume === "SEO" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"}`}
             >
               SEO Expert
             </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full h-[70vh] sm:h-[60vh] min-h-[420px] sm:min-h-[600px] md:min-h-[800px] bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm relative flex items-center justify-center p-1 sm:p-2"
        >
           <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-xl sm:rounded-2xl overflow-hidden">
             {activeResume === "SD" ? (
               <div className="w-full h-full bg-[#f8f9fa] dark:bg-zinc-950/50 overflow-y-auto">
                 <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 min-h-full py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-16 text-zinc-900 dark:text-zinc-100 shadow-sm border-x border-zinc-100 dark:border-zinc-800 font-sans">
                   <header className="mb-8 sm:mb-10 text-left border-b border-zinc-200 dark:border-zinc-800 pb-6 sm:pb-8">
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-6">
                       <div>
                         <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-1 sm:mb-2">Rahul Rajeev</h1>
                         <h2 className="font-display text-sm sm:text-lg md:text-xl font-light text-zinc-600 dark:text-zinc-400 tracking-wide md:tracking-widest font-display">Full Stack AI Developer / Web Developer</h2>
                       </div>
                       <a
                          href="/Rahul.ai.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 md:mt-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                        >
                          <Eye size={16} />
                          <span>View Resume</span>
                        </a>
                     </div>
                     <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1.5 text-[11px] sm:text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                       <span>Kochi, India</span> •
                       <span>+91-6282981465</span> •
                       <a href="mailto:r4hullrajeev@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">r4hullrajeev@gmail.com</a> •
                       <a href="https://www.linkedin.com/in/rahullrajeev" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">linkedin.com/in/rahullrajeev</a> •
                       <a href="https://github.com/rahullrajeev/" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">github.com/rahullrajeev/</a> •
                       <a href="https://rahullrajeev.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">rahullrajeev.vercel.app</a>
                     </div>
                   </header>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Professional Summary</h3>
                     <p className="font-light leading-relaxed text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                       Results-driven and innovative Full-Stack AI Developer with a B.Tech in Computer Science Engineering, specializing in AI-powered web application development and Generative AI solutions. Skilled in modern web technologies, AI integration, AI-assisted development workflows, responsive UI design, and full-stack application development. Experienced in building intelligent, user-focused digital products with a strong emphasis on performance, scalability, and seamless user experiences. Passionate about leveraging AI and modern software engineering practices to create impactful products and innovative software solutions.
                     </p>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Technical Skills</h3>
                     <ul className="space-y-3 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                       <li><strong className="font-semibold text-black dark:text-white">Programming Languages:</strong> TypeScript, JavaScript, Python</li>
                       <li><strong className="font-semibold text-black dark:text-white">Frontend:</strong> React, Next.js, Tailwind CSS, HTML, CSS</li>
                       <li><strong className="font-semibold text-black dark:text-white">Backend:</strong> FastAPI, Node.js</li>
                       <li><strong className="font-semibold text-black dark:text-white">AI/ML:</strong> Google Gemini AI, Generative AI, Prompt Engineering, Embeddings, RAG (Retrieval-Augmented Generation)</li>
                       <li><strong className="font-semibold text-black dark:text-white">Tools & Platforms:</strong> Git, GitHub, Docker, Monaco Editor, Sandpack, Vercel, LangChain, LangGraph, Cursor</li>
                       <li><strong className="font-semibold text-black dark:text-white">Concepts:</strong> Generative API Development, UI/UX Design, Responsive Design, Component-Based Architecture, State Management, System Design, Microservices</li>
                     </ul>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Education</h3>
                     <div className="font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                       <p><strong className="font-semibold text-black dark:text-white">B.Tech in Computer Science Engineering:</strong> SNGIST Group of Institutions, Ernakulam</p>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-6 text-zinc-400 font-display">Projects</h3>
                    
                    <div className="mb-10">
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                        <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">Personal Portfolio Website</h4>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 italic">Tech Stack: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Vercel</p>
                      <a href="https://rahullrajeev.vercel.app/" target="_blank" rel="noreferrer" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-black dark:hover:decoration-white mb-4 block break-all font-mono">https://rahullrajeev.vercel.app/</a>
                      <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                        <li>Designed and built a premium multi-page portfolio (Home, About, Projects, SEO, Resume, Contact) showcasing full-stack AI development and technical SEO expertise.</li>
                        <li>Implemented cinematic scroll-triggered animations, page transitions, and micro-interactions using Framer Motion.</li>
                        <li>Built a responsive, editorial-style UI with a featured project case-study section and core-expertise showcase.</li>
                        <li>Optimised for SEO metadata, performance, and responsive rendering across devices; deployed on Vercel.</li>
                      </ul>
                    </div>
                     
                     <div className="mb-10">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">ModuSpark AI Component Studio</h4>
                       </div>
                       <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 italic">Tech Stack: Next.js, React, TypeScript, Tailwind CSS, Google Gemini API, Monaco Editor, Sandpack, Vercel</p>
                       <a href="https://moduspark-ai-component-studio.vercel.app/" target="_blank" rel="noreferrer" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-black dark:hover:decoration-white mb-4 block break-all font-mono">https://moduspark-ai-component-studio.vercel.app/</a>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Developed an AI-powered platform that converts natural language prompts into production-ready React and Tailwind CSS components using Google Gemini AI.</li>
                         <li>Integrated Google Gemini AI for advanced generative capabilities, transforming text descriptions into functional code.</li>
                         <li>Implemented a live code preview feature using Sandpack, enabling real-time visualization of generated components.</li>
                         <li>Incorporated Monaco Editor for an editable code sandbox, allowing users to modify and refine generated code directly within the application.</li>
                         <li>Designed and built a responsive, modern user interface with a focus on SaaS-style aesthetics and dark-mode compatibility.</li>
                         <li>Engineered a robust API (<code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs font-mono">/api/generate</code>) to handle AI requests and manage component generation logic.</li>
                       </ul>
                     </div>

                     <div className="mb-10">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">AI Codebase Intelligence Engine <span className="font-normal text-sm text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-sans">(Ongoing Project)</span></h4>
                       </div>
                       <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 italic">An AI-powered system designed to deeply understand and interact with entire codebases using advanced AI engineering concepts.</p>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Currently developing a comprehensive AI system for semantic retrieval, repository indexing, and context engineering within codebases.</li>
                         <li>Focusing on building an AI that behaves like a senior developer who fully understands the entire repository, going beyond mere code generation.</li>
                         <li>Utilizing AI Engineering concepts such as embeddings, vector databases (Qdrant), semantic search, RAG (Retrieval-Augmented Generation), chunking strategies, context orchestration, and prompt engineering.</li>
                         <li>Implementing backend engineering with async pipelines, file ingestion, and parsing systems. The recommended tech stack includes Python, FastAPI, Gemini API, PostgreSQL, and Redis.</li>
                         <li>The system aims to allow developers to upload repositories, ask questions about architecture, generate repo-aware components, understand dependencies, trace code flow, detect issues, and generate documentation.</li>
                       </ul>
                     </div>
                   </section>
                 </div>
               </div>
             ) : (
               <div className="w-full h-full bg-[#f8f9fa] dark:bg-zinc-950/50 overflow-y-auto">
                 <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 min-h-full py-12 px-8 md:py-16 md:px-16 text-zinc-900 dark:text-zinc-100 shadow-sm border-x border-zinc-100 dark:border-zinc-800 font-sans">
                   <header className="mb-10 text-left border-b border-zinc-200 dark:border-zinc-800 pb-8">
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                       <div>
                         <h1 className="font-display text-4xl md:text-5xl font-display font-bold tracking-tight mb-2">Rahul Rajeev</h1>
                         <h2 className="font-display text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 tracking-widest font-display">SEO Specialist</h2>
                       </div>
                       <a
                          href="/RahulSeo.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                        >
                          <Eye size={16} />
                          <span>View Resume</span>
                        </a>
                     </div>
                     <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                       <span>Kochi, India</span> •
                       <span>+91-6282981465</span> •
                       <a href="mailto:r4hullrajeev@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">r4hullrajeev@gmail.com</a> •
                       <a href="https://www.linkedin.com/in/rahullrajeev" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">linkedin.com/in/rahullrajeev</a> •
                       <a href="https://rahullrajeev.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">rahullrajeev.vercel.app</a>
                     </div>
                   </header>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Professional Summary</h3>
                     <p className="font-light leading-relaxed text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                       Results-driven SEO Specialist with hands-on experience in Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, and AI Search Optimisation (AEO & GEO). Successfully improved the Google ranking of the competitive keyword “Best Study Abroad Consultants in Kochi” from Page 2/3 to Page 1 (Top 6 positions) within six months through strategic SEO implementation. Experienced in improving organic search visibility, website performance, and lead generation using Google Analytics 4, Google Search Console, SEMrush, WordPress, Google Ads, and Meta Ads. Strong technical background with a Bachelor of Technology in Computer Science Engineering.
                     </p>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Skills</h3>
                     <div className="space-y-4 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                       <p><strong className="font-semibold text-black dark:text-white">SEO:</strong> Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, Keyword Research & Clustering, Competitor & SERP Analysis, Content Optimisation, Link Building, Schema Markup, XML Sitemap, Robots.txt, Core Web Vitals, AEO, GEO</p>
                       <p><strong className="font-semibold text-black dark:text-white">Analytics & Tools:</strong> Google Analytics 4 (GA4), Google Search Console, SEMrush, Google Keyword Planner, Google Trends, PageSpeed Insights, Microsoft Clarity, Ahrefs, Screaming Frog, Google Tag Manager, Yoast</p>
                       <p><strong className="font-semibold text-black dark:text-white">Digital Marketing:</strong> WordPress, Landing Page Optimisation, Google Ads, Meta Ads, Social Media Marketing, Canva</p>
                       <p><strong className="font-semibold text-black dark:text-white">AI Tools:</strong> ChatGPT, Claude, Gemini, Manus AI</p>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-6 text-zinc-400 font-display">Professional Experience</h3>
                     
                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">SEO Specialist <span className="font-normal text-sm text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-sans">— Vidhyarthi Mithram</span></h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Kochi, India | Oct 2025 – Present</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Improved the Google ranking of &quot;Best Study Abroad Consultants in Kochi&quot; from Page 2/3 to Top 6 in six months through Technical, On-Page, and Off-Page SEO.</li>
                         <li>Managed end-to-end SEO, including keyword research, technical SEO, content optimisation, and link building.</li>
                         <li>Increased qualified organic enquiries by 30% and organic traffic by 45% through SEO and landing page optimisation.</li>
                         <li>Optimised 60+ webpages using metadata, internal linking, and schema markup.</li>
                         <li>Conducted technical SEO audits, resolving crawl and indexing issues while optimising XML sitemaps, robots.txt, and canonical tags.</li>
                         <li>Built AEO/GEO landing pages and monitored performance using GA4, Google Search Console, and SEMrush, improving Core Web Vitals.</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">Freelance Digital Marketing Specialist</h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Remote | Aug 2025 – Present</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Delivered SEO and digital marketing services for a local roofing company, improving online visibility and local search presence.</li>
                         <li>Restructured the website using SEO best practices, optimising website architecture, URL structure, metadata, internal linking, and crawlability.</li>
                         <li>Implemented Local SEO, including Google Business Profile optimisation, keyword research, and competitor analysis.</li>
                         <li>Managed Facebook and Instagram content, including content planning, creatives, scheduling, and engagement monitoring.</li>
                         <li>Built and optimised WordPress landing pages focused on SEO, user experience (UX), and conversion optimisation (CRO).</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">Digital Marketing Intern <span className="font-normal text-sm text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-sans">— Bluepin Digitals</span></h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Kochi, India | July 2025 – Oct 2025</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Conducted keyword research and implemented on-page and technical SEO improvements.</li>
                         <li>Assisted in Google Ads and Meta Ads campaign setup, optimisation, and reporting.</li>
                         <li>Supported social media marketing by creating content, scheduling posts, and monitoring engagement.</li>
                         <li>Analysed website performance using Google Analytics, Google Search Console, and SEMrush to identify SEO improvement opportunities.</li>
                       </ul>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Education</h3>
                     <div className="font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base space-y-3">
                       <p><strong className="font-semibold text-black dark:text-white">Bachelor of Technology (B.Tech), Computer Science Engineering</strong><br />SNGIST Group of Institutions, Ernakulam</p>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Certifications</h3>
                     <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                       <li><strong className="font-semibold text-black dark:text-white">Certified Digital Marketing Specialist</strong> – DigitalX Marketers Academy</li>
                       <li><strong className="font-semibold text-black dark:text-white">Google Ads Certification</strong> – Google Skillshop</li>
                       <li><strong className="font-semibold text-black dark:text-white">Google Analytics Certification</strong> – Google</li>
                       <li><strong className="font-semibold text-black dark:text-white">SEO Certification</strong> – SEMrush Academy, HubSpot Academy</li>
                       <li><strong className="font-semibold text-black dark:text-white">SEO Certification</strong> – Google Business Profile Certification</li>
                     </ul>
                   </section>

                 </div>
               </div>
             )}
           </div>
        </motion.div>
      
        </section>
    </PageTransition>
  );
}
