import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container navbar-content">
        <a href="#home" className="navbar-logo">
          <Code2 className="logo-icon" />
          <span>Rishitha Makam</span>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-actions">
          <ul className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="desktop-theme-toggle">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open glass-panel' : ''}`}>
        <ul className="nav-links-mobile">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-link-mobile"
                onClick={handleNavClick}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-theme-toggle-container">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
