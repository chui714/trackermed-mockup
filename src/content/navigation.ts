// src/content/navigation.ts

export const headerNavLinks = [
  { label: "Services", href: "/services" },
  {label: "MSO Lite", href: "/mso-lite"},
  { label: "Process", href: "/process" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const headerActions = {
  primary: {
    label: "Free Billing Review",
    href: "/contact",
  },
} as const;