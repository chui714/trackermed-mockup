// src/content/footer.ts

export const footerContactCards = [
  {
    title: "Talk to an Expert",
    value: "(949) 385 - 2111",
    href: "tel:+19493852111",
    description: "Mon — Fri, 9AM — 4PM PT | Sat - Sun, Closed",
  },
  {
    title: "Email Us",
    value: "info@trackermed.com",
    href: "mailto:info@trackermed.com",
    description: "We’ll respond within 24 hours.",
  },
  {
    title: "Secure Review",
    value: "Free Billing Review",
    href: "/contact",
    description:
      "Share your billing concerns and we'll help identify next steps.",
  },
] as const;

export const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "MSO Lite", href: "/mso-lite" },
  { label: "Process", href: "/process" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/results#reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;