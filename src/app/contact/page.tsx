// src/app/contact/page.tsx

import type { Metadata } from "next";
import {
  CheckCircle2,
  ClipboardCheck,
  Mail,
  Phone,
} from "lucide-react";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import Container from "@/components/ui/Container";
import { contactPageContent } from "@/content/contact";

const contactIconMap = {
  phone: Phone,
  mail: Mail,
} as const;

export const metadata: Metadata = {
  title: "Contact TrackerMed | Free Billing Review",
  description:
    "Contact TrackerMed to request a free billing review or discuss medical billing, claims tracking, denial management, and revenue cycle support.",
};

export default function ContactPage() {
  return (
    <>
      <StandardPageHero
        eyebrow={contactPageContent.hero.eyebrow}
        title={contactPageContent.hero.title}
        description={contactPageContent.hero.description}
      />

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Left column */}
            <div className="space-y-6">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <ClipboardCheck className="h-5 w-5" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                  What we’ll review
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  A billing review should help uncover where the workflow is
                  slowing down, where visibility is missing, and where the
                  practice may be losing time or revenue.
                </p>

                <div className="mt-6 grid gap-3">
                  {contactPageContent.reviewItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactPageContent.contactMethods.map((method) => {
                  const Icon = contactIconMap[method.icon];

                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="group rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/20 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            {method.label}
                          </p>

                          <p className="mt-1 text-lg font-semibold text-slate-200 group-hover:text-cyan-300">
                            {method.value}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}