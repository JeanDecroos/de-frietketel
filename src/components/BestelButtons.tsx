import { contactInfo } from "@/data/menu";

interface BestelButtonsProps {
  variant?: "compact" | "full";
}

export default function BestelButtons({ variant = "full" }: BestelButtonsProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-col gap-2 sm:flex-row">
        <a
          href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center gap-2 border-2 border-accent bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark hover:border-accent-dark"
        >
          Bel {contactInfo.telefoon}
        </a>
        <a
          href={contactInfo.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-border px-4 py-2 text-sm font-medium text-dark transition-colors hover:border-accent hover:text-accent"
        >
          Route plannen
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <a
        href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`}
        className="group flex flex-col border border-border bg-bg-subtle p-8 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/5"
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
          telefonisch
        </span>
        <span className="mt-2 font-[family-name:var(--font-display)] text-xl text-dark">
          Bel ons
        </span>
        <span className="mt-2 text-sm leading-relaxed text-muted">
          Bel vooraf en je bestelling staat klaar bij aankomst
        </span>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          {contactInfo.telefoon}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </span>
      </a>
      <a
        href={contactInfo.googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col border border-border p-8 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/5"
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
          ter plaatse
        </span>
        <span className="mt-2 font-[family-name:var(--font-display)] text-xl text-dark">
          Kom langs
        </span>
        <span className="mt-2 text-sm leading-relaxed text-muted">
          {contactInfo.adres}, {contactInfo.postcode} {contactInfo.stad}
        </span>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Route plannen
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </span>
      </a>
    </div>
  );
}
