// src/app/services/page.tsx

import type { Metadata } from "next";

import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import ServicesPageContent from "@/components/pages/services/ServicesPageContent";
import { servicesPageHero } from "@/content/services";

export const metadata: Metadata = {
  title: "Medical Billing Services | TrackerMed",
  description:
    "Explore TrackerMed medical billing services, including claims tracking, denial management, credentialing, front office support, revenue cycle support, and MSO Lite guidance.",
};

export default function ServicesPage() {
  return (
    <>
      <StandardPageHero
        eyebrow={servicesPageHero.eyebrow}
        title={servicesPageHero.title}
        description={servicesPageHero.description}
      />

      <ServicesPageContent />
    </>
  );
}