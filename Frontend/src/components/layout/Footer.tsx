import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10H5.67v8.34h2.67ZM7 8.86a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.48v-4.59c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32V10H10.2c.04.78 0 8.34 0 8.34h2.67v-4.66c0-.25.02-.5.1-.68.21-.5.7-1.03 1.51-1.03 1.07 0 1.49.81 1.49 2v4.37h2.67Z" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.58 7.2a2.78 2.78 0 0 0-1.95-2C17.94 4.7 12 4.7 12 4.7s-5.94 0-7.63.5a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 2 12a29 29 0 0 0 .42 4.8 2.78 2.78 0 0 0 1.95 2c1.69.5 7.63.5 7.63.5s5.94 0 7.63-.5a2.78 2.78 0 0 0 1.95-2A29 29 0 0 0 22 12a29 29 0 0 0-.42-4.8ZM10 15V9l5.2 3-5.2 3Z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo & Description */}
          <div className="lg:col-span-1 flex flex-col">
            <Link to="/" className="mb-4">
              <img
                src="/n-logo.png"
                alt="Kitty Industries"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-xs md:text-sm mb-6 leading-relaxed">
              Your trusted partner for premium switches, accessories & lighting solutions.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              {[Facebook, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors duration-200 group"
                >
                  <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Board of Directors', path: '/board-of-directors' },
                { name: 'Mission & Vission', path: '/mission-vision' },
                { name: 'Products', path: '/products' },
                { name: 'Gallery', path: '/gallery' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-red-600 transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-1">
            <h4 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              {['Switches', 'Accessories', 'Lighting', 'Modular Series'].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-red-600 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Group */}
          <div className="lg:col-span-1">
            <h4 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">Our Group</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              {['Our Board Members', 'Our Team'].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-red-600 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h4 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="space-y-4 text-gray-500 text-sm">
              <div className="flex items-center gap-3">
                 <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                 <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center gap-3">
                 <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                 <span>info@kittyindustriesbd.com</span>
              </div>
              <div className="flex items-start gap-3">
                 <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                 <span>
                   <strong className="text-gray-600">Head Office:</strong> Rosemont Tower (6th floor),<br/>
                   House # 148, Road # 13, Block # E,<br/>
                   Banani, Dhaka-1213<br/><br/>
                   <strong className="text-gray-600">Factory:</strong> Taiyubpur, Ashulia,<br/>
                   Savar, Dhaka
                 </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-gray-100 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-gray-500">
          <span>© 2026 Kitty Industries Ltd. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 tracking-widest text-gray-500 text-[10px] md:text-xs">
            <span>DRIVEN BY <span className="text-gray-900">INNOVATION.</span></span>
            <span className="text-gray-300">|</span>
            <span>POWERED BY <span className="text-gray-900">TECHNOLOGY.</span></span>
            <span className="text-gray-300">|</span>
            <span>BUILT ON <span className="text-gray-900">TRUST.</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
