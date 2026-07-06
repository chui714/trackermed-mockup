// src/app/process/page.tsx

import type { Metadata } from "next";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import ProcessSection from "@/components/sections/process/ProcessSection";

export const metadata: Metadata = {
  title: "Our Process | TrackerMed",
  description:
    "See how TrackerMed supports healthcare practices from onboarding and intake through claim submission, tracking, follow-up, and performance transparency.",
};

export default function ProcessPage() {
  return (
    <>
      <StandardPageHero
        eyebrow="Process"
        title="A clearer billing workflow from intake to transparency."
        description="TrackerMed follows a structured process designed to improve visibility, reduce billing confusion, and keep practices informed at every step."
      />

      <ProcessSection />
    </>
  );
}