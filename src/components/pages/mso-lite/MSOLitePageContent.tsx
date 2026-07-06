// src/components/pages/mso-lite/MSOLitePageContent.tsx

import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import {
  msoLiteComparison,
  msoLiteIdealFor,
  msoLitePainPoints,
  msoLiteSupportAreas,
} from "@/content/msoLite";

const supportIcons = [Lightbulb, Layers3, Sparkles, ShieldCheck];

export default function MSOLitePageContent() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Why MSO Lite
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Many practices do not need a full MSO. They need focused
                guidance.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                TrackerMed positions MSO Lite as a practical alternative for
                practices that need billing expertise, operational feedback, and
                revenue cycle clarity without unnecessary management overhead.
              </p>
            </div>

            <div className="grid gap-4">
              {msoLitePainPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.4rem] border border-white/10 bg-black/25 p-5"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <p className="text-sm leading-6 text-slate-300">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Support Areas
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Right-sized support for the parts of the business that need it.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              MSO Lite should feel flexible, controlled, and practical. The
              practice gets expert guidance without being forced into a bloated
              service model.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {msoLiteSupportAreas.map((area, index) => {
              const Icon = supportIcons[index] ?? CheckCircle2;

              return (
                <article
                  key={area.title}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.055]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25">
            <div className="grid lg:grid-cols-[1fr_auto_1fr]">
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Traditional MSO
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  More structure than some practices need.
                </h2>

                <div className="mt-6 grid gap-3">
                  {msoLiteComparison.traditional.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center border-y border-white/10 px-8 py-6 lg:border-x lg:border-y-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-lg font-bold text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                  VS
                </div>
              </div>

              <div className="border-cyan-300/20 bg-cyan-300/[0.04] p-6 md:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  MSO Lite by TrackerMed
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  Focused support without unnecessary bloat.
                </h2>

                <div className="mt-6 grid gap-3">
                  {msoLiteComparison.trackerMed.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{item}</span>
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Best Fit
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white">
                Built for practices that want support without giving up control.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                MSO Lite is best positioned for practices that are already
                operational, but need clearer billing guidance, better
                visibility, and practical feedback to improve performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {msoLiteIdealFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 text-center shadow-2xl shadow-black/25 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Explore MSO Lite
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">
              Not sure whether your practice needs full support or focused
              guidance?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Start with a billing review. TrackerMed can help identify whether
              MSO Lite is the right fit for your practice.
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