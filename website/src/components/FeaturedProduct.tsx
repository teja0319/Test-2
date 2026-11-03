import Link from "next/link";
import { wama } from "@/content/wamacrm";
import { ArrowRightIcon, CheckIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { WhatsAppMockup } from "./WhatsAppMockup";

const points = [
  "24/7 AI assistant that replies in Telugu, Hindi, Tenglish & Hinglish",
  "Sell and take payment inside WhatsApp",
  "Bulk campaigns, sales pipeline, ticketing & shared team inbox",
  "Official Meta Cloud API with 0% markup on Meta rates",
];

/** Homepage spotlight for our flagship product, WAMA CRM. */
export function FeaturedProduct() {
  return (
    <section id="products" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Our products</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Ready-to-use AI products for your business
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <article className="relative overflow-hidden rounded-[2rem] bg-navy-900 text-white">
            <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:p-16">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                    Product 01 · Flagship
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                    Official Meta Tech Provider
                  </span>
                </div>
                <h3 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {wama.name}
                </h3>
                <p className="mt-2 font-display text-lg text-green">{wama.fullName}</p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                  <strong className="text-white">{wama.tagline}</strong> {wama.summary}
                </p>
                <ul className="mt-7 space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-white/85">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-green" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products/wamacrm"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-semibold text-navy-950 transition hover:bg-white"
                  >
                    Explore WAMA CRM
                    <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={wama.links.signup}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold transition hover:border-white/60 hover:bg-white/5"
                  >
                    Start 14-day free trial
                  </a>
                </div>
              </div>
              <WhatsAppMockup />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
