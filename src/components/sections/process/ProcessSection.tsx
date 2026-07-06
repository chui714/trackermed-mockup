// src/components/sections/process/ProcessSection.tsx

"use client";

import {
  BarChart3,
  ClipboardCheck,
  FileText,
  SearchCheck,
  Send,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";

import styles from "./ProcessSection.module.css";

const processIcons = [
  UserRoundCheck,
  FileText,
  ClipboardCheck,
  Send,
  SearchCheck,
  BarChart3,
  ShieldCheck,
];

const flowPositions = [
  "left-[7%] top-[9%]",
  "right-[7%] top-[9%]",
  "right-[6%] top-[33%]",
  "left-[8%] top-[33%]",
  "left-[7%] top-[60%]",
  "right-[7%] top-[60%]",
  "left-1/2 top-[82%] -translate-x-1/2",
];

const flowPath =
  "M 185 105 H 430 H 575 H 805 C 905 105 930 150 930 205 C 930 275 860 285 785 285 H 605 H 455 H 305 C 225 285 195 330 195 385 C 195 445 235 455 315 455 H 505 H 645 H 800 C 900 455 930 500 930 555 C 930 600 890 625 805 625 H 500";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A clearer workflow from onboarding to transparency."
          description="TrackerMed makes the revenue cycle more visible, organized, and accountable so nothing falls through the cracks."
        />

        <div className="relative mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          {/* Left List */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl"
          >
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Workflow Map
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Seven connected steps.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                From onboarding to transparency, every part of the process is connected to improve follow-through.
              </p>
            </div>

            <div className="divide-y divide-white/10">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index] ?? UserRoundCheck;

                return (
                  <div
                    key={step.title}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="w-9 text-sm font-bold tracking-[0.16em] text-cyan-300">
                      {step.number}
                    </span>

                    <div className="h-8 w-px bg-white/10 transition group-hover:bg-cyan-300/30" />

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-semibold text-slate-200 transition group-hover:text-white">
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Flow Chart */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[1.7rem] border border-cyan-300/20 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.12),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

            <div className="relative hidden min-h-[680px] lg:block">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 680"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="process-glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <linearGradient id="process-line-gradient" x1="0" x2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                    <stop offset="45%" stopColor="#67e8f9" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.45" />
                  </linearGradient>
                </defs>

                <path
                  d={flowPath}
                  fill="none"
                  stroke="rgba(34, 211, 238, 0.16)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                <path
                  d={flowPath}
                  className={styles.flowLine}
                  fill="none"
                  stroke="url(#process-line-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#process-glow)"
                />

                {/* Subtle EKG accent */}
                <path
                  d="M 790 285 L 815 285 L 825 250 L 838 325 L 850 285 L 875 285"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#process-glow)"
                  opacity="0.9"
                />

                {/* Moving pulse */}
                <circle r="8" fill="#67e8f9" filter="url(#process-glow)">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path={flowPath}
                  />
                </circle>

                <circle r="16" fill="#22d3ee" opacity="0.16">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path={flowPath}
                  />
                </circle>
              </svg>

              {processSteps.map((step, index) => {
                const Icon = processIcons[index] ?? UserRoundCheck;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`absolute ${flowPositions[index]} w-[260px] rounded-2xl border border-cyan-300/25 bg-[#081322]/90 p-4 shadow-xl shadow-cyan-950/20 backdrop-blur-xl`}
                  >
                    <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-[#06111f] text-sm font-bold text-cyan-300">
                      {index + 1}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile / tablet fallback */}
            <div className="relative grid gap-4 lg:hidden">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index] ?? UserRoundCheck;

                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                          {step.number}
                        </p>
                        <h3 className="mt-1 font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}