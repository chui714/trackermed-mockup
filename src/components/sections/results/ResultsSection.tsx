// src/components/sections/results/ResultsSection.tsx

"use client";

import {
  Activity,
  CircleDollarSign,
  Clock3,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { resultMetrics } from "@/content/results";

const metricIcons = [TrendingUp, Clock3, TrendingDown, CircleDollarSign];

const chartBars = [48, 66, 54, 82, 74, 96, 88, 118, 104, 132];

export default function ResultsSection() {
  return (
    <section id="results" className="relative border-t border-white/10 py-24 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left Copy */}
          <div>
            <SectionHeading
              eyebrow="Results That Matter"
              title="Clear performance signals for stronger financial decisions."
              description="TrackerMed turns billing activity into measurable insight, helping practices understand what is paid, what is pending, and where revenue is getting delayed."
              align="left"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <p className="mt-5 text-sm font-semibold text-white">
                  Cleaner claim visibility
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  See where claims stand without digging through disconnected
                  systems or manual notes.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Activity className="h-5 w-5" />
                </div>

                <p className="mt-5 text-sm font-semibold text-white">
                  Better revenue awareness
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Track billing performance, reimbursement trends, denial
                  patterns, and payer activity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Metrics Panel */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Practice Performance
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Monthly revenue cycle snapshot
                    </p>
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-slate-300">
                    Live Overview
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {resultMetrics.map((metric, index) => {
                    const Icon = metricIcons[index];

                    return (
                      <motion.article
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.55,
                          delay: index * 0.07,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-2xl border border-white/10 bg-black/35 p-5"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-slate-400">
                            {metric.label}
                          </p>

                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cyan-300">
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>

                        <p className="mt-4 text-3xl font-semibold text-white">
                          {metric.value}
                        </p>

                        <p className="mt-2 text-xs font-medium text-emerald-300">
                          {metric.trend}{" "}
                          <span className="font-normal text-slate-500">
                            recent improvement
                          </span>
                        </p>

                        <p className="mt-4 text-sm leading-6 text-slate-400">
                          {metric.description}
                        </p>
                      </motion.article>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Collections Trend
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Visualizing billing momentum over time
                      </p>
                    </div>

                    <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      Improving
                    </span>
                  </div>

                  <div className="flex h-40 items-end gap-3">
                    {chartBars.map((height, index) => (
                      <div
                        key={index}
                        className="flex flex-1 items-end rounded-full bg-white/[0.03]"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="w-full rounded-full bg-gradient-to-t from-blue-600 via-sky-400 to-cyan-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}