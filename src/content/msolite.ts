// src/content/MSOLite.ts

export const msoLiteContent = {
  eyebrow: "MSO Lite",
  headlineTop: "Keep the guidance.",
  headlineHighlight: "Lose the MSO bloat.",
  description:
    "Your practice does not need a full MSO to grow. It needs focused guidance, clear feedback, and expert support in the areas that actually improve your bottom line.",
  primaryCta: {
    label: "Explore MSO Lite",
    href: "#contact",
  },
  secondaryCta: {
    label: "View A La Carte Support",
    href: "#services",
  },
  note: "Only pay for what your practice actually needs.",
} as const;

export const msoOrbitItems = [
  {
    title: "Expert Guidance",
    description: "Industry expertise across your billing workflow.",
    icon: "sparkles",
    position: "left-[7%] top-[18%]",
  },
  {
    title: "Right-Sized Support",
    description: "Only pay for what your practice actually needs.",
    icon: "shield",
    position: "right-[4%] top-[22%]",
  },
  {
    title: "Better Bottom Line",
    description: "Keep more profit inside your practice.",
    icon: "chart",
    position: "left-[4%] bottom-[24%]",
  },
  {
    title: "Stay Independent",
    description: "Get support without giving up control.",
    icon: "user",
    position: "right-[8%] bottom-[18%]",
  },
] as const;

export const traditionalMso = [
  "One-size-fits-all packages",
  "High overhead and hidden fees",
  "Less visibility, less control",
] as const;

export const msoLiteAdvantages = [
  "A la carte support",
  "Transparent guidance",
  "Focused on your bottom line",
] as const;