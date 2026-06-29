// src/app/contact/page.tsx

import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact TrackerMed | Free Billing Review",
  description:
    "Contact TrackerMed to request a free billing review or discuss medical billing, claims tracking, denial management, and revenue cycle support.",
};

export default function ContactPage() {
  return (
    <>
      <StandardPageHero
        eyebrow="Contact"
        title="Request a free billing review."
        description="Tell TrackerMed what your practice is dealing with, and start a conversation about where your billing workflow can become clearer, cleaner, and more reliable."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="tel:+19493852111"
              className="group rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Phone className="h-5 w-5" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Call
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white group-hover:text-cyan-300">
                (949) 385 - 2111
              </h2>
            </a>

            <a
              href="mailto:chris@trackermed.com"
              className="group rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Mail className="h-5 w-5" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Email
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white group-hover:text-cyan-300">
                chris@trackermed.com
              </h2>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}