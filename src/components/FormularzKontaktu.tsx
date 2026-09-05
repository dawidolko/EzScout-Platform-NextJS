'use client';

import { useState } from 'react';
import type { Tresc } from './tresc';

type Bledy = Partial<Record<'imie' | 'email' | 'wiadomosc', string>>;

export function FormularzKontaktu({ t }: { t: Tresc }) {
  const [bledy, setBledy] = useState<Bledy>({});
  const [wyslane, setWyslane] = useState(false);

  /*
   * Walidacja po stronie klienta, bo serwis jest statyczny i nie ma dokad
   * wyslac danych. Komunikaty sa tekstem powiazanym z polem przez
   * aria-describedby — samo czerwone obramowanie nie niesie informacji dla
   * osoby, ktora go nie widzi.
   */
  function przy(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dane = new FormData(e.currentTarget);
    const nowe: Bledy = {};

    const imie = String(dane.get('imie') ?? '').trim();
    const email = String(dane.get('email') ?? '').trim();
    const wiadomosc = String(dane.get('wiadomosc') ?? '').trim();

    if (imie.length < 2) nowe.imie = t.kontakt.bledy.imie;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) nowe.email = t.kontakt.bledy.email;
    if (wiadomosc.length < 20) nowe.wiadomosc = t.kontakt.bledy.wiadomosc;

    setBledy(nowe);
    setWyslane(Object.keys(nowe).length === 0);
  }

  const klasaPola =
    'mt-1.5 w-full rounded-md border bg-ink-900 px-3.5 py-2.5 text-ink-100 ' +
    'placeholder:text-ink-400 focus:border-amber-400';

  return (
    <form noValidate onSubmit={przy} className="mt-8 space-y-5">
      <div>
        <label htmlFor="imie" className="text-sm font-semibold text-ink-100">
          {t.kontakt.imie} <span className="text-amber-400">*</span>
        </label>
        <input
          id="imie"
          name="imie"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(bledy.imie)}
          aria-describedby={bledy.imie ? 'imie-blad' : undefined}
          className={`${klasaPola} ${bledy.imie ? 'border-red-400' : 'border-ink-600'}`}
        />
        {bledy.imie && (
          <p id="imie-blad" className="mt-1.5 text-sm font-medium text-red-400">
            {bledy.imie}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-ink-100">
          {t.kontakt.email} <span className="text-amber-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(bledy.email)}
          aria-describedby={bledy.email ? 'email-blad' : undefined}
          className={`${klasaPola} ${bledy.email ? 'border-red-400' : 'border-ink-600'}`}
        />
        {bledy.email && (
          <p id="email-blad" className="mt-1.5 text-sm font-medium text-red-400">
            {bledy.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="wiadomosc" className="text-sm font-semibold text-ink-100">
          {t.kontakt.wiadomosc} <span className="text-amber-400">*</span>
        </label>
        <textarea
          id="wiadomosc"
          name="wiadomosc"
          rows={5}
          aria-invalid={Boolean(bledy.wiadomosc)}
          aria-describedby={bledy.wiadomosc ? 'wiadomosc-blad' : 'wiadomosc-podpowiedz'}
          className={`${klasaPola} ${bledy.wiadomosc ? 'border-red-400' : 'border-ink-600'}`}
        />
        {bledy.wiadomosc ? (
          <p id="wiadomosc-blad" className="mt-1.5 text-sm font-medium text-red-400">
            {bledy.wiadomosc}
          </p>
        ) : (
          <p id="wiadomosc-podpowiedz" className="mt-1.5 text-sm text-ink-400">
            {t.kontakt.podpowiedz}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-amber-500 px-6 py-3 font-bold text-ink-950 transition hover:bg-amber-400"
      >
        {t.kontakt.wyslij}
      </button>

      {/* Komunikat po wyslaniu jest ogloszany czytnikom ekranu. */}
      <p aria-live="polite" className="min-h-6 text-sm">
        {wyslane && <span className="font-semibold text-grass-500">{t.kontakt.sukces}</span>}
      </p>
    </form>
  );
}
