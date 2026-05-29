"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "motion/react";
import { useState } from "react";

export default function Resume() {
  const [activeResume, setActiveResume] = useState<"SD" | "SEO">("SD");

  return (
    <PageTransition>
      <section className="min-h-screen py-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.9]">
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
                className={`px-6 py-2 rounded-full text-xs font-bold  tracking-widest transition-colors ${activeResume === "SD" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"}`}
             >
               Developer
             </button>
             <button
                onClick={() => setActiveResume("SEO")}
                className={`px-6 py-2 rounded-full text-xs font-bold  tracking-widest transition-colors ${activeResume === "SEO" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"}`}
             >
               SEO Expert
             </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full h-[60vh] min-h-[600px] md:min-h-[800px] bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-3xl overflow-hidden shadow-sm relative flex items-center justify-center p-2"
        >
           <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
             {activeResume === "SD" ? (
               <div className="w-full h-full bg-[#f8f9fa] overflow-y-auto">
                 <div className="max-w-4xl mx-auto bg-white min-h-full py-12 px-8 md:py-16 md:px-16 text-zinc-900 shadow-sm border-x border-zinc-100 font-sans">
                   <header className="mb-10 text-left border-b border-zinc-200 pb-8">
                     <h1 className="font-display text-4xl md:text-5xl font-display font-bold tracking-tight mb-2">Rahul Rajeev</h1>
                     <h2 className="font-display text-xl md:text-2xl font-light mb-6 text-zinc-600 tracking-widest font-display">Software Developer</h2>
                     <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm font-mono text-zinc-500">
                       <span>Kochi, India</span> •
                       <span>+91-6282981465</span> •
                       <a href="mailto:r4hullrajeev@gmail.com" className="hover:text-black transition-colors">r4hullrajeev@gmail.com</a> •
                       <a href="https://www.linkedin.com/in/rahullrajeev" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">linkedin.com/in/rahullrajeev</a> •
                       <a href="https://github.com/rahullrajeev/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">github.com/rahullrajeev/</a>
                     </div>
                   </header>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Professional Summary</h3>
                     <p className="font-light leading-relaxed text-zinc-800 text-sm md:text-base">
                       Results-driven and innovative Software Developer with a B.Tech in Computer Science Engineering, specializing in AI-powered web application development. Skilled in modern frontend technologies, AI-assisted development workflows, responsive UI design, and web application customization. Experienced in building intelligent, user-focused digital products with a strong emphasis on performance, scalability, and seamless user experiences. Passionate about leveraging AI and modern technologies to create impactful software solutions.
                     </p>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Technical Skills</h3>
                     <ul className="space-y-3 font-light text-zinc-800 text-sm md:text-base leading-relaxed">
                       <li><strong className="font-semibold text-black">Programming Languages:</strong> TypeScript, JavaScript, Python</li>
                       <li><strong className="font-semibold text-black">Frontend:</strong> React, Next.js, Tailwind CSS, HTML, CSS</li>
                       <li><strong className="font-semibold text-black">Backend:</strong> FastAPI, Node.js</li>
                       <li><strong className="font-semibold text-black">AI/ML:</strong> Google Gemini AI, Generative AI, Prompt Engineering, Embeddings, RAG (Retrieval-Augmented Generation)</li>
                       <li><strong className="font-semibold text-black">Tools & Platforms:</strong> Git, GitHub, Docker, Monaco Editor, Sandpack, Vercel, LangChain, LangGraph, Cursor</li>
                       <li><strong className="font-semibold text-black">Concepts:</strong> Generative API Development, UI/UX Design, Responsive Design, Component-Based Architecture, State Management, System Design, Microservices</li>
                     </ul>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Education</h3>
                     <div className="font-light text-zinc-800 text-sm md:text-base">
                       <p><strong className="font-semibold text-black">B.Tech in Computer Science Engineering:</strong> SNGIST Group of Institutions, Ernakulam</p>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-6 text-zinc-400 font-display">Projects</h3>
                     
                     <div className="mb-10">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black tracking-tight font-display">ModuSpark AI Component Studio</h4>
                       </div>
                       <p className="text-sm text-zinc-600 mb-2 italic">AI-powered component generator built with Next.js, React, TypeScript, Tailwind CSS, and Google Gemini AI.</p>
                       <a href="https://moduspark-ai-component-studio.vercel.app/" target="_blank" rel="noreferrer" className="text-sm text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 hover:decoration-black mb-4 inline-block font-mono">https://moduspark-ai-component-studio.vercel.app/</a>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 text-sm md:text-base">
                         <li>Developed an AI-driven platform that generates modern React and Tailwind CSS UI components from natural language prompts.</li>
                         <li>Integrated Google Gemini AI for advanced generative capabilities, transforming text descriptions into functional code.</li>
                         <li>Implemented a live code preview feature using Sandpack, enabling real-time visualization of generated components.</li>
                         <li>Incorporated Monaco Editor for an editable code sandbox, allowing users to modify and refine generated code directly within the application.</li>
                         <li>Designed and built a responsive, modern user interface with a focus on SaaS-style aesthetics and dark-mode compatibility.</li>
                         <li>Engineered a robust API (<code className="bg-zinc-100 px-1 py-0.5 rounded text-xs font-mono">/api/generate</code>) to handle AI requests and manage component generation logic.</li>
                       </ul>
                     </div>

                     <div className="mb-10">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black tracking-tight font-display">AI Codebase Intelligence Engine <span className="font-normal text-sm text-zinc-500 normal-case tracking-normal font-sans">(Ongoing Project)</span></h4>
                       </div>
                       <p className="text-sm text-zinc-600 mb-4 italic">An AI-powered system designed to deeply understand and interact with entire codebases using advanced AI engineering concepts.</p>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 text-sm md:text-base">
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
               <div className="w-full h-full bg-[#f8f9fa] overflow-y-auto">
                 <div className="max-w-4xl mx-auto bg-white min-h-full py-12 px-8 md:py-16 md:px-16 text-zinc-900 shadow-sm border-x border-zinc-100 font-sans">
                   <header className="mb-10 text-left border-b border-zinc-200 pb-8">
                     <h1 className="font-display text-4xl md:text-5xl font-display font-bold tracking-tight mb-2">Rahul Rajeev</h1>
                     <h2 className="font-display text-xl md:text-2xl font-light mb-6 text-zinc-600 tracking-widest font-display">SEO Specialist</h2>
                     <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm font-mono text-zinc-500">
                       <span>Kochi, India</span> •
                       <span>+91-6282981465</span> •
                       <a href="mailto:r4hullrajeev@gmail.com" className="hover:text-black transition-colors">r4hullrajeev@gmail.com</a> •
                       <a href="https://www.linkedin.com/in/rahullrajeev" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">linkedin.com/in/rahullrajeev</a>
                     </div>
                   </header>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Professional Summary</h3>
                     <p className="font-light leading-relaxed text-zinc-800 text-sm md:text-base">
                       Results-driven Digital Marketing Specialist with a Certified Digital Marketing Specialist (CDMS) certification from DigitalX Marketers Academy, Kochi. Experienced in SEO, SEM, Google Ads, social media marketing, and content strategy, with strong skills in Google Analytics, Search Console, and SEMrush. Holds a B.Tech in Computer Science Engineering, combining technical expertise with marketing insight to enhance brand visibility, lead generation, and ROI. Collaborative and performance-focused professional committed to driving measurable growth.
                     </p>
                   </section>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                     <section>
                       <h3 className="font-display text-[14px] font-bold tracking-[0.2em] mb-4 text-zinc-400">Technical Skills</h3>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 text-sm md:text-base leading-relaxed">
                         <li>SEO & SEM</li>
                         <li>Google Analytics & Google Search Console</li>
                         <li>Keyword Research</li>
                         <li>Web Designing & Wordpress Development</li>
                         <li>SMM (Social Media Marketing)</li>
                         <li>Canva</li>
                       </ul>
                     </section>
                     <section>
                       <h3 className="font-display text-[14px] font-bold tracking-[0.2em] mb-4 text-zinc-400">Soft Skills</h3>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 text-sm md:text-base leading-relaxed">
                         <li><strong className="font-semibold text-black">Analytical Thinking</strong> – Strong data interpretation and problem-solving skills.</li>
                         <li><strong className="font-semibold text-black">Time Management</strong> – Organized and efficient in meeting deadlines.</li>
                         <li><strong className="font-semibold text-black">Creativity</strong> – Innovative approach to campaigns and content ideas.</li>
                         <li><strong className="font-semibold text-black">Adaptability</strong> – Quick learner, stays updated with digital trends and tools.</li>
                       </ul>
                     </section>
                   </div>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-6 text-zinc-400 font-display">Professional Experience</h3>
                     
                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black tracking-tight font-display">SEO Specialist <span className="font-normal text-sm text-zinc-500 normal-case tracking-normal font-sans">— Vidhyarthi Mithram</span></h4>
                         <span className="font-mono text-xs text-zinc-500 tracking-wider">Kochi, India | 2025</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 text-sm md:text-base">
                         <li>Performing complete SEO management including keyword research, on-page SEO, off-page SEO, and technical SEO optimization.</li>
                         <li>Tracking and analyzing website performance using Google Analytics, Google Search Console, and Semrush to improve organic traffic, keyword rankings, and user engagement.</li>
                         <li>Creating SEO-optimized content strategies to enhance search visibility, improve organic conversions, and support business growth.</li>
                         <li>Collaborating with developers, designers, and content teams to implement SEO best practices across websites and landing pages.</li>
                         <li>Monitoring backlinks, resolving indexing and crawl issues, and improving website architecture for better crawlability and search engine performance.</li>
                         <li>Creating and optimizing AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) focused landing pages for AI-driven search experiences and modern search platforms.</li>
                         <li>Conducting competitor analysis and keyword opportunity research to identify growth strategies and improve SERP performance.</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black tracking-tight font-display">Digital Marketing Intern <span className="font-normal text-sm text-zinc-500 normal-case tracking-normal font-sans">— Bluepin Digitals</span></h4>
                         <span className="font-mono text-xs text-zinc-500 tracking-wider">2025</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 text-sm md:text-base">
                         <li>Conducted SEO keyword research, on-page optimization, and content improvements to boost website visibility.</li>
                         <li>Assisted in Social Media Marketing (SMM), including content creation, scheduling, and engagement tracking on Meta (Facebook & Instagram).</li>
                         <li>Supported Meta Ads and Google Ads campaign setup, targeting, and performance monitoring to increase reach and conversions.</li>
                         <li>Utilized tools like Google Analytics, Google Search Console, and SEMrush to track performance and identify growth opportunities.</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black tracking-tight font-display">Freelance Digital Marketer</h4>
                         <span className="font-mono text-xs text-zinc-500 tracking-wider">Remote | 2024 – Present</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 text-sm md:text-base">
                         <li>Providing SEO services for small businesses, including keyword research, competitor analysis, and content planning.</li>
                         <li>Managing social media marketing campaigns (Instagram, Facebook) including content creation, scheduling, and analytics.</li>
                         <li>Running and optimizing Google Ads and Meta Ads campaigns to improve reach, leads, and ROI for clients.</li>
                         <li>Designing landing pages & websites using WordPress and implementing conversion-focused strategies.</li>
                         <li>Offering brand strategy support including Canva creatives, ad copies, and social media content.</li>
                       </ul>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Education</h3>
                     <div className="font-light text-zinc-800 text-sm md:text-base space-y-3">
                       <p><strong className="font-semibold text-black">Certified Digital Marketing Specialist (CDMS):</strong> DigitalX Marketers Academy, Kochi</p>
                       <p><strong className="font-semibold text-black">B.Tech in Computer Science Engineering:</strong> SNGIST Group of Institutions, Ernakulam</p>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Certifications</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 text-sm md:text-base font-light text-zinc-800 gap-y-3 gap-x-6">
                       <p>• CDMS (Digitalx Marketers Academy)</p>
                       <p>• Internship Certificate (Bluepin Digitals)</p>
                       <p>• Google Ads Certificate (Skillshop)</p>
                       <p>• SEO Certification (Semrush Academy)</p>
                       <p>• SEO Certification (Hubspot Academy)</p>
                       <p>• Google Analytics (Google)</p>
                       <p>• Google My Business (Google)</p>
                     </div>
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
