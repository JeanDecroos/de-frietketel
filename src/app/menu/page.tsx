import type { Metadata } from "next";
import Link from "next/link";
import MenuSection from "@/components/MenuSection";
import { Frietje, Burger, FrietenZak, Ketchup, Mayo } from "@/components/FrituurIllustraties";

export const metadata: Metadata = {
  title: "Menu & Prijzen",
  description:
    "Bekijk het volledige menu van De Frietketel in Gent. Verse frieten, krokante snacks, burgers, mitraillettes, vegan opties en huisgemaakte sauzen.",
};

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#F5D5A0]/40 blur-[120px]" />
          <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E8B86D]/20 blur-[100px]" />
        </div>
        <FrietenZak className="pointer-events-none absolute right-[5%] bottom-[5%] h-28 opacity-[0.06] sm:h-36" />
        <Frietje className="pointer-events-none absolute left-[6%] bottom-[15%] h-8 opacity-[0.05]" rotation={-20} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
            Ons aanbod
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] text-dark">
            Menu &amp; Prijzen
          </h1>
          <p className="mt-2 max-w-lg text-muted">
            Verse frieten gebakken in palmolie, krokante snacks, huisgemaakte garnaalkroketten en sauzen. Ook vegan en veggie opties.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 overflow-hidden">
        <Ketchup className="pointer-events-none absolute right-[-1%] top-[5%] h-16 opacity-[0.05]" />
        <Mayo className="pointer-events-none absolute left-[2%] top-[40%] w-14 opacity-[0.05]" />
        <MenuSection toonAlles />

        {/* Allergie info */}
        <div className="mt-12 border border-border bg-bg-subtle p-5 text-sm">
          <p className="font-medium text-dark">Allergenen &amp; dieet</p>
          <p className="mt-1 text-muted">
            Heb je een allergie of specifieke dieetwensen? Laat het ons weten bij je bestelling.
            We hebben ook vegan en veggie opties beschikbaar.
          </p>
        </div>

        {/* CTA */}
        <div className="relative mt-12 flex flex-col items-center gap-4 bg-dark p-10 text-center sm:flex-row sm:justify-between sm:text-left overflow-hidden">
          <Burger className="pointer-events-none absolute right-[5%] bottom-[8%] h-14 opacity-[0.06]" />
          <Frietje className="pointer-events-none absolute left-[8%] bottom-[12%] h-8 opacity-[0.05]" rotation={-15} />
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-white">Zin gekregen?</h2>
            <p className="mt-1 text-sm text-white/40">Bel ons en je bestelling staat klaar bij aankomst</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 border-2 border-accent bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark hover:border-accent-dark"
          >
            Contacteer ons
          </Link>
        </div>
      </section>
    </>
  );
}
