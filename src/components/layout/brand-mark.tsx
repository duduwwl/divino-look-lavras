/**
 * Divino Look "LD" monogram — redrawn as a vector from the store's Instagram
 * profile logo (the only source available, 150 px). Uses currentColor so it
 * takes the page ink; no background.
 */
export function BrandMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="1.5 1.2 61 54"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="6.2" strokeLinejoin="miter" strokeLinecap="butt">
        <path d="M5.3 1.4V44.4H37.4" />
        <path d="M27.2 16H38C44 16 48.3 22.5 48.3 30C48.3 40 44 52.2 34 52.2H2" />
      </g>
      <path
        fill="currentColor"
        d="M14.7 1.6H40C49 1.6 61.5 12 62.1 28C62.1 38 57 46 52 49.5C55 44 57.4 38 57.4 30C57.4 15 47.5 8 40 8H21.2V36.6H14.7Z"
      />
    </svg>
  );
}
