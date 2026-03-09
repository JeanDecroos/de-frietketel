import Link from "next/link";
import Hero from "@/components/Hero";
import OpeningsurenCard from "@/components/OpeningsurenCard";
import MenuSection from "@/components/MenuSection";
import BestelButtons from "@/components/BestelButtons";
import ContactInfo from "@/components/ContactInfo";
import { FrietenZak, Burger, Frietje, Kroket, Ketchup, Bicky, Mayo, Ketel } from "@/components/FrituurIllustraties";

import { contactInfo } from "@/data/menu";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Menu + Openingsuren */}
      <section className="relative overflow-hidden">
        <Burger className="pointer-events-none absolute right-[2%] top-[10%] h-14 opacity-[0.06] sm:h-18" />
        <Ketchup className="pointer-events-none absolute left-[3%] bottom-[8%] h-16 opacity-[0.05]" />
        <Frietje className="pointer-events-none absolute right-[15%] bottom-[15%] h-9 opacity-[0.05]" rotation={30} />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
                Ons aanbod
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] text-dark">
                Menu
              </h2>
              <p className="mt-2 max-w-md text-muted">
                Verse frieten, krokante snacks, burgers, mitraillettes en meer. Ook vegan en veggie opties.
              </p>
              <div className="mt-8">
                <MenuSection toonAlles={false} />
              </div>
              <Link
                href="/menu"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
              >
                Bekijk het volledige menu
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
            <div>
              <OpeningsurenCard />
            </div>
          </div>
        </div>
      </section>

      {/* Bestellen */}
      <section className="relative overflow-hidden">
        <FrietenZak className="pointer-events-none absolute right-[3%] bottom-[8%] h-28 opacity-[0.07] sm:h-36 lg:h-44" />
        <Frietje className="pointer-events-none absolute left-[5%] bottom-[15%] h-10 opacity-[0.06]" rotation={-20} />
        <Frietje className="pointer-events-none absolute left-[12%] bottom-[30%] h-8 opacity-[0.05]" rotation={15} />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="text-center">
            <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
              Afhalen &amp; bestellen
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] text-dark">
              Bel vooraf of kom langs
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted">
              Bel je bestelling door en ze staat klaar bij aankomst. Of wandel gewoon binnen.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <BestelButtons />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Groepsbestellingen? Stuur een e-mail naar{" "}
            <a href={`mailto:${contactInfo.email}`} className="font-medium text-accent hover:text-accent-dark transition-colors">
              {contactInfo.email}
            </a>
          </p>
        </div>
      </section>

      {/* Locatie */}
      <section className="relative overflow-hidden">
        <Ketel className="pointer-events-none absolute left-[3%] top-[12%] h-12 opacity-[0.06]" />
        <Mayo className="pointer-events-none absolute right-[4%] bottom-[10%] w-16 opacity-[0.06]" />
        <Bicky className="pointer-events-none absolute left-[8%] bottom-[5%] h-12 opacity-[0.05]" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
                Kom langs
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] text-dark">
                Waar vind je ons?
              </h2>
              <p className="mt-2 max-w-md text-muted">
                De Frietketel vind je in de Papegaaistraat 89 in Gent, in het hart van de stad.
              </p>
              <div className="mt-8">
                <ContactInfo />
              </div>
            </div>
            <div className="overflow-hidden border border-border">
              <iframe
                src={contactInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie De Frietketel op Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden">
        <Burger className="pointer-events-none absolute left-[4%] bottom-[10%] h-12 opacity-[0.08] sm:h-16" />
        <Kroket className="pointer-events-none absolute right-[6%] bottom-[18%] w-16 opacity-[0.06] sm:w-20" />
        <Frietje className="pointer-events-none absolute right-[20%] bottom-[12%] h-8 opacity-[0.05]" rotation={25} />
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] text-white">
            Zin in verse frieten?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/40">
            Bel ons of kom langs in de Papegaaistraat. De grootste porties van Gent staan op je te wachten.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-dark hover:border-accent-dark"
            >
              Bel {contactInfo.telefoon}
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:border-white/50"
            >
              Bekijk menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
