import Image from "next/image";
import { clients } from "@/content/site";
import { Reveal } from "./Reveal";

/** "Trusted by" strip with client logos. */
export function TrustedBy() {
  return (
    <section id="clients" className="bg-white py-14 sm:py-16" aria-labelledby="trusted-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="trusted-heading"
            className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-teal"
          >
            Trusted by
          </h2>
          <ul className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
            {clients.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full items-center gap-5 rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lg"
                >
                  <span className="flex h-20 w-36 flex-none items-center justify-center">
                    <Image
                      src={c.logo.src}
                      alt={`${c.name} logo`}
                      width={c.logo.width}
                      height={c.logo.height}
                      className="max-h-20 w-auto object-contain"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display font-semibold text-navy-900 group-hover:text-teal">
                      {c.name}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{c.description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
