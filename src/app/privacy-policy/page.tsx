// src/app/privacy-policy/page.tsx

import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import { privacyPolicyContent } from "@/content/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | TrackerMed",
  description:
    "TrackerMed privacy policy for medical billing, financial consulting, SMS consent, and patient communication.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              {privacyPolicyContent.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {privacyPolicyContent.title}
            </h1>

            <p className="mt-5 text-sm font-medium text-slate-500">
              {privacyPolicyContent.updatedLabel}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="space-y-6 text-base leading-8 text-slate-300">
              {privacyPolicyContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}