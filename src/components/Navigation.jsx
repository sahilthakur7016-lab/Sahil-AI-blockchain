import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    closeMobileMenu();
    // Scroll to top when clicking home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link to="/" className="logo gradient-text">VoteChain</Link>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
          <li><Link to="/" onClick={handleHomeClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/solution" onClick={closeMobileMenu} className={location.pathname === '/solution' ? 'active' : ''}>Solution</Link></li>
          <li><Link to="/features" onClick={closeMobileMenu} className={location.pathname === '/features' ? 'active' : ''}>Features</Link></li>
          <li><Link to="/how-it-works" onClick={closeMobileMenu} className={location.pathname === '/how-it-works' ? 'active' : ''}>How It Works</Link></li>
          <li><Link to="/demo" onClick={closeMobileMenu} className={location.pathname === '/demo' ? 'active' : ''}>Demo</Link></li>
        </ul>

        {/* Mobile Menu */}
        <ul className={`nav-menu mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleHomeClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/solution" onClick={closeMobileMenu} className={location.pathname === '/solution' ? 'active' : ''}>Solution</Link></li>
          <li><Link to="/features" onClick={closeMobileMenu} className={location.pathname === '/features' ? 'active' : ''}>Features</Link></li>
          <li><Link to="/how-it-works" onClick={closeMobileMenu} className={location.pathname === '/how-it-works' ? 'active' : ''}>How It Works</Link></li>
          <li><Link to="/demo" onClick={closeMobileMenu} className={location.pathname === '/demo' ? 'active' : ''}>Demo</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
