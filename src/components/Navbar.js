import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        {/* NEW SIDE LOGOS */}
        <img src="/assets/cdgi-logo.jpeg" alt="CDGI Logo" className="side-logo-left" />
        <img src="/assets/cdil-logo.jpeg" alt="CDIL Logo" className="side-logo-right" />

        {/* CENTER LOGO AND TITLE */}
        <img src="/assets/logo.png" alt="Veritas Logo" />
        <h1>VERITAS MOOTING SOCIETY</h1>
        
        {/* HAMBURGER BUTTON */}
        <button className="hamburger" onClick={() => setIsMobileMenu(!isMobileMenu)}>
          {isMobileMenu ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-links ${isMobileMenu ? 'mobile-open' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenu(false)}>HOME</Link>
        <Link to="/about" onClick={() => setIsMobileMenu(false)}>ABOUT</Link>
        <Link to="/resources" onClick={() => setIsMobileMenu(false)}>RESOURCES</Link>
        
        <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <span className="drop-trigger">GALLERY ▾</span>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/gallery/2025" onClick={() => setIsMobileMenu(false)}>Gallery 2025</Link>
              <Link to="/gallery/2026" onClick={() => setIsMobileMenu(false)}>Gallery 2026</Link>
            </div>
          )}
        </div>

        <Link to="/winners" onClick={() => setIsMobileMenu(false)}>WINNERS</Link>
        <Link to="/contact" onClick={() => setIsMobileMenu(false)}>CONTACT US</Link>
        <Link to="/registration" className="nav-reg-btn" onClick={() => setIsMobileMenu(false)}>REGISTRATION</Link>
      </div>
    </nav>
  );
};

export default Navbar;