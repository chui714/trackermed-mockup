// src/components/sections/testimonials/TestimonialsSection.tsx

"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        <SectionHeading
          eyebrow="Feedback & Reviews"
          title="From healthcare professionals who have worked directly with TrackerMed."
          description="Real feedback from practices and healthcare teams that have relied on TrackerMed for billing support, follow-through, and revenue cycle guidance."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[1.7rem] border p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
                index === 1
                  ? "border-cyan-300/25 bg-cyan-300/[0.06]"
                  : "border-white/10 bg-white/[0.035] hover:border-cyan-300/25 hover:bg-white/[0.055]"
              }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-950/30">
                  <Quote className="h-6 w-6" />
                </div>

                <p className="mt-8 text-base leading-8 text-slate-300">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <h3 className="text-base font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-5 text-center text-sm leading-6 text-slate-400"
        >
          Long-term relationships, direct communication, and practical billing
          support built around the needs of real medical practices.
        </motion.div>
      </Container>
    </section>
  );
}