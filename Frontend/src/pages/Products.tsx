import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'LED Lighting',
    path: '/products/led-lighting',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784045083/RADIANT_A_BULB_3W_5W_7W_9W_12W_15W_18W_B22_E27_cq1i21.png',
    description: 'Energy-efficient LED lighting solutions for every space.',
  },
  {
    title: 'Switch & Socket',
    path: '/products/switch-socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784109829/Switch_Banner_rgnnha.png',
    description: 'Stylish and durable switches & sockets for modern living.',
  },
  {
    title: 'Circuit Breakers',
    path: '/products/circuit-breakers',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784025491/Circuit_Breaker_Banner_ttxreq.png',
    description: 'Reliable protection for your electrical systems.',
  },
  {
    title: 'Accessories',
    path: '/products/accessories',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031624/Others_Banner_vtb9le.png',
    description: 'A complete range of electrical accessories and add-ons.',
  },
];

export const ProductsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Breadcrumbs & Hero Section ─────────────────────────────────── */}
      <section className="relative bg-white pt-16 pb-44 sm:py-20 md:py-28 overflow-hidden">
        {/* Banner image (desktop/tablet) — right-aligned, shown mostly full, only lightly fading on its far (left) edge */}
        <img
          src="https://res.cloudinary.com/dcdo4venk/image/upload/v1784110409/Product_Banner_oldyd8.png"
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute right-0 top-0 bottom-0 h-full w-[60%] md:w-[55%] object-cover object-right"
          style={{
            maskImage: 'linear-gradient(to left, black 78%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 78%, transparent 100%)',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-5">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#E3000F] font-semibold">Products</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E3000F] leading-tight mb-3 sm:mb-4 tracking-tight">
              Our Products
            </h1>
            <div className="h-1 w-14 bg-[#E3000F] rounded-full mb-4" />
            <p className="text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed">
              Explore our wide range of high-quality electrical products designed to deliver safety, durability and performance.
            </p>
          </div>
        </div>

        {/* Banner image (mobile) — flush with the bottom of the hero section, faded/blended on its top edge */}
        <img
          src="https://res.cloudinary.com/dcdo4venk/image/upload/v1784110409/Product_Banner_oldyd8.png"
          alt=""
          aria-hidden="true"
          className="sm:hidden absolute inset-x-0 bottom-0 h-40 w-full object-cover object-bottom"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 22%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 22%)',
          }}
        />
      </section>

      {/* ── Category Sidebar + Product Grid ─────────────────────────────── */}
      <section className="bg-gray-50/50 border-t border-gray-100 py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(227,0,15,0.18)] hover:-translate-y-1 shadow-sm"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-6">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base tracking-wide uppercase h-12 flex items-center justify-center">
                    {cat.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-[#E3000F] rounded-full mx-auto mt-0.5" />
                </div>

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
