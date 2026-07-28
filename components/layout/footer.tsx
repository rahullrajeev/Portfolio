"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { TransitionLink as Link } from "@/components/ui/transition-link";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/seo-demo") {
    return null;
  }

  return (
    <footer className="relative bg-zinc-950 text-white overflow-hidden py-24 px-6 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Let&apos;s Build <br/> The Future.
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-70">
              Blending AI innovation with strategic digital experiences.
            </p>
          </div>
          
          <Link href="/contact">
            <Magnetic strength={20}>
              <motion.div 
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black border-2 border-white rounded-full px-8 py-4 font-medium tracking-wider text-sm flex items-center gap-2 group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-none"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </motion.div>
            </Magnetic>
          </Link>
        </div>

        <div className="h-[1px] w-full bg-white/10" />

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-start md:items-center text-sm tracking-wide opacity-60 w-full">
          <div className="flex flex-wrap gap-8 md:justify-start">
            <a href="https://github.com/rahullrajeev/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
            <a href="http://www.linkedin.com/in/rahullrajeev" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="mailto:r4hullrajeev@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
          </div>
          
          <div className="font-mono text-xs md:text-center w-full">
            madebyrhl.
          </div>
          
          <div className="font-mono text-xs flex flex-col items-start md:items-end gap-1 w-full">
            <span>© {new Date().getFullYear()} RAHUL RAJEEV</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
