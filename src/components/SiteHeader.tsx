'use client';

import { useEffect, useState } from 'react';
import type { Tresc } from './tresc';

export function SiteHeader({ t }: { t: Tresc }) {
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

  const linki = [
    { href: '#oferta', label: t.nav.oferta },
    { href: '#jak-dzialamy', label: t.nav.jak },
    { href: '#skutecznosc', label: t.nav.skutecznosc },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/80 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={t.sciezka} className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-md bg-amber-500 font-display text-xl font-bold text-ink-950"
          >
            EZ
          </span>
          <span className="font-display text-2xl font-bold tracking-wide text-ink-50">EzScout</span>
        </a>

        <nav aria-label={t.menu.etykieta} className="hidden md:block">
          <ul className="flex items-center gap-7">
            {linki.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold text-ink-300 transition hover:text-amber-400">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                className="rounded-md bg-amber-500 px-4 py-2 text-sm font-bold text-ink-950 transition hover:bg-amber-400"
              >
                {t.nav.cta}
              </a>
            </li>
            <li>
              {/* Przelacznik jezyka jest zwyklym linkiem do drugiej trasy —
                  dziala bez JavaScriptu i jest indeksowany osobno. */}
              <a
                href={t.jezyk.drugiHref}
                hrefLang={t.jezyk.drugiLang}
                lang={t.jezyk.drugiLang}
                aria-label={t.jezyk.etykieta}
                className="rounded-md border border-ink-600 px-3 py-1.5 text-sm font-bold text-ink-100 transition hover:border-amber-400 hover:text-amber-400"
              >
                {t.jezyk.drugi}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={t.jezyk.drugiHref}
            hrefLang={t.jezyk.drugiLang}
            lang={t.jezyk.drugiLang}
            aria-label={t.jezyk.etykieta}
            className="rounded-md border border-ink-600 px-3 py-2 text-sm font-bold text-ink-100"
          >
            {t.jezyk.drugi}
          </a>
          <button
            type="button"
            className="rounded-md border border-ink-600 px-3 py-2 text-sm font-semibold text-ink-100"
            aria-expanded={otwarte}
            aria-controls="menu-mobilne"
            onClick={() => setOtwarte((v) => !v)}
          >
            {otwarte ? t.menu.zamknij : t.menu.otworz}
          </button>
        </div>
      </div>

      {otwarte && (
        <nav id="menu-mobilne" aria-label={t.menu.etykietaMobil} className="border-t border-ink-700 bg-ink-900 md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {[...linki, { href: '#kontakt', label: t.nav.cta }].map((l) => (
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
