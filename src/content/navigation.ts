// src/content/navigation.ts

export const headerNavLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const headerActions = {
  portal: {
    label: "Client Portal",
    href: "#portal",
  },
  primary: {
    label: "Free Billing Review",
    href: "#contact",
  },
} as const;