import { useState, useEffect } from 'react';
import { Calendar, Factory, Users, Package, Truck, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const glanceItems = [
  { icon: Calendar, value: '2014', subtitle: 'ESTABLISHED', description: 'Year of establishment' },
  { icon: Factory, value: '8+', subtitle: 'ACRES', description: 'Manufacturing facility' },
  { icon: Users, value: '1,000+', subtitle: 'EMPLOYEES', description: 'Skilled and dedicated workforce' },
  { icon: Package, value: '600+', subtitle: 'PRODUCT PORTFOLIO', description: 'Wide range of quality products' },
  { icon: Truck, value: '300+', subtitle: 'DISTRIBUTORS', description: 'Strong and growing distribution network' },
  { icon: MapPin, value: 'NATIONWIDE', subtitle: 'PRESENCE', description: 'Across Bangladesh' },
];

const paragraphs = [
  `KITTY Industries Limited is a leading manufacturer of electrical switches, accessories, and LED lighting solutions in Bangladesh. Since its establishment in 2014, the company has grown with a strong commitment to quality, innovation, and reliability, serving residential, commercial, and industrial sectors nationwide. Over the years, KITTY has established itself as a trusted brand known for delivering dependable products and consistent performance.`,
  `At the heart of its operations is a state-of-the-art manufacturing facility spanning over 8 acres, equipped with advanced machinery, efficient production systems, and rigorous quality control processes. Supported by a dedicated workforce of more than 1,000 employees, KITTY combines technology, expertise, and continuous improvement to maintain the highest standards across every stage of production.`,
  `With a robust network of over 300 distributors and a diverse portfolio of more than 600 products, KITTY has built a strong presence across Bangladesh, ensuring its solutions are accessible nationwide while meeting the evolving demands of modern electrical infrastructure.`,
  `Driven by innovation, responsibility, and trust, KITTY Industries remains committed to delivering safe, reliable, and long-lasting electrical solutions—powering homes, businesses, and industries while shaping a brighter future for generations to come.`,
];

const GlanceCard = ({ item, className = '' }: { item: typeof glanceItems[number]; className?: string }) => {
  const Icon = item.icon;
  return (
    <div
      className={`relative bg-white/55 backdrop-blur-md border border-white/60 rounded-2xl flex flex-col items-start overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_26px_-8px_rgba(220,38,38,0.1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_32px_-8px_rgba(220,38,38,0.16)] hover:-translate-y-1 hover:bg-white/70 transition-all duration-300 ${className}`}
    >
      {/* glass sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/0 to-transparent" />

      <Icon className="relative text-red-500 w-7 h-7 mb-4 stroke-[1.5]" />
      <h4 className="relative text-red-600 font-bold text-2xl leading-none mb-1">{item.value}</h4>
      <p className="relative font-bold text-[10px] uppercase tracking-wider text-gray-900 mb-2">{item.subtitle}</p>
      <div className="relative w-6 h-0.5 bg-red-600 mb-3" />
      <p className="relative text-xs text-gray-500 leading-relaxed">{item.description}</p>
    </div>
  );
};

export const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % glanceItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f8f8f8] overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-10 w-full max-w-7xl">

        {/* Top two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-0">

          {/* Left column: label + heading + image */}
          <div className="flex flex-col">
            {/* ABOUT US label */}
            <div className="mb-5">
              <span className="text-red-600 font-bold text-sm tracking-[0.18em] uppercase">
                ABOUT US
              </span>
              <div className="w-8 h-0.5 bg-red-600 mt-1.5" />
            </div>

            {/* Heading — smaller and faded */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-400 leading-snug tracking-tight mb-10">
              Building Connections,<br />Powering Progress
            </h2>

            {/* Building illustration */}
            <div className="relative mt-auto -ml-8">
              <img
                src="/Building.png"
                alt="KITTY Building"
                className="w-[115%] h-auto opacity-60 mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right column: paragraphs */}
          <div className="space-y-5 text-gray-700 text-[15px] leading-[1.75] pt-1">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* At a glance section */}
        <div className="mt-14">
          {/* Centered label with single line */}
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-1 h-px bg-red-200" />
            <h3 className="text-red-600 font-bold text-2xl md:text-3xl whitespace-nowrap tracking-tight">
              At a glance
            </h3>
            <div className="flex-1 h-px bg-red-200" />
          </div>

          {/* Mobile / tablet — single card carousel */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative w-full max-w-xs h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <GlanceCard item={glanceItems[currentIndex]} className="w-full h-full p-7 justify-center" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-6">
              {glanceItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'w-8 bg-red-600' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to stat ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop — full grid */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-5">
            {glanceItems.map((item, i) => (
              <GlanceCard key={i} item={item} className="p-5" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
