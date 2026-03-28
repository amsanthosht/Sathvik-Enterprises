import './Footer.css';

const FOOTER_SERVICES = ['Manpower Services', 'Security Services', 'Electrician Manpower', 'Cleaning Services'];
const FOOTER_COMPANY  = [
  { href: '#about',    label: 'About Us' },
  { href: '#clients',  label: 'Our Clients' },
  { href: '#why-us',   label: 'Why Choose Us' },
  { href: '#contact',  label: 'Contact' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const navH = document.querySelector('.navbar')?.offsetHeight ?? 70;
    window.scrollTo({ top: target.offsetTop - navH - 10, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo-icon">⚙️</span>
          <span className="footer-logo-name">Sathvik Enterprises</span>
          <p>Reliable Manpower &amp; Facility Services across Tamil Nadu.</p>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          {FOOTER_SERVICES.map(s => <a href="#services" key={s} onClick={e => scrollTo(e, '#services')}>{s}</a>)}
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          {FOOTER_COMPANY.map(({ href, label }) => <a href={href} key={label} onClick={e => scrollTo(e, href)}>{label}</a>)}
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="tel:+919876543210">📞 +91 98765 43210</a>
          <a href="mailto:info@sathvikenterprises.in">✉️ info@sathvikenterprises.in</a>
          <span>📍 Tamil Nadu, India</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Sathvik Enterprises. All rights reserved. | Tamil Nadu, India</p>
      </div>
    </footer>
  );
}
