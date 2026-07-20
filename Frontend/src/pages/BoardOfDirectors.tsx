const boardMembers = [
  {
    name: 'Mr. Rashed Mahmud',
    title: 'Chairman',
    company: 'KITTY Industries Ltd.',
    photo: 'https://res.cloudinary.com/dcdo4venk/image/upload/f_auto,q_auto,w_500,dpr_auto/v1784439016/Rashed_Mahmud_ex8r9t.png',
    bio: "Mr. Rashed Mahmud is the Chairman of KITTY Industries Ltd. He holds a Bachelor of Commerce in Finance and an MBA from the University of Dhaka. He oversees international procurement, finance and strategic growth.",
    roles: [
      { title: 'Chairman', company: 'Nandan Kanon Housing Ltd.' },
      { title: 'Chairman', company: 'NBP Kwality Chemical Industries Ltd.' },
      { title: 'Chairman', company: 'TAK Chemical Industries Ltd.' },
    ],
  },
  {
    name: 'Mr. Hasan Mahmud',
    title: 'Managing Director',
    company: 'KITTY Industries Ltd.',
    photo: 'https://res.cloudinary.com/dcdo4venk/image/upload/f_auto,q_auto,w_500,dpr_auto/v1784439015/Hasan_Mahmud_s79p31.png',
    bio: "Mr. Hasan Mahmud is the Managing Director of KITTY Industries Ltd. He holds a Bachelor in Marine Engineering from Chittagong Marine Academy. He is responsible for factory production, global supply chain management and overall group operations.",
    roles: [
      { title: 'Managing Director', company: 'NBP Kwality Chemical Industries Ltd.' },
      { title: 'Managing Director', company: 'TAK Chemical Industries Ltd.' },
      { title: 'Director', company: 'Nandan Kanon Housing Ltd.' },
    ],
  },
  {
    name: 'Mr. Shahed Mahmud',
    title: 'Director',
    company: 'KITTY Industries Ltd.',
    photo: 'https://res.cloudinary.com/dcdo4venk/image/upload/f_auto,q_auto,w_500,dpr_auto/v1784439015/Shahed_Mahmud_bsnk05.png',
    bio: "Mr. Shahed Mahmud is the Director of KITTY Industries Ltd. He holds a Bachelor of Commerce in Marketing and an MBA from the University of Dhaka. He oversees marketing, sales and other support functions.",
    roles: [
      { title: 'Managing Director', company: 'Nandan Kanon Housing Ltd.' },
      { title: 'Director', company: 'NBP Kwality Chemical Industries Ltd.' },
      { title: 'Director', company: 'TAK Chemical Industries Ltd.' },
    ],
  },
];

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-red-600">
    <path
      d="M4 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M4 21h16M4 21H2m14 0V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v12m-5 0h5M7 7h2M7 10h2M7 13h2M7 16h2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const BoardOfDirectorsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px]">
        <img
          src="/bod bg image.png"
          alt="KITTY Industries boardroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4 md:px-6">
          {/* <p className="text-white font-semibold text-[8px] sm:text-xs uppercase mb-2 sm:mb-4" style={{ letterSpacing: '3px' }}>
            Leadership That Builds The Future
          </p> */}
          <h1 className="text-white font-black text-lg sm:text-3xl md:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.05] tracking-tight mb-3 sm:mb-6">
            Board of<br />Directors
          </h1>
          <div className="h-1 w-[30px] sm:w-[60px] bg-white rounded-full mb-3 sm:mb-6" />
          {/* <p className="text-[#F5F5F5] text-[10px] sm:text-sm md:text-base leading-relaxed max-w-md">
            Our Board of Directors brings together visionary leaders with extensive experience and a shared commitment to excellence, innovation, and sustainable growth.
          </p> */}
        </div>
      </section>

      {/* ── Board of Directors ────────────────────────────────────────── */}
      <section className="relative bg-[#fafafa] pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl flex flex-col items-center">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-24 items-center justify-center py-10 border-b border-gray-200 last:border-b-0 w-full max-w-5xl mx-auto"
            >
              {/* Photo with decorative backdrop */}
              <div className="relative mx-auto md:mx-0 md:-ml-6 w-72 flex-shrink-0">
                <div
                  className="absolute left-0 top-16 w-44 h-44 rounded-full"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #e11d2e 1.5px, transparent 1.5px)',
                    backgroundSize: '9px 9px',
                    maskImage: 'radial-gradient(circle, black 25%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 25%, transparent 75%)',
                    opacity: 0.5,
                  }}
                />
                <div className="absolute -right-3 top-20 w-28 h-40 rounded-full bg-red-50/80" />
                <svg
                  className="absolute -right-3 top-24 w-8 h-40 text-red-200"
                  viewBox="0 0 32 160"
                  fill="none"
                >
                  <path d="M2 2 C 26 40, 26 120, 2 158" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="relative w-full h-auto"
                />
              </div>

              {/* Name / title + bio + directorships */}
              <div>
                <div className="text-center md:text-left mb-5">
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-bold text-sm uppercase tracking-wide mb-1">
                    {member.title}
                  </p>
                  <p className="text-gray-400 text-base mb-3">{member.company}</p>
                  <div className="w-8 h-0.5 bg-red-600 mx-auto md:mx-0" />
                </div>

                <p className="text-gray-500 text-base leading-relaxed mb-6">{member.bio}</p>
                <div className="divide-y divide-gray-100">
                  {member.roles.map((role) => (
                    <div
                      key={role.title + role.company}
                      className="flex items-center gap-3 py-3 first:pt-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <BuildingIcon />
                      </div>
                      <div>
                        <p className="text-red-600 font-semibold text-base">{role.title}</p>
                        <p className="text-gray-400 text-sm">{role.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
