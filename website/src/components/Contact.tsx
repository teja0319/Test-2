import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

export function Contact() {
  const items = [
    { icon: MailIcon, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    {
      icon: PhoneIcon,
      label: "Phone / WhatsApp",
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
    },
    { icon: PinIcon, label: "Location", value: site.contact.location },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-teal/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Get started</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to attract more growth?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
            Book a free consultation. We&apos;ll look at your business, find the quickest AI and
            marketing wins, and share a clear plan with no obligation.
          </p>
          <ul className="mt-10 space-y-5">
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-white/10 text-green">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-white/50">{label}</span>
                  {href ? (
                    <a href={href} className="font-medium hover:text-green">
                      {value}
                    </a>
                  ) : (
                    <span className="font-medium">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
