import Link from "next/link";
import { contactInfo, openingsuren } from "@/data/menu";
import { Logo } from "./FrituurIllustraties";

export default function Footer() {
  const openDagen = openingsuren.filter((d) => d.uren !== "Gesloten");

  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand with full logo */}
          <div>
            <Link href="/" className="inline-block text-white">
              <Logo variant="full" className="w-44" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/40">
              De grootste porties van Gent. Verse frieten gebakken in palmolie,
              met vegan opties en huisgemaakte sauzen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
              Navigatie
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu & Prijzen" },
                { href: "/bestellen", label: "Online bestellen" },
                { href: "/over-ons", label: "Over ons" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
              Openingsuren
            </h3>
            <ul className="space-y-1.5 text-sm">
              {openDagen.map((dag) => (
                <li key={dag.dag} className="flex justify-between gap-4">
                  <span className="text-white/70">{dag.dag}</span>
                  <span className="text-white/40">{dag.uren}</span>
                </li>
              ))}
              <li className="flex justify-between gap-4 text-white/20">
                <span>Weekend</span>
                <span>Gesloten</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/40">
              <li>{contactInfo.adres}, {contactInfo.postcode} {contactInfo.stad}</li>
              <li>
                <a
                  href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {contactInfo.telefoon}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 px-2.5 py-1 text-xs text-white/40 transition-colors hover:border-white/30 hover:text-white/70"
              >
                Facebook
              </a>
              {contactInfo.twitter && (
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 px-2.5 py-1 text-xs text-white/40 transition-colors hover:border-white/30 hover:text-white/70"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/20">
          &copy; {new Date().getFullYear()} De Frietketel. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
