// src/app/services/page.tsx

import type { Metadata } from "next";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import ServicesSection from "@/components/sections/services/ServicesSection";

export const metadata: Metadata = {
  title: "Medical Billing Services | TrackerMed",
  description:
    "Explore TrackerMed medical billing services, including claims tracking, denial management, credentialing, front office support, and revenue cycle management.",
};

export default function ServicesPage() {
  return (
    <>
      <StandardPageHero
        eyebrow="Services"
        title="Medical billing support built around cleaner operations."
        description="TrackerMed helps healthcare practices improve billing visibility, reduce administrative friction, follow up on claims, and protect revenue with focused revenue cycle support."
      />

      <ServicesSection />
    </>
  );
}