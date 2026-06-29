// src/app/results/page.tsx

import type { Metadata } from "next";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import ResultsSection from "@/components/sections/results/ResultsSection";
import TestimonialsSection from "@/components/sections/testimonials/Testimonials";

export const metadata: Metadata = {
  title: "Results & Reviews | TrackerMed",
  description:
    "Review TrackerMed results, credibility signals, and client feedback from healthcare practices and providers.",
};

export default function ResultsPage() {
  return (
    <>
      <StandardPageHero
        eyebrow="Results"
        title="Revenue cycle support measured by clarity and follow-through."
        description="TrackerMed focuses on measurable billing improvements, cleaner follow-up, better visibility, and long-term client relationships."
      />

      <ResultsSection />
      <TestimonialsSection />
    </>
  );
}