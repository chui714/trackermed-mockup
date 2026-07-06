// src/components/sections/trusted/TrustedBySection.tsx

import styles from "./TrustedBySection.module.css";

import { Building2, MapPin, ShieldCheck } from "lucide-react";

import Container from "@/components/ui/Container";
import {
  featuredPartners,
  supportedPracticeTypes,
} from "@/content/trustedBy";

export default function TrustedBySection() {
  const repeatedPracticeTypes = [
    ...supportedPracticeTypes,
    ...supportedPracticeTypes,
    ...supportedPracticeTypes,
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050b14]/85 py-14">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">
            Trusted Healthcare Partners
          </div>

          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Experience with respected healthcare organizations.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            TrackerMed supports billing operations across hospitals, clinics,
            urgent care groups, and independent provider teams.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredPartners.map((partner) => (
            <div
              key={partner.name}
              className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-300/20 bg-white/[0.045] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.065]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Building2 className="h-6 w-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {partner.name}
                    </h3>

                    <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="h-4 w-4 text-cyan-300/80" />
                    {partner.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="mt-10">
        <Container>
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Also supporting
          </p>
        </Container>

        <div className={`${styles.marquee} relative overflow-hidden`}>
          <div className={`${styles.marqueeTrack} flex w-max items-center gap-4`}>
            {repeatedPracticeTypes.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex h-11 min-w-max items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-6 text-sm font-medium text-slate-400"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}