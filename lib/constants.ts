export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    title: "Social Media Marketing",
    description:
      "Build your brand and engage customers through strategic content and campaigns that drive real conversations.",
    icon: "share2" as const,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your Google ranking and attract high-quality organic traffic with data-backed keyword strategies.",
    icon: "search" as const,
  },
  {
    title: "Paid Advertising",
    description:
      "Generate faster results through targeted ad campaigns and conversion-optimized landing experiences.",
    icon: "megaphone" as const,
  },
  {
    title: "Content Strategy",
    description:
      "Tell your brand story with compelling content that educates, inspires, and converts at every touchpoint.",
    icon: "pen" as const,
  },
] as const;

export const STATS = [
  { value: "250%", label: "Increase in Engagement" },
  { value: "120+", label: "Successful Campaigns" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "3.2x", label: "Average ROI Growth" },
] as const;

export const WHY_US = [
  "Data-driven marketing decisions",
  "Creative campaign strategy",
  "ROI-focused measurable results",
  "Dedicated expert support team",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "GrowthLab completely transformed our online presence and helped us generate more leads than ever before.",
    author: "Sarah Fernando",
    role: "CEO, Bloom Retail",
  },
  {
    quote:
      "Their team understood our brand instantly. Our ad spend efficiency improved by 40% in the first quarter.",
    author: "Marcus Chen",
    role: "Founder, TechFlow",
  },
] as const;

export const TRUSTED_BY = [
  "Bloom Retail",
  "TechFlow",
  "Nova Health",
  "Urban Eats",
  "Peak Finance",
] as const;
