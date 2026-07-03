import { galleryFilters, type GalleryCategory } from "../../data/galleryData";
import { cn } from "../../lib/utils";

type FilterKey = "all" | GalleryCategory;

interface FilterPillsProps {
  active: FilterKey;
  onChange: (key: FilterKey) => void;
}

export const FilterPills = ({ active, onChange }: FilterPillsProps) => {
  return (
    <div
      role="tablist"
      aria-label="Filter gallery moments"
      className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-full border border-gray-100 bg-white p-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]"
    >
      {galleryFilters.map((filter) => {
        const isActive = filter.key === active;
        return (
          <button
            key={filter.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.key)}
            className={cn(
              "cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 sm:px-5 sm:text-sm",
              isActive
                ? "bg-gradient-to-b from-red-500 to-red-700 text-white shadow-[0_6px_14px_-4px_rgba(220,38,38,0.5)]"
                : "text-gray-600 hover:text-red-600"
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};
