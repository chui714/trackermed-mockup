// src/components/layout/Header.tsx

"use client";

import { useState } from "react";
import { ArrowRight, CircleUserRound, Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import TrackerMedLogo from "@/components/brand/TrackerMedLogo";
import { headerActions, headerNavLinks } from "@/content/navigation";

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 24);

    if (latest > previous && latest > 120 && !mobileOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{
        y: hidden ? -96 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4"
    >
      <motion.div
        animate={{
          scale: scrolled ? 0.985 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.7rem] border border-white/10 bg-black/70 px-5 py-4 shadow-2xl shadow-black/50 backdrop-blur-2xl"
      >
        <TrackerMedLogo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {headerNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:bg-white hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={headerActions.portal.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:bg-white hover:text-black"
          >
            <CircleUserRound className="h-4 w-4 text-cyan-300 transition group-hover:text-black" />
            {headerActions.portal.label}
          </a>

          <a
            href={headerActions.primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition duration-300 hover:bg-slate-200"
          >
            {headerActions.primary.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white hover:text-black lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/85 p-3 shadow-2xl shadow-black/60 backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-1">
              {headerNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <a
                href={headerActions.portal.href}
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white hover:text-black"
              >
                <CircleUserRound className="h-4 w-4 text-cyan-300" />
                {headerActions.portal.label}
              </a>

              <a
                href={headerActions.primary.href}
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
              >
                {headerActions.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}