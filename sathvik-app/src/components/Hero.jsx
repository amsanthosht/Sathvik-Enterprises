import { useEffect, useRef } from 'react';
import './Hero.css';

const STATS = [
  { num: '10+',  lbl: 'Years Experience'  },
  { num: '500+', lbl: 'Workers Deployed'  },
  { num: '4+',   lbl: 'Major Clients'     },
  { num: '8',    lbl: 'Service Lines'     },
  { num: '2',    lbl: 'Office Locations'  },
];

const TRUST = [
  'Background-Verified Workers',
  'Labour Law Compliant',
  'Rapid Deployment',
  'PF & ESI Covered',
  'Industrial & Commercial',
];

export default function Hero() {
  const countersRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hero-stat--visible');
      });
    }, { threshold: 0.2 });
    countersRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-chip">
          <i className="fas fa-certificate" aria-hidden="true" />
          Tamil Nadu's Trusted Workforce Partner
        </div>
        <h1 className="hero-title">
          Skilled <em>Manpower.</em><br />
          Reliable <em>Service.</em><br />
          Every Time.
        </h1>
        <p className="hero-desc">
          Sathvik Enterprises connects businesses with dependable, vetted workers
          across manpower, facility management and skilled trade services —
          anywhere in Tamil Nadu.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-gold">
            Get a Free Quote <i className="fas fa-arrow-right" />
          </a>
          <a href="#services" className="btn-ghost">
            View Services <i className="fas fa-chevron-down" />
          </a>
        </div>
      </div>

      {/* Trust strip */}
      <div className="hero-trust" aria-label="Key credentials">
        {TRUST.map((t, i) => (
          <span key={i} className="hero-trust-item">
            <i className="fas fa-check-circle" aria-hidden="true" />
            {t}
          </span>
        ))}
      </div>

      {/* Stats bar */}
      <div className="hero-stats" aria-label="Company statistics">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="hero-stat"
            ref={el => (countersRef.current[i] = el)}
            style={{ '--i': i }}
          >
            <div className="hero-stat-num">{s.num}</div>
            <div className="hero-stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <span /><span /><span />
      </div>
    </section>
  );
}
