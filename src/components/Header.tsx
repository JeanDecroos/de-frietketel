"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./FrituurIllustraties";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/bestellen", label: "Bestellen" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-bg/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          data-testid="logo"
          className="inline-flex items-center gap-2 text-dark transition-colors hover:text-accent"
        >
          <Logo variant="icon" className="h-7 w-5" />
          <span className="text-sm font-bold uppercase tracking-[0.12em]">De Frietketel</span>
        </Link>

        {/* Desktop nav */}
        <nav data-testid="desktop-nav" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-base transition-colors ${
                pathname === link.href
                  ? "text-accent font-medium"
                  : "text-muted hover:text-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/bestellen"
            className="ml-3 bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Online bestellen
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center text-muted hover:text-dark md:hidden"
          aria-label="Menu openen"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav data-testid="mobile-nav" className="border-t border-border bg-bg/95 backdrop-blur-md px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-base font-medium transition-colors border-b border-border/50 ${
                pathname === link.href
                  ? "text-accent"
                  : "text-muted hover:text-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/bestellen"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block bg-accent px-4 py-2.5 text-center text-base font-medium text-white"
          >
            Online bestellen
          </Link>
        </nav>
      )}
    </header>
  );
}
