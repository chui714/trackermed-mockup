// src/components/sections/mso/MSOLiteSection.tsx

"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import {
  msoLiteAdvantages,
  msoLiteContent,
  msoOrbitItems,
  traditionalMso,
} from "@/content/msolite";

const orbitIconMap = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  chart: BarChart3,
  user: UserRoundCheck,
} as const;

export default function MSOLiteSection() {
  return (
    <section
      id="mso-lite"
      className="relative overflow-hidden border-t border-white/10 py-24 text-white md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              {msoLiteContent.eyebrow}
            </div>

            <h2 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {msoLiteContent.headlineTop}
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                {msoLiteContent.headlineHighlight}
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {msoLiteContent.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={msoLiteContent.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-slate-200"
              >
                {msoLiteContent.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={msoLiteContent.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                {msoLiteContent.secondaryCta.label}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
              <CheckCircle2 className="h-5 w-5 text-cyan-300" />
              <span>{msoLiteContent.note}</span>
            </div>
          </motion.div>

          {/* Orbit Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[560px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
            <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />

            <div className="mso-orbit-ring absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/30" />

            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,0.28)] backdrop-blur-xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 to-blue-500 text-black shadow-2xl shadow-cyan-500/30">
                <ShieldCheck className="h-10 w-10" />
              </div>
            </div>

            <div className="mso-orbit-dot absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.95)]" />
            </div>

            {msoOrbitItems.map((item, index) => {
              const Icon = orbitIconMap[item.icon];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute ${item.position} w-[250px] rounded-2xl border border-cyan-300/20 bg-[#07111f]/85 p-4 shadow-xl shadow-black/30 backdrop-blur-xl`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Comparison Strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25"
        >
          <div className="grid lg:grid-cols-[1fr_auto_1fr]">
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Traditional MSO
              </p>

              <div className="mt-5 grid gap-3">
                {traditionalMso.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <XCircle className="h-4 w-4 text-red-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center border-y border-white/10 px-8 py-4 lg:border-x lg:border-y-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-lg font-bold text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                VS
              </div>
            </div>

            <div className="border-cyan-300/20 bg-cyan-300/[0.04] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                MSO Lite by TrackerMed
              </p>

              <div className="mt-5 grid gap-3">
                {msoLiteAdvantages.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}