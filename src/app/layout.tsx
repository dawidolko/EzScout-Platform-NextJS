import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const opis =
  'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. ' +
  'Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ezscout.dawidolko.pl'),
  title: {
    default: 'EzScout — raporty skautingowe i analizy meczowe',
    template: '%s — EzScout',
  },
  description: opis,
  keywords: [
    'skauting pilkarski',
    'raport skautingowy',
    'analiza meczu',
    'scouting',
    'analiza zawodnika',
    'dane pilkarskie',
  ],
  authors: [{ name: 'Dawid Olko', url: 'https://dawidolko.pl' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://ezscout.dawidolko.pl',
    siteName: 'EzScout',
    title: 'EzScout — raporty skautingowe i analizy meczowe',
    description: opis,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzScout — raporty skautingowe i analizy meczowe',
    description: opis,
  },
  alternates: { canonical: 'https://ezscout.dawidolko.pl' },
  robots: { index: true, follow: true },
};

/*
 * Dane strukturalne opisuja serwis jako firme uslugowa z katalogiem ofert.
 * Wyszukiwarki dostaja dzieki temu nazwe, zakres uslug i przedzialy cenowe
 * bez zgadywania z tresci strony.
 */
const daneStrukturalne = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'EzScout',
  url: 'https://ezscout.dawidolko.pl',
  description: opis,
  areaServed: 'PL',
  priceRange: '299–2400 PLN',
  serviceType: 'Skauting pilkarski i analiza meczowa',
  provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(daneStrukturalne) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Przejdź do treści głównej
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
