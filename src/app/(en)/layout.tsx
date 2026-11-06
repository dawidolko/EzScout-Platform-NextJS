import type { Metadata } from 'next';
import '../globals.css';
import { fontVariables } from '../fonts';
import { CONTENT_SECURITY_POLICY } from '../csp';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['en'];

const OG_ALT = 'EzScout: football scouting reports and match analysis';

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
    images: [{ url: 'https://ezscout.dawidolko.pl/og-image.png', width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: { card: 'summary_large_image', title: 'EzScout — scouting reports and match analysis', description: 'Scouting reports and match analysis for clubs, agents and coaching staff. Data collected by hand, conclusions written by an analyst, delivered in 48 hours.', images: ['https://ezscout.dawidolko.pl/og-image.png'] },
  alternates: {
    canonical: 'https://ezscout.dawidolko.pl/',
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
      url: 'https://ezscout.dawidolko.pl/',
      description: 'Scouting reports and match analysis for clubs, agents and coaching staff. Data collected by hand, conclusions written by an analyst, delivered in 48 hours.',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
    {
      '@type': 'Service',
      name: 'Football scouting and match analysis',
      url: 'https://ezscout.dawidolko.pl/',
      description: 'Scouting reports and match analysis for clubs, agents and coaching staff. Data collected by hand, conclusions written by an analyst, delivered in 48 hours.',
      serviceType: 'Football scouting and match analysis',
      areaServed: 'PL',
      provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <script src="/a11y/a11y-panel.js" data-accent="#17583c" defer></script>
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
