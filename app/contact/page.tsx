"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { Github, Linkedin, Mail, Phone, Instagram, MessageCircle, ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [portraitError, setPortraitError] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const isMobile = useIsMobile();

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // GPU-composited parallax transforms for desktop hero scroll
  const imageY = useTransform(smoothScroll, [0, 1], [0, 72]);
  const imageScale = useTransform(smoothScroll, [0, 1], [1, 1.06]);
  const imageOpacity = useTransform(smoothScroll, [0, 0.85, 1], [1, 0.9, 0.35]);
  const contentY = useTransform(smoothScroll, [0, 1], [0, -24]);
  const scrollCueOpacity = useTransform(smoothScroll, [0, 0.3], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://ig.me/m/waybyrhl", "_blank", "noopener noreferrer");
  };

  const scrollToInquiry = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Full-Bleed Editorial Hero Section */}
        <section
          ref={heroRef}
          className="-mt-16 md:-mt-24 w-full min-h-[min(92svh,680px)] sm:min-h-[min(90svh,720px)] md:min-h-[min(86svh,740px)] lg:min-h-[100svh] pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 lg:pb-14 px-5 sm:px-6 md:px-10 lg:px-12 flex flex-col justify-end relative overflow-hidden max-w-full bg-zinc-950"
        >
          {/* Full-Resolution Native Portrait Background */}
          <motion.div
            style={isDesktop ? { y: imageY, scale: imageScale, opacity: imageOpacity } : undefined}
            className="absolute inset-0 z-0 pointer-events-none lg:will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              {portraitError ? (
                <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-400 font-mono text-xs tracking-widest">
                  Rahul Rajeev
                </div>
              ) : (
                <Image
                  src="/assets/aistudio/IMG_1844_55c24b97.PNG"
                  alt="Rahul Rajeev"
                  fill
                  priority
                  fetchPriority="high"
                  quality={100}
                  sizes="100vw"
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitError(true)}
                  className="object-cover object-[50%_18%] sm:object-[50%_20%] md:object-[50%_20%] lg:object-[50%_22%]"
                />
              )}

              {/* Subtle top fade for floating nav bar legibility */}
              <div className="absolute inset-x-0 top-0 h-24 md:h-28 bg-gradient-to-b from-zinc-50/45 via-zinc-50/15 to-transparent dark:from-zinc-950/55 dark:via-zinc-950/20 to-transparent pointer-events-none" />

              {/* Measured bottom vignette blending seamlessly into dark lower frame without touching subject's face or natural lighting */}
              <div className="absolute inset-x-0 bottom-0 h-[52%] md:h-[46%] lg:h-[44%] bg-gradient-to-t from-zinc-950/90 via-zinc-950/45 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Hero Bottom Editorial Typography & Actions */}
          <motion.div
            style={isDesktop ? { y: contentY } : undefined}
            initial={{ opacity: 0, y: isMobile ? 26 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.72 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto w-full relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
          >
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-zinc-200/85 mb-2.5 sm:mb-3">
                <span>Kochi, India</span>
                <span aria-hidden="true">·</span>
                <span>Available Worldwide</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] text-zinc-50">
                Say <span className="text-zinc-300">Hello</span>
              </h1>
              <a
                href="mailto:r4hullrajeev@gmail.com"
                className="mt-2.5 sm:mt-3 text-base sm:text-lg md:text-xl font-sans font-light text-zinc-200 hover:text-white transition-colors break-all"
              >
                r4hullrajeev@gmail.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="#inquiry"
                onClick={scrollToInquiry}
                className="btn-slide btn-slide-ivory w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-md bg-zinc-50 text-zinc-950 border border-zinc-50 font-medium text-xs sm:text-sm tracking-wide whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span>Start a Conversation</span>
                <ArrowDown className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="mailto:r4hullrajeev@gmail.com"
                className="btn-slide btn-slide-outline w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-md bg-zinc-950/45 backdrop-blur-sm text-zinc-50 border border-zinc-50/75 font-medium text-xs sm:text-sm tracking-wide whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span>Email Directly</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Mouse Scroll Indicator Cue (Desktop) */}
          <motion.div
            style={{ opacity: scrollCueOpacity }}
            className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-20 pointer-events-none text-zinc-200/80"
          >
            <div className="w-5 h-8 rounded-full border-2 border-zinc-200/50 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-zinc-50"
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-80">
              Scroll
            </span>
          </motion.div>
        </section>

        {/* Contact Details & Direct Inquiry Section */}
        <section
          id="inquiry"
          className="scroll-mt-20 py-14 sm:py-16 md:py-24 px-5 sm:px-6 md:px-10 lg:px-12 max-w-6xl mx-auto relative z-10"
        >
          <Grid className="gap-y-12 md:gap-x-10 lg:gap-x-16 items-start">
            {/* Left Column: Direct Inquiry Form */}
            <div className="col-span-4 md:col-span-4 lg:col-span-6 flex flex-col">
              <Reveal direction="up" delay={0}>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8">
                  Direct Inquiry
                </h2>
              </Reveal>
              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                <Reveal direction="up" delay={0.1}>
                  <div>
                    <input
                      type="text"
                      required
                      aria-label="Your Name"
                      placeholder="YOUR NAME"
                      className="w-full bg-transparent rounded-none border-b border-zinc-300 dark:border-zinc-700 py-3 sm:py-4 font-mono text-base md:text-sm tracking-widest focus:outline-none focus:border-black dark:focus:border-zinc-400 transition-colors"
                    />
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.2}>
                  <div>
                    <input
                      type="email"
                      required
                      aria-label="Email Address"
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent rounded-none border-b border-zinc-300 dark:border-zinc-700 py-3 sm:py-4 font-mono text-base md:text-sm tracking-widest focus:outline-none focus:border-black dark:focus:border-zinc-400 transition-colors"
                    />
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.3}>
                  <div>
                    <textarea
                      placeholder="PROJECT DETAILS OR MESSAGE"
                      required
                      aria-label="Project Details or Message"
                      rows={4}
                      className="w-full bg-transparent rounded-none border-b border-zinc-300 dark:border-zinc-700 py-3 sm:py-4 font-mono text-base md:text-sm tracking-widest focus:outline-none focus:border-black dark:focus:border-zinc-400 transition-colors resize-none"
                    />
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.4}>
                  <button
                    type="submit"
                    className="btn-slide btn-slide-solid group flex items-center justify-between w-full p-4 sm:p-6 min-h-[52px] md:min-h-0 bg-black dark:bg-zinc-50 border-2 border-black dark:border-zinc-50 text-white dark:text-zinc-900 font-bold tracking-widest text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      Send on Instagram
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 translate-x-1 -translate-y-1" />
                    </span>
                  </button>
                </Reveal>
              </form>
            </div>

            {/* Right Column: Social Presence & Location */}
            <div className="col-span-4 md:col-span-4 lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <Reveal direction="up" delay={0}>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8">
                    Social Presence
                  </h2>
                </Reveal>
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
                      initial={{ opacity: 0, y: isMobile ? 26 : 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: isMobile ? "-4% 0px" : "-8% 0px" }}
                      transition={{
                        duration: isMobile ? 0.72 : 0.8,
                        delay: (i % 2) * 0.12 + Math.floor(i / 2) * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      key={social.label}
                      href={social.href}
                      aria-label={`Visit ${social.label}`}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 sm:gap-5 group relative p-3 sm:p-4 min-h-[52px] md:min-h-0 rounded-xl transition-opacity duration-300 ${!isMobile && hoveredIndex !== null && hoveredIndex !== i ? "opacity-30" : "opacity-100"}`}
                      onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                    >
                      <AnimatePresence>
                        {!isMobile && hoveredIndex === i && (
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
                      <div className="relative z-10 p-3 sm:p-3.5 bg-zinc-100 dark:bg-zinc-800 rounded-full group-hover:bg-black group-hover:text-white dark:group-hover:bg-zinc-50 dark:group-hover:text-zinc-900 transition-colors shrink-0">
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="relative z-10 font-mono text-[11px] sm:text-xs tracking-widest truncate min-w-0 flex-1">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <Reveal direction="up" delay={0.2}>
                <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="font-light text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
                    Currently based in Kochi, Kerala, India. Open for remote opportunities and innovative collaborations worldwide.
                  </p>
                </div>
              </Reveal>
            </div>
          </Grid>
        </section>
      </div>
    </PageTransition>
  );
}
