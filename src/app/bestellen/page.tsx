import type { Metadata } from "next";
import OpeningsurenCard from "@/components/OpeningsurenCard";
import { FrietenZak, Frietje, Burger, Kroket } from "@/components/FrituurIllustraties";

import { contactInfo } from "@/data/menu";

export const metadata: Metadata = {
  title: "Afhalen & Bestellen",
  description:
    "Bestel telefonisch bij De Frietketel in Gent of kom langs in de Papegaaistraat 89. Groepen welkom op reservatie.",
};

export default function BestellenPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#F5D5A0]/40 blur-[120px]" />
          <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E8B86D]/20 blur-[100px]" />
        </div>
        <Burger className="pointer-events-none absolute right-[6%] bottom-[8%] h-14 opacity-[0.06]" />
        <Kroket className="pointer-events-none absolute left-[5%] bottom-[12%] w-16 opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
            Afhalen &amp; bestellen
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] text-dark">
            Bestellen bij De Frietketel
          </h1>
          <p className="mt-2 max-w-lg text-muted">
            Bel ons voor telefonische bestellingen of wandel gewoon binnen.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 overflow-hidden">
        <FrietenZak className="pointer-events-none absolute right-[-2%] bottom-[5%] h-32 opacity-[0.06] sm:h-40" />
        <Frietje className="pointer-events-none absolute left-[2%] bottom-[12%] h-10 opacity-[0.05]" rotation={-25} />
        <div className="relative grid gap-10 lg:grid-cols-3">
          {/* Bestelwijzen */}
          <div className="lg:col-span-2 space-y-8">
            {/* Telefonisch */}
            <div className="border border-border bg-bg-subtle p-6 sm:p-8">
              <p className="font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
                Telefonisch
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-lg text-dark">Bel je bestelling door</h2>
              <p className="mt-2 text-sm text-muted">
                Bel ons op voorhand en je bestelling staat klaar wanneer je aankomt.
                Zo hoef je niet te wachten.
              </p>
              <a
                href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`}
                className="mt-4 inline-flex items-center gap-2 border-2 border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark hover:border-accent-dark"
              >
                Bel {contactInfo.telefoon}
              </a>
            </div>

            {/* Ter plaatse */}
            <div className="border border-border p-6 sm:p-8">
              <p className="font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
                Ter plaatse
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-lg text-dark">Kom langs</h2>
              <p className="mt-2 text-sm text-muted">
                Wandel binnen in de Papegaaistraat 89 in Gent.
                We bedienen je ter plaatse met de grootste porties van de stad.
              </p>
              <a
                href={contactInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
              >
                Route plannen
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

            {/* Groepen */}
            <div className="border border-border p-6 sm:p-8">
              <p className="font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
                Groepen
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-lg text-dark">Reservatie voor groepen</h2>
              <p className="mt-2 text-sm text-muted">
                Met een grotere groep langskomen? Groepen zijn welkom! Stuur ons een e-mail
                om je bezoek aan te kondigen, zodat we alles klaar hebben.
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-4 inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-dark transition-colors hover:border-accent hover:text-accent"
              >
                {contactInfo.email}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <OpeningsurenCard />

            <div className="border border-border p-6">
              <h3 className="text-sm font-semibold text-dark">Goed om te weten</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-muted">
                {[
                  "Verse frieten gebakken in palmolie",
                  "De grootste porties van Gent",
                  "Huisgemaakte tartaarsaus (ook vegan)",
                  "Vegan & veggie burgers beschikbaar",
                  "Huisgemaakte garnaalkroketten",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
