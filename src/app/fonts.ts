import localFont from 'next/font/local';

/*
 * Self-hosted woff2 subsets with Polish coverage, so the build needs no network
 * and the site makes no external request. The handwriting face is used only for
 * margin notes and is not preloaded.
 */
const serif = localFont({
  src: './fonts/besley-var-pl.woff2',
  weight: '400 800',
  display: 'swap',
  variable: '--font-besley',
  fallback: ['Georgia', 'Cambria', 'serif'],
});

const typewriter = localFont({
  src: [
    { path: './fonts/courier-prime-400-pl.woff2', weight: '400' },
    { path: './fonts/courier-prime-700-pl.woff2', weight: '700' },
  ],
  display: 'swap',
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
