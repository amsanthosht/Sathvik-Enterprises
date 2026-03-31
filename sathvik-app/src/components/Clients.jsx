import { useEffect, useRef } from 'react';
import './Clients.css';

const CLIENTS = [
  {
    name: 'M/s Shimizu Corporation Pvt Ltd',
    location: 'Peruvoyal, Origins of Mahindra City, Tamil Nadu',
    logo: '/logos/shimizu.png',
    tag: 'Construction & Infrastructure',
    bg: '#fff',
  },
  {
    name: 'M/s Knight Frank (India) Pvt Ltd',
    location: 'Nungambakkam, Chennai – 600018, Tamil Nadu',
    logo: '/logos/knight-frank.png',
    tag: 'Real Estate & Facility Management',
    bg: '#fff',
  },
  {
    name: 'M/s Transdien Private Limited',
    location: 'Peruvoyal, Origins of Mahindra City, Tamil Nadu',
    logo: '/logos/transdien.jpg',
    tag: 'Industrial Services',
    bg: '#fff',
  },
  {
    name: 'M/s MOD Forge (P) Ltd',
    location: '52, Eliambedu Village, Ponneri, Tamil Nadu',
    logo: '/logos/mod-forge.jpg',
    tag: 'Forging & Manufacturing',
    bg: '#f8f8f8',
  },
];

export default function Clients() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('client-card--visible'); });
    }, { threshold: 0.15 });
    cardsRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="clients-sec sec" id="clients">
      <div className="clients-header reveal">
        <span className="sec-label">Our Clients</span>
        <h2 className="sec-title" style={{ color: '#fff' }}>Trusted by Industry Leaders</h2>
        <p className="sec-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Proud to serve some of the most respected corporations
          in Tamil Nadu's industrial and corporate landscape.
        </p>
      </div>

      <div className="clients-grid">
        {CLIENTS.map((c, i) => (
          <article
            key={i}
            className="client-card"
            ref={el => (cardsRef.current[i] = el)}
            style={{ '--ci': i }}
          >
            <div className="client-logo-box" style={{ background: c.bg }}>
              <img src={c.logo} alt={c.name} loading="lazy" />
            </div>
            <div className="client-info">
              <span className="client-tag">{c.tag}</span>
              <h3 className="client-name">{c.name}</h3>
              <p className="client-loc">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {c.location}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="clients-note reveal">
        <i className="fas fa-quote-left" aria-hidden="true" />
        <p>
          "Reliability, quick deployment and zero compliance headaches —
          that's what we've always received from Sathvik Enterprises."
        </p>
        <span>— Operations Manager, Mahindra City Site</span>
      </div>
    </section>
  );
}
