// All website copy lives here so it can be edited without touching layout code.
// TODO(before launch): replace the placeholder contact details below.

export const site = {
  name: "Megnetora AI Solutions",
  shortName: "Megnetora",
  tagline: "AI That Attracts Growth",
  description:
    "Megnetora AI Solutions builds AI-powered business solutions, digital marketing products and data-driven growth strategies that attract customers, automate operations and accelerate revenue.",
  contact: {
    email: "hello@megnetora.ai", // placeholder
    phone: "+91 00000 00000", // placeholder
    location: "India · Serving clients worldwide",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export const nav = [
  { label: "WAMA CRM", href: "/products/wamacrm" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Process", href: "/#process" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
];

export const products = [
  { label: "WAMA CRM", href: "/products/wamacrm" },
  { label: "WAMA CRM sign in", href: "https://wamacrm.magnetora.in/login" },
];

// Organisations that trust Megnetora (shown in the "Trusted by" strip).
// Logos are from each organisation's own website.
export const clients = [
  {
    name: "Indian Consular Help Desk",
    description: "Passport, OCI, visa & PCC assistance · Canada",
    href: "https://consularhelpdesk.com",
    logo: { src: "/clients/consularhelpdesk.png", width: 216, height: 240 },
  },
  {
    name: "DEEP Trust",
    description: "Education, health & livelihood NGO · Hyderabad",
    href: "https://deepindia.org",
    logo: { src: "/clients/deep-trust.png", width: 344, height: 102 },
  },
];

export const industries = [
  "E-commerce",
  "Real Estate",
  "Healthcare",
  "Education",
  "Retail",
  "Hospitality",
  "Finance",
  "Startups",
];

export type Pillar = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  icon: "brain" | "megaphone" | "compass";
};

export const pillars: Pillar[] = [
  {
    id: "ai-business",
    title: "AI Business Solutions",
    summary:
      "Automate repetitive work, unlock insight from your data and give your team AI tools that save hours every week.",
    points: [
      "AI chatbots & virtual assistants",
      "Workflow & process automation",
      "Predictive analytics & forecasting",
      "Custom AI tools and integrations",
    ],
    icon: "brain",
  },
  {
    id: "ai-marketing",
    title: "AI Digital Marketing",
    summary:
      "Reach the right audience, create content faster and turn more clicks into customers with AI-driven campaigns.",
    points: [
      "AI ad targeting & optimisation",
      "Content & creative generation",
      "SEO and social media intelligence",
      "Lead scoring & personalised outreach",
    ],
    icon: "megaphone",
  },
  {
    id: "growth-strategy",
    title: "Business Development Strategy",
    summary:
      "Plan your next stage of growth with market research, clear roadmaps and decisions backed by data.",
    points: [
      "Market & competitor research",
      "Go-to-market strategy",
      "Digital transformation roadmaps",
      "Growth consulting & KPIs",
    ],
    icon: "compass",
  },
];

export const solutions = [
  {
    title: "AI Chat Assistants",
    text: "24/7 assistants for your website and WhatsApp that answer questions, qualify leads and book appointments.",
  },
  {
    title: "Marketing Automation",
    text: "Email, SMS and social journeys that trigger at the right moment and nurture every lead automatically.",
  },
  {
    title: "Predictive Analytics",
    text: "Dashboards that forecast demand, spot churn risk and show which channels really drive revenue.",
  },
  {
    title: "AI Content Studio",
    text: "On-brand posts, ad copy, blogs and visuals produced in minutes and reviewed by our team.",
  },
  {
    title: "SEO Intelligence",
    text: "Keyword, competitor and content-gap analysis so you rank for searches that actually convert.",
  },
  {
    title: "CRM & Lead Scoring",
    text: "Connect your CRM, score leads by likelihood to buy and let sales focus on the best opportunities.",
  },
  {
    title: "Social Media Growth",
    text: "Scheduling, listening and performance insights across Instagram, Facebook, LinkedIn and YouTube.",
  },
  {
    title: "Growth Consulting",
    text: "A strategy partner who turns your goals into a practical plan, then helps you execute it.",
  },
];

export const approach = [
  {
    step: "Attract",
    text: "Find and pull in the right customers with AI-targeted marketing and search visibility.",
  },
  {
    step: "Automate",
    text: "Let AI handle follow-ups, support and reporting so your team focuses on high-value work.",
  },
  {
    step: "Accelerate",
    text: "Use live data and clear strategy to scale what works and grow revenue faster.",
  },
];

export const process = [
  {
    title: "Discover",
    text: "A free consultation to understand your business, goals and current challenges.",
  },
  {
    title: "Strategise",
    text: "We map opportunities and design an AI and marketing plan with clear milestones.",
  },
  {
    title: "Build",
    text: "Our team sets up the tools, automations, campaigns and dashboards.",
  },
  {
    title: "Launch & Grow",
    text: "We go live, measure results every week and keep optimising for growth.",
  },
];

export const reasons = [
  {
    title: "AI + marketing + strategy in one team",
    text: "No juggling separate agencies. One partner connects technology, marketing and business planning.",
  },
  {
    title: "Data-driven decisions",
    text: "Every recommendation is backed by numbers, and you see the same dashboards we do.",
  },
  {
    title: "Built for your size",
    text: "Practical, affordable solutions for startups and SMEs that scale with you as you grow.",
  },
  {
    title: "Transparent reporting",
    text: "Clear weekly updates on what we did, what it achieved and what comes next.",
  },
  {
    title: "Fast to launch",
    text: "Proven playbooks and ready-made AI components get you live in weeks, not months.",
  },
  {
    title: "Long-term partnership",
    text: "We stay with you after launch, improving results month after month.",
  },
];

export const faqs = [
  {
    q: "Do I need technical knowledge to work with Megnetora?",
    a: "No. We handle the technology end to end and explain everything in plain language. You focus on your business while we set up and manage the AI tools.",
  },
  {
    q: "Is AI affordable for small businesses?",
    a: "Yes. We design solutions around your budget and start with the areas that give the fastest return, such as lead capture, follow-ups and marketing automation.",
  },
  {
    q: "How soon can we see results?",
    a: "Quick wins like chat assistants and automation usually go live within a few weeks. Marketing and SEO results build over time, and we track progress weekly so you always know where you stand.",
  },
  {
    q: "Which tools and platforms do you work with?",
    a: "We work with popular CRMs, ad platforms, WhatsApp, social media, Google Workspace and leading AI models, and we can build custom integrations when needed.",
  },
  {
    q: "Is my business data safe?",
    a: "Data protection is part of every project. We follow strict access controls, use trusted platforms and only use your data for the work you approve.",
  },
];

export const serviceOptions = [
  "AI Business Solutions",
  "AI Digital Marketing",
  "Business Development Strategy",
  "Not sure yet",
];
