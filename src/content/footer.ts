// src/content/footer.ts

export const footerContactCards = [
  {
    title: "Talk to an Expert",
    value: "(877) 555-8273",
    description: "Mon — Fri, 8AM — 8PM EST",
  },
  {
    title: "Email Us",
    value: "hello@trackermed.com",
    description: "We’ll respond within 24 hours.",
  },
  {
    title: "Secure & Compliant",
    value: "HIPAA-conscious workflows",
    description: "Built around privacy, clarity, and operational trust.",
  },
] as const;

export const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
] as const;