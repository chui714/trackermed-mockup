// src/components/sections/process/ProcessSection.tsx

"use client";

import {
  ArrowRight,
  CircleDollarSign,
  FileCheck2,
  SearchCheck,
  UserRoundCheck,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";

const processIcons = [
  UserRoundCheck,
  FileCheck2,
  SearchCheck,
  CircleDollarSign,
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative border-t border-white/10 py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A smarter workflow from claim intake to reimbursement."
          description="TrackerMed gives practices a structured billing process designed around visibility, follow-through, and cleaner financial operations."
        />

        <div className="relative mt-20">
          {/* Desktop connector line */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = processIcons[index];

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <div className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-950/30">
                          <Icon className="h-6 w-6" />
                        </div>

                        <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300/80">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-8 text-lg font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>

                      {index < processSteps.length - 1 && (
                        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 lg:hidden">
                          Next
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}