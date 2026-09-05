'use client';

import { useEffect, useState } from 'react';

const LINKI = [
  { href: '#oferta', label: 'Oferta' },
  { href: '#jak-dzialamy', label: 'Jak działamy' },
  { href: '#skutecznosc', label: 'Skuteczność' },
  { href: '#faq', label: 'FAQ' },
];

export function SiteHeader() {
  const [otwarte, setOtwarte] = useState(false);

  /*
   * Escape zamyka menu na telefonie. Bez tego jedynym wyjsciem jest trafienie
   * w przycisk — a osoba poruszajaca sie klawiatura nie ma jak sie wycofac.
   */
  useEffect(() => {
    if (!otwarte) return;
    const naKlawisz = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOtwarte(false);
    };
    document.addEventListener('keydown', naKlawisz);
    return () => document.removeEventListener('keydown', naKlawisz);
  }, [otwarte]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/80 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#main-content" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-md bg-amber-500 font-display text-xl font-bold text-ink-950"
          >
            EZ
          </span>
          <span className="font-display text-2xl font-bold tracking-wide text-ink-50">
            EzScout
          </span>
        </a>

        <nav aria-label="Główna" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {LINKI.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-semibold text-ink-300 transition hover:text-amber-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                className="rounded-md bg-amber-500 px-4 py-2 text-sm font-bold text-ink-950 transition hover:bg-amber-400"
              >
                Zamów raport
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden rounded-md border border-ink-600 px-3 py-2 text-sm font-semibold text-ink-100"
          aria-expanded={otwarte}
          aria-controls="menu-mobilne"
          onClick={() => setOtwarte((v) => !v)}
        >
          {otwarte ? 'Zamknij' : 'Menu'}
        </button>
      </div>

      {otwarte && (
        <nav
          id="menu-mobilne"
          aria-label="Główna (telefon)"
          className="border-t border-ink-700 bg-ink-900 md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {[...LINKI, { href: '#kontakt', label: 'Zamów raport' }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOtwarte(false)}
                  className="block border-b border-ink-800 py-3 font-semibold text-ink-100 last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
