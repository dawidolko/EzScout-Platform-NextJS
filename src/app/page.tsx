import { PAKIETY, KROKI, LICZBY, PYTANIA } from '@/components/dane';
import { FormularzKontaktu } from '@/components/FormularzKontaktu';

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="pitch-lines relative overflow-hidden border-b border-ink-800 bg-ink-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 size-[32rem] rounded-full bg-amber-500/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-28">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              Skauting piłkarski
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-ink-50 sm:text-6xl lg:text-7xl">
              Raport, który mówi,
              <br />
              <span className="text-amber-400">czy warto go kupić</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Zbieramy dane z meczów ręcznie, minuta po minucie, a wnioski pisze
              analityk, który ten mecz obejrzał. Dostajesz PDF z oceną zawodnika,
              profilem taktycznym i konkretną rekomendacją — w 48 godzin.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#oferta"
                className="rounded-md bg-amber-500 px-6 py-3 font-bold text-ink-950 transition hover:bg-amber-400"
              >
                Zobacz pakiety
              </a>
              <a
                href="#jak-dzialamy"
                className="rounded-md border border-ink-600 px-6 py-3 font-bold text-ink-100 transition hover:border-amber-400 hover:text-amber-400"
              >
                Jak pracujemy
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-700 pt-8">
              {LICZBY.slice(0, 3).map((l) => (
                <div key={l.etykieta}>
                  <dt className="text-xs uppercase tracking-wider text-ink-400">{l.etykieta}</dt>
                  <dd className="tabular mt-1 font-display text-3xl font-bold text-ink-50">
                    {l.wartosc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Przykladowa karta raportu — pokazuje, co klient dostaje. */}
          <div className="lg:pl-4">
            <div className="rounded-xl border border-ink-700 bg-ink-800 p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-ink-700 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-400">Raport zawodnika</p>
                  <p className="font-display text-2xl font-bold text-ink-50">Środkowy obrońca, 21 lat</p>
                </div>
                <span className="rounded bg-grass-500/15 px-2.5 py-1 text-xs font-bold text-grass-500">
                  REKOMENDACJA
                </span>
              </div>

              <dl className="mt-5 space-y-4">
                {[
                  ['Gra w powietrzu', 86],
                  ['Wyprowadzenie piłki', 71],
                  ['Ustawienie bez piłki', 64],
                  ['Pojedynki 1v1', 78],
                ].map(([nazwa, wynik]) => (
                  <div key={nazwa as string}>
                    <div className="flex items-baseline justify-between text-sm">
                      <dt className="text-ink-300">{nazwa}</dt>
                      <dd className="tabular font-semibold text-ink-50">{wynik}/100</dd>
                    </div>
                    <div
                      className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-700"
                      role="img"
                      aria-label={`${nazwa}: ${wynik} na 100`}
                    >
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: `${wynik as number}%` }}
                      />
                    </div>
                  </div>
                ))}
              </dl>

              <p className="mt-6 border-t border-ink-700 pt-4 text-sm leading-relaxed text-ink-300">
                Dominuje w powietrzu i czyta dośrodkowania. Przy wysokim pressingu
                gubi ustawienie — do zespołu grającego niską linią gotowy od razu,
                do gry wysoko potrzebuje sezonu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Oferta ---------------- */}
      <section id="oferta" aria-labelledby="oferta-h" className="border-b border-ink-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="oferta-h" className="font-display text-4xl font-bold text-ink-50 sm:text-5xl">
            Pakiety
          </h2>
          <p className="mt-3 max-w-2xl text-ink-300">
            Każdy pakiet to konkretna liczba obejrzanych meczów i konkretny format
            dostawy. Bez abonamentu — płacisz za raport, który zamawiasz.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PAKIETY.map((p) => (
              <li
                key={p.nazwa}
                className={`flex flex-col rounded-xl border p-6 ${
                  p.wyrozniony
                    ? 'border-amber-500 bg-ink-800 ring-1 ring-amber-500/30'
                    : 'border-ink-700 bg-ink-900'
                }`}
              >
                {p.wyrozniony && (
                  <span className="mb-3 w-fit rounded bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-ink-950">
                    Najczęściej wybierany
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-ink-50">{p.nazwa}</h3>
                <p className="tabular mt-2 font-display text-3xl font-bold text-amber-400">
                  {p.cena}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.opis}</p>

                <ul className="mt-5 flex-1 space-y-2 text-sm text-ink-300">
                  {p.punkty.map((punkt) => (
                    <li key={punkt} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>{punkt}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`mt-6 rounded-md px-4 py-2.5 text-center font-bold transition ${
                    p.wyrozniony
                      ? 'bg-amber-500 text-ink-950 hover:bg-amber-400'
                      : 'border border-ink-600 text-ink-100 hover:border-amber-400 hover:text-amber-400'
                  }`}
                >
                  Zamów <span className="sr-only">pakiet {p.nazwa}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Jak dzialamy ---------------- */}
      <section
        id="jak-dzialamy"
        aria-labelledby="jak-h"
        className="border-b border-ink-800 bg-ink-900 py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="jak-h" className="font-display text-4xl font-bold text-ink-50 sm:text-5xl">
            Jak działamy
          </h2>
          <p className="mt-3 max-w-2xl text-ink-300">
            Trzy kroki, jeden analityk prowadzący i termin, który podajemy przed
            przyjęciem zlecenia.
          </p>

          {/* Numeracja niesie tu informacje: to jest kolejnosc, nie ozdoba. */}
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {KROKI.map((k, i) => (
              <li key={k.tytul} className="rounded-xl border border-ink-700 bg-ink-800 p-6">
                <p className="tabular font-display text-5xl font-bold text-amber-500/40">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink-50">{k.tytul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{k.opis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Skutecznosc ---------------- */}
      <section id="skutecznosc" aria-labelledby="skut-h" className="border-b border-ink-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 id="skut-h" className="font-display text-4xl font-bold text-ink-50 sm:text-5xl">
                Skuteczność
              </h2>
              <p className="mt-4 leading-relaxed text-ink-300">
                Raport jest wart tyle, ile decyzja, którą pozwala podjąć. Dlatego
                po każdym transferze, przy którym pracowaliśmy, wracamy do
                zawodnika po sezonie i sprawdzamy, czy ocena się obroniła.
              </p>
              <p className="mt-4 leading-relaxed text-ink-300">
                Publikujemy też przypadki, w których się pomyliliśmy — razem
                z powodem. Skauting bez pomyłek nie istnieje; istnieje skauting,
                który się z nich uczy.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-5">
              {LICZBY.map((l) => (
                <div key={l.etykieta} className="rounded-xl border border-ink-700 bg-ink-900 p-6">
                  <dt className="text-xs uppercase tracking-wider text-ink-400">{l.etykieta}</dt>
                  <dd className="tabular mt-2 font-display text-4xl font-bold text-amber-400">
                    {l.wartosc}
                  </dd>
                  <p className="mt-2 text-sm text-ink-300">{l.opis}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" aria-labelledby="faq-h" className="border-b border-ink-800 bg-ink-900 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-h" className="font-display text-4xl font-bold text-ink-50 sm:text-5xl">
            Najczęstsze pytania
          </h2>

          <div className="mt-8 divide-y divide-ink-700 border-y border-ink-700">
            {PYTANIA.map((p) => (
              <details key={p.pytanie} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-50">
                  {p.pytanie}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl leading-none text-amber-400 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-300">{p.odpowiedz}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Kontakt ---------------- */}
      <section id="kontakt" aria-labelledby="kontakt-h" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="kontakt-h" className="font-display text-4xl font-bold text-ink-50 sm:text-5xl">
            Zamów raport
          </h2>
          <p className="mt-3 text-ink-300">
            Napisz, kogo mamy obejrzeć i na kiedy. Odpowiadamy w jeden dzień roboczy
            z terminem i wyceną.
          </p>
          <FormularzKontaktu />
        </div>
      </section>
    </>
  );
}
