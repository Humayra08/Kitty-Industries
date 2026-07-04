import { Images } from "lucide-react";
import { galleryImages } from "../data/galleryData";
import { GalleryImage } from "../components/gallery/GalleryImage";
import { GalleryBackdrop } from "../components/gallery/GalleryBackdrop";
import { cn } from "../lib/utils";

export const Gallery = () => {
  return (
    <div className="relative overflow-hidden bg-[#f8f8f8]">
      <GalleryBackdrop />

      {/* ── Header ─────────────────────────────────────────────── */}
      <section className="relative container mx-auto max-w-7xl px-6 pt-14 pb-6 md:px-10 md:pt-20">
        <div className="inline-block">
          <p className="text-xs font-bold tracking-widest text-red-600 uppercase sm:text-2xl">
            Gallery
          </p>
          <div className="mt-2 mb-4 h-0.5 w-8 bg-red-600" />
        </div>

        <h1 className="text-xl md:text-3xl font-bold text-gray-400 leading-snug tracking-tight mb-10">
          Moments that
          <br />
          Bring Us <span className="text-red-600">Together</span>
        </h1>

        {/* <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-gray-500 sm:text-base">
          Snapshots from our company picnics – where teamwork, laughter, and
          memories come together.
        </p> */}
      </section>

      {/* ── Bento grid ─────────────────────────────────────────── */}
      <section className="relative container mx-auto max-w-7xl px-6 pb-10 md:px-10">
        <div className="grid auto-rows-[150px] grid-cols-2 grid-flow-dense gap-3 sm:auto-rows-[170px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[190px] lg:grid-cols-4">
          {galleryImages.map((item) => (
            <GalleryImage
              key={item.id}
              item={item}
              className={cn(
                item.span === "large" && "col-span-2 row-span-2",
                item.span === "wide" && "col-span-2"
              )}
            />
          ))}
        </div>
      </section>

      {/* ── Footer note ────────────────────────────────────────── */}
      <section className="relative container mx-auto max-w-7xl px-6 pt-4 pb-20 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* <div className="flex h-14 w-14 items-center justify-center rounded-full border border-red-100 bg-red-50">
            <Images className="h-6 w-6 text-red-500" strokeWidth={1.5} />
          </div> */}
          <div>
            {/* <p className="text-[15px] font-bold text-gray-900">
              More memories coming soon!
            </p>
            <p className="mt-0.5 text-sm text-gray-500">
              We're always creating moments worth sharing.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};
