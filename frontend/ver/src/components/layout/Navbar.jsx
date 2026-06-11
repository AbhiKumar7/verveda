import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation,useNavigate } from 'react-router-dom';
import logoVer from "../../images/logover.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
   const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'S.Timonds', path: '/collections/stimonds' },
    { name: 'Veveda', path: '/collections/veveda' },
    { name: 'Selaveda', path: '/collections/selaveda' },
    { name: 'Services', path: '/services' },
    // { name: 'Book Appointment', path: '/appointment' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-ivory/80 backdrop-blur-sm '
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            {/* Logo - EXTRA LARGE */}
            <Link to="/" className="group flex items-center space-x-3 relative">
              <img 
                src={logoVer} 
                alt="VERVEDA Logo" 
                className="h-14 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300"
              />
              <div className="hidden sm:block">
                
              </div>
              <span className="absolute -bottom-2 left-0 h-px w-0 group-hover:w-full bg-gold-300 transition-all duration-500"></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-wider transition-all duration-300 font-sans ${
                      isActive
                        ? 'text-gold-400 border-b-2 border-gold-400 pb-1'
                        : 'text-charcoal/70 hover:text-gold-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <Link
              to="/appointment"
              className="hidden md:block px-6 py-3 border border-gold-300 text-gold-400 text-sm uppercase tracking-wider hover:bg-gold-300 hover:text-charcoal transition-all duration-300 rounded-sm"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-charcoal focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden pt-24 px-6`}
      >
        {/* Mobile Logo - Extra Large */}
        <div className="flex flex-col items-center justify-center mb-10">
          <img 
            src={logoVer} 
            alt="VERVEDA Logo" 
            className="h-20 w-auto object-contain mb-4"
          />
          <span className="text-2xl font-serif tracking-wide text-charcoal">
            VERVEDA
          </span>
        </div>
        
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg uppercase tracking-wider transition-colors font-sans text-center ${
                  isActive ? 'text-gold-400' : 'text-charcoal/70 hover:text-gold-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 bg-gold-300 text-charcoal text-center uppercase tracking-wider hover:bg-gold-400 transition rounded-sm"
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;