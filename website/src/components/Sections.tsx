import { approach, faqs, industries, pillars, process, reasons, solutions } from "@/content/site";
import { CheckIcon, PlusIcon, pillarIcons } from "./Icons";
import { Reveal } from "./Reveal";

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

export function Industries() {
  return (
    <section className="border-b border-line bg-white py-10" aria-label="Industries we serve">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted">
          AI growth solutions for businesses in
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {industries.map((i) => (
            <li key={i} className="font-display text-base font-medium text-navy-900/70">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Three ways we power your growth"
          text="Technology, marketing and strategy working together, so every part of your business pulls in the same direction."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIcons[p.icon];
            return (
              <Reveal key={p.id} delay={i * 100}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-green transition group-hover:bg-green group-hover:text-navy-950">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm text-ink">
                        <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-green-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="AI products built for real business results"
          text="Start with one solution or combine them into a complete growth system."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <article className="h-full rounded-2xl border border-line p-6 transition hover:border-green/50 hover:bg-mint/40">
                <span className="font-display text-sm font-semibold text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Our approach"
          title="Attract. Automate. Accelerate."
          text="A simple framework behind every project we deliver."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 120}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <span className="font-display text-6xl font-semibold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-gradient">{a.step}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="From first call to measurable growth"
          text="A clear, four-step process with no surprises."
        />
        <div className="relative mt-14">
          <div
            className="absolute left-6 right-[calc(25%-3rem)] top-6 hidden h-0.5 bg-gradient-to-r from-teal to-green md:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-8 md:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 100}>
                  <span className="relative grid h-12 w-12 place-items-center rounded-full bg-navy-900 font-display font-semibold text-green ring-8 ring-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Why Megnetora</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Your growth partner, not just another agency
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Like a magnet, we focus on one thing: pulling the right customers and opportunities
            toward your business, then helping you keep them.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-navy-900 px-7 py-3.5 font-semibold text-white transition hover:bg-navy-700"
          >
            Talk to our team
          </a>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 100}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
                <CheckIcon className="h-6 w-6 text-green-600" />
                <h3 className="mt-4 font-display font-semibold text-navy-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions we often hear" />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
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
  );
}
