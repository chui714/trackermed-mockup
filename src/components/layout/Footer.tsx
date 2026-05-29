// src/components/layout/Footer.tsx

import {
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import TrackerMedLogo from "@/components/brand/TrackerMedLogo";
import Container from "@/components/ui/Container";
import { footerContactCards, footerLinks } from "@/content/footer";

const contactIcons = [Phone, Mail, ShieldCheck];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <Container className="py-20">
        {/* CTA Panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl md:p-8 lg:p-10">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />

          {/* ECG / pulse line detail */}
          <div className="pointer-events-none absolute right-10 top-24 hidden w-56 opacity-40 lg:block">
            <svg
              viewBox="0 0 320 80"
              className="h-auto w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 40H110L122 40L132 18L148 66L162 40H320"
                stroke="url(#footerPulse)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="footerPulse"
                  x1="0"
                  y1="40"
                  x2="320"
                  y2="40"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#38BDF8" />
                  <stop offset="1" stopColor="#2DD4BF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-center">
            {/* Left CTA */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Ready to improve your billing?
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Let’s{" "}
                <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Optimize
                </span>{" "}
                Your Revenue Cycle
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Partner with TrackerMed to improve billing visibility, reduce
                claim friction, and strengthen your practice’s cash flow.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-xl shadow-white/10 transition duration-300 hover:bg-slate-200"
              >
                Free Billing Review
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {footerContactCards.map((card, index) => {
                const Icon = contactIcons[index];

                return (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="mt-5 text-sm font-medium text-white">
                      {card.title}
                    </p>

                   <a
                    href={card.href}
                    className="mt-2 inline-flex text-sm font-semibold text-slate-200 transition hover:text-cyan-300"
                  >
                    {card.value}
                  </a>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <TrackerMedLogo />

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white hover:text-black"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white hover:text-black"
            >
              x
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © 2026 TrackerMed. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}