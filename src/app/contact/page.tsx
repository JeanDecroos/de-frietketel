import type { Metadata } from "next";
import ContactInfo from "@/components/ContactInfo";
import OpeningsurenCard from "@/components/OpeningsurenCard";
import BestelButtons from "@/components/BestelButtons";
import { Kroket, Frietje, Ketel, Burger } from "@/components/FrituurIllustraties";
import { contactInfo } from "@/data/menu";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met De Frietketel in Gent. Papegaaistraat 89, 9000 Gent. Telefoon: 09 329 40 22.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#F5D5A0]/40 blur-[120px]" />
          <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E8B86D]/20 blur-[100px]" />
        </div>
        <Ketel className="pointer-events-none absolute right-[6%] bottom-[8%] h-12 opacity-[0.06]" />
        <Burger className="pointer-events-none absolute left-[5%] bottom-[10%] h-12 opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
            Neem contact op
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] text-dark">
            Contact
          </h1>
          <p className="mt-2 max-w-lg text-muted">
            Vragen, opmerkingen of een groepsreservatie? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 overflow-hidden">
        <Kroket className="pointer-events-none absolute right-[0%] bottom-[6%] w-20 opacity-[0.06] sm:w-28" />
        <Frietje className="pointer-events-none absolute left-[3%] bottom-[10%] h-9 opacity-[0.05]" rotation={-18} />
        <div className="relative grid gap-10 lg:grid-cols-3">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border border-border p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg text-dark">Contactgegevens</h2>
              <p className="mt-1 mb-6 text-sm text-muted">
                Je kan ons bereiken via telefoon, e-mail, social media of gewoon langskomen
              </p>
              <ContactInfo />
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-border">
              <iframe
                src={contactInfo.googleMapsEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie De Frietketel op Google Maps"
              />
            </div>

            {/* Route info */}
            <div className="grid gap-px bg-border sm:grid-cols-3">
              {[
                { label: "fiets", titel: "Met de fiets", tekst: "Fietsenstalling in de buurt" },
                { label: "bus/tram", titel: "Openbaar vervoer", tekst: "Tramhaltes op wandelafstand" },
                { label: "auto", titel: "Met de auto", tekst: "Let op: Gent lage-emissiezone" },
              ].map((item) => (
                <div key={item.label} className="bg-bg p-5">
                  <p className="font-[family-name:var(--font-jetbrains)] text-[10px] font-medium uppercase tracking-wider text-accent">
                    {item.label}
                  </p>
                  <h3 className="mt-1.5 text-sm font-semibold text-dark">{item.titel}</h3>
                  <p className="mt-1 text-xs text-muted">{item.tekst}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <OpeningsurenCard />

            <div className="border border-border p-6">
              <h3 className="text-sm font-semibold text-dark">Snel bestellen?</h3>
              <p className="mt-1 mb-4 text-xs text-muted">
                Bel ons of plan je route
              </p>
              <BestelButtons variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
