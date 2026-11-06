'use client';

import { useState } from 'react';
import type { Tresc } from './tresc';

type Errors = Partial<Record<'imie' | 'email' | 'wiadomosc', string>>;

export function FormularzKontaktu({ t }: { t: Tresc }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  /*
   * Validation runs in the browser because the site is static and has nowhere
   * to send data. Messages are text tied to the field with aria-describedby,
   * since a red line alone tells nothing to someone who cannot see it.
   */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};

    const name = String(data.get('imie') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('wiadomosc') ?? '').trim();

    if (name.length < 2) next.imie = t.kontakt.bledy.imie;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = t.kontakt.bledy.email;
    if (message.length < 20) next.wiadomosc = t.kontakt.bledy.wiadomosc;

    setErrors(next);
    setSent(Object.keys(next).length === 0);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="order-form">
      <div className="field">
        <label htmlFor="imie">
          {t.kontakt.imie} <span className="field-mark">*</span>
        </label>
        <input
          id="imie"
          name="imie"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.imie)}
          aria-describedby={errors.imie ? 'imie-blad' : undefined}
        />
        {errors.imie && (
          <p id="imie-blad" className="field-error">
            {errors.imie}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">
          {t.kontakt.email} <span className="field-mark">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-blad' : undefined}
        />
        {errors.email && (
          <p id="email-blad" className="field-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field field--wide">
        <label htmlFor="wiadomosc">
          {t.kontakt.wiadomosc} <span className="field-mark">*</span>
        </label>
        <textarea
          id="wiadomosc"
          name="wiadomosc"
          rows={5}
          aria-invalid={Boolean(errors.wiadomosc)}
          aria-describedby={errors.wiadomosc ? 'wiadomosc-blad' : 'wiadomosc-podpowiedz'}
        />
        {errors.wiadomosc ? (
          <p id="wiadomosc-blad" className="field-error">
            {errors.wiadomosc}
          </p>
        ) : (
          <p id="wiadomosc-podpowiedz" className="field-hint">
            {t.kontakt.podpowiedz}
          </p>
        )}
      </div>

      <div className="form-foot">
        <button type="submit" className="btn-stamp">
          {t.kontakt.wyslij}
        </button>

        {/* The confirmation is announced to screen readers. */}
        <p aria-live="polite" className="form-status">
          {sent && <span>{t.kontakt.sukces}</span>}
        </p>
      </div>
    </form>
  );
}
