import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SeriesPickerGrid } from '../components/products/SeriesPickerGrid';
import { switchSeriesList } from '../data/switchSeries';

export const PianoSwitchSocket = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Breadcrumbs & Hero Section ─────────────────────────────────── */}
      <section className="relative bg-white py-6 sm:py-8 md:py-10 overflow-hidden">
        {/* Background texture: very subtle, sweeping, light red diagonal curves */}
        <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
          <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
            <path d="M-100,100 C300,300 800,-50 1600,150" stroke="rgba(227,0,15,0.08)" strokeWidth="1.5" />
            <path d="M-100,180 C400,380 900,30 1600,230" stroke="rgba(227,0,15,0.08)" strokeWidth="1.5" />
            <path d="M-100,260 C500,460 1000,110 1600,310" stroke="rgba(227,0,15,0.08)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-5">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/products/switch-socket" className="hover:text-red-600 transition-colors">Switch &amp; Socket</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#E3000F] font-semibold">Piano Switch Socket</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-black text-[#E3000F] leading-tight mb-3 sm:mb-4 tracking-tight">
                Piano Switch Socket
              </h1>

              {/* Decorative Accent Line */}
              <div className="h-1 w-14 bg-[#E3000F] rounded-full mb-4" />

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed">
                Explore our wide range of premium piano switch socket series designed for safety, durability and modern living.
              </p>
            </div>

            {/* Right Content - 3D Composition Banner */}
            <img
              src="/Products/Switch & Socket.png"
              alt="KITTY Piano Switch & Socket Collection"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ── Product Grid Section ──────────────────────────────────────── */}
      <section className="bg-gray-50/50 border-t border-gray-100 py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
          <SeriesPickerGrid
            seriesList={switchSeriesList}
            basePath="/products/switch-socket/piano-switch-socket"
            variant="piano"
          />
        </div>
      </section>
    </div>
  );
};
