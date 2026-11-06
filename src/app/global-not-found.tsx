import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from './fonts';
import { CONTENT_SECURITY_POLICY } from './csp';

export const metadata: Metadata = {
  title: 'Page not found — EzScout',
  description: 'This address does not exist on EzScout. Go back to the home page or open the Polish version of the site.',
  robots: { index: false, follow: true },
  referrer: 'strict-origin-when-cross-origin',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <script src="/a11y/a11y-panel.js" data-accent="#17583c" defer></script>
      </head>
      <body>
        <main id="main-content" className="missing wrap">
          <h1 className="sheet-tab">Page not found</h1>
          <div className="sheet">
            <p className="stamp stamp--verdict">404</p>
            <p className="sheet-lead">The address may be mistyped, or the page may have moved.</p>
            <div className="page-actions">
              <a href="/" className="btn-stamp">
                Back to the home page
              </a>
              <a href="/pl/" lang="pl" hrefLang="pl" className="link-typed">
                Strona główna po polsku
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
