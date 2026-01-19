import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile users who can't "hover"
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/assets/logo.png" alt="Veritas Logo" />
        <h1>VERITAS MOOTING SOCIETY</h1>
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/resources">RESOURCES</Link>
        
        <div 
          className="dropdown" 
          onMouseEnter={() => setIsOpen(true)} 
          onMouseLeave={() => setIsOpen(false)}
          onClick={toggleDropdown}
        >
          <span className="drop-trigger" style={{ cursor: 'pointer' }}>
            GALLERY {isOpen ? '▴' : '▾'}
          </span>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/gallery/2025">Gallery 2025</Link>
              <Link to="/gallery/2026">Gallery 2026</Link>
            </div>
          )}
        </div>

        <Link to="/winners">WINNERS</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/registration" className="nav-reg-btn">REGISTRATION</Link>
      </div>
    </nav>
  );
};

export default Navbar;