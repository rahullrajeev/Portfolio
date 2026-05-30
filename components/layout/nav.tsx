"use client";

import { TransitionLink as Link } from "@/components/ui/transition-link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
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

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 px-6 py-6 pointer-events-auto"
      >
        <Link href="/" className="text-3xl font-bold tracking-tighter lowercase text-[#3c4a30] dark:text-zinc-50">
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
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-end px-6 py-6 pointer-events-none mix-blend-difference text-white"
      >
        {/* Desktop Nav */}
        <ul 
          className="hidden md:flex items-center lowercase text-sm font-medium tracking-wide pointer-events-auto p-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, idx) => (
            <li 
              key={link.href}
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              <Magnetic strength={10}>
                <Link href={link.href} className="relative z-10 block px-5 py-2">
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </Magnetic>
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/20 rounded-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 pointer-events-auto z-50">
          <ThemeToggle />
          <button 
            className="md:hidden relative p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
          closed: { opacity: 0, y: -20, clipPath: "inset(0% 0% 100% 0%)" }
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="fixed inset-0 z-40 bg-black text-white flex flex-col justify-center px-12 pt-24 pb-12 overflow-hidden md:hidden"
      >
        <div className="flex flex-col gap-6 text-4xl font-light tracking-tighter mb-auto">
          {links.map((link, i) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-50 transition-opacity"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, x: 0, transition: { delay: 0.1 * i, duration: 0.5 } },
                  closed: { opacity: 0, x: -20 }
                }}
              >
                {link.label}
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="text-sm opacity-50 mt-12 lowercase">
          build your legacy.
        </div>
      </motion.div>
    </>
  );
}
