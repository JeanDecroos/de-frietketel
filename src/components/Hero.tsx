import Link from "next/link";
import { Logo, FrietenZak, Burger, Frietje } from "./FrituurIllustraties";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-4 pt-14 sm:px-6">
      {/* Warm gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#F5D5A0]/50 blur-[120px]" />
        <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[#E8B86D]/30 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 h-[300px] w-[300px] rounded-full bg-[#F0C68A]/40 blur-[100px]" />
        <div className="absolute left-1/3 top-1/4 h-[200px] w-[200px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      {/* Bold cartoon illustrations */}
      <FrietenZak className="pointer-events-none absolute right-[4%] bottom-[12%] h-32 opacity-[0.08] sm:h-40 lg:right-[8%] lg:h-48" />
      <Burger className="pointer-events-none absolute left-[3%] bottom-[8%] h-14 opacity-[0.07] sm:left-[6%] sm:h-16 lg:left-[10%]" />
      <Frietje className="pointer-events-none absolute left-[8%] top-[35%] h-8 opacity-[0.06]" rotation={-25} />
      <Frietje className="pointer-events-none absolute right-[18%] top-[28%] h-7 opacity-[0.05]" rotation={15} />

      {/* Fork icon above headline */}
      <Logo variant="icon" className="relative mb-6 h-10 w-7 text-accent/40" />

      <div className="relative max-w-3xl text-center">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,8vw,4.5rem)] leading-[1.05] tracking-[-0.5px] text-dark">
          De grootste porties.
          <br />
          Huisgemaakte sauzen.
          <br />
          <span className="inline-block">
            De frituur van{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-accent">Gent</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-accent-light/60 -z-0" />
            </span>
            .
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
          Verse frieten gebakken in palmolie, krokante snacks en vegan opties.
          Met onze huisgemaakte tartaarsaus en garnaalkroketten.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-dark hover:border-accent-dark"
          >
            Bekijk ons menu
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <Link
            href="/bestellen"
            className="inline-flex items-center gap-2 border-2 border-dark/20 bg-bg/80 px-6 py-3 text-base font-medium text-dark backdrop-blur-sm transition-colors hover:border-dark"
          >
            Bestellen
          </Link>
        </div>
      </div>

      {/* Opening hours badge */}
      <div className="relative mt-16 inline-flex flex-col items-center gap-1.5 border border-border bg-bg/80 px-5 py-3 backdrop-blur-sm sm:flex-row sm:gap-3">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <div className="text-sm">
            <span className="font-medium text-dark">Ma&ndash;Vr</span>
            <span className="mx-2 text-border">|</span>
            <span className="text-muted">11:15&ndash;14:15 &amp; 17:15&ndash;23:00</span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:border-l sm:border-border sm:pl-3">
          <div className="h-2 w-2 rounded-full bg-red-400 sm:block hidden" />
          <span className="text-sm text-muted/60">Za&ndash;Zo gesloten</span>
        </div>
      </div>
    </section>
  );
}
