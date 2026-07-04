import { Hero } from '../components/sections/Hero';
import { AboutUs } from '../components/sections/AboutUs';
import { ProductShowcase } from '../components/sections/ProductShowcase';
import { Cog, Factory } from 'lucide-react';

const accreditations = [
  {
    icon: <img src="/ISO.png" alt="ISO" className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full" />,
    title: 'ISO',
    description: 'International Organization for Standardization',
  },
  {
    icon: <img src="/IEC.png" alt="IEC" className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-md" />,
    title: 'IEC',
    description: 'International Electrotechnical Commission',
  },
  {
    icon: (
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center text-red-600">
        <Cog className="absolute inset-0 h-full w-full" strokeWidth={1.5} />
        <Factory className="relative h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
      </div>
    ),
    title: 'MIST',
    description: 'Ministry of Industries Standards & Testing',
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutUs />
      <ProductShowcase />
      <div className="bg-[#fafafa] py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block">
                <p className="text-red-600 font-bold text-lg sm:text-2xl tracking-widest uppercase">Accreditations</p>
                <div className="h-0.5 w-8 bg-red-600 mt-2 mb-4" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 leading-snug mb-4">
                Certified. Compliant.<br />Trusted.
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                Our commitment to quality and safety is backed by national and international certifications that ensure reliability, compliance, and peace of mind.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-y-0 gap-x-2 sm:gap-x-6">
              {accreditations.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-row sm:flex-col items-center text-left sm:text-center gap-4 sm:gap-3 px-2 ${i !== 0 ? 'border-t sm:border-t-0 sm:border-l border-gray-300 pt-5 sm:pt-0' : ''}`}
                >
                  {item.icon}
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-snug mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sister Concerns ─────────────────────────────────────────── */}
      <div className="relative bg-[#fafafa] py-14 overflow-hidden">
        {/* Dot-grid left */}
        <div
          className="absolute left-0 top-0 h-full w-64 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #c0392b 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        {/* Dot-grid right */}
        <div
          className="absolute right-0 top-0 h-full w-64 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #c0392b 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <p className="text-red-600 font-bold text-lg sm:text-2xl tracking-widest uppercase">Sister Concerns</p>
          <div className="h-0.5 w-8 bg-red-600 mx-auto mt-2 mb-4" />
          <p className="text-sm font-semibold text-gray-400 tracking-wide">
            One Vision.&nbsp;&nbsp;Many Strengths.&nbsp;&nbsp;Greater Impact.
          </p>
        </div>

        {/* ── Scrolling logos ──────────────────────────────────────────── */}
        <style>{`
          @keyframes marquee-ltr {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <div className="relative container mx-auto px-4 md:px-6 mt-14">
          <div
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          >
            <div
              className="flex items-center"
              style={{ animation: 'marquee-ltr 30s linear infinite', width: 'max-content' }}
            >
              {/* 4 copies for a seamless gap-free loop */}
              {[...Array(4)].flatMap((_, set) =>
                [
                  { src: '/KWALITY.png', alt: 'Kwality' },
                  { src: '/TAK.jpg',     alt: 'TAK' },
                  { src: '/Nandan.jpg',  alt: 'Nandan' },
                  { src: '/VINNYA.jpg',  alt: 'Vinnya' },
                ].map((logo, i) => (
                  <div key={`${set}-${i}`} className="flex-shrink-0 mx-10 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`w-auto object-contain ${logo.alt === 'Kwality' ? 'h-24 md:h-32' : 'h-16 md:h-20'}`}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
