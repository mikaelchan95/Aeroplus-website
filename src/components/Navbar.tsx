import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { mainNavLinks } from '../utils/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled || location.pathname !== '/' ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center space-x-3 cursor-pointer"
          >
            <span className="text-2xl font-bold text-white">Aero Plus</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center ${
                    location.pathname === item.path ? 'text-airbus-gold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-navy-900 rounded-lg shadow-xl border border-white/10 overflow-hidden animate-fade-up">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-white/90 hover:bg-navy-800 hover:text-white transition-colors group relative"
                        >
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-airbus-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {subItem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/investors"
              className="ml-4 px-6 py-2.5 text-sm font-medium border-2 border-airbus-gold text-airbus-gold hover:bg-airbus-gold hover:text-navy-900 transition-all duration-300"
            >
              Investors
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-white"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-navy-900/95 backdrop-blur-md`}>
        <div className="px-4 py-6 space-y-4 border-t border-white/10">
          {mainNavLinks.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="pl-8 space-y-2 mt-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/investors"
            className="block w-full mt-4 px-4 py-3 border-2 border-airbus-gold text-airbus-gold hover:bg-airbus-gold hover:text-navy-900 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Investors Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}