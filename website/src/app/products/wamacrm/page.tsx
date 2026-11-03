import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon, CheckIcon, PlusIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { WhatsAppMockup } from "@/components/WhatsAppMockup";
import { site } from "@/content/site";
import {
  wama,
  wamaAudiences,
  wamaFaqs,
  wamaFeatures,
  wamaIntegrations,
  wamaSteps,
} from "@/content/wamacrm";

export const metadata: Metadata = {
  title: `${wama.name}: ${wama.fullName}`,
  description: wama.summary,
  openGraph: {
    title: `${wama.name}: ${wama.fullName} | ${site.name}`,
    description: wama.summary,
  },
};

const primaryBtn =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-semibold text-navy-950 transition hover:bg-white";
const ghostBtn =
  "inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:border-white/60 hover:bg-white/5";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-green" : "text-teal"}`}>
      {children}
    </p>
  );
}

export default function WamaCrmPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${wama.name} (${wama.fullName})`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: wama.summary,
    url: wama.links.site,
    offers: { "@type": "Offer", description: "14-day free trial" },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-green/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
            <div className="animate-rise">
              <nav aria-label="Breadcrumb" className="text-sm text-white/50">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>{" "}
                /{" "}
                <Link href="/#products" className="hover:text-white">
                  Products
                </Link>{" "}
                / <span className="text-white/80">{wama.name}</span>
              </nav>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                  Product 01
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                  Official Meta Tech Provider · WhatsApp Cloud API
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {wama.name}
                <span className="mt-2 block text-gradient">{wama.tagline}</span>
              </h1>
              <p className="mt-3 font-display text-lg text-white/60">{wama.fullName}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{wama.summary}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={wama.links.signup} target="_blank" rel="noopener" className={primaryBtn}>
                  Start 14-day free trial
                  <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a href={wama.links.demo} target="_blank" rel="noopener" className={ghostBtn}>
                  Book a free demo
                </a>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                {wama.heroPoints.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <WhatsAppMockup className="animate-rise [animation-delay:150ms]" />
          </div>
        </section>

        {/* Highlights */}
        <section className="border-b border-line bg-white" aria-label="Highlights">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-4 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
            {wama.highlights.map((h) => (
              <div key={h.label} className="px-4 py-8 text-center">
                <dd className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">{h.value}</dd>
                <dt className="mt-1 text-sm text-muted">{h.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* What is it */}
        <section className="bg-surface py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <Eyebrow>What is WAMA CRM?</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Your whole sales, marketing and support team, inside WhatsApp
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  Your customers already live on WhatsApp. <strong className="text-navy-900">WAMA</strong>{" "}
                  (WhatsApp Marketing Agent) CRM turns that one channel into a complete growth engine.
                </p>
                <p>
                  An AI agent answers every message instantly, day or night, in the language your
                  customer types: English, Telugu, Hindi, Tenglish or Hinglish. It recommends
                  products, takes orders and collects payment without the customer ever leaving the
                  chat.
                </p>
                <p>
                  Behind the scenes, your team gets bulk campaigns, a sales pipeline, support
                  ticketing and a shared inbox, all on your official WhatsApp Business number.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {wamaAudiences.map((a, i) => (
                <Reveal key={a.title} delay={(i % 2) * 100}>
                  <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal">Built for</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-navy-900">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Eyebrow>Features</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Everything you need to sell on WhatsApp
              </h2>
              <p className="mt-4 text-lg text-muted">
                Eight modules that work together, from the first message to payment and support.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {wamaFeatures.map((f, i) => (
                <Reveal key={f.id} delay={(i % 2) * 100}>
                  <article
                    id={f.id}
                    className="h-full rounded-3xl border border-line p-8 transition hover:border-green/50 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 font-display text-sm font-semibold text-green">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-navy-900">{f.title}</h3>
                      {f.badge && (
                        <span className="rounded-full bg-mint px-2.5 py-0.5 text-xs font-semibold text-green-600">
                          {f.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-4 leading-relaxed text-muted">{f.text}</p>
                    <ul className="mt-5 space-y-2.5">
                      {f.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-ink">
                          <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-green-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Eyebrow light>How it works</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Live on WhatsApp in four simple steps
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-6 md:grid-cols-4">
              {wamaSteps.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={i * 100} className="h-full">
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                      <span className="font-display text-5xl font-semibold text-white/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-gradient">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing model + integrations */}
        <section className="bg-surface py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal className="h-full">
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-line sm:p-10">
                <Eyebrow>Fair pricing</Eyebrow>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                  Pay Meta&apos;s rates. Not ours.
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Many WhatsApp tools charge per agent and add a markup on every message. WAMA CRM
                  charges a flat software fee, and you pay Meta&apos;s wholesale message rates directly.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "0% markup on Meta message rates",
                    "Bring your own Meta Cloud API and OpenAI keys",
                    "Zero setup fees",
                    "Free contact-list migration help",
                    "14-day free trial",
                  ].map((p) => (
                    <li key={p} className="flex gap-3 text-ink">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-green-600" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={wama.links.demo}
                  target="_blank"
                  rel="noopener"
                  className="mt-8 inline-flex rounded-full bg-navy-900 px-7 py-3.5 font-semibold text-white transition hover:bg-navy-700"
                >
                  Get a pricing walkthrough
                </a>
              </div>
            </Reveal>
            <Reveal className="h-full" delay={100}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-line sm:p-10">
                <Eyebrow>Integrations</Eyebrow>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                  Works with the tools you already use
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Connect your store, sheets and payment gateway, and keep everything in sync.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {wamaIntegrations.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-navy-900"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                WAMA CRM questions
              </h2>
            </Reveal>
            <div className="mt-12 divide-y divide-line border-y border-line">
              {wamaFaqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium text-navy-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <PlusIcon className="h-5 w-5 flex-none text-teal transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Start turning chats into revenue today
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Try WAMA CRM free for 14 days, or let our team set it up with you.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={wama.links.signup} target="_blank" rel="noopener" className={primaryBtn}>
                Start free trial
                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <Link href="/#contact" className={ghostBtn}>
                Talk to {site.shortName}
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Already a customer?{" "}
              <a href={wama.links.login} target="_blank" rel="noopener" className="text-green hover:underline">
                Sign in to WAMA CRM
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
