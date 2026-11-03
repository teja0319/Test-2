import { nav, pillars, products, site } from "@/content/site";
import { CurrentYear } from "./CurrentYear";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {site.tagline}. AI solutions, digital marketing and business strategy for growing
            businesses.
          </p>
        </div>
        <FooterCol title="Products" links={products} />
        <FooterCol title="Company" links={nav.filter((n) => n.href.startsWith("/#"))} />
        <FooterCol
          title="Services"
          links={pillars.map((p) => ({ label: p.title, href: "/#services" }))}
        />
        <FooterCol title="Follow us" links={site.social} />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <p>
            <a href={`mailto:${site.contact.email}`} className="hover:text-white">
              {site.contact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-green">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
