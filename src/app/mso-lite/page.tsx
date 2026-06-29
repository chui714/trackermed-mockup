// src/app/mso-lite/page.tsx

import type { Metadata } from "next";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import MSOLiteSection from "@/components/sections/mso/MSOLiteSection";

export const metadata: Metadata = {
  title: "MSO Lite | TrackerMed",
  description:
    "TrackerMed MSO Lite gives healthcare practices focused billing guidance and operational support without unnecessary MSO overhead.",
};

export default function MSOLitePage() {
  return (
    <>
      <StandardPageHero
        eyebrow="MSO Lite"
        title="Keep the guidance. Lose the MSO bloat."
        description="MSO Lite is TrackerMed's right-sized support model for practices that need expert billing guidance, clearer feedback, and operational support without giving up control."
      />

      <MSOLiteSection />
    </>
  );
}