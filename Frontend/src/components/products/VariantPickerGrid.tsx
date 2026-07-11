import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface PickerVariant {
  name: string;
  path: string;
  thumbnail: string;
}

interface VariantPickerGridProps {
  variants: PickerVariant[];
}

/**
 * Picker grid for a series' finish variants (e.g. Golden vs White under Blanko) — same
 * card layout as SeriesPickerGrid, but a plain thumbnail image instead of an SVG plate
 * icon, since a variant split doesn't need its own illustration.
 */
export const VariantPickerGrid = ({ variants }: VariantPickerGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl">
      {variants.map((variant) => (
        <div
          key={variant.name}
          className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(227,0,15,0.18)] hover:-translate-y-1 shadow-sm"
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-6">
            <img src={variant.thumbnail} alt={variant.name} className="w-full h-full object-contain" />
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 text-sm sm:text-base tracking-wide uppercase h-12 flex items-center justify-center">
              {variant.name}
            </h3>
            <div className="h-0.5 w-8 bg-[#E3000F] rounded-full mx-auto mt-0.5" />
          </div>

          <Link
            to={variant.path}
            className="w-full max-w-[180px] py-2.5 px-4 rounded-full border border-[#E3000F] text-[#E3000F] font-bold text-xs sm:text-sm tracking-wide bg-white group-hover:bg-[#E3000F] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      ))}
    </div>
  );
};
