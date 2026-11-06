import localFont from 'next/font/local';

/*
 * Self-hosted woff2 subsets with Polish coverage, so the build needs no network
 * and the site makes no external request. Only the serif is preloaded, because it
 * sets the largest text. Courier New has the same advance width as Courier Prime,
 * so the swap moves nothing, and the handwriting face appears only in margin notes.
 */
const serif = localFont({
  src: './fonts/besley-var-pl.woff2',
  weight: '400 800',
  display: 'swap',
  variable: '--font-besley',
  adjustFontFallback: 'Times New Roman',
  fallback: ['Georgia', 'Cambria', 'serif'],
});

const typewriter = localFont({
  src: [
    { path: './fonts/courier-prime-400-pl.woff2', weight: '400' },
    { path: './fonts/courier-prime-700-pl.woff2', weight: '700' },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  variable: '--font-courier-prime',
  fallback: ['Courier New', 'Courier', 'monospace'],
});

const hand = localFont({
  src: './fonts/caveat-600-pl.woff2',
  weight: '600',
  display: 'swap',
  preload: false,
  variable: '--font-caveat',
  fallback: ['Bradley Hand', 'Segoe Print', 'cursive'],
});

export const fontVariables = `${serif.variable} ${typewriter.variable} ${hand.variable}`;
