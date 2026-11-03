// Content for the WAMA CRM product page. Source: https://wamacrm.magnetora.in

export const WAMA_URL = "https://wamacrm.magnetora.in";

export const wama = {
  name: "WAMA CRM",
  fullName: "WhatsApp Marketing Agent CRM",
  slug: "wamacrm",
  tagline: "Turn every chat into revenue.",
  summary:
    "WAMA CRM is our WhatsApp-first CRM. A 24/7 AI assistant replies in your customer's own language, sells and takes payment inside the chat, and lets you send personalised broadcasts. You pay Meta's rates directly, with no markup.",
  links: {
    site: WAMA_URL,
    signup: `${WAMA_URL}/signup`,
    login: `${WAMA_URL}/login`,
    demo: `${WAMA_URL}/#demo`,
  },
  highlights: [
    { label: "Official", value: "Meta Tech Provider" },
    { label: "Free trial", value: "14 days" },
    { label: "Markup on Meta rates", value: "0%" },
    { label: "AI assistant", value: "24/7" },
  ],
  heroPoints: ["14-day free trial", "Connect your number in minutes", "Pay Meta's rates directly"],
};

export type WamaFeature = { id: string; title: string; text: string; points: string[]; badge?: string };

export const wamaFeatures: WamaFeature[] = [
  {
    id: "commerce",
    badge: "New",
    title: "WhatsApp Commerce",
    text: "Your whole store inside one WhatsApp chat. Customers ask, browse, order, add an address, pay and track without leaving WhatsApp.",
    points: [
      "AI shopping assistant sends product cards and answers “where is my order?”",
      "WhatsApp Pay via Razorpay, PayU, BillDesk or Zaakpay, plus Cash on Delivery",
      "Catalogue, orders and payment status synced with Meta Commerce",
      "Every order lands in your CRM; customers get status updates in WhatsApp",
    ],
  },
  {
    id: "campaigns",
    title: "Bulk WhatsApp Campaigns",
    text: "Send, track and reply, all organised by campaign.",
    points: [
      "Upload Excel or CSV lists with personalised {{variables}}",
      "Track sent, delivered, read and failed for each campaign",
      "Reply to responses from a real-time chat view",
      "Anti-ban safe pacing through the official Meta Cloud API",
    ],
  },
  {
    id: "ai",
    title: "24/7 AI Chatbot",
    text: "Instant lead qualification and sales, even at 2 AM.",
    points: [
      "Learns from your catalogue, website and PDFs (pricing, FAQs, policies)",
      "Smart lead scoring and automatic demo scheduling",
      "Understands English, Telugu, Hindi, Tenglish, Hinglish and more",
      "Hands high-value deals to your sales team instantly",
    ],
  },
  {
    id: "pipeline",
    title: "Visual Sales Pipeline",
    text: "Turn WhatsApp replies into closed deals on a drag-and-drop Kanban board.",
    points: [
      "Create a deal from any WhatsApp thread in one click",
      "Deal values in ₹ or $, with stage probabilities",
      "See which campaigns generate revenue (ROI attribution)",
    ],
  },
  {
    id: "ticketing",
    title: "Ticketing & SLAs",
    text: "Track, escalate and resolve customer support without chaos.",
    points: [
      "Create tickets straight from WhatsApp conversations",
      "SLA countdown timers with automatic escalation alerts",
      "Queues for billing, logistics, technical support and sales",
      "Customers get WhatsApp updates as tickets progress",
    ],
  },
  {
    id: "team",
    title: "Shared Team Inbox",
    text: "One WhatsApp number for your whole company.",
    points: [
      "Multiple agents on the same official WhatsApp number",
      "Private internal notes that customers never see",
      "Round-robin or workload-based chat assignment",
      "Supervisor dashboard: response time, chats handled and CSAT",
    ],
  },
  {
    id: "templates",
    badge: "New",
    title: "Message Templates",
    text: "Every Meta template type, approved in minutes.",
    points: [
      "Carousel, limited-time offer, coupon code, catalogue, multi-product, Flows, OTP and more",
      "Live approval status, rejection reasons and quality rating",
      "Template insights: sent, delivered, read and clicks",
    ],
  },
  {
    id: "analytics",
    title: "Reports & Analytics",
    text: "A live dashboard of open rates, conversions and revenue, so you know what is working.",
    points: [
      "Campaign and agent performance in one place",
      "Revenue tracked from first message to payment",
    ],
  },
];

export const wamaSteps = [
  { title: "Connect", text: "Link your WhatsApp Business number through Meta's official signup in minutes." },
  { title: "Train", text: "Upload your catalogue, website and FAQs so the AI assistant knows your business." },
  { title: "Engage", text: "Send personalised campaigns while the AI answers, qualifies and sells 24/7." },
  { title: "Convert", text: "Take payment in the chat, manage deals and support, and track revenue." },
];

export const wamaIntegrations = [
  "WhatsApp Cloud API",
  "Meta Commerce",
  "Shopify",
  "WooCommerce",
  "Google Sheets",
  "Excel & CSV",
  "Razorpay",
  "PayU",
  "BillDesk",
  "Zaakpay",
  "Stripe",
  "OpenAI",
];

export const wamaAudiences = [
  { title: "D2C & e-commerce brands", text: "Sell, collect payment and send order updates on WhatsApp." },
  { title: "Retail & local businesses", text: "Broadcast offers and answer customers instantly, in their language." },
  { title: "Clinics & service providers", text: "Book appointments, answer FAQs and manage support tickets." },
  { title: "Sales teams", text: "Qualify leads automatically and close more deals from WhatsApp." },
];

export const wamaFaqs = [
  {
    q: "Can customers buy and pay without leaving WhatsApp?",
    a: "Yes. The AI shopping assistant shows products, takes the order and address, and collects payment through WhatsApp Pay (Razorpay, PayU, BillDesk or Zaakpay) or Cash on Delivery.",
  },
  {
    q: "Which languages does the AI assistant understand?",
    a: "English, Telugu, Hindi, and mixed Tenglish and Hinglish, the way customers actually type. It understands many more regional languages too.",
  },
  {
    q: "Is it safe for my WhatsApp number?",
    a: "WAMA CRM uses the official Meta WhatsApp Cloud API with safe sending pacing, approved templates and opt-in based messaging, not unofficial tools that risk bans.",
  },
  {
    q: "How is pricing different from other WhatsApp CRMs?",
    a: "You pay Meta's message rates directly with 0% markup, plus a flat software fee. You can also bring your own Meta and OpenAI keys.",
  },
  {
    q: "How do I get started?",
    a: "Start the 14-day free trial or book a free setup walkthrough. Setup is free, and we help migrate your existing contact lists.",
  },
];
