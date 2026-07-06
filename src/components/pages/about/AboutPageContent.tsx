// src/components/pages/about/AboutPageContent.tsx

import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Layers3,
  ShieldCheck,
  Target,
  XCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import {
  aboutAvoids,
  aboutBullets,
  aboutHighlights,
  aboutIntro,
  aboutPrinciples,
} from "@/content/about";

const principleIcons = [Eye, Layers3, ShieldCheck];

export default function AboutPageContent() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {aboutIntro.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {aboutIntro.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {aboutIntro.description}
              </p>

              <div className="mt-8 grid gap-3">
                {aboutBullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-6 text-slate-300">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 md:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-[100px]" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-black shadow-xl shadow-cyan-500/20">
                  <Target className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">
                  A practical partner for billing clarity.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  TrackerMed should feel different from a generic billing vendor.
                  The brand should communicate hands-on support, operational
                  visibility, and practical guidance for healthcare practices.
                </p>

                <div className="mt-8 grid gap-4">
                  {aboutHighlights.map((highlight) => (
                    <div
                      key={highlight.value}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <p className="text-xl font-semibold text-white">
                        {highlight.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {highlight.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Principles
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A billing partner should make the process easier to understand.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The goal is to position TrackerMed as structured, experienced, and
              easy to work with — not overloaded, confusing, or generic.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {aboutPrinciples.map((principle, index) => {
              const Icon = principleIcons[index] ?? ShieldCheck;

              return (
                <article
                  key={principle.title}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.055]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                What TrackerMed Helps Avoid
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Less confusion. More visibility. Better follow-through.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                This page should reinforce why a practice would want a billing
                partner that is organized, transparent, and focused on practical
                revenue cycle improvement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutAvoids.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/10 bg-black/25 p-5"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 text-center shadow-2xl shadow-black/25 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Talk to TrackerMed
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">
              Want a clearer look at your billing workflow?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Start with a free billing review and identify where your practice
              may need more visibility, follow-up, or support.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-slate-200"
            >
              Request Free Billing Review
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}