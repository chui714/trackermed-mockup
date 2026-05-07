// src/app/page.tsx

import Header from "@/components/layout/Header";
import SiteShell from "@/components/layout/SiteShell";
import HeroSection from "@/components/sections/hero/HeroSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import ProcessSection from "@/components/sections/process/ProcessSection";
import ResultsSection from "@/components/sections/results/ResultsSection";
import AboutSection from "@/components/sections/about/AboutSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <SiteShell>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <AboutSection />
        <Footer />
      </SiteShell>
    </>
  );
}