// src/components/sections/hero/HeroSection.tsx

"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import HeroDashboard from "@/components/sections/hero/HeroDashboard";

const trustPoints = [
  {
    icon: ShieldCheck,
    label: "Secure billing workflows",
  },
  {
    icon: TrendingUp,
    label: "Faster reimbursements",
  },
  {
    icon: CheckCircle2,
    label: "Transparent revenue tracking",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <Container className="grid min-h-[760px] items-center gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] xl:gap-14">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 shadow-lg shadow-cyan-950/30"
          >
            Smarter billing. Stronger revenue.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl xl:text-7xl"
          >
            Revenue Cycle Intelligence for{" "}
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Modern Practices
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            TrackerMed helps healthcare practices reduce denials, accelerate
            reimbursements, and gain clearer visibility into claims, payments,
            and revenue performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-xl shadow-white/10 transition duration-300 hover:bg-slate-200"
            >
              Free Billing Review
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </div>

                  <p className="text-sm leading-5 text-slate-300">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <HeroDashboard />
      </Container>
    </section>
  );
}