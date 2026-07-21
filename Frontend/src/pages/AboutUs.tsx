import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// ─── 5 Cs data ────────────────────────────────────────────────────────────────

const fiveCsItems = [
  {
    label: 'Customer',
    desc: 'Our customers are at the heart of every decision we make.',
    icon: <img src="/five-cs/customer.png" alt="Customer" className="w-9 h-9 object-contain" />,
  },
  {
    label: 'Commitment',
    desc: 'We deliver on our promises with dedication and responsibility.',
    icon: <img src="/five-cs/commitment.png" alt="Commitment" className="w-9 h-9 object-contain" />,
  },
  {
    label: 'Collaboration',
    desc: 'We achieve more by working together.',
    icon: <img src="/five-cs/collaboration.png" alt="Collaboration" className="w-9 h-9 object-contain" />,
  },
  {
    label: 'Creativity',
    desc: 'We embrace innovation and continuous improvement.',
    icon: <img src="/five-cs/creativity.png" alt="Creativity" className="w-9 h-9 object-contain" />,
  },
  {
    label: 'Character',
    desc: 'We lead with integrity, respect, and accountability.',
    icon: <img src="/five-cs/character.png" alt="Character" className="w-9 h-9 object-contain" />,
  },
];

const paragraphs = [
  `KITTY Industries Limited is a leading manufacturer of electrical switches, accessories, and LED lighting solutions in Bangladesh. Since its establishment in 2014, the company has grown with a strong commitment to quality, innovation, and reliability, serving residential, commercial, and industrial sectors nationwide. Over the years, KITTY has established itself as a trusted brand known for delivering consistently performing products.`,
  `At the heart of its operations is a world class manufacturing facility spanning over 8 acres, equipped with advanced machinery, efficient production systems, and rigorous quality control processes. Supported by a dedicated workforce of more than 1,000 employees, KITTY continues to maintain the highest standards across every stage of production.`,
  `With a robust network of over 300 distributors and a diverse portfolio of more than 600 products, KITTY has built a strong presence across Bangladesh, ensuring its solutions are accessible nationwide.`,
  `Driven by innovation, quality, and trust, KITTY Industries remains committed to delivering safe and long-lasting electrical solutions shaping a brighter future for generations to come.`,
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const AboutUsPage = () => {
  const [fiveCsIndex, setFiveCsIndex] = useState(0);
  const fiveCsTotal = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setFiveCsIndex((prev) => (prev + 1) % fiveCsTotal);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden">
        <img
          src="/image.png"
          alt="KITTY Industries"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Left-heavy red gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(120,10,10,0.97) 0%, rgba(180,20,20,0.90) 25%, rgba(192,57,43,0.72) 50%, rgba(192,57,43,0.28) 75%, rgba(192,57,43,0.08) 100%)',
          }}
        />

        <div className="relative h-full container mx-auto px-6 md:px-10 max-w-7xl flex flex-col justify-center">
          <div className="mb-5">
            <p className="text-white font-bold text-xs tracking-[0.22em] uppercase mb-2">About Us</p>
            <div className="h-0.5 w-8 bg-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-2xl mb-5">
            <span className="text-white block">Powering</span>
            <span className="block">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #ff5252 0%, #ff0000 55%, #e60000 100%)' }}
              >
                Everyday
              </span>
              <span className="text-white"> Life</span>
            </span>
          </h1>
          {/* <p className="text-white/80 text-base leading-loose max-w-sm">
            Delivering trusted electrical solutions<br />
            that power homes, businesses,<br />
            and industries across Bangladesh.
          </p> */}
        </div>
      </section>

      {/* ── About Us content (no at-a-glance) ────────────────────────── */}
      <section className="bg-[#f8f8f8] overflow-hidden pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left */}
            <div className="flex flex-col">
              <div className="mb-5">
                <span className="text-red-600 font-bold text-2xl tracking-[0.18em] uppercase">About Us</span>
                <div className="w-8 h-0.5 bg-red-600 mt-1.5" />
              </div>
              <h2 className="text-2xl md:text-2xl font-bold text-gray-400 leading-snug tracking-tight mb-10">
                Powering<br />Everyday Life
              </h2>
              <div className="relative mt-auto -ml-8">
                <img
                  src="/Building.png"
                  alt="KITTY Building"
                  className="w-[115%] h-auto opacity-60 mix-blend-multiply"
                />
              </div>
            </div>
            {/* Right */}
            <div className="space-y-5 text-gray-700 text-[15px] leading-[1.75] pt-1 text-justify">
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Purpose & Values ──────────────────────────────────────────── */}
      <section className="bg-[#f8f8f8] pt-16 pb-20">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-red-600 font-bold text-2xl tracking-[0.18em] uppercase">Our Purpose</p>
            <div className="h-0.5 w-8 bg-red-600 mx-auto mt-2 mb-3" />
            <h2 className="text-sm md:text-lg font-bold text-gray-400 leading-snug tracking-tight mb-3">
              Purpose drives us.{' '}
              <span className="text-red-600">Values define us.</span>
            </h2>
            {/* <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Our mission and vision guide our journey, while the 5 Cs shape
              the way we think, act, and create impact every day.
            </p> */}
          </div>

          {/* Mission & Vision — two separate cards, aligned with Board of Directors */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">

            {/* Mission */}
            <div className="relative bg-white/55 backdrop-blur-md border border-[#f8f8f8]/60 rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_26px_-8px_rgba(220,38,38,0.1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_32px_-8px_rgba(220,38,38,0.16)] hover:-translate-y-1 hover:bg-white/70 transition-all duration-300 p-7 flex flex-col sm:flex-row items-center gap-0 text-center sm:text-left">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/0 to-transparent" />
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-red-50 flex items-center justify-center overflow-hidden mb-4 sm:mb-0">
                <img src="/mission.png" alt="Mission" className="w-12 h-12 object-contain" />
              </div>
              <div className="hidden sm:block w-px bg-gray-100 self-stretch mx-6 flex-shrink-0" />
              <div>
                <p className="text-red-600 font-bold text-xs tracking-[0.18em] uppercase mb-1.5">Mission</p>
                <div className="w-6 h-0.5 bg-red-600 mb-3 mx-auto sm:mx-0" />
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  To deliver safe, innovative electrical solutions that enhance everyday life.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-white/55 backdrop-blur-md border border-[#f8f8f8]/60 rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_26px_-8px_rgba(220,38,38,0.1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_32px_-8px_rgba(220,38,38,0.16)] hover:-translate-y-1 hover:bg-white/70 transition-all duration-300 p-7 flex flex-col sm:flex-row items-center gap-0 text-center sm:text-left">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/0 to-transparent" />
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-red-50 flex items-center justify-center overflow-hidden mb-4 sm:mb-0">
                <img src="/vision.png" alt="Vision" className="w-12 h-12 object-contain" />
              </div>
              <div className="hidden sm:block w-px bg-gray-100 self-stretch mx-6 flex-shrink-0" />
              <div>
                <p className="text-red-600 font-bold text-xs tracking-[0.18em] uppercase mb-1.5">Vision</p>
                <div className="w-6 h-0.5 bg-red-600 mb-3 mx-auto sm:mx-0" />
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  To become Bangladesh's most trusted electrical brand, setting the benchmark for quality and innovation.
                </p>
              </div>
            </div>

          </div>

          {/* Our Values heading */}
          <div className="text-center mb-6">
            <p className="text-red-600 font-bold text-2xl tracking-[0.18em] uppercase">Our Values</p>
            <div className="h-0.5 w-8 bg-red-600 mx-auto mt-2 mb-3" />
            <h2 className="text-xl md:text-lg font-bold text-gray-400 leading-snug tracking-tight">
              The 5 Cs of <span className="text-red-600">KITTY</span>
            </h2>
          </div>

          {/* 5 Cs — mobile carousel */}
          <div className="md:hidden max-w-5xl mx-auto mt-8 flex flex-col items-center">
            <div className="relative w-full max-w-xs h-56">
              <AnimatePresence mode="wait">
                <motion.div
                  key={fiveCsIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  {(() => {
                    const item = fiveCsItems[fiveCsIndex];
                    return (
                      // Outer: clips children (overflow-hidden) without backdrop-blur interference
                      <div className="rounded-2xl overflow-hidden border border-[#f8f8f8]/60 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_26px_-8px_rgba(220,38,38,0.1)] w-full h-full">
                        {/* Inner: backdrop-blur without overflow-hidden */}
                        <div className="relative bg-white/55 backdrop-blur-md w-full h-full p-6 flex flex-col items-center justify-center text-center">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/0 to-transparent" />
                          {/* Bottom red bar — clipped cleanly by outer wrapper */}
                          <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-700/50 via-red-500/80 to-red-700/50" />
                          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4">{item.icon}</div>
                          <p className="text-red-600 font-bold text-sm mb-1.5">{item.label}</p>
                          <div className="w-6 h-0.5 bg-red-600 mb-3" />
                          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2 mt-6">
              {fiveCsItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFiveCsIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === fiveCsIndex ? 'w-8 bg-red-600' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to ${fiveCsItems[idx].label}`}
                />
              ))}
            </div>
          </div>

          {/* 5 Cs — desktop grid */}
          <div className="hidden md:grid max-w-5xl mx-auto grid-cols-5 gap-4 mt-8">
            {fiveCsItems.map((item) => (
              // Outer: clips + hover lift
              <div
                key={item.label}
                className="rounded-2xl overflow-hidden border border-[#f8f8f8]/60 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_26px_-8px_rgba(220,38,38,0.1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_32px_-8px_rgba(220,38,38,0.16)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Inner: backdrop-blur */}
                <div className="relative bg-white/55 backdrop-blur-md hover:bg-white/70 transition-colors duration-300 p-5 flex flex-col items-center text-center h-full">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/0 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-700/50 via-red-500/80 to-red-700/50" />
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4">{item.icon}</div>
                  <p className="text-red-600 font-bold text-sm mb-1.5">{item.label}</p>
                  <div className="w-6 h-0.5 bg-red-600 mb-3" />
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
