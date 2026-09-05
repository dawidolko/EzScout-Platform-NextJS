import type { Metadata } from 'next';
import '../globals.css';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['pl'];

export const metadata: Metadata = {
  metadataBase: new URL('https://ezscout.dawidolko.pl'),
  title: { default: 'EzScout — raporty skautingowe i analizy meczowe', template: '%s — EzScout' },
  description: 'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.',
  keywords: ['skauting pilkarski', 'raport skautingowy', 'analiza meczu', 'analiza zawodnika', 'dane pilkarskie'],
  authors: [{ name: 'Dawid Olko', url: 'https://dawidolko.pl' }],
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    alternateLocale: 'en_GB',
    url: 'https://ezscout.dawidolko.pl/pl/',
    siteName: 'EzScout',
    title: 'EzScout — raporty skautingowe i analizy meczowe',
    description: 'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.',
  },
  twitter: { card: 'summary_large_image', title: 'EzScout — raporty skautingowe i analizy meczowe', description: 'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.' },
  alternates: {
    canonical: 'https://ezscout.dawidolko.pl/pl/',
    // Obie wersje wskazuja na siebie nawzajem, a angielska jest domyslna dla
    // odwiedzajacych spoza listy jezykow.
    languages: {
      en: 'https://ezscout.dawidolko.pl/',
      pl: 'https://ezscout.dawidolko.pl/pl/',
      'x-default': 'https://ezscout.dawidolko.pl/',
    },
  },
  robots: { index: true, follow: true },
};

const daneStrukturalne = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'EzScout',
  url: 'https://ezscout.dawidolko.pl/pl/',
  description: 'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.',
  areaServed: 'PL',
  serviceType: 'Football scouting and match analysis',
  inLanguage: 'pl',
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
          {t.skipLink}
        </a>
        <SiteHeader t={t} />
        <main id="main-content">{children}</main>
        <SiteFooter t={t} />
      </body>
    </html>
  );
}
