// src/components/sections/services/ServicesSection.tsx

"use client";

import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  ReceiptText,
  ShieldAlert,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

const serviceIcons = [ReceiptText, ShieldAlert, FileCheck2, BadgeCheck];

export default function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-white/10 py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end billing support built for cleaner revenue operations."
          description="TrackerMed helps practices bring more structure, visibility, and follow-through to the medical billing process."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-950/30">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-24 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}