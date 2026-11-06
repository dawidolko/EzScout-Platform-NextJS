/*
 * Inline line drawings. They cost no request, inherit the page colours and stay
 * sharp at any width. All tactical drawings use the same chalk stroke.
 */

export function PaperClip({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 72" width="28" height="72" aria-hidden="true" focusable="false">
      <path
        d="M9 20v32c0 6 10 6 10 0V12C19 3 5 3 5 12v42c0 14 18 14 18 0V24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PositionMap({ label }: { label: string }) {
  return (
    <svg className="chalk" viewBox="0 0 320 214" role="img" aria-label={label} focusable="false">
      <rect width="320" height="214" className="chalk-grass" />
      <path d="M0 0h64v214H0zM128 0h64v214h-64zM256 0h64v214h-64z" className="chalk-mow" />
      <path d="M12 12h296v190H12zM88 202v-74h144v74M128 202v-30h64v30M130 128a34 34 0 0 0 60 0" />
      <circle cx="160" cy="150" r="1.8" className="chalk-dot" />
      <ellipse cx="147" cy="96" rx="58" ry="26" className="chalk-zone" />
      <path d="M122 88l10 10m0-10l-10 10M152 72l10 10m0-10l-10 10M174 94l10 10m0-10l-10 10M104 104l10 10m0-10l-10 10" />
      <path d="M147 112c6-20 24-36 54-52" strokeDasharray="6 5" />
      <path d="M190 60l12-1-6 11" />
      <circle cx="147" cy="112" r="9" className="chalk-player" />
    </svg>
  );
}

export function MoveDiagram({ label }: { label: string }) {
  return (
    <svg className="chalk chalk--move" viewBox="0 0 1200 270" role="img" aria-label={label} focusable="false">
      <path d="M4 6h1192v258H4zM600 6v258M4 66h132v138H4zM4 106h48v58H4zM1196 66h-132v138h132zM1196 106h-48v58h48z" className="chalk-faint" />
      <circle cx="600" cy="135" r="62" className="chalk-faint" />
      <path d="M136 106a42 42 0 0 1 0 58M1064 106a42 42 0 0 0 0 58" className="chalk-faint" />
      <path d="M322 88l14 14m0-14l-14 14M452 196l14 14m0-14l-14 14M748 56l14 14m0-14l-14 14M842 214l14 14m0-14l-14 14" />
      <path pathLength="1" className="chalk-run" d="M226 206C330 214 470 170 572 92" />
      <path pathLength="1" className="chalk-run chalk-run--late" d="M628 86c120 8 262 44 346 96" />
      <path d="M553 91l20-1-7 19" className="chalk-head" />
      <path d="M957 165l18 18-25 2" className="chalk-head chalk-head--late" />
      <g className="chalk-marks">
        <circle cx="200" cy="200" r="24" />
        <circle cx="600" cy="74" r="24" />
        <circle cx="1000" cy="196" r="24" />
        <text x="200" y="208">1</text>
        <text x="600" y="82">2</text>
        <text x="1000" y="204">3</text>
      </g>
    </svg>
  );
}

export function CentreCircle() {
  return (
    <svg className="foot-arc" viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path d="M0 219h1200M430 219a170 170 0 0 1 340 0" />
      <circle cx="600" cy="219" r="6" />
    </svg>
  );
}
