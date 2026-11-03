import { site } from "@/content/site";
import { ArrowRightIcon, CheckIcon, SparkIcon } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pb-28 sm:pt-40"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-teal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-56 -left-40 h-[30rem] w-[30rem] rounded-full bg-green/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 sm:text-sm">
            <SparkIcon className="h-4 w-4 text-green" />
            AI solutions · Digital marketing · Growth strategy
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            AI that <span className="text-gradient">attracts growth</span> to your business
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {site.shortName} combines artificial intelligence, smart marketing and proven business
            strategy to bring you more customers, automate the busywork and grow revenue faster.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-semibold text-navy-950 transition hover:bg-white"
            >
              Book a Free Consultation
              <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              Explore Services
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {["Free strategy call", "No technical knowledge needed", "Clear, weekly reporting"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

/** Illustrative product preview: a growth dashboard with live AI activity. */
function HeroVisual() {
  const bars = [38, 52, 46, 64, 72, 90];
  return (
    <div className="relative mx-auto w-full max-w-lg animate-rise [animation-delay:150ms]" aria-hidden="true">
      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/60">Growth dashboard</p>
            <p className="font-display text-xl font-semibold">Leads & revenue</p>
          </div>
          <span className="rounded-full bg-green/15 px-3 py-1 text-xs font-medium text-green">
            ● Live
          </span>
        </div>

        <svg viewBox="0 0 400 200" className="mt-6 w-full">
          <defs>
            <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#22C55E" stopOpacity="0.35" />
              <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#0FB5A6" />
              <stop offset="1" stopColor="#22C55E" />
            </linearGradient>
          </defs>
          {[40, 90, 140].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="white" strokeOpacity="0.07" />
          ))}
          {bars.map((h, i) => (
            <rect
              key={i}
              x={22 + i * 64}
              y={190 - h * 1.6}
              width="30"
              height={h * 1.6}
              rx="6"
              fill="white"
              fillOpacity="0.08"
            />
          ))}
          <path
            d="M10 170 C60 160 80 130 120 135 S190 120 220 95 S300 80 330 50 L365 24"
            fill="none"
            stroke="url(#hv-line)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="600"
            className="animate-draw"
          />
          <path
            d="M10 170 C60 160 80 130 120 135 S190 120 220 95 S300 80 330 50 L365 24 L365 200 L10 200 Z"
            fill="url(#hv-area)"
          />
          <polygon points="378,12 352,20 370,38" fill="#22C55E" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/60">
          {["Attract", "Automate", "Accelerate"].map((t) => (
            <div key={t} className="rounded-xl bg-white/5 py-2.5">
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -left-4 top-24 hidden animate-float rounded-2xl bg-white p-3.5 text-navy-900 shadow-xl sm:-left-10 sm:block">
        <p className="flex items-center gap-2 text-xs font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-mint text-green-600">
            <SparkIcon className="h-4 w-4" />
          </span>
          New lead captured by AI
        </p>
      </div>
      <div className="absolute -bottom-6 right-2 hidden animate-float rounded-2xl bg-white p-3.5 text-navy-900 shadow-xl [animation-delay:1.5s] sm:-right-6 sm:block">
        <p className="flex items-center gap-2 text-xs font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-mint text-green-600">
            <CheckIcon className="h-4 w-4" />
          </span>
          Follow-up sent automatically
        </p>
      </div>
    </div>
  );
}
