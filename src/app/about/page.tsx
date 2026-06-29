// src/app/about/page.tsx

import type { Metadata } from "next";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import AboutSection from "@/components/sections/about/AboutSection";

export const metadata: Metadata = {
  title: "About TrackerMed | Medical Billing & Financial Consulting",
  description:
    "Learn about TrackerMed and its approach to medical billing, financial consulting, and revenue cycle support for healthcare practices.",
};

export default function AboutPage() {
  return (
    <>
      <StandardPageHero
        eyebrow="About"
        title="Medical billing support with a practical, practice-first approach."
        description="TrackerMed works with healthcare organizations that need dependable billing support, clearer communication, and practical financial guidance."
      />

      <AboutSection />
    </>
  );
}