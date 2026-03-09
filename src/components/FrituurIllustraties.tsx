"use client";

// Logo - frietvork met "DE FRIETKETEL" tussen lijnen
export function Logo({ className = "", variant = "full" }: { className?: string; variant?: "full" | "icon" | "compact" }) {
  if (variant === "icon") {
    // Just the fork icon
    return (
      <svg viewBox="0 0 24 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2 L6 14 Q6 20 12 20 Q18 20 18 14 L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="12" y1="20" x2="12" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="2" x2="10" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="2" x2="14" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "compact") {
    // Fork icon + name, horizontal
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 24 36" className="h-6 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2 L6 14 Q6 20 12 20 Q18 20 18 14 L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <line x1="12" y1="20" x2="12" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="10" y1="2" x2="10" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="2" x2="14" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-bold uppercase tracking-[0.15em]">De Frietketel</span>
      </div>
    );
  }

  // Full logo: fork + tagline + name between lines
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 24 36" className="h-8 w-6 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2 L6 14 Q6 20 12 20 Q18 20 18 14 L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="12" y1="20" x2="12" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="2" x2="10" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="2" x2="14" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <p className="font-[family-name:var(--font-jetbrains)] text-[9px] font-medium uppercase tracking-[0.25em] opacity-60 mb-2">
        Uw puur frituur
      </p>
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-px bg-current opacity-40" />
        <p className="my-1.5 text-base font-bold uppercase tracking-[0.2em]">
          De Frietketel
        </p>
        <div className="w-full h-px bg-current opacity-40" />
      </div>
    </div>
  );
}

// ========== BOLD CARTOON ILLUSTRATIES ==========
// Dikke zwarte outlines, felle kleuren, overdreven proporties

export function FrietenZak({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 120 160" className="h-full w-full" fill="none">
        <rect x="24" y="5" width="14" height="60" rx="5" fill="#FFD700" stroke="#1a1a1a" strokeWidth="4" transform="rotate(-12 31 35)" />
        <rect x="42" y="0" width="14" height="64" rx="5" fill="#FFC300" stroke="#1a1a1a" strokeWidth="4" transform="rotate(-3 49 32)" />
        <rect x="58" y="2" width="14" height="62" rx="5" fill="#FFD700" stroke="#1a1a1a" strokeWidth="4" transform="rotate(6 65 33)" />
        <rect x="72" y="0" width="14" height="58" rx="5" fill="#FFC300" stroke="#1a1a1a" strokeWidth="4" transform="rotate(12 79 29)" />
        <path d="M12 60 L60 155 L108 60 Z" fill="#FF4444" stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round" />
        <path d="M12 60 L108 60" stroke="#1a1a1a" strokeWidth="4" />
        <path d="M36 68 L52 128" stroke="white" strokeWidth="2" opacity="0.3" />
        <path d="M84 68 L68 128" stroke="white" strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );
}

export function Burger({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 80" className="h-full w-full" fill="none">
        <path d="M8 38 Q8 4 50 4 Q92 4 92 38 Z" fill="#FF9500" stroke="#1a1a1a" strokeWidth="4" />
        <ellipse cx="34" cy="20" rx="4" ry="3" fill="#FFF5CC" stroke="#1a1a1a" strokeWidth="1.5" />
        <ellipse cx="56" cy="16" rx="4" ry="3" fill="#FFF5CC" stroke="#1a1a1a" strokeWidth="1.5" />
        <ellipse cx="72" cy="22" rx="4" ry="3" fill="#FFF5CC" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M4 40 Q16 50 28 40 Q40 50 52 40 Q64 50 76 40 Q88 50 96 42" fill="#44CC44" stroke="#1a1a1a" strokeWidth="3.5" />
        <rect x="8" y="44" width="84" height="14" rx="4" fill="#7B3F00" stroke="#1a1a1a" strokeWidth="4" />
        <path d="M6 48 L12 56 L88 56 L94 48" fill="#FFD700" stroke="#1a1a1a" strokeWidth="3" />
        <path d="M10 58 L10 66 Q10 74 24 74 L76 74 Q90 74 90 66 L90 58 Z" fill="#FF9500" stroke="#1a1a1a" strokeWidth="4" />
      </svg>
    </div>
  );
}

export function Frietje({ className = "", rotation = 0 }: { className?: string; rotation?: number }) {
  return (
    <div className={className} style={{ transform: `rotate(${rotation}deg)` }}>
      <svg viewBox="0 0 20 60" className="h-full w-full" fill="none">
        <rect x="2" y="1" width="16" height="58" rx="5" fill="#FFD700" stroke="#1a1a1a" strokeWidth="3.5" />
        <rect x="5" y="6" width="4" height="18" rx="2" fill="white" opacity="0.3" />
      </svg>
    </div>
  );
}

export function Ketchup({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 50 100" className="h-full w-full" fill="none">
        <rect x="17" y="1" width="16" height="12" rx="4" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
        <rect x="19" y="13" width="12" height="8" fill="#eee" stroke="#1a1a1a" strokeWidth="3" />
        <path d="M12 21 L12 86 Q12 98 25 98 Q38 98 38 86 L38 21 Z" fill="#FF4444" stroke="#1a1a1a" strokeWidth="4" />
        <rect x="15" y="46" width="20" height="26" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="3" />
      </svg>
    </div>
  );
}

export function Kroket({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 80 36" className="h-full w-full" fill="none">
        <rect x="3" y="3" width="74" height="30" rx="15" fill="#FF9500" stroke="#1a1a1a" strokeWidth="4" />
        <rect x="12" y="10" width="22" height="8" rx="4" fill="white" opacity="0.2" />
      </svg>
    </div>
  );
}

export function Bicky({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 90 74" className="h-full w-full" fill="none">
        <path d="M8 30 Q8 4 45 4 Q82 4 82 30 Z" fill="#CC6600" stroke="#1a1a1a" strokeWidth="4" />
        <path d="M14 32 Q20 38 16 32 Q24 40 20 32 Q30 38 26 32" stroke="#FF9500" strokeWidth="3" fill="none" />
        <rect x="8" y="34" width="74" height="12" rx="5" fill="#FFD700" stroke="#1a1a1a" strokeWidth="3.5" />
        <rect x="10" y="48" width="70" height="12" rx="4" fill="#7B3F00" stroke="#1a1a1a" strokeWidth="3.5" />
        <path d="M12 62 L12 66 Q12 72 24 72 L66 72 Q78 72 78 66 L78 62 Z" fill="#CC6600" stroke="#1a1a1a" strokeWidth="4" />
      </svg>
    </div>
  );
}

export function Mayo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 50 30" className="h-full w-full" fill="none">
        <ellipse cx="25" cy="18" rx="22" ry="10" fill="#FFF9DB" stroke="#1a1a1a" strokeWidth="3.5" />
        <ellipse cx="18" cy="14" rx="6" ry="4" fill="white" opacity="0.5" />
      </svg>
    </div>
  );
}

export function Ketel({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 64 54" className="h-full w-full" fill="none">
        <path d="M8 18 L8 38 Q8 50 22 50 L42 50 Q56 50 56 38 L56 18 Z" fill="#AAAAAA" stroke="#1a1a1a" strokeWidth="4" />
        <path d="M4 12 Q4 18 8 18 L56 18 Q60 18 60 12 Q60 4 52 4 L12 4 Q4 4 4 12Z" fill="#888888" stroke="#1a1a1a" strokeWidth="4" />
        <path d="M22 -2 Q25 -6 28 -2" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M34 -4 Q37 -8 40 -4" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
