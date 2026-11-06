import { Barlow_Condensed, Barlow } from 'next/font/google';

/*
 * Fetched at build time and served from the site itself. Only the latin subset
 * is preloaded; latin-ext stays declared, so Polish glyphs load on demand.
 */
const display = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700'], display: 'swap', variable: '--font-barlow-condensed' });
const body = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], preload: false, display: 'swap', variable: '--font-barlow' });

export const fontVariables = `${display.variable} ${body.variable}`;
