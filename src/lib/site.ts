export const SITE = {
  name: "Contractor Insurance Diva",
  domain: "contractorinsurancediva.com",
  url: "https://contractorinsurancediva.com",
  tagline: "The Contractor Insurance Expert Who Works As Hard As You Do",
  description:
    "Contractor Insurance Diva — specialized contractor insurance from a woman-owned agency. GL, workers' comp, commercial auto, tools & equipment, professional liability, umbrella, and bonds. All 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  legalName: "Contractors Choice Agency",
  address: {
    street: "12220 E Riggs Road Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8 am–5 pm MST",
  claimsSla: "Same-day claims reporting assistance",
  quoteSla: "Quotes in approximately 15 minutes",
  statesLicensed: 50,
} as const;

export const BRAND = {
  brandShort: "Contractor Insurance Diva",
  brandSub: "Contractors Choice Agency",
  nicheShort: "contractor",
  nicheCap: "Contractor",
  nichePlural: "contractors",
  nichePluralCap: "Contractors",
  operator: "contractor",
  operatorCap: "Contractor",
  industry: "contracting",
  industryCap: "Contracting",
  audience: "contractors",
  audienceCap: "Contractors",
  ownerTitle: "Licensed Insurance Agent",
  regionPill: "All 50 States",
  serviceSuffix: "for Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability",
    short: "GL & Completed Ops",
    description:
      "Bodily injury, property damage, and completed-operations protection — the core policy every contractor must carry.",
    icon: "ShieldCheck",
    keywords: [
      "general liability insurance contractor",
      "contractor GL coverage",
      "completed operations insurance",
      "contractor liability",
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Workers' Comp",
    description:
      "Wage replacement and medical benefits for injured crew members — required in virtually every state with employees.",
    icon: "HardHat",
    keywords: [
      "workers comp contractor",
      "construction workers compensation",
      "contractor workers comp",
      "crew injury coverage",
    ],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Commercial Auto",
    description:
      "Liability and physical damage for the trucks, vans, and trailers your business depends on every day.",
    icon: "Truck",
    keywords: [
      "commercial auto insurance contractor",
      "contractor truck insurance",
      "work vehicle insurance",
      "fleet insurance contractor",
    ],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Tools & Equipment",
    description:
      "Inland marine coverage for your tools, equipment, and gear against theft, damage, and loss at any jobsite.",
    icon: "Wrench",
    keywords: [
      "tools and equipment insurance",
      "contractor tools coverage",
      "inland marine contractor",
      "jobsite tool theft insurance",
    ],
  },
  {
    slug: "professional-liability",
    title: "Professional Liability",
    short: "E&O / Prof. Liability",
    description:
      "Errors and omissions coverage for design-build, consulting, and project management services beyond physical work.",
    icon: "FileCheck",
    keywords: [
      "professional liability insurance contractor",
      "contractor E&O insurance",
      "errors omissions construction",
      "design build liability",
    ],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella",
    short: "Umbrella",
    description:
      "Excess liability limits above GL, auto, and employers liability — the most cost-effective way to increase protection.",
    icon: "Umbrella",
    keywords: [
      "commercial umbrella contractor",
      "excess liability contractor",
      "umbrella policy construction",
      "contractor umbrella insurance",
    ],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    short: "Bonds",
    description:
      "License bonds, performance bonds, and payment bonds that satisfy client contracts and licensing requirements.",
    icon: "Award",
    keywords: [
      "contractor surety bond",
      "contractor license bond",
      "performance bond",
      "payment bond contractor",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    region: "South Central",
    blurb:
      "Texas contractors need comprehensive insurance across a massive construction market. We place GL, workers' comp, commercial auto, and bonds for contractors across Dallas-Fort Worth, Houston, Austin, and San Antonio.",
  },
  {
    slug: "california",
    name: "California",
    region: "Pacific Coast",
    blurb:
      "California has some of the strictest contractor licensing and insurance requirements in the country. We specialize in placing coverage for CA contractors across the Bay Area, Los Angeles, and San Diego.",
  },
  {
    slug: "florida",
    name: "Florida",
    region: "Southeast",
    blurb:
      "Florida's active construction and storm-restoration market demands flexible contractor insurance programs. We write GL, workers' comp, commercial auto, and professional liability for Florida contractors statewide.",
  },
  {
    slug: "southeast",
    name: "Southeast",
    region: "Multi-State",
    blurb:
      "From Atlanta to Charlotte to Nashville, the Southeast construction boom drives demand for specialty contractor insurance. We write programs for contractors across GA, NC, SC, TN, AL, and MS.",
  },
  {
    slug: "midwest",
    name: "Midwest",
    region: "Multi-State",
    blurb:
      "Midwest contractors face diverse project types from commercial to residential. We write contractor insurance programs across OH, IL, MI, IN, WI, MN, MO, and KS.",
  },
  {
    slug: "northeast",
    name: "Northeast",
    region: "Multi-State",
    blurb:
      "Northeast contractors work in some of the most demanding regulatory environments in the country. We place GL, professional liability, and bonds for contractors in NY, NJ, CT, MA, PA, and RI.",
  },
  {
    slug: "mountain-west",
    name: "Mountain West",
    region: "Multi-State",
    blurb:
      "Mountain West construction markets in CO, AZ, NV, UT, and NM are growing rapidly. We write contractor insurance programs across the entire region.",
  },
  {
    slug: "pacific-west",
    name: "Pacific West",
    region: "Multi-State",
    blurb:
      "Pacific West contractors in WA and OR work across residential, commercial, and infrastructure sectors. We place complete insurance programs for contractors from Seattle to Portland.",
  },
] as const;

export type LocationSlug = (typeof LOCATIONS)[number]["slug"];

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Contractor specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "Same-day claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years placing contractor programs", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We've tried four different agents over ten years. This is the only one who actually understood our GL exposure, set up the policy correctly, and was there when we had a claim. Night and day.",
    name: "Marcus T.",
    role: "General Contractor",
    location: "Texas",
  },
  {
    quote:
      "Got our GL, workers' comp, and professional liability placed in one 20-minute call. The program was built around what we actually do — not what a generic contractor form assumed we do.",
    name: "Danielle R.",
    role: "Design-Build Contractor",
    location: "California",
  },
  {
    quote:
      "My tools trailer was broken into at a jobsite. I called on a Friday afternoon and had a check by Tuesday. That's what A-rated coverage with a real agent behind it looks like.",
    name: "Kevin W.",
    role: "Electrical Contractor",
    location: "Florida",
  },
] as const;
