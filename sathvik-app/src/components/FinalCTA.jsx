import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="cta-sec">
      <div className="cta-bg" aria-hidden="true" />
      <div className="cta-inner reveal">
        <span className="sec-label" style={{ color: 'var(--gold)' }}>Ready to Get Started?</span>
        <h2 className="cta-title">Your Perfect Workforce,<br />One Call Away</h2>
        <p className="cta-sub">
          Talk to C. Gopi directly — no forms, no wait times, just fast answers
          and reliable workers ready to deploy across Tamil Nadu.
        </p>
        <div className="cta-actions">
          <a href="tel:+916385095546" className="btn-gold">
            <i className="fas fa-phone-alt" />
            Call 6385095546
          </a>
          <a href="#contact" className="btn-ghost">
            Send an Enquiry <i className="fas fa-arrow-right" />
          </a>
        </div>
        <div className="cta-trust">
          {['10+ Years Experience', 'Rapid Deployment', 'PF & ESI Compliant', '4+ Major Clients'].map((t, i) => (
            <span key={i}><i className="fas fa-check-circle" aria-hidden="true" />{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
