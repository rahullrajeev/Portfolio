"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { motion } from "motion/react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <PageTransition>
      <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-10 sm:mb-16"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
            Selected <span className="text-zinc-600 dark:text-zinc-400">Works</span>
          </h1>
        </motion.div>

        {/* ModuSpark Featured Case Study */}
        <div className="bg-white dark:bg-zinc-950/50 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="bg-zinc-950 p-6 sm:p-8 md:p-12 text-white text-center flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl rotate-3 mb-4 sm:mb-6 shadow-2xl flex items-center justify-center font-bold text-xl sm:text-2xl"
            >
              M
            </motion.div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
              ModuSpark AI
            </h2>
            <p className="text-sm sm:text-lg md:text-xl font-light opacity-80 max-w-2xl font-sans">
              AI-powered component generation platform converting natural-language prompts into production-ready React + Tailwind CSS code.
            </p>
          </div>
          
          <Grid className="gap-y-px gap-x-px bg-zinc-200 dark:bg-zinc-800">
             <div className="col-span-4 md:col-span-8 lg:col-span-6 bg-white dark:bg-zinc-950 p-6 sm:p-8 md:p-12 transition-all duration-300 ease-out z-0 lg:hover:z-20 lg:hover:-translate-y-2 lg:hover:-translate-x-2 lg:hover:shadow-[8px_8px_0px_#18181b] dark:lg:hover:shadow-[8px_8px_0px_#fafafa] border-2 border-transparent lg:hover:border-zinc-900 dark:lg:hover:border-zinc-50 outline outline-1 outline-transparent text-zinc-900 dark:text-zinc-50 relative group cursor-default">
                <h3 className="font-display text-xs font-bold tracking-widest text-zinc-700 dark:text-zinc-400 mb-4 sm:mb-8">System Architecture</h3>
                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base font-light text-zinc-800 dark:text-zinc-300 leading-relaxed">
                  <p>
                    Built on a modern React and Tailwind CSS stack, integrating the <strong>Google Gemini API</strong> for intelligent code synthesis and <strong>Monaco Editor</strong> for a robust live coding environment, complete with instantaneous live preview rendering.
                  </p>
                  <p>
                    Features multi-theme support, direct copy/download capabilities, and responsive component scaffolding designed for immediate production use.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                  {['React', 'Tailwind CSS', 'Google Gemini API', 'Monaco Editor', 'Vercel', 'TypeScript'].map(tech => (
                    <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 text-[11px] sm:text-xs font-semibold rounded-md border border-zinc-200 dark:border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>
             </div>

             <div className="col-span-4 md:col-span-8 lg:col-span-6 bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-8 md:p-12 flex flex-col justify-center items-start transition-all duration-300 ease-out z-0 lg:hover:z-20 lg:hover:-translate-y-2 lg:hover:-translate-x-2 lg:hover:shadow-[8px_8px_0px_#18181b] dark:lg:hover:shadow-[8px_8px_0px_#fafafa] border-2 border-transparent relative">
               <h3 className="font-display text-xs font-bold tracking-widest text-zinc-700 dark:text-zinc-400 mb-4 sm:mb-8">Access Points</h3>
               
               <div className="flex flex-col w-full gap-3 sm:gap-4">
                 <a 
                   href="https://moduspark-ai-component-studio.vercel.app/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group flex items-center justify-between p-4 sm:p-6 bg-black dark:bg-zinc-50 text-white dark:text-zinc-900 border-2 border-black dark:border-zinc-50 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-none text-xs sm:text-sm"
                 >
                   <span className="font-bold tracking-wide">Live Platform Demo</span>
                   <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                 </a>
                 
                 <a 
                   href="https://github.com/rahullrajeev/ModuSpark-Ai-Component-Studio" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group flex items-center justify-between p-4 sm:p-6 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-xl transition-all duration-200 hover:border-zinc-500 dark:hover:border-zinc-400 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-none text-xs sm:text-sm"
                 >
                   <span className="font-bold tracking-wide flex items-center gap-2 sm:gap-3">
                     <Github className="w-4 h-4 sm:w-5 sm:h-5" /> Source Code
                   </span>
                   <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                 </a>
               </div>
             </div>
          </Grid>
          
          <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-zinc-950/80">
            <div className="w-full bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden relative shadow-inner flex items-center justify-center p-1 sm:p-2 h-[350px] sm:h-[450px] md:h-[60vh] md:min-h-[500px]">
                <iframe 
                  src="https://moduspark-ai-component-studio.vercel.app/" 
                  title="ModuSpark AI Component Studio"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-none rounded-xl"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                />
            </div>
          </div>
        </div>

      </section>
    </PageTransition>
  );
}
