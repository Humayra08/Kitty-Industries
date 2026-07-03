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

    {/* paper-plane + dashed flight trail (real artwork, cropped tight from /public/picon.png) */}
    <img
      src="/gallery/paper-plane.png"
      alt=""
      className="absolute right-[6%] top-16 hidden w-[380px] max-w-[42vw] lg:block"
    />
  </div>
);
