// src/components/sections/services/ServicesSection.tsx

"use client";

import { useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  ReceiptText,
  ShieldAlert,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, specialties } from "@/content/services";

const serviceIcons = [
  ReceiptText,
  FileCheck2,
  ShieldAlert,
  ClipboardCheck,
  BadgeCheck,
];

export default function ServicesSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Your business needs more than basic billing support. Let us give it to you."
          description="TrackerMed helps practices bring more structure, visibility, and follow-through to the medical billing process."
        />
      </Container>

      <div className="relative mt-16">
        <Container>
          <div
            ref={carouselRef}
            className="services-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden scroll-smooth pb-2"
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? ReceiptText;

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
                  className="group relative flex min-h-[465px] w-[76vw] shrink-0 snap-start flex-col overflow-hidden rounded-[1.55rem] border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/20 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.055] sm:w-[370px] lg:w-[385px]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-950/30">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-7 text-lg font-semibold text-white">
                      {service.title}
                    </h3>

                    <ul className="mt-6 space-y-3.5">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-7 text-slate-400"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-cyan-300 transition group-hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
              aria-label="Scroll services left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
              aria-label="Scroll services right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Specialties */}
          <div className="mt-14 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Specialties We Support
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Billing support across multiple healthcare practice types.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                  TrackerMed works with hospitals, clinics, urgent care groups,
                  and specialty providers that need clearer billing operations.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Ask About Your Specialty
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
}