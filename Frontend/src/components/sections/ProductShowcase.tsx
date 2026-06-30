import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Switch & Socket",
    description: "Premium design meets ultimate safety. Engineered for millions of clicks with fire-retardant materials.",
    features: ["Fire Retardant", "10M+ Clicks", "Modern Aesthetic"],
    image: "/1.png",
  },
  {
    id: 2,
    title: "Distribution Box",
    description: "Robust and reliable power distribution. Built to safely manage and distribute electrical loads across circuits.",
    features: ["Multi-Circuit", "IP Rating", "Din Rail Mount"],
    image: "/2.png",
  },
  {
    id: 3,
    title: "Travel Adapter",
    description: "Universal compatibility with surge protection. Your perfect companion for global travel.",
    features: ["Surge Protection", "Universal Fit", "Compact Design"],
    image: "/3.png",
  },
  {
    id: 4,
    title: "Lights",
    description: "Energy-efficient LED technology delivering exceptional brightness and longevity.",
    features: ["Energy Saving", "High Lumens", "50k Hrs Life"],
    image: "/4.png",
  },
  {
    id: 5,
    title: "Lamp Holder",
    description: "Heat-resistant and durable. Designed to securely hold and power your lighting solutions.",
    features: ["Heat Resistant", "Secure Grip", "Easy Install"],
    image: "/5.png",
  },
];

export const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000); // Change product every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const product = products[currentIndex];

  return (
    <section className="relative bg-[#C9302C] text-white flex items-center overflow-hidden py-12 md:py-16">
      {/* Background marquee */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-10">
        <div className="animate-marquee flex whitespace-nowrap">
          <span className="text-[20vw] font-bold text-white select-none leading-none pr-[8vw]">
            KITTY INDUSTRIES LTD.
          </span>
          <span className="text-[20vw] font-bold text-white select-none leading-none pr-[8vw]">
            KITTY INDUSTRIES LTD.
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center max-w-xl min-h-[280px]">
             <span className="text-white/80 font-semibold tracking-wider uppercase mb-2 text-xs md:text-sm">
                Product Categories
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white leading-tight">
                Engineered for <br /> excellence.
              </h2>

              <div className="relative h-44 mt-2">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex flex-col justify-start"
                    >
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{product.title}</h3>
                      <p className="text-sm md:text-base text-white/85 mb-4 leading-relaxed">{product.description}</p>
                      <ul className="flex flex-wrap gap-2 text-xs md:text-sm text-white">
                        {product.features.map((f) => (
                          <li key={f} className="bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                 </AnimatePresence>
              </div>

              {/* View All Products */}
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 mt-2 text-sm md:text-base font-normal underline underline-offset-4 text-white hover:text-white/80 transition-colors w-fit"
              >
                View All Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Indicators */}
              <div className="flex items-center gap-2 mt-4">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                    aria-label={`Go to product ${idx + 1}`}
                  />
                ))}
              </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative h-[36vh] sm:h-[44vh] lg:h-[52vh] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-xl h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
