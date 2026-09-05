# EzScout

Scouting reports and match analysis for football clubs, agents and coaching
staff — a portfolio project built as a static Next.js site.

**Live:** [ezscout.dawidolko.pl](https://ezscout.dawidolko.pl)

## What it is

A single-page product site for a scouting service: packages, process, results
and an enquiry form. The premise is deliberately narrow — reports written by an
analyst who watched the match, not generated from a stats feed — and every
section is written to support that one claim.

## Stack

| Layer     | Choice                                    |
| :-------- | :---------------------------------------- |
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| Language  | TypeScript, strict                        |
| Styling   | Tailwind CSS 4 with a token layer          |
| Hosting   | GitHub Pages                               |

There is no backend. The form validates in the browser and says so — a
demo that pretends to send mail is worse than one that admits it does not.

## Design

Stadium at night: a very dark, slightly blue base, amber as the single accent
and condensed type borrowed from scoreboards. Colours live as tokens in
`src/app/globals.css`; components never hard-code a hex value.

## Accessibility

One `<h1>`, no skipped heading levels, a skip link, landmarks, visible
`:focus-visible` rings that clear contrast on both the dark ground and the
amber accent, form errors bound with `aria-describedby`, and
`prefers-reduced-motion` honoured.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run verify     # typecheck + production build
npm run serve      # serve the exported site from out/
```

## Layout

```
src/app/layout.tsx        metadata, fonts, JSON-LD, landmarks
src/app/page.tsx          all sections of the page
src/app/globals.css       design tokens and base styles
src/components/dane.ts    copy: packages, steps, figures, FAQ
src/components/           header, footer, contact form
```

Copy lives in `dane.ts` rather than in the JSX, so changing the offer does not
mean editing markup.
