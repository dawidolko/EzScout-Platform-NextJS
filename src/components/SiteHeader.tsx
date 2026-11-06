'use client';

import { useEffect, useState } from 'react';
import type { Tresc } from './tresc';

export function SiteHeader({ t }: { t: Tresc }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('');

  /*
   * Escape closes the phone menu. Without it the only way out is the button,
   * which leaves a keyboard user with no way to step back.
   */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  /* The tab of the section in view comes forward, like a folder opened at that divider. */
  useEffect(() => {
    const sections = ['oferta', 'jak-dzialamy', 'skutecznosc', 'faq', 'kontakt'].flatMap((id) => {
      const el = document.getElementById(id);
      return el ? [el] : [];
    });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(`#${entry.target.id}`);
          else setCurrent((c) => (c === `#${entry.target.id}` ? '' : c));
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: '#oferta', label: t.nav.oferta },
    { href: '#jak-dzialamy', label: t.nav.jak },
    { href: '#skutecznosc', label: t.nav.skutecznosc },
    { href: '#faq', label: t.nav.faq },
  ];

  /* The language switch is a plain link, so it works without JavaScript and is indexed separately. */
  const languageLink = (
    <a
      href={t.jezyk.drugiHref}
      hrefLang={t.jezyk.drugiLang}
      lang={t.jezyk.drugiLang}
      aria-label={`${t.jezyk.drugi}: ${t.jezyk.etykieta}`}
      className="lang-label"
    >
      {t.jezyk.drugi}
    </a>
  );

  return (
    <header className="masthead">
      <div className="wrap masthead-row">
        <a href={t.sciezka} className="wordmark">
          EzScout
        </a>

        <nav aria-label={t.menu.etykieta} className="tabs">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="tab" aria-current={current === l.href ? 'location' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#kontakt" className="tab tab--order" aria-current={current === '#kontakt' ? 'location' : undefined}>
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>

        <div className="masthead-tools">
          {languageLink}
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-mobilne"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.menu.zamknij : t.menu.otworz}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobilne" aria-label={t.menu.etykietaMobil} className="drawer">
          <ul className="wrap">
            {[...links, { href: '#kontakt', label: t.nav.cta }].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
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
