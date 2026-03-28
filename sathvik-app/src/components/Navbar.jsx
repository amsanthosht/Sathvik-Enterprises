import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us',   label: 'Why Us' },
  { href: '#clients',  label: 'Clients' },
  { href: '#about',    label: 'About' },
  { href: '#contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    close();
    const target = document.querySelector(href);
    if (!target) return;
    const navH = document.querySelector('.navbar')?.offsetHeight ?? 70;
    window.scrollTo({ top: target.offsetTop - navH - 10, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dark backdrop – click to close */}
      <div className={`nav-backdrop${open ? ' open' : ''}`} onClick={close} />

      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#" className="logo" onClick={e => handleAnchor(e, '#hero')}>
            <span className="logo-icon">⚙️</span>
            <div>
              <span className="logo-name">Sathvik Enterprises</span>
              <span className="logo-tag">Manpower &amp; Facility Services</span>
            </div>
          </a>

          {/* Desktop + Mobile drawer */}
          <nav className={`nav-links${open ? ' open' : ''}`}>
            {/* Mobile-only drawer header */}
            <div className="nav-mobile-header">
              <a href="#" className="nav-mobile-logo" onClick={e => handleAnchor(e, '#hero')}>
                <span className="nav-mobile-logo-icon">⚙️</span>
                <span className="nav-mobile-logo-text">Sathvik Enterprises</span>
              </a>
              <button className="nav-close-btn" onClick={close} aria-label="Close menu">✕</button>
            </div>

            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link" onClick={e => handleAnchor(e, href)}>
                {label}
              </a>
            ))}
            <a href="tel:+919876543210" className="btn-call-sm" onClick={close}>📞 Call Now</a>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${open ? ' active' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  );
}
