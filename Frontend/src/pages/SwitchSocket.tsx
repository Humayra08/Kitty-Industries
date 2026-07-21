import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Gang Switch Socket',
    path: '/products/switch-socket/gang-switch-socket',
    icon: (
      <img
        src="https://res.cloudinary.com/dcdo4venk/image/upload/v1784658316/Gang_switch_banner_tg9li9.png"
        alt="Gang Switch Socket"
        className="w-full h-full object-contain rounded-2xl drop-shadow-md scale-125"
      />
    ),
  },
  {
    title: 'Piano Switch Socket',
    path: '/products/switch-socket/piano-switch-socket',
    icon: (
      <img
        src="https://res.cloudinary.com/dcdo4venk/image/upload/v1784020531/Piano_Banner_ggeuzd.png"
        alt="Piano Switch Socket"
        className="w-full h-full object-contain rounded-2xl drop-shadow-md scale-125"
      />
    ),
  },
];

export const SwitchSocketPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        {/* Background texture: very subtle, sweeping, light red diagonal curves */}
        <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
          <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
            <path d="M-100,100 C300,300 800,-50 1600,150" stroke="rgba(227,0,15,0.08)" strokeWidth="1.5" />
            <path d="M-100,180 C400,380 900,30 1600,230" stroke="rgba(227,0,15,0.08)" strokeWidth="1.5" />
            <path d="M-100,260 C500,460 1000,110 1600,310" stroke="rgba(227,0,15,0.08)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl relative z-10 py-6 sm:py-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">

            {/* Left — text */}
            <div className="relative">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm mb-3 sm:mb-5">
                <Link to="/" className="text-gray-500 hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                <span className="text-red-600 font-medium">Switch &amp; Socket</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-black text-red-600 leading-tight tracking-tight mb-3 sm:mb-4">
                Switch &amp; Socket
              </h1>
              <div className="h-1 w-10 sm:w-14 bg-red-600 rounded-full" />
            </div>

            {/* Right — banner image */}
            <img
              src="/Products/Switch & Socket.png"
              alt="Switch & Socket products"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Choose your category ─────────────────────────────────────── */}
      <section className="bg-gray-50/50 py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">

          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20">
            <span className="h-px flex-1 bg-red-300" />
            <h2 className="text-red-600 font-bold text-[11px] sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase whitespace-nowrap">
              Choose Your Category
            </h2>
            <span className="h-px flex-1 bg-red-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.path}
                className="group relative overflow-hidden flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-[0_10px_24px_-10px_rgba(220,38,38,0.18)] hover:-translate-y-1 transition-all duration-300 pl-6 pr-6 sm:pl-10 sm:pr-8 py-6 sm:py-8"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[6px] bg-red-600 rounded-l-2xl" />

                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36">
                  {cat.icon}
                </div>

                <span className="hidden sm:block w-px self-stretch bg-gray-200" />

                <div className="flex-1 pb-8 sm:pb-0">
                  <h3 className="font-bold text-gray-700 text-base sm:text-lg md:text-xl uppercase tracking-tight leading-tight">
                    {cat.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-red-600 rounded-full mt-2.5 mx-auto sm:mx-0" />
                </div>

                <span className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 rounded-full border border-red-500 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
