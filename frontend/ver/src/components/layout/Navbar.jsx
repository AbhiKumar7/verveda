import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logoVer from "../../images/logover.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStimonds, setShowStimonds] = useState(false);
  const [showVeveda, setShowVeveda] = useState(false);
  const [showSelaveda, setShowSelaveda] = useState(false);
  
  // Refs for dropdown containers
  const stimondsRef = useRef(null);
  const vevedaRef = useRef(null);
  const selavedaRef = useRef(null);
  
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleBookingClick = () => {
    navigate('/appointment');
    setIsMobileMenuOpen(false);
  };

  // Handle dropdown hover - Open on mouse enter
  const handleMouseEnter = (setter) => {
    setter(true);
  };

  // Handle dropdown hover - Close on mouse leave
  const handleMouseLeave = (setter) => {
    setter(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stimondsRef.current && !stimondsRef.current.contains(event.target)) {
        setShowStimonds(false);
      }
      if (vevedaRef.current && !vevedaRef.current.contains(event.target)) {
        setShowVeveda(false);
      }
      if (selavedaRef.current && !selavedaRef.current.contains(event.target)) {
        setShowSelaveda(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dropdown link click handler
  const handleDropdownLinkClick = (setter) => {
    setter(false);
  };

  // NavLink with hover line component
  const NavLinkWithLine = ({ to, children, className = "" }) => {
    const isActive = location.pathname === to;
    return (
      <NavLink
        to={to}
        className={({ isActive: isNavActive }) =>
          `relative text-sm uppercase tracking-wider transition-all duration-300 font-sans group ${
            isNavActive
              ? 'text-gold-400'
              : 'text-charcoal/70 hover:text-gold-400'
          } ${className}`
        }
      >
        {children}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}></span>
      </NavLink>
    );
  };

  // Dropdown button with line
  const DropdownButton = ({ children, isOpen, onClick, isActive }) => {
    return (
      <button 
        className={`relative text-sm uppercase tracking-wider transition-all duration-300 font-sans flex items-center gap-1 group ${
          isActive
            ? 'text-gold-400'
            : 'text-charcoal/70 hover:text-gold-400'
        }`}
        onClick={onClick}
      >
        {children}
        <svg 
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
          isActive || isOpen ? 'w-full' : 'w-0 group-hover:w-full'
        }`}></span>
      </button>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-ivory/80 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="group flex items-center relative flex-shrink-0">
              <img 
                src={logoVer} 
                alt="VERVEDA Logo" 
                className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
              />
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full bg-gold-300 transition-all duration-500"></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* HOME */}
              <NavLinkWithLine to="/">
                HOME
              </NavLinkWithLine>

              {/* STIMAONDS Dropdown */}
              <div
                ref={stimondsRef}
                className="relative"
                onMouseEnter={() => handleMouseEnter(setShowStimonds)}
                onMouseLeave={() => handleMouseLeave(setShowStimonds)}
              >
                <DropdownButton
                  isOpen={showStimonds}
                  onClick={() => setShowStimonds(!showStimonds)}
                  isActive={location.pathname.includes('/collections/stimonds')}
                >
                  STIMAONDS
                </DropdownButton>

                {showStimonds && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-ivory shadow-xl min-w-[280px] p-6 rounded-sm border border-sage-100 z-50"
                    onMouseEnter={() => handleMouseEnter(setShowStimonds)}
                    onMouseLeave={() => handleMouseLeave(setShowStimonds)}
                  >
                    <div className="mb-4">
                      <h4 className="font-semibold text-gold-400 text-xs uppercase tracking-wider mb-2">
                        Diamond Earrings
                      </h4>
                      <div className="space-y-2">
                        <NavLink 
                          to="/collections/stimonds/earrings/solitaire"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Solitaire Earrings
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                        <NavLink 
                          to="/collections/stimonds/earrings/stud"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Stud Earrings
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                        <NavLink 
                          to="/collections/stimonds/earrings/hoop"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Hoop Earrings
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gold-400 text-xs uppercase tracking-wider mb-2">
                        Diamond Rings
                      </h4>
                      <div className="space-y-2">
                        <NavLink 
                          to="/collections/stimonds/rings/solitaire"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Solitaire Rings
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                        <NavLink 
                          to="/collections/stimonds/rings/engagement"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Engagement Rings
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                        <NavLink 
                          to="/collections/stimonds/rings/wedding"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Wedding Bands
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gold-400 text-xs uppercase tracking-wider mb-2">
                        Diamond Necklaces
                      </h4>
                      <div className="space-y-2">
                        <NavLink 
                          to="/collections/stimonds/necklaces/pendant"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Pendant Necklaces
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                        <NavLink 
                          to="/collections/stimonds/necklaces/tennis"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowStimonds)}
                        >
                          Tennis Necklaces
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* VEVADA Dropdown */}
              <div
                ref={vevedaRef}
                className="relative"
                onMouseEnter={() => handleMouseEnter(setShowVeveda)}
                onMouseLeave={() => handleMouseLeave(setShowVeveda)}
              >
                <DropdownButton
                  isOpen={showVeveda}
                  onClick={() => setShowVeveda(!showVeveda)}
                  isActive={location.pathname.includes('/collections/veveda')}
                >
                  VEVADA
                </DropdownButton>

                {showVeveda && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-ivory shadow-xl min-w-[280px] p-6 rounded-sm border border-sage-100 z-50"
                    onMouseEnter={() => handleMouseEnter(setShowVeveda)}
                    onMouseLeave={() => handleMouseLeave(setShowVeveda)}
                  >
                    <div className="mb-4">
                      <h4 className="font-semibold text-gold-400 text-xs uppercase tracking-wider mb-2">
                        Nature-Inspired
                      </h4>
                      <div className="space-y-2">
                        <NavLink 
                          to="/collections/veveda/floral"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowVeveda)}
                        >
                          Floral Collection
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                        <NavLink 
                          to="/collections/veveda/leaf"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowVeveda)}
                        >
                          Leaf Collection
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold-400 text-xs uppercase tracking-wider mb-2">
                        Organic Designs
                      </h4>
                      <div className="space-y-2">
                        <NavLink 
                          to="/collections/veveda/organic"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowVeveda)}
                        >
                          Organic Collection
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SELAVADA Dropdown */}
              <div
                ref={selavedaRef}
                className="relative"
                onMouseEnter={() => handleMouseEnter(setShowSelaveda)}
                onMouseLeave={() => handleMouseLeave(setShowSelaveda)}
              >
                <DropdownButton
                  isOpen={showSelaveda}
                  onClick={() => setShowSelaveda(!showSelaveda)}
                  isActive={location.pathname.includes('/collections/selaveda')}
                >
                  SELAVADA
                </DropdownButton>

                {showSelaveda && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-ivory shadow-xl min-w-[280px] p-6 rounded-sm border border-sage-100 z-50"
                    onMouseEnter={() => handleMouseEnter(setShowSelaveda)}
                    onMouseLeave={() => handleMouseLeave(setShowSelaveda)}
                  >
                    <div className="mb-4">
                      <h4 className="font-semibold text-gold-400 text-xs uppercase tracking-wider mb-2">
                        Heritage Collection
                      </h4>
                      <div className="space-y-2">
                        <NavLink 
                          to="/collections/selaveda/heritage"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowSelaveda)}
                        >
                          Heritage Pieces
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                        <NavLink 
                          to="/collections/selaveda/vintage"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowSelaveda)}
                        >
                          Vintage Collection
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold-400 text-xs uppercase tracking-wider mb-2">
                        Bridal
                      </h4>
                      <div className="space-y-2">
                        <NavLink 
                          to="/collections/selaveda/bridal"
                          className="block text-sm text-charcoal/70 hover:text-gold-400 transition-colors relative group/link"
                          onClick={() => handleDropdownLinkClick(setShowSelaveda)}
                        >
                          Bridal Collection
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 group-hover/link:w-full transition-all duration-300"></span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SERVICES */}
              <NavLinkWithLine to="/services">
                SERVICES
              </NavLinkWithLine>

              {/* CONTACT US */}
              <NavLinkWithLine to="/contact">
                CONTACT US
              </NavLinkWithLine>
            </nav>

            {/* Desktop CTA Button */}
            <button
              onClick={handleBookingClick}
              className="hidden md:block px-6 py-2.5 border border-gold-300 text-gold-400 text-sm uppercase tracking-wider hover:bg-gold-300 hover:text-charcoal transition-all duration-300 rounded-sm flex-shrink-0"
            >
              Book Appointment
            </button>

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
        className={`fixed inset-0 z-40 bg-ivory transform transition-transform duration-500 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden pt-20 px-6`}
      >
        <div className="flex flex-col items-center justify-center mb-8 mt-4">
          <img 
            src={logoVer} 
            alt="VERVEDA Logo" 
            className="h-16 w-auto object-contain mb-3"
          />
          <span className="text-xl font-serif tracking-wide text-charcoal">
            VERVEDA
          </span>
        </div>
        
        <nav className="flex flex-col space-y-4">
          {/* HOME */}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `relative text-lg uppercase tracking-wider transition-colors font-sans text-center py-2 group ${
                isActive ? 'text-gold-400' : 'text-charcoal/70 hover:text-gold-400'
              }`
            }
          >
            HOME
            <span className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 bg-gold-400 transition-all duration-300 ${
              location.pathname === '/' ? 'w-12' : 'w-0 group-hover:w-12'
            }`}></span>
          </NavLink>

          {/* STIMAONDS Mobile */}
          <div className="border-t border-sage-100 pt-4">
            <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold text-center mb-3">
              STIMAONDS
            </p>
            <div className="grid grid-cols-2 gap-2">
              <NavLink
                to="/collections/stimonds/earrings/solitaire"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Solitaire Earrings
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
              <NavLink
                to="/collections/stimonds/earrings/stud"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Stud Earrings
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
              <NavLink
                to="/collections/stimonds/rings/solitaire"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Solitaire Rings
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
              <NavLink
                to="/collections/stimonds/rings/engagement"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Engagement Rings
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
            </div>
          </div>

          {/* VEVADA Mobile */}
          <div className="border-t border-sage-100 pt-4">
            <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold text-center mb-3">
              VEVADA
            </p>
            <div className="grid grid-cols-2 gap-2">
              <NavLink
                to="/collections/veveda/floral"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Floral Collection
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
              <NavLink
                to="/collections/veveda/leaf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Leaf Collection
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
            </div>
          </div>

          {/* SELAVADA Mobile */}
          <div className="border-t border-sage-100 pt-4">
            <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold text-center mb-3">
              SELAVADA
            </p>
            <div className="grid grid-cols-2 gap-2">
              <NavLink
                to="/collections/selaveda/heritage"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Heritage Pieces
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
              <NavLink
                to="/collections/selaveda/bridal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-charcoal/70 hover:text-gold-400 transition-colors text-center py-1 relative group"
              >
                Bridal Collection
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-300"></span>
              </NavLink>
            </div>
          </div>

          {/* SERVICES */}
          <NavLink
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `relative text-lg uppercase tracking-wider transition-colors font-sans text-center py-2 group ${
                isActive ? 'text-gold-400' : 'text-charcoal/70 hover:text-gold-400'
              }`
            }
          >
            SERVICES
            <span className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 bg-gold-400 transition-all duration-300 ${
              location.pathname === '/services' ? 'w-12' : 'w-0 group-hover:w-12'
            }`}></span>
          </NavLink>

          {/* CONTACT US */}
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `relative text-lg uppercase tracking-wider transition-colors font-sans text-center py-2 group ${
                isActive ? 'text-gold-400' : 'text-charcoal/70 hover:text-gold-400'
              }`
            }
          >
            CONTACT US
            <span className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 bg-gold-400 transition-all duration-300 ${
              location.pathname === '/contact' ? 'w-12' : 'w-0 group-hover:w-12'
            }`}></span>
          </NavLink>

          {/* Book Appointment Button */}
          <button
            onClick={handleBookingClick}
            className="mt-6 px-6 py-3 bg-gold-300 text-charcoal text-center uppercase tracking-wider hover:bg-gold-400 transition rounded-sm font-sans"
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;