import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="navbar-logo">
          Cardbox Printing
        </div>
        <ul className="navbar-links">
          <li onClick={() => scrollToSection('specifications')}>Specifications</li>
          <li onClick={() => scrollToSection('products')}>Products</li>
          <li onClick={() => scrollToSection('samples')}>Samples</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
