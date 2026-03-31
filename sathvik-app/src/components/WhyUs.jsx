import { useEffect, useRef } from 'react';
import './WhyUs.css';

const ITEMS = [
  { icon: 'fas fa-user-shield', title: 'Verified Workforce',    desc: 'All staff are background-checked and briefed on safety protocols before every deployment.' },
  { icon: 'fas fa-clock',       title: 'On-Time Delivery',      desc: 'We mobilise teams rapidly, ensuring your operations never miss a critical deadline.' },
  { icon: 'fas fa-balance-scale',title: 'Full Compliance',      desc: 'PF, ESI and Tamil Nadu labour law — every engagement, handled with zero liability to you.' },
  { icon: 'fas fa-handshake',   title: 'Dedicated Support',     desc: 'Direct access to C. Gopi — no call centres, no delays. Just fast, personal answers.' },
  { icon: 'fas fa-map-marker-alt', title: 'Local Expertise',    desc: 'Two offices in Thiruvallur District — deep roots in the region we serve.' },
  { icon: 'fas fa-award',       title: 'Proven Track Record',   desc: 'Over a decade serving industry giants like Shimizu, Knight Frank and MOD Forge.' },
];

export default function WhyUs() {
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.why-card').forEach((el, i) => {
            setTimeout(() => el.classList.add('why-card--visible'), i * 80);
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="why-sec" id="why">
      <div className="why-inner">
        <div className="why-header reveal">
          <span className="sec-label">Why Choose Us</span>
          <h2 className="sec-title" style={{ color: '#fff' }}>What Sets Us Apart</h2>
          <p className="sec-sub" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto' }}>
            A decade of trust, built one deployment at a time.
          </p>
        </div>

        <div className="why-grid" ref={gridRef}>
          {ITEMS.map((item, i) => (
            <div key={i} className="why-card" style={{ '--wi': i }}>
              <div className="why-icon-wrap">
                <i className={item.icon} aria-hidden="true" />
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
