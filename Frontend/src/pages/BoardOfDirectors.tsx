const boardMembers = [
  {
    name: 'Mr. Rashed Mahmud',
    title: 'Chairman',
    bio: 'Visionary leader with over 30 years of experience in the electrical industry and corporate management.',
    photo: 'https://ui-avatars.com/api/?name=Rashed+Mahmud&background=f8f8f8&color=c0392b&size=200&font-size=0.4&bold=true',
  },
  {
    name: 'Mr. Hasan Mahmud',
    title: 'Director',
    bio: 'Expert in finance and strategic planning with a strong track record in driving sustainable growth.',
    photo: 'https://ui-avatars.com/api/?name=Hasan+Mahmud&background=f8f8f8&color=c0392b&size=200&font-size=0.4&bold=true',
  },
  {
    name: 'Mr. Shahed Mahmud',
    title: 'Director',
    bio: 'Operations and modernisation specialist focused on innovation, efficiency, and excellence.',
    photo: 'https://ui-avatars.com/api/?name=Shahed+Mahmud&background=f8f8f8&color=c0392b&size=200&font-size=0.4&bold=true',
  },
];

export const BoardOfDirectorsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative h-[340px] md:h-[420px] overflow-hidden flex">
        {/* Left: light gradient background with subtle shapes */}
        <div
          className="flex-1 relative z-10 flex flex-col justify-center px-10 md:px-16 lg:px-20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #f0f0f2 0%, #e8e8ec 40%, #f4f4f6 100%)' }}
        >
          <img
            src="/wave1.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-0 -bottom-1 z-0 w-[300px] sm:w-[380px] md:w-[500px] lg:w-[660px] xl:w-[780px] select-none opacity-95 h-auto"
          />

          {/* Decorative curved fins */}
          <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute top-0 h-full border border-white/60"
                style={{
                  right: `${i * 48}px`,
                  width: '90px',
                  borderRadius: '0 0 0 120px',
                  background: `rgba(255,255,255,${0.18 - i * 0.03})`,
                  transform: 'skewX(-6deg)',
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-red-600 font-bold text-xl tracking-[0.18em] uppercase mb-2">Leadership</p>
            <div className="h-[2px] w-7 bg-red-600 mb-5" />
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-tight tracking-tight mb-4">
              <span className="text-gray-400">Board of </span>
              <span className="text-red-600">Directors</span>
            </h1>
            {/* <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
              Guided by experience. Driven by purpose.<br />
              Our Board provides strategic direction to ensure<br />long-term value for our stakeholders.
            </p> */}
          </div>
        </div>

      </section>

      {/* ── Board of Directors ────────────────────────────────────────── */}
      <section className="relative bg-[#f8f8f8] pt-16 pb-20 overflow-hidden">
        <div
          className="absolute right-0 top-0 w-72 h-full opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #c0392b 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div
          className="absolute left-0 top-0 w-72 h-full opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #c0392b 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />

        <div className="relative container mx-auto px-6 md:px-10 max-w-5xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_26px_-8px_rgba(220,38,38,0.1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_32px_-8px_rgba(220,38,38,0.16)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative bg-white/55 backdrop-blur-md hover:bg-white/70 transition-colors duration-300 p-8 flex flex-col items-center text-center">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/0 to-transparent" />
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#f8f8f8] shadow-sm mb-6 flex-shrink-0">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-red-600 font-bold text-base mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{member.title}</p>
                  <div className="w-7 h-0.5 bg-red-600 mb-4" />
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chairman's Message ────────────────────────────────────────── */}
      <section className="bg-[#fafafa] pt-0 pb-12">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="relative bg-white/55 backdrop-blur-md border border-[#f8f8f8]/60 rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_26px_-8px_rgba(220,38,38,0.1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_32px_-8px_rgba(220,38,38,0.16)] hover:-translate-y-1 hover:bg-white/70 transition-all duration-300">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/0 to-transparent z-0" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[100px_1fr]">

              {/* Red quote block */}
              <div className="bg-gradient-to-b from-red-600 to-red-800 flex items-start justify-center pt-6 lg:pt-8 py-8 lg:py-0 flex-shrink-0">
                <span className="text-white/30 font-black leading-none select-none"
                  style={{ fontSize: '7rem', lineHeight: 1, fontFamily: 'Inter, Geist, sans-serif' }}>
                  &#8221;
                </span>
              </div>

              {/* Full-width text */}
              <div className="p-6 md:p-8">
                <div className="mb-5">
                  <h3 className="font-bold text-sm tracking-[0.18em] uppercase">
                    <span className="text-gray-500">Chairman's</span> <span className="text-red-600">Message</span>
                  </h3>
                  <div className="h-0.5 w-8 bg-red-600 mt-2" />
                </div>
                <div className="space-y-5">
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed text-justify">
                    At KITTY Industries Limited, we believe our greatest strength lies in our people. Over the years, we have built more than a company. We have built a family united by trust, dedication, and shared purpose. We are deeply grateful to our employees, distributors, partners, and customers, whose continued support has shaped our journey. Their passion and commitment inspire us to grow, innovate, and move forward together every day.
                  </p>
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed text-justify">
                    As we look to the future, our goal is not only to build a stronger business, but also to create a lasting legacy, one that future generations will be proud to carry forward. Together, we remain committed to fostering meaningful relationships, making a positive impact, and contributing to the progress of Bangladesh.
                  </p>
                  <p className="text-gray-500 font-bold text-sm md:text-[15px] leading-relaxed">
                    Because at <span className="text-red-600">KITTY</span>, we are more than a
                    company. we are{' '}
                    <span className="text-red-600">one family, growing together.</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
