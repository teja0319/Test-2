import { Contact } from "@/components/Contact";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import {
  Approach,
  Faq,
  Industries,
  Process,
  Services,
  Solutions,
  WhyUs,
} from "@/components/Sections";
import { faqs, site } from "@/content/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        slogan: site.tagline,
        description: site.description,
        email: site.contact.email,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Industries />
        <FeaturedProduct />
        <Services />
        <Solutions />
        <Approach />
        <Process />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
