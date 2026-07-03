// src/app/contact/page.tsx

import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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

            {/* Right column: form mockup */}
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-[100px]" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-black shadow-xl shadow-cyan-500/20">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      Start Here
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">
                      Billing Review Request
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactPageContent.formFields.map((field) => (
                    <label key={field} className="grid gap-2">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                        {field}
                      </span>

                      <div className="h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-slate-500">
                        <div className="flex h-full items-center">
                          {field === "Main Billing Concern"
                            ? "Denials, A/R, claims, credentialing..."
                            : field}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <label className="mt-4 grid gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Additional Details
                  </span>

                  <div className="min-h-32 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-slate-500">
                    Briefly describe what your practice is experiencing...
                  </div>
                </label>

                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black shadow-xl shadow-white/10 transition hover:bg-slate-200"
                >
                  Request Free Billing Review
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-start gap-3">
                    <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />

                    <p className="text-xs leading-5 text-slate-400">
                      Your information is used only to respond to your inquiry
                      and discuss TrackerMed services. For SMS and privacy
                      details, please review the Privacy Policy.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {contactPageContent.reassurance.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-5 text-slate-600">
                  {contactPageContent.note}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}