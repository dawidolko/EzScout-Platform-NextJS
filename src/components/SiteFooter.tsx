export function SiteFooter() {
  const rok = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-ink-50">EzScout</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-300">
            Raporty skautingowe i analizy meczowe. Dane zbierane ręcznie, wnioski
            pisane przez analityka — nie przez generator.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-amber-400">
            Serwis
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-300">
            <li><a className="hover:text-amber-400" href="#oferta">Oferta</a></li>
            <li><a className="hover:text-amber-400" href="#jak-dzialamy">Jak działamy</a></li>
            <li><a className="hover:text-amber-400" href="#skutecznosc">Skuteczność</a></li>
            <li><a className="hover:text-amber-400" href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-amber-400">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-300">
            <li>
              <a className="hover:text-amber-400" href="mailto:kontakt@ezscout.dawidolko.pl">
                kontakt@ezscout.dawidolko.pl
              </a>
            </li>
            <li>Poniedziałek – piątek, 9:00 – 17:00</li>
            <li>Rzeszów, Polska</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {rok} EzScout. Projekt portfolio — serwis demonstracyjny.</p>
          <p>
            Autor:{' '}
            <a className="text-ink-300 hover:text-amber-400" href="https://dawidolko.pl">
              dawidolko.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
