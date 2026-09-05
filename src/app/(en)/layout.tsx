import type { Metadata } from 'next';
import '../globals.css';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['en'];

export const metadata: Metadata = {
  metadataBase: new URL('https://ezscout.dawidolko.pl'),
  title: { default: 'EzScout — scouting reports and match analysis', template: '%s — EzScout' },
  description: 'Scouting reports and match analysis for clubs, agents and coaching staff. Data collected by hand, conclusions written by an analyst, delivered in 48 hours.',
  keywords: ['football scouting', 'scouting report', 'match analysis', 'player analysis', 'opposition analysis'],
  authors: [{ name: 'Dawid Olko', url: 'https://dawidolko.pl' }],
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'pl_PL',
    url: 'https://ezscout.dawidolko.pl/',
    siteName: 'EzScout',
    title: 'EzScout — scouting reports and match analysis',
    description: 'Scouting reports and match analysis for clubs, agents and coaching staff. Data collected by hand, conclusions written by an analyst, delivered in 48 hours.',
  },
  twitter: { card: 'summary_large_image', title: 'EzScout — scouting reports and match analysis', description: 'Scouting reports and match analysis for clubs, agents and coaching staff. Data collected by hand, conclusions written by an analyst, delivered in 48 hours.' },
  alternates: {
    canonical: 'https://ezscout.dawidolko.pl/',
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
  url: 'https://ezscout.dawidolko.pl/',
  description: 'Scouting reports and match analysis for clubs, agents and coaching staff. Data collected by hand, conclusions written by an analyst, delivered in 48 hours.',
  areaServed: 'PL',
  serviceType: 'Football scouting and match analysis',
  inLanguage: 'en',
  provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
