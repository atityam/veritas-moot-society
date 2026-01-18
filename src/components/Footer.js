import React from 'react';

const Footer = () => {
  const handleEmailClick = (e) => {
    // Falls back to copy if user doesn't have a mail app
    navigator.clipboard.writeText('veritasmootingsociety@gmail.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <footer className="footer-main">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Veritas Mooting Society</h4>
          <p>The academic body of Chameli Devi Institute of Law dedicated to advocacy and legal excellence.</p>
        </div>
        
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <ul className="footer-social-list">
            <li>
              <a href="mailto:veritasmootingsociety@gmail.com" onClick={handleEmailClick}>
                <span className="icon">✉️</span> Email Us
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/veritasmootingsociety/" target="_blank" rel="noopener noreferrer">
                <span className="icon">📸</span> Instagram
              </a>
            </li>
            <li>
              <a href="https://lnk.bio/veritasmootingsociety" target="_blank" rel="noopener noreferrer">
                <span className="icon">🔗</span> Link in Bio
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Location</h4>
          <p>📍 CDGI Campus, Khandwa Road,<br/>Indore, MP (452020)</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Veritas Mooting Society. Developed for CDIL.</p>
      </div>
    </footer>
  );
};

export default Footer;