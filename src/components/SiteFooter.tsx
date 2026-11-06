import type { Tresc } from './tresc';
import { CentreCircle } from './Drawings';

export function SiteFooter({ t }: { t: Tresc }) {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="slip">
          <div className="slip-brand">
            <p className="wordmark">EzScout</p>
            <p>{t.stopka.opis}</p>
          </div>

          <div>
            <h2>{t.stopka.serwis}</h2>
            <ul>
              <li><a href="#oferta">{t.nav.oferta}</a></li>
              <li><a href="#jak-dzialamy">{t.nav.jak}</a></li>
              <li><a href="#skutecznosc">{t.nav.skutecznosc}</a></li>
              <li><a href="#faq">{t.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <h2>{t.stopka.kontakt}</h2>
            <ul>
              <li><a href="mailto:kontakt@ezscout.dawidolko.pl">kontakt@ezscout.dawidolko.pl</a></li>
              <li>{t.stopka.godziny}</li>
              <li>{t.stopka.miasto}</li>
            </ul>
          </div>
        </div>

        <div className="foot-base">
          <p>© {year} {t.stopka.prawa}</p>
          <p>
            {t.stopka.autor} <a href="https://dawidolko.pl">dawidolko.pl</a>
          </p>
        </div>
      </div>
      <CentreCircle />
    </footer>
  );
}
