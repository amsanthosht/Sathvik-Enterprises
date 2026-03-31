import { useEffect, useRef } from 'react';
import './Collage.css';

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80', alt: 'Construction site workers', span: 'big' },
  { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80', alt: 'Facility management team' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80', alt: 'Industrial workforce' },
  { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&auto=format&fit=crop&q=80', alt: 'Corporate building' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80', alt: 'Warehouse logistics team' },
];

const BADGES = [
  { icon: 'fas fa-user-shield', val: '500+', lbl: 'Workers Deployed' },
  { icon: 'fas fa-clock',       val: '24h',  lbl: 'Response Time'    },
  { icon: 'fas fa-map-marker-alt', val: '2', lbl: 'Office Locations' },
];

export default function Collage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.coll-img, .coll-badge, .coll-text-block').forEach((el, i) => {
            setTimeout(() => el.classList.add('coll-visible'), i * 100);
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="collage-sec" ref={sectionRef} aria-label="Our work in pictures">
      <div className="collage-grid">
        {/* Left: images */}
        <div className="coll-images">
          {IMAGES.map((img, i) => (
            <div key={i} className={`coll-img coll-img--${img.span || 'sm'} coll-img-${i}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="coll-img-overlay" />
            </div>
          ))}

          {/* Floating badges */}
          {BADGES.map((b, i) => (
            <div key={i} className={`coll-badge coll-badge--${i}`}>
              <i className={b.icon} aria-hidden="true" />
              <strong>{b.val}</strong>
              <span>{b.lbl}</span>
            </div>
          ))}
        </div>

        {/* Right: text */}
        <div className="coll-text-block">
          <span className="sec-label">Trusted Across Tamil Nadu</span>
          <h2 className="sec-title" style={{ color: '#fff' }}>
            Delivering Results<br />On Every Site
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '2rem', maxWidth: 440 }}>
            From Ponneri to Gummidipoondi, our teams are deployed at
            some of Tamil Nadu's most demanding industrial and commercial
            sites. Every worker is vetted, briefed and supervised.
          </p>
          <div className="coll-features">
            {[
              ['fas fa-check-circle', 'Background-verified workforce'],
              ['fas fa-check-circle', 'On-time mobilisation, every time'],
              ['fas fa-check-circle', 'Full statutory compliance (PF + ESI)'],
              ['fas fa-check-circle', 'Direct line to management — no call centres'],
            ].map(([icon, text], i) => (
              <div key={i} className="coll-feature">
                <i className={icon} aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-gold" style={{ marginTop: '2rem' }}>
            Work With Us <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
