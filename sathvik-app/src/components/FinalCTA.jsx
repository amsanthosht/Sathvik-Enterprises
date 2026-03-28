import './FinalCTA.css';

const WA_ICON = (
  <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.023 7.768L0 32l8.468-2.003A15.933 15.933 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.852l-.484-.288-5.025 1.188 1.205-4.896-.316-.503A13.271 13.271 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/></svg>
);

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div className="final-cta-text">
          <h2>Need Manpower or Site Support?</h2>
          <p>Call <strong>Sathvik Enterprises</strong> today. Fast response. Experienced teams. Guaranteed delivery.</p>
        </div>
        <div className="final-cta-btns">
          <a href="tel:+919876543210" className="btn btn-primary btn-xl">📞 Call Now</a>
          <a href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20manpower%20services." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-xl">
            {WA_ICON} WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
