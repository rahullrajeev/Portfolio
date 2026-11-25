"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/seo-demo") {
    return null;
  }

  return (
    <footer className="relative bg-zinc-950 text-white overflow-hidden py-14 px-5 md:py-24 md:px-12 mt-12 md:mt-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
          <Reveal direction="up" delay={0} className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-6 leading-[0.92] md:leading-[0.9]">
              Let&apos;s Build <br/> The Future.
            </h2>
            <p className="text-base sm:text-xl md:text-2xl font-light opacity-70 leading-relaxed">
              Blending AI innovation with strategic digital experiences.
            </p>
          </Reveal>
          
          <Reveal direction="up" delay={0.14} className="w-full sm:w-auto">
            <Link href="/contact" className="block w-full sm:w-auto focus-visible:outline-none">
              <Magnetic strength={20}>
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  className="btn-slide btn-slide-ivory w-full sm:w-auto justify-center bg-white text-black border-2 border-white rounded-full px-7 py-3.5 md:px-8 md:py-4 min-h-[48px] md:min-h-0 font-medium tracking-wider text-sm flex items-center gap-2 group cursor-pointer"
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              </Magnetic>
            </Link>
          </Reveal>
        </div>

        <div className="h-[1px] w-full bg-white/10" />

        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-8 items-start md:items-center text-sm tracking-wide opacity-70 md:opacity-60 w-full">
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-8 md:justify-start">
              <a href="https://github.com/rahullrajeev/" target="_blank" rel="noopener noreferrer" className="py-2 md:py-0 min-h-[44px] md:min-h-0 inline-flex items-center hover:opacity-100 transition-opacity">GitHub</a>
              <a href="http://www.linkedin.com/in/rahullrajeev" target="_blank" rel="noopener noreferrer" className="py-2 md:py-0 min-h-[44px] md:min-h-0 inline-flex items-center hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="mailto:r4hullrajeev@gmail.com" className="py-2 md:py-0 min-h-[44px] md:min-h-0 inline-flex items-center hover:opacity-100 transition-opacity">Email</a>
            </div>
            
            <div className="font-mono text-xs md:text-center w-full">
              madebyrhl.
            </div>
            
            <div className="font-mono text-[11px] md:text-xs flex flex-col items-start md:items-end gap-1 w-full">
              <span>© {new Date().getFullYear()} RAHUL RAJEEV</span>
              <span>ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}
