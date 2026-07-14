import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: '6 Pin Sockets',
    path: '/products/accessories/others/6-pin-sockets',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031041/HTC_6PIN_UNIVERSAL_SOCKET._HTC7525_qjeymz.png',
  },
  {
    title: 'Extension Socket',
    path: '/products/accessories/others/extension-socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031083/EXTENSION_SOCKET_5WAY_2PIN_WHITE_r2gzsq.png',
  },
  {
    title: 'Lamp Holders & Ceiling Rose',
    path: '/products/accessories/others/lamp-holders-ceiling-rose',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031093/Round_Decorative_Lamp_Holder_KRCH-01G_uretwk.png',
  },
  {
    title: 'Plug & Adapters',
    path: '/products/accessories/others/plug-adapters',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031010/10A_2PIN_MULTI_ADAPTER_SOCKET_WITH_FUSE._7896_jjwfke.png',
  },
  {
    title: 'Switch Box',
    path: '/products/accessories/others/switch-box',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031046/L1_DISTRIBUTION_BOX._KL-1_q1uiuz.png',
  },
  {
    title: 'Fan Capacitor',
    path: '/products/accessories/others/fan-capacitor',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784039406/KITTY_FAN_CAPACITOR_3.5uf_qnsxnn.png',
  },
  {
    title: 'Cable Tie',
    path: '/products/accessories/cable-tie',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784024923/WHITE_CABLE_TIE_100MM_150MM_200MM_250MM_300MM_350MM_400MM_450MM_500MM_tsdrtm.png',
  },
  {
    title: 'Cable Clip',
    path: '/products/accessories/cable-clip',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784025022/K_TYPE_CABLE_CLIP_r4etug.png',
  },
];

export const AccessoriesPage = () => {
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
            <span className="text-[#E3000F] font-semibold">Accessories</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-black text-[#E3000F] leading-tight mb-3 sm:mb-4 tracking-tight">
                Accessories
              </h1>

              {/* Decorative Accent Line */}
              <div className="h-1 w-14 bg-[#E3000F] rounded-full mb-4" />

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed">
                Explore our range of electrical accessories, from cable management to a wide variety of everyday essentials.
              </p>
            </div>

            {/* Right Content - Banner */}
            <img
              src="https://res.cloudinary.com/dcdo4venk/image/upload/v1784031624/Others_Banner_vtb9le.png"
              alt="KITTY Accessories Collection"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ── Product Grid Section ──────────────────────────────────────── */}
      <section className="bg-gray-50/50 border-t border-gray-100 py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(227,0,15,0.18)] hover:-translate-y-1 shadow-sm"
              >
                {/* Icon */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-6">
                  {cat.image && (
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-contain drop-shadow-md scale-125" />
                  )}
                </div>

                {/* Title */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base tracking-wide uppercase h-12 flex items-center justify-center">
                    {cat.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-[#E3000F] rounded-full mx-auto mt-0.5" />
                </div>

                {/* Explore Button */}
                <Link
                  to={cat.path}
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
