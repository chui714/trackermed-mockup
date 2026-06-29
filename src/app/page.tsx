// src/app/page.tsx

import AboutSection from "@/components/sections/about/AboutSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import MSOLiteSection from "@/components/sections/mso/MSOLiteSection";
import ProcessSection from "@/components/sections/process/ProcessSection";
import ResultsSection from "@/components/sections/results/ResultsSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import TestimonialsSection from "@/components/sections/testimonials/Testimonials";
import TrustedBySection from "@/components/sections/trusted/TrustedBySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <MSOLiteSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
}