import './Footer.css';

const QUICK = ['Services','About','Clients','Why Us','Contact'];
const SERVICES_LIST = ['Manpower Services','Electrician Manpower','Mass Cleaning','Loading & Unloading','Plumbing & Carpentry','Requirement Services'];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand-col">
          <a href="#hero" className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Sathvik Enterprises" className="footer-logo-img" />
            </div>
            <div>
              <div className="footer-brand-name">SATHVIK ENTERPRISES</div>
              <div className="footer-brand-sub">✦ Maranatha ✦</div>
            </div>
          </a>
          <p className="footer-about">
            Reliable manpower and facility management across Tamil Nadu.
            Connecting the right workers with the businesses that need them most — since 2013.
          </p>
          <div className="footer-socials">
            <a href="tel:+916385095546"                    className="footer-social" aria-label="Call us"><i className="fas fa-phone" /></a>
            <a href="mailto:sathvikponneri@gmail.com"    className="footer-social" aria-label="Email us"><i className="fas fa-envelope" /></a>
            <a href="https://wa.me/916385095546" target="_blank" rel="noreferrer" className="footer-social" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-h">Quick Links</h4>
          <ul className="footer-links">
            {QUICK.map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(' ','-')}`}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-h">Services</h4>
          <ul className="footer-links">
            {SERVICES_LIST.map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-h">Contact</h4>
          <ul className="footer-contact">
            <li><i className="fas fa-user-tie" /><span>C. Gopi</span></li>
            <li><i className="fas fa-phone-alt" /><a href="tel:+916385095546">6385095546</a></li>
            <li><i className="fas fa-envelope" /><a href="mailto:sathvikponneri@gmail.com">sathvikponneri@gmail.com</a></li>
            <li><i className="fas fa-map-marker-alt" /><span>Ponneri & Gummidipoondi, Tiruvallur</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Sathvik Enterprises. All rights reserved.</span>
        <span>Web by <a href="https://promithiumlabs.com" target="_blank" rel="noreferrer">Promithium Labs</a></span>
      </div>
    </footer>
  );
}
