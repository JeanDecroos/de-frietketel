import type { Metadata } from "next";
import Link from "next/link";
import { Ketel, Frietje, Burger, FrietenZak, Mayo, Bicky } from "@/components/FrituurIllustraties";
import { contactInfo } from "@/data/menu";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Leer De Frietketel kennen — de grootste porties van Gent, met vegan opties, huisgemaakte sauzen en verse frieten in palmolie.",
};

export default function OverOnsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#F5D5A0]/40 blur-[120px]" />
          <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E8B86D]/20 blur-[100px]" />
        </div>
        <FrietenZak className="pointer-events-none absolute right-[5%] bottom-[5%] h-28 opacity-[0.06] sm:h-32" />
        <Frietje className="pointer-events-none absolute left-[7%] bottom-[10%] h-8 opacity-[0.05]" rotation={15} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
            Ons verhaal
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] text-dark">
            Over De Frietketel
          </h1>
          <p className="mt-2 max-w-lg text-muted">
            De grootste porties van Gent, met liefde bereid in de Papegaaistraat.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 overflow-hidden">
        <Mayo className="pointer-events-none absolute right-[1%] top-[8%] w-14 opacity-[0.05]" />
        <Bicky className="pointer-events-none absolute left-[2%] bottom-[15%] h-12 opacity-[0.05]" />
        <Burger className="pointer-events-none absolute right-[3%] bottom-[30%] h-12 opacity-[0.05]" />
        <div className="relative grid gap-12 lg:grid-cols-5">
          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-dark">Ons verhaal</h2>
            <p className="mt-3 leading-relaxed text-muted">
              De Frietketel is een begrip in Gent. Gelegen in de Papegaaistraat, in het hart van de stad,
              staan we bekend om onze royale porties en de kwaliteit van onze frieten.
              Niet voor niets zeggen ze dat je bij ons de grootste porties van Gent krijgt.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Onze frieten worden elke dag vers bereid uit echte aardappelen en gebakken in verse palmolie.
              Dat maakt het verschil: krokant van buiten, zacht van binnen, met die onmiskenbare smaak
              die je alleen bij een echte Gentse frituur vindt.
            </p>

            <h2 className="mt-12 font-[family-name:var(--font-display)] text-xl text-dark">Waar we voor staan</h2>
            <div className="mt-6 grid gap-px bg-border sm:grid-cols-2">
              {[
                {
                  label: "porties",
                  titel: "De grootste porties",
                  tekst: "Bekend als de frituur met de grootste porties van heel Gent. Je krijgt waar voor je geld.",
                },
                {
                  label: "vegan",
                  titel: "Vegan & veggie",
                  tekst: "Ruim aanbod aan plantaardige opties: vegan burgers, vegan tartaar en veggie mitraillettes.",
                },
                {
                  label: "huisgemaakt",
                  titel: "Huisgemaakte sauzen",
                  tekst: "Onze tartaarsaus is huisgemaakt volgens een geheim recept. Ook beschikbaar in een vegan versie.",
                },
                {
                  label: "kwaliteit",
                  titel: "Verse palmolie",
                  tekst: "We bakken onze frieten in verse palmolie, voor die perfecte krokante bite.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-bg p-6">
                  <p className="font-[family-name:var(--font-jetbrains)] text-[10px] font-medium uppercase tracking-wider text-accent">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-semibold tracking-[-0.3px] text-dark">{item.titel}</h3>
                  <p className="mt-1 text-sm text-muted">{item.tekst}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-[family-name:var(--font-display)] text-xl text-dark">Specialiteiten</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Naast onze verse frieten zijn we trots op onze huisgemaakte garnaalkroketten,
              bereid met verse garnalen. Onze mitraillettes &mdash; halve of volledige baguettes
              gevuld met frieten, vlees naar keuze en saus &mdash; zijn een echte
              Belgische klassieker die je bij ons in alle varianten kan krijgen, inclusief veggie.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Groepen zijn altijd welkom bij De Frietketel. Stuur ons een e-mail
              op <a href={`mailto:${contactInfo.email}`} className="font-medium text-accent hover:text-accent-dark transition-colors">{contactInfo.email}</a> om
              je bezoek aan te kondigen.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            {/* Quick facts */}
            <div className="border border-border bg-bg-subtle p-6">
              <h3 className="text-sm font-semibold text-dark">Snel overzicht</h3>
              <dl className="mt-4 space-y-4 text-sm">
                {[
                  { dt: "Locatie", dd: "Papegaaistraat 89, 9000 Gent" },
                  { dt: "Bekend voor", dd: "Grootste porties van Gent" },
                  { dt: "Open", dd: "Ma-Vr 11:15-14:15 & 17:15-23:00" },
                ].map((item) => (
                  <div key={item.dt}>
                    <dt className="font-[family-name:var(--font-jetbrains)] text-[10px] font-medium uppercase tracking-wider text-accent">
                      {item.dt}
                    </dt>
                    <dd className="mt-0.5 font-medium text-dark">{item.dd}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-[family-name:var(--font-jetbrains)] text-[10px] font-medium uppercase tracking-wider text-accent">
                    Telefoon
                  </dt>
                  <dd className="mt-0.5">
                    <a href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`} className="font-medium text-dark hover:text-accent transition-colors">
                      {contactInfo.telefoon}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-[family-name:var(--font-jetbrains)] text-[10px] font-medium uppercase tracking-wider text-accent">
                    E-mail
                  </dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${contactInfo.email}`} className="font-medium text-dark hover:text-accent transition-colors">
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Volg ons */}
            <div className="bg-dark p-6 text-white">
              <h3 className="text-sm font-semibold">Volg ons</h3>
              <p className="mt-1 text-sm text-white/40">
                Blijf op de hoogte van acties en nieuwtjes
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent"
                >
                  Facebook
                </a>
                {contactInfo.twitter && (
                  <a
                    href={contactInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-16 flex flex-col items-center gap-4 bg-dark p-10 text-center sm:flex-row sm:justify-between sm:text-left overflow-hidden">
          <Ketel className="pointer-events-none absolute right-[5%] bottom-[8%] h-12 opacity-[0.07]" />
          <Frietje className="pointer-events-none absolute left-[8%] bottom-[15%] h-7 opacity-[0.05]" rotation={20} />
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-white">Kom eens langs!</h2>
            <p className="mt-1 text-sm text-white/40">We verwelkomen je graag met de grootste porties van Gent</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/menu"
              className="border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
            >
              Bekijk menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark hover:border-accent-dark"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
