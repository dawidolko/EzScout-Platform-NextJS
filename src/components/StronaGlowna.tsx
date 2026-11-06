import type { Tresc } from './tresc';
import { FormularzKontaktu } from './FormularzKontaktu';
import { MoveDiagram, PaperClip, PositionMap } from './Drawings';

/*
 * One page serves both languages. `/` and `/pl/` differ only in the `t` object,
 * so a layout change always reaches both versions.
 *
 * The page is built as a scouting file: an open folder, a price sheet, a tactics
 * board in chalk, a season review, a kraft question sheet and an order form.
 */

const SCALE_CELLS = 20;

/* A typed rating scale: one X per five points, the way a typewriter draws a bar. */
function typedScale(score: number) {
  const filled = Math.round((score / 100) * SCALE_CELLS);
  return 'X'.repeat(filled) + '-'.repeat(SCALE_CELLS - filled);
}

export function StronaGlowna({ t }: { t: Tresc }) {
  const notes: Record<number, string> = { 0: t.dossier.noteCrosses, 2: t.dossier.notePress };

  return (
    <>
      <section aria-labelledby="hero-h" className="desk">
        <div className="wrap">
          <div className="folder">
            <article className="page">
              <header className="page-letterhead">
                <p>{t.hero.nadtytul}</p>
                <p className="stamp stamp--small">{t.dossier.confidential}</p>
              </header>

              <div className="page-head">
                <div className="page-title">
                  <h1 id="hero-h">
                    {t.hero.tytul1} {t.hero.tytul2}
                  </h1>
                  <p className="page-summary">{t.hero.opis}</p>
                  <div className="page-actions">
                    <a href="#oferta" className="btn-stamp">
                      {t.hero.ctaGlowne}
                    </a>
                    <a href="#jak-dzialamy" className="link-typed">
                      {t.hero.ctaDrugie}
                    </a>
                  </div>
                </div>

                <figure className="print">
                  <PaperClip className="print-clip" />
                  <PositionMap label={t.dossier.positionMapAlt} />
                  <figcaption>{t.dossier.positionMap}</figcaption>
                </figure>
              </div>

              <div className="report">
                <div className="report-subject">
                  <p>{t.hero.kartaNadtytul}</p>
                  <p className="report-name">{t.hero.kartaTytul}</p>
                </div>

                <dl className="ratings">
                  {t.hero.kartaOceny.map(([name, score], index) => (
                    <div key={name} className="rating">
                      <dt>{name}</dt>
                      <dd className="rating-score">
                        {score}
                        <span>/100</span>
                      </dd>
                      <dd className="rating-scale" aria-hidden="true">
                        {typedScale(score)}
                      </dd>
                      {notes[index] && <dd className="note">{notes[index]}</dd>}
                    </div>
                  ))}
                </dl>

                <div className="report-verdict">
                  <h2>{t.dossier.conclusion}</h2>
                  <p>{t.hero.kartaWniosek}</p>
                  <p className="stamp stamp--verdict">{t.hero.kartaZnacznik}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="oferta" aria-labelledby="oferta-h" className="sect wrap">
        <h2 id="oferta-h" className="sheet-tab">
          {t.oferta.tytul}
        </h2>
        <div className="sheet">
          <p className="sheet-lead">{t.oferta.opis}</p>

          <ul className="ledger">
            {t.pakiety.map((p) => (
              <li key={p.nazwa} className={p.wyrozniony ? 'ledger-row ledger-row--marked' : 'ledger-row'}>
                <div className="ledger-name">
                  <h3>{p.nazwa}</h3>
                  <p className="ledger-price">{p.cena}</p>
                </div>
                <p className="ledger-desc">{p.opis}</p>
                <ul className="ledger-terms">
                  {p.punkty.map((term) => (
                    <li key={term}>{term}</li>
                  ))}
                </ul>
                <div className="ledger-order">
                  {p.wyrozniony && <p className="stamp stamp--row">{t.oferta.wyrozniony}</p>}
                  <a href="#kontakt" className={p.wyrozniony ? 'btn-stamp btn-stamp--small' : 'btn-stamp btn-stamp--small btn-stamp--open'}>
                    {t.oferta.zamow} <span className="sr-only">{t.oferta.zamowSr.replace('{n}', p.nazwa)}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="jak-dzialamy" aria-labelledby="jak-h" className="board">
        <div className="wrap">
          <div className="board-head">
            <h2 id="jak-h">{t.jak.tytul}</h2>
            <p>{t.jak.opis}</p>
          </div>

          <MoveDiagram label={t.dossier.moveAlt} />

          {/* The numbers carry the order of the steps, so this stays an ordered list. */}
          <ol className="moves">
            {t.jak.kroki.map((k) => (
              <li key={k.tytul}>
                <h3>{k.tytul}</h3>
                <p>{k.opis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="skutecznosc" aria-labelledby="skut-h" className="sect wrap sect--right">
        <h2 id="skut-h" className="sheet-tab">
          {t.skutecznosc.tytul}
        </h2>
        <div className="sheet review">
          <div className="review-text">
            <p>{t.skutecznosc.akapit1}</p>
            <p>{t.skutecznosc.akapit2}</p>
            <p className="note note--inline">{t.dossier.noteMisses}</p>
          </div>

          <dl className="record">
            {t.liczby.map((l) => (
              <div key={l.etykieta} className="record-row">
                <dt>{l.etykieta}</dt>
                <dd className="record-value">{l.wartosc}</dd>
                <dd className="record-note">{l.opis}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-h" className="kraft">
        <div className="wrap kraft-inner">
          <h2 id="faq-h">{t.faq.tytul}</h2>

          <div className="transcript">
            {t.faq.pytania.map((p) => (
              <details key={p.pytanie}>
                <summary>
                  <span>{p.pytanie}</span>
                </summary>
                <p>{p.odpowiedz}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" aria-labelledby="kontakt-h" className="sect wrap sect--left">
        <h2 id="kontakt-h" className="sheet-tab">
          {t.kontakt.tytul}
        </h2>
        <div className="sheet">
          <PaperClip className="sheet-clip" />
          <p className="sheet-lead">{t.kontakt.opis}</p>
          <FormularzKontaktu t={t} />
        </div>
      </section>
    </>
  );
}
