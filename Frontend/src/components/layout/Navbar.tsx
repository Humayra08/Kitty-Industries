import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

const productDropdownItems = [
  { name: 'Switch & Socket', path: '/products/switch-socket' },
  { name: 'Distribution Box', path: '/products/distribution-box' },
  { name: 'Travel Adapter', path: '/products/travel-adapter' },
  { name: 'Lights', path: '/products/lights' },
  { name: 'Lamp Holder', path: '/products/lamp-holder' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Board of Directors', path: '/board-of-directors' },
  { name: 'Products', path: '/products', hasDropdown: true },
  { name: 'Gallery', path: '/gallery' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const navbarHeight = 'h-16 md:h-20';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300',
        isScrolled ? 'shadow-md' : 'shadow-sm'
      )}
    >
      <div className={cn('container mx-auto px-4 md:px-6 flex items-center justify-between', navbarHeight)}>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/kitty_logo.png"
            alt="Kitty — The Ultimate Safety"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));

            if (link.hasDropdown) {
              return (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={cn(
                      'flex items-center gap-1 text-[15px] font-normal tracking-wide transition-colors hover:text-red-600 py-2 cursor-pointer',
                      isActive ? 'text-red-600' : 'text-gray-700'
                    )}
                  >
                    {link.name}
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', dropdownOpen && 'rotate-180')} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50">
                      {productDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'relative text-[15px] font-normal tracking-wide transition-colors hover:text-red-600 py-2',
                  isActive ? 'text-red-600' : 'text-gray-700'
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right — search + CTA */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
          <button className="p-2 text-gray-600 hover:text-red-600 transition-colors cursor-pointer" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/contact">
            <Button
              variant="primary"
              size="sm"
              className="h-10 rounded-xl px-4 text-[15px] font-bold text-white bg-gradient-to-b from-red-500 to-red-700 shadow-[0_6px_14px_-4px_rgba(220,38,38,0.5)] hover:shadow-[0_8px_18px_-4px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-gray-800 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 md:top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl py-2 px-4 flex flex-col max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className={cn(
                  'flex items-center justify-between text-sm font-normal tracking-wide py-3.5 border-b border-gray-100 transition-colors hover:text-red-600',
                  (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))) ? 'text-red-600' : 'text-gray-700'
                )}
                onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 flex flex-col pb-2">
                  {productDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="text-sm text-gray-500 py-2.5 border-b border-gray-50 hover:text-red-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
