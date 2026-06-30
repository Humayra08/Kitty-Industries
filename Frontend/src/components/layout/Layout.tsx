
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect } from 'react';
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

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <Outlet />
      </main>
      <div className="bg-[#fafafa] py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block">
                <p className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase">Accreditations</p>
                <div className="h-0.5 w-8 bg-red-600 mt-2 mb-4" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 leading-snug mb-4">
                Certified. Compliant.<br />Trusted.
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                Our commitment to quality and safety is backed by national and international certifications that ensure reliability, compliance, and peace of mind.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-2 sm:gap-x-6">
              {accreditations.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-col items-center text-center gap-3 px-2 ${i !== 0 ? 'border-l border-gray-300' : ''}`}
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
      <Footer />
    </div>
  );
};
