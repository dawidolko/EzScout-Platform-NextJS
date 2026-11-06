import type { Metadata } from 'next';
import '../globals.css';
import { fontVariables } from '../fonts';
import { CONTENT_SECURITY_POLICY } from '../csp';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['pl'];

const OG_ALT = 'EzScout: raporty skautingowe i analiza meczów';

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
    images: [{ url: 'https://ezscout.dawidolko.pl/og-image.png', width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: { card: 'summary_large_image', title: 'EzScout — raporty skautingowe i analizy meczowe', description: 'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.', images: ['https://ezscout.dawidolko.pl/og-image.png'] },
  alternates: {
    canonical: 'https://ezscout.dawidolko.pl/pl/',
    languages: {
      en: 'https://ezscout.dawidolko.pl/',
      pl: 'https://ezscout.dawidolko.pl/pl/',
      'x-default': 'https://ezscout.dawidolko.pl/',
    },
  },
  robots: { index: true, follow: true },
  referrer: 'strict-origin-when-cross-origin',
};

const daneStrukturalne = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'EzScout',
      url: 'https://ezscout.dawidolko.pl/pl/',
      description: 'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.',
      inLanguage: 'pl',
      author: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
    {
      '@type': 'Service',
      name: 'Football scouting and match analysis',
      url: 'https://ezscout.dawidolko.pl/pl/',
      description: 'Raporty skautingowe i analizy meczowe dla klubow, agentow i sztabow. Dane zbierane recznie, wnioski pisane przez analityka, dostawa w 48 godzin.',
      serviceType: 'Football scouting and match analysis',
      areaServed: 'PL',
      provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={fontVariables}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <script src="/a11y/a11y-panel.js" data-accent="#1d4ed8" defer></script>
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
