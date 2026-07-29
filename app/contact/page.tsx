"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { Github, Linkedin, Mail, Phone, Instagram, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
  const bgScale = useTransform(smoothScroll, [0, 1], [1, 1.08]);
  const headerY = useTransform(smoothScroll, [0, 1], [0, -25]);
  const imageY = useTransform(smoothScroll, [0, 1], [0, 35]);
  const scrollCueOpacity = useTransform(smoothScroll, [0, 0.25], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://ig.me/m/waybyrhl", "_blank", "noopener noreferrer");
  };

  return (
    <PageTransition>
      <div ref={containerRef} className="relative min-h-screen">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-10 dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-luminosity"
        >
          <Image
            src="/plant.jpeg"
            alt="Minimal nature background"
            fill
            sizes="100vw"
            className="object-cover object-center grayscale"
            priority
          />
        </motion.div>
        <section className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center relative z-10">
          <motion.div
            style={{ y: headerY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 sm:mb-16 text-center mt-4 sm:mt-8"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 leading-none">
              Say <span className="text-zinc-500 dark:text-zinc-300">Hello</span>
            </h1>
            <a href="mailto:r4hullrajeev@gmail.com" className="text-lg sm:text-xl md:text-2xl font-sans font-light hover:opacity-50 transition-opacity break-all">
              r4hullrajeev@gmail.com
            </a>
          </motion.div>

          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-6 order-2 md:order-1 flex flex-col gap-10 sm:gap-16">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">Direct Inquiry</h2>
                <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                   <div>
                     <input 
                       type="text" 
                       required
                       aria-label="Your Name"
                       placeholder="YOUR NAME" 
                       className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 sm:py-4 font-mono text-xs sm:text-sm tracking-widest focus:outline-none focus:border-black dark:focus:border-zinc-400 transition-colors"
                     />
                   </div>
                   <div>
                     <input 
                       type="email" 
                       required
                       aria-label="Email Address"
                       placeholder="EMAIL ADDRESS" 
                       className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 sm:py-4 font-mono text-xs sm:text-sm tracking-widest focus:outline-none focus:border-black dark:focus:border-zinc-400 transition-colors"
                     />
                   </div>
                   <div>
                     <textarea 
                       placeholder="PROJECT DETAILS OR MESSAGE" 
                       required
                       aria-label="Project Details or Message"
                       rows={4}
                       className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 sm:py-4 font-mono text-xs sm:text-sm tracking-widest focus:outline-none focus:border-black dark:focus:border-zinc-400 transition-colors resize-none"
                     />
                   </div>
                   <button 
                     type="submit"
                     className="group relative overflow-hidden flex items-center justify-between w-full p-4 sm:p-6 bg-black dark:bg-zinc-50 border-2 border-black dark:border-zinc-50 text-white dark:text-zinc-900 font-bold tracking-widest text-xs sm:text-sm transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_#fafafa] active:translate-y-0 active:translate-x-0 active:shadow-[1px_1px_0px_#18181b] dark:active:shadow-[1px_1px_0px_#fafafa]"
                   >
                     <span className="relative z-10 flex items-center gap-2">
                       Send on Instagram
                       <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-zinc-800 dark:bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                     <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity"><Instagram className="w-4 h-4 sm:w-5 sm:h-5 translate-x-1 -translate-y-1" /></span>
                   </button>
                </form>
              </div>

              <div className="flex flex-col justify-between mb-8 md:mb-0">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">Social Presence</h2>
                  <div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                     {[
                       { icon: Linkedin, label: "LinkedIn", href: "http://www.linkedin.com/in/rahullrajeev" },
                       { icon: Github, label: "GitHub", href: "https://github.com/rahullrajeev/" },
                       { icon: Phone, label: "+91 6282981465", href: "tel:+916282981465" },
                       { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/916282981465" },
                       { icon: Mail, label: "r4hullrajeev@gmail.com", href: "mailto:r4hullrajeev@gmail.com" },
                       { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/waybyrhl?igsh=MWRtZHRpeHR4azlhbQ==" },
                     ].map((social, i) => (
                        <motion.a
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          key={social.label}
                          href={social.href}
                          aria-label={`Visit ${social.label}`}
                          target={social.href.startsWith('http') ? "_blank" : undefined}
                          rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          className={`flex items-center gap-4 sm:gap-6 group relative p-3 sm:p-4 rounded-xl transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-30' : 'opacity-100'}`}
                          onMouseEnter={() => setHoveredIndex(i)}
                        >
                          <AnimatePresence>
                            {hoveredIndex === i && (
                              <motion.div
                                layoutId="socialHover"
                                className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-xl z-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                          </AnimatePresence>
                          <div className="relative z-10 p-3 sm:p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                            <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="relative z-10 font-mono text-[11px] sm:text-xs tracking-widest truncate max-w-[200px] sm:max-w-none">
                            {social.label}
                          </span>
                        </motion.a>
                     ))}
                  </div>
                </div>
                
                <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800">
                   <p className="font-light text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
                     Currently based in Kochi, Kerala, India. Open for remote opportunities and innovative collaborations worldwide.
                   </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-6 order-1 md:order-2 flex justify-end">
              <motion.div
                style={{ y: imageY }}
                className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-full min-h-[220px] sm:min-h-[350px] rounded-2xl overflow-hidden mb-6 sm:mb-8 md:mb-0 mt-2"
              >
                 <Image src="/monstera.jpeg" alt="Monstera" fill className="object-cover" />
              </motion.div>
            </div>
          </Grid>
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
