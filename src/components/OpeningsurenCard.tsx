import { openingsuren } from "@/data/menu";

export default function OpeningsurenCard() {
  const nu = new Date();
  const dagIndex = nu.getDay();
  const dagNamen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
  const vandaag = dagNamen[dagIndex];

  return (
    <div className="border border-border bg-bg-subtle p-6">
      <h3 className="mb-1 font-[family-name:var(--font-display)] text-lg text-dark">
        Openingsuren
      </h3>
      <p className="mb-4 text-xs text-muted">Wanneer je bij ons terecht kan</p>

      <ul className="space-y-1.5">
        {openingsuren.map((dag) => (
          <li
            key={dag.dag}
            className={`flex items-center justify-between py-1.5 text-sm ${
              dag.dag === vandaag
                ? "font-medium text-accent"
                : dag.uren === "Gesloten"
                ? "text-muted/50"
                : "text-muted"
            }`}
          >
            <span className="flex items-center gap-2">
              {dag.dag === vandaag && (
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              )}
              {dag.dag}
            </span>
            <span>{dag.uren}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
