// src/app/mso-lite/page.tsx

import type { Metadata } from "next";

import MSOLitePageContent from "@/components/pages/mso-lite/MSOLitePageContent";
import StandardPageHero from "@/components/pages/standard/StandardPageHero";
import { msoLitePageHero } from "@/content/msoLite";

export const metadata: Metadata = {
  title: "MSO Lite | TrackerMed",
  description:
    "TrackerMed MSO Lite gives healthcare practices focused billing guidance and operational support without unnecessary MSO overhead.",
};

export default function MSOLitePage() {
  return (
    <>
      <StandardPageHero
        eyebrow={msoLitePageHero.eyebrow}
        title={msoLitePageHero.title}
        description={msoLitePageHero.description}
      />

      <MSOLitePageContent />
    </>
  );
}