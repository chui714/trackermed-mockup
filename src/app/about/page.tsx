// src/app/about/page.tsx

import type { Metadata } from "next";

import AboutPageContent from "@/components/pages/about/AboutPageContent";
import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import { aboutPageHero } from "@/content/about";

export const metadata: Metadata = {
  title: "About TrackerMed | Medical Billing & Financial Consulting",
  description:
    "Learn about TrackerMed and its approach to medical billing, financial consulting, claim follow-up, denial management, and revenue cycle support.",
};

export default function AboutPage() {
  return (
    <>
      <StandardPageHero
        eyebrow={aboutPageHero.eyebrow}
        title={aboutPageHero.title}
        description={aboutPageHero.description}
      />

      <AboutPageContent />
    </>
  );
}