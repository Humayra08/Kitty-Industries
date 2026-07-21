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

    {/* top-right dotted grid + blobs — smaller on mobile, same as before from sm/md up */}
    <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-red-100/45 blur-3xl" />
    <div className="absolute right-4 top-6 h-20 w-20 opacity-70 sm:right-8 sm:top-10 sm:h-36 sm:w-36" style={dotPattern} />
    <div className="absolute right-6 top-1/2 h-20 w-20 rounded-full bg-red-50 blur-2xl md:right-16 md:h-32 md:w-32" />

    {/* celebration artwork tucked into the top-right corner — small on mobile so it
        never overlaps the "GALLERY" label or the "Moments that..." title, then grows
        into its full-size desktop spot from lg up. */}
    <img
      src="/celebration.png"
      alt=""
      className="absolute top-6 right-4 w-16 sm:top-10 sm:right-8 sm:w-24 lg:top-4 lg:right-[6%] lg:w-[300px] lg:max-w-[36vw]"
    />
  </div>
);
