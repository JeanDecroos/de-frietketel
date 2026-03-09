"use client";

import { useState } from "react";
import { menuData } from "@/data/menu";

interface MenuSectionProps {
  toonAlles?: boolean;
}

export default function MenuSection({ toonAlles = true }: MenuSectionProps) {
  const [actieveCategorie, setActieveCategorie] = useState(menuData[0].slug);

  const categorieen = toonAlles ? menuData : menuData.slice(0, 3);
  const actieveItems = menuData.find((c) => c.slug === actieveCategorie);

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-8 flex gap-1 overflow-x-auto pb-2">
        {categorieen.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActieveCategorie(cat.slug)}
            className={`shrink-0 px-3 py-1.5 text-sm transition-colors ${
              actieveCategorie === cat.slug
                ? "bg-accent text-white font-medium"
                : "text-muted hover:text-dark hover:bg-bg-subtle"
            }`}
          >
            {cat.naam}
          </button>
        ))}
      </div>

      {/* Items */}
      {actieveItems && (
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {actieveItems.items.map((item) => (
            <div
              key={item.naam}
              className="flex items-start justify-between gap-3 bg-bg p-4 transition-colors hover:bg-bg-subtle"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-dark">{item.naam}</span>
                  {item.populair && (
                    <span className="bg-accent-light/50 px-1.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[9px] font-medium uppercase tracking-wider text-accent-dark">
                      populair
                    </span>
                  )}
                  {item.vegan && (
                    <span className="bg-green-100 px-1.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[9px] font-medium uppercase tracking-wider text-green-700">
                      vegan
                    </span>
                  )}
                </div>
                {item.beschrijving && (
                  <p className="mt-0.5 text-xs text-muted">{item.beschrijving}</p>
                )}
              </div>
              <span className="shrink-0 font-[family-name:var(--font-jetbrains)] text-sm font-medium text-accent">
                &euro;{item.prijs.toFixed(2).replace(".", ",")}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
