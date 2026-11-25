"use client";

import { TransitionLink as Link } from "@/components/ui/transition-link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/seo", label: "SEO" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Lock background scroll while mobile menu drawer is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [menuOpen]);

  if (pathname === "/seo-demo") {
    return null;
  }

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 px-4 py-3 md:px-6 md:py-6 pointer-events-auto"
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`inline-flex items-center min-h-[44px] md:min-h-0 text-2xl md:text-3xl font-bold tracking-tighter lowercase transition-colors ${
            menuOpen ? "text-zinc-50 md:text-[#3c4a30] md:dark:text-zinc-50" : "text-[#3c4a30] dark:text-zinc-50"
          }`}
        >
          rr.
        </Link>
      </motion.div>

      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-end px-4 py-3 md:px-6 md:py-6 pointer-events-none md:mix-blend-difference text-[#3c4a30] dark:text-zinc-50 md:text-white"
      >
        {/* Desktop Nav */}
        <ul 
          className="hidden md:flex items-center gap-1 lowercase text-xs sm:text-sm font-medium tracking-wide pointer-events-auto p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/10"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <li 
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <Magnetic strength={10}>
                  <Link href={link.href} className={`relative z-10 block px-4.5 py-2 transition-opacity duration-200 ${isActive ? "opacity-100 font-semibold" : "opacity-75 hover:opacity-100"}`}>
                    <span className="flex items-center gap-1.5">
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="w-1.5 h-1.5 bg-white rounded-full inline-block shadow-sm"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </span>
                  </Link>
                </Magnetic>

                {/* Active Indicator Background */}
                {isActive && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 bg-white/25 rounded-full pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Hover Background */}
                <AnimatePresence>
                  {hoveredIndex === idx && !isActive && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0 bg-white/15 rounded-full pointer-events-none"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle & Theme */}
        <div
          className={`flex items-center gap-1.5 md:gap-4 pointer-events-auto z-50 rounded-full px-1.5 py-0.5 md:p-0 md:rounded-none md:bg-transparent md:border-0 md:backdrop-blur-none transition-colors ${
            menuOpen
              ? "text-zinc-50 bg-transparent border-transparent"
              : "bg-zinc-50/75 dark:bg-zinc-950/75 backdrop-blur-md border border-zinc-900/10 dark:border-zinc-50/15"
          }`}
        >
          <ThemeToggle />
          <button 
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full active:scale-95 transition-transform"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950 text-zinc-50 flex flex-col justify-between px-6 pt-24 pb-10 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col divide-y divide-white/10">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)}
                    className={`py-4 min-h-[56px] flex items-center justify-between text-3xl font-light tracking-tight transition-opacity active:opacity-60 ${
                      isActive ? "opacity-100 font-normal" : "opacity-75"
                    }`}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {link.label}
                    </motion.span>
                    {isActive && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Current
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono opacity-60 lowercase">
              <span>build your legacy.</span>
              <span>kochi, india</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
