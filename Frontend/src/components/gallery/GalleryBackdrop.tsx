// Purely decorative hero backdrop — dotted grids, soft blobs and a hand-drawn
// arrow, matching the reference design. Sits behind the heading/grid content.
const dotPattern = {
  backgroundImage: "radial-gradient(circle, #ef4444 1.5px, transparent 1.5px)",
  backgroundSize: "18px 18px",
  maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
  WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
} as const;

export const GalleryBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {/* top-left dotted grid + blob */}
    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
    <div className="absolute -left-2 top-8 h-36 w-36 opacity-70" style={dotPattern} />

    {/* top-right dotted grid + blobs */}
    <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-red-100/45 blur-3xl" />
    <div className="hidden h-36 w-36 opacity-70 sm:block absolute right-8 top-10" style={dotPattern} />
    <div className="hidden md:block absolute right-16 top-1/2 h-32 w-32 rounded-full bg-red-50 blur-2xl" />

    {/* curved dashed arrow pointing down toward the grid */}
    <svg
      className="absolute right-[10%] top-20 hidden h-56 w-40 text-red-300 lg:block"
      viewBox="0 0 160 220"
      fill="none"
    >
      <path
        d="M18 14 C 66 12, 148 44, 138 112 C 130 166, 92 176, 72 202"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 7"
        strokeLinecap="round"
      />
      <polygon points="10,4 34,16 8,26" fill="#dc2626" transform="rotate(18 18 15)" />
    </svg>
  </div>
);
