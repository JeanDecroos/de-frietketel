import { contactInfo } from "@/data/menu";

export default function ContactInfo() {
  const items = [
    {
      label: "Adres",
      content: (
        <>
          <p className="text-dark">{contactInfo.adres}</p>
          <p className="text-dark">{contactInfo.postcode} {contactInfo.stad}</p>
          <a
            href={contactInfo.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm text-accent hover:text-accent-dark transition-colors"
          >
            Route plannen
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </>
      ),
    },
    {
      label: "Telefoon",
      content: (
        <a
          href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`}
          className="text-lg font-medium text-dark hover:text-accent transition-colors"
        >
          {contactInfo.telefoon}
        </a>
      ),
    },
    {
      label: "E-mail",
      content: (
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-dark hover:text-accent transition-colors"
        >
          {contactInfo.email}
        </a>
      ),
    },
    {
      label: "Social",
      content: (
        <div className="flex gap-2">
          <a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Facebook
          </a>
          {contactInfo.twitter && (
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Twitter
            </a>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.label}>
          <p className="mb-1 font-[family-name:var(--font-jetbrains)] text-xs font-medium uppercase tracking-wider text-accent">
            {item.label}
          </p>
          {item.content}
        </div>
      ))}
    </div>
  );
}
