// src/components/pages/standard/StandardPageHero.tsx

import Container from "@/components/ui/Container";

type StandardPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function StandardPageHero({
  eyebrow,
  title,
  description,
}: StandardPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <Container>
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}