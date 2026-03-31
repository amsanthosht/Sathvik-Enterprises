import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Clients',  href: '#clients'  },
  { label: 'Why Us',   href: '#why'      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Main navigation">
      <a href="#hero" className="nav-brand" onClick={close}>
        <div className="nav-logo-wrap">
          <img src="/logo.png" alt="Sathvik Enterprises" className="nav-logo-img" />
        </div>
        <div className="nav-brand-text">
          <span className="nav-brand-name">SATHVIK ENTERPRISES</span>
          <span className="nav-brand-sub">✦ Maranatha ✦</span>
        </div>
      </a>

      <ul className={`nav-links${open ? ' nav-links--open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={close}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={close}>Get a Quote</a>
        </li>
      </ul>

      <button
        className={`nav-ham${open ? ' nav-ham--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
