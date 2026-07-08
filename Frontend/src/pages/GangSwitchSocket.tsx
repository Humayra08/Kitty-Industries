import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface SwitchSVGProps {
  series: string;
}

const SwitchSVG = ({ series }: SwitchSVGProps) => {
  // Common dimensions
  const width = 140;
  const height = 140;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full drop-shadow-md">
      <defs>
        {/* ART SERIES (Dark textured/graphite) */}
        <linearGradient id="art-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="50%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>
        <linearGradient id="art-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d3d3d" />
          <stop offset="100%" stopColor="#1f1f1f" />
        </linearGradient>

        {/* Blanko (Minimalist White) */}
        <linearGradient id="blanko-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3f4f6" />
        </linearGradient>
        <linearGradient id="blanko-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eaeaea" />
        </linearGradient>

        {/* DOREN SERIES GOLDEN */}
        <linearGradient id="doren-gold-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ebd6b0" />
          <stop offset="50%" stopColor="#d3b98c" />
          <stop offset="100%" stopColor="#bc9f6e" />
        </linearGradient>
        <linearGradient id="doren-gold-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4e5cb" />
          <stop offset="100%" stopColor="#c5ab7d" />
        </linearGradient>

        {/* GLORIA SERIES */}
        <linearGradient id="gloria-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4450" />
          <stop offset="100%" stopColor="#1f242e" />
        </linearGradient>
        <linearGradient id="gloria-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a5260" />
          <stop offset="100%" stopColor="#2b313d" />
        </linearGradient>

        {/* VENUS SERIES */}
        <linearGradient id="venus-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eddcd2" />
          <stop offset="100%" stopColor="#cbb6aa" />
        </linearGradient>
        <linearGradient id="venus-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e6dd" />
          <stop offset="100%" stopColor="#dac2b3" />
        </linearGradient>

        {/* VERONA SERIES */}
        <linearGradient id="verona-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="35%" stopColor="#e5e7eb" />
          <stop offset="70%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
        <linearGradient id="verona-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>

        {/* VIP SERIES GOLDEN */}
        <linearGradient id="vip-gold-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe8b5" />
          <stop offset="35%" stopColor="#ebd092" />
          <stop offset="70%" stopColor="#d4b470" />
          <stop offset="100%" stopColor="#b4934e" />
        </linearGradient>
        <linearGradient id="vip-gold-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1d4" />
          <stop offset="100%" stopColor="#e5be79" />
        </linearGradient>

        {/* ZHILIK SERIES GOLDEN */}
        <linearGradient id="zhilik-gold-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8dec6" />
          <stop offset="100%" stopColor="#cdbf9f" />
        </linearGradient>
        <linearGradient id="zhilik-gold-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1ebd9" />
          <stop offset="100%" stopColor="#dbd0b3" />
        </linearGradient>
      </defs>

      {/* RENDER PLATES AND SHAPES ACCORDING TO SERIES */}
      {(() => {
        let plateFill = "url(#blanko-plate)";
        let strokeColor = "#e5e7eb";
        let strokeW = 1.2;
        let borderOverlay: React.ReactNode = null;
        let bottomTrim: React.ReactNode = null;
        let paddleFill = "url(#blanko-paddle)";
        let paddleStroke = "#d1d5db";
        let accentColor = "#4b5563"; // Dark grey

        switch (series) {
          case 'ART SERIES':
            plateFill = "url(#art-plate)";
            strokeColor = "#374151";
            paddleFill = "url(#art-paddle)";
            paddleStroke = "#4b5563";
            accentColor = "#c2a679"; // Gold dots/accents
            break;
          case 'Blanko':
            plateFill = "url(#blanko-plate)";
            strokeColor = "#e5e7eb";
            paddleFill = "url(#blanko-paddle)";
            paddleStroke = "#d1d5db";
            accentColor = "#9ca3af";
            break;
          case 'DOREN SERIES GOLDEN':
            plateFill = "url(#doren-gold-plate)";
            strokeColor = "#c2a679";
            paddleFill = "url(#doren-gold-paddle)";
            paddleStroke = "#b5996c";
            accentColor = "#4b3c25";
            break;
          case 'DOREN SERIES WHITE':
            plateFill = "#ffffff";
            strokeColor = "#c2a679"; // Golden frame
            strokeW = 2;
            paddleFill = "url(#blanko-paddle)";
            paddleStroke = "#e5e7eb";
            accentColor = "#9ca3af";
            break;
          case 'GLORIA SERIES':
            plateFill = "url(#gloria-plate)";
            strokeColor = "#2d313d";
            paddleFill = "url(#gloria-paddle)";
            paddleStroke = "#3f4654";
            accentColor = "#9ca3af";
            break;
          case 'OPPLE SERIES':
            plateFill = "#ffffff";
            strokeColor = "#e5e7eb";
            paddleFill = "url(#blanko-paddle)";
            paddleStroke = "#e5e7eb";
            accentColor = "#9ca3af";
            // Gold trim line at the bottom of the plate
            bottomTrim = <rect x="8" y="118" width="124" height="6" fill="#c2a679" rx="1" />;
            break;
          case 'VENUS SERIES':
            plateFill = "url(#venus-plate)";
            strokeColor = "#bfa693";
            paddleFill = "url(#venus-paddle)";
            paddleStroke = "#bca290";
            accentColor = "#6b584d";
            break;
          case 'VERONA SERIES':
            plateFill = "url(#verona-plate)";
            strokeColor = "#9ca3af";
            paddleFill = "url(#verona-paddle)";
            paddleStroke = "#cbd5e1";
            accentColor = "#374151";
            break;
          case 'VIP SERIES GOLDEN':
            plateFill = "url(#vip-gold-plate)";
            strokeColor = "#d4af37";
            strokeW = 2.5;
            paddleFill = "url(#vip-gold-paddle)";
            paddleStroke = "#cda452";
            accentColor = "#5c430e";
            break;
          case 'VIP SERIES WHITE':
            plateFill = "#ffffff";
            strokeColor = "#d4af37"; // Thick Gold border
            strokeW = 2.5;
            paddleFill = "url(#blanko-paddle)";
            paddleStroke = "#e5e7eb";
            accentColor = "#9ca3af";
            break;
          case 'ZHILIK SERIES GOLDEN':
            plateFill = "url(#zhilik-gold-plate)";
            strokeColor = "#cdbf9f";
            paddleFill = "url(#zhilik-gold-paddle)";
            paddleStroke = "#beaf8d";
            accentColor = "#5c4d32";
            break;
          case 'ZHILIK SERIES WHITE':
            plateFill = "#ffffff";
            strokeColor = "#cbd5e1"; // Chrome/silver border
            strokeW = 2;
            paddleFill = "url(#blanko-paddle)";
            paddleStroke = "#e5e7eb";
            accentColor = "#64748b";
            break;
        }

        return (
          <>
            {/* Main Outer Plate */}
            <rect x="8" y="8" width="124" height="124" rx="16" fill={plateFill} stroke={strokeColor} strokeWidth={strokeW} />
            
            {/* Bottom trim overlay if exists */}
            {bottomTrim}
            
            {/* Border overlay for premium highlight if applicable */}
            {borderOverlay}

            {/* Left Gang Paddle */}
            <rect x="24" y="30" width="38" height="78" rx="7" fill={paddleFill} stroke={paddleStroke} strokeWidth="1.2" />
            <rect x="37" y="42" width="12" height="24" rx="2.5" fill={accentColor} />

            {/* Right Multi-Socket Component */}
            <rect x="74" y="30" width="42" height="78" rx="8" fill={paddleFill} stroke={paddleStroke} strokeWidth="1" />
            
            {/* Socket Holes */}
            {/* Top Pin hole */}
            <circle cx="95" cy="52" r="5" fill={accentColor} />
            {/* Bottom two rounded slots */}
            <path d="M85 76 q10 -8 20 0" stroke={accentColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M85 89 q10 -8 20 0" stroke={accentColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </>
        );
      })()}
    </svg>
  );
};

const seriesList = [
  { name: 'ART SERIES' },
  { name: 'Blanko' },
  { name: 'DOREN SERIES GOLDEN' },
  { name: 'DOREN SERIES WHITE' },
  { name: 'GLORIA SERIES' },
  { name: 'OPPLE SERIES' },
  { name: 'VENUS SERIES' },
  { name: 'VERONA SERIES' },
  { name: 'VIP SERIES GOLDEN' },
  { name: 'VIP SERIES WHITE' },
  { name: 'ZHILIK SERIES GOLDEN' },
  { name: 'ZHILIK SERIES WHITE' },
];

export const GangSwitchSocket = () => {
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
            <span className="text-[#E3000F] font-semibold">Gang Switch Socket</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-black text-[#E3000F] leading-tight mb-3 sm:mb-4 tracking-tight">
                Gang Switch Socket
              </h1>

              {/* Decorative Accent Line */}
              <div className="h-1 w-14 bg-[#E3000F] rounded-full mb-4" />

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed">
                Explore our wide range of premium gang switch socket series designed for safety, durability and modern living.
              </p>
            </div>

            {/* Right Content - 3D Composition Banner */}
            <img
              src="/Products/Switch & Socket.png"
              alt="KITTY Gang Switch & Socket Collection"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ── Product Grid Section ──────────────────────────────────────── */}
      <section className="bg-gray-50/50 border-t border-gray-100 py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {seriesList.map((series) => (
              <div
                key={series.name}
                className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(227,0,15,0.18)] hover:-translate-y-1 shadow-sm"
              >
                {/* Switch Plate SVG */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-6">
                  <SwitchSVG series={series.name} />
                </div>

                {/* Series Title */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base tracking-wide uppercase h-12 flex items-center justify-center">
                    {series.name}
                  </h3>
                  <div className="h-0.5 w-8 bg-[#E3000F] rounded-full mx-auto mt-0.5" />
                </div>

                {/* Explore Button */}
                <Link
                  to={`/products/switch-socket/gang-switch-socket/${series.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full max-w-[180px] py-2.5 px-4 rounded-full border border-[#E3000F] text-[#E3000F] font-bold text-xs sm:text-sm tracking-wide bg-white group-hover:bg-[#E3000F] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
