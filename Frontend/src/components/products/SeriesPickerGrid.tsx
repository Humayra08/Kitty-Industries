import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SeriesSwitchIcon } from './SeriesSwitchIcon';
import { seriesSlug, type SwitchSeries } from '../../data/switchSeries';

interface SeriesPickerGridProps {
  seriesList: SwitchSeries[];
  /** Route the series card links into, e.g. '/products/switch-socket/gang-switch-socket'. */
  basePath: string;
  variant: 'gang' | 'piano';
}

/**
 * "Choose a series" grid — a card per finish/series with a plate illustration and an
 * Explore Products link into that series' catalog. Shared by the Gang and Piano
 * Switch Socket landing pages.
 */
export const SeriesPickerGrid = ({ seriesList, basePath, variant }: SeriesPickerGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
      {seriesList.map((series) => (
        <div
          key={series.name}
          className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(227,0,15,0.18)] hover:-translate-y-1 shadow-sm"
        >
          {/* Switch Plate SVG, or a real product photo when the series has one */}
          {series.cardImage ? (
            <div className="w-full aspect-[5/2] flex items-center justify-center mb-6">
              <img src={series.cardImage} alt={series.name} className="w-full h-full object-contain" />
            </div>
          ) : (
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-6">
              <SeriesSwitchIcon series={series.name} variant={variant} />
            </div>
          )}

          {/* Series Title */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-700 text-sm sm:text-base tracking-wide uppercase h-12 flex items-center justify-center">
              {series.name}
            </h3>
            <div className="h-0.5 w-8 bg-[#E3000F] rounded-full mx-auto mt-0.5" />
          </div>

          {/* Explore Button */}
          <Link
            to={`${basePath}/${seriesSlug(series.name)}`}
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
