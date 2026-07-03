// src/components/pages/services/ServicesPageContent.tsx

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Layers3,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Container from "@/components/ui/Container";
import {
  billingProblems,
  services,
  servicesPageDifferentiators,
  specialties,
} from "@/content/services";

const serviceIcons = [
  Stethoscope,
  FileSearch,
  ShieldCheck,
  Layers3,
  ClipboardCheck,
];

export default function ServicesPageContent() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? CheckCircle2;

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.055]"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {service.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Problems We Solve
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Billing problems usually start before the claim is paid.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                A strong billing partner should help the practice see where the
                workflow is breaking down, where follow-up is missing, and where
                revenue is getting delayed.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {billingProblems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-[1.4rem] border border-white/10 bg-black/25 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-6 text-slate-300">
                      {problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Specialties Supported
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white">
                  Built for healthcare practices that need dependable billing
                  support.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  TrackerMed can support a range of practice types that need
                  stronger billing visibility, follow-up, and revenue cycle
                  guidance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {servicesPageDifferentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 text-center shadow-2xl shadow-black/25 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Free Billing Review
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">
              Not sure which service your practice needs first?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Start with a billing review. TrackerMed can help identify where
              the workflow needs the most attention.
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