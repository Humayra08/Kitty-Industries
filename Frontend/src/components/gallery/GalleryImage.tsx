import { Maximize2 } from "lucide-react";
import type { GalleryItem } from "../../data/galleryData";
import { cn } from "../../lib/utils";

interface GalleryImageProps {
  item: GalleryItem;
  className?: string;
}

// Premium hover: image scales up smoothly inside a clipped card while the
// card's own shadow deepens — the classic Apple/Framer "lift" feel.
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export const GalleryImage = ({ item, className }: GalleryImageProps) => {
  const isFeatured = item.span === "large";

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.alt}
      className={cn(
        "group relative block h-full w-full overflow-hidden rounded-2xl bg-gray-100",
        "shadow-[0_2px_10px_-2px_rgba(0,0,0,0.08)] transition-shadow duration-[450ms]",
        EASE,
        "hover:shadow-[0_22px_44px_-14px_rgba(0,0,0,0.28)]",
        className
      )}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className={cn(
          "h-full w-full transform-gpu object-cover transition-transform duration-[450ms]",
          EASE,
          "group-hover:scale-110"
        )}
      />

      {/* Subtle darken on hover so the expand icon stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span
        className={cn(
          "absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md backdrop-blur-sm transition-all duration-300",
          isFeatured
            ? "opacity-100"
            : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Maximize2 className="h-4 w-4" strokeWidth={2} />
      </span>
    </a>
  );
};
