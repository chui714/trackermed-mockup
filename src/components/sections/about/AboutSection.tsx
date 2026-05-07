// src/components/sections/about/AboutSection.tsx

"use client";

import { CheckCircle2, FileSearch, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutBullets, aboutHighlights } from "@/content/about";

const aboutIcons = [FileSearch, ShieldCheck, TrendingUp];

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/10 py-24 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-transparent blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      TrackerMed Method
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Billing clarity for modern practices
                    </p>
                  </div>

                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                    Active Review
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {aboutBullets.map((bullet, index) => (
                    <motion.div
                      key={bullet}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>

                      <p className="text-sm leading-6 text-slate-300">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Copy */}
          <div>
            <SectionHeading
              eyebrow="Why TrackerMed"
              title="A billing partner designed for clarity, speed, and operational trust."
              description="Medical practices do not just need billing activity. They need a partner who can help them understand what is happening across claims, denials, payer responses, and collections."
              align="left"
              className="max-w-2xl"
            />

            <div className="mt-10 grid gap-4">
              {aboutHighlights.map((item, index) => {
                const Icon = aboutIcons[index];

                return (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.055]"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-lg font-semibold text-white">
                          {item.value}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}