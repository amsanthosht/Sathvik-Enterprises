import { useEffect, useRef } from 'react';
import './Services.css';

const SERVICES = [
  { icon: 'fas fa-users',        title: 'Manpower Services',       desc: 'Skilled, semi-skilled and general workforce deployment. Tailored to your project scale, timeline and industry requirements.' },
  { icon: 'fas fa-user-check',   title: 'Requirement Services',    desc: 'End-to-end recruitment and staffing — sourcing, screening and placing the right candidates for every role.' },
  { icon: 'fas fa-hammer',       title: 'Carpenter Services',      desc: 'Expert carpentry for industrial, commercial and residential projects — quality workmanship, on schedule.' },
  { icon: 'fas fa-paint-roller', title: 'Painting Work',           desc: 'Interior and exterior painting by seasoned professionals delivering durable, clean finishes every time.' },
  { icon: 'fas fa-bolt',         title: 'Electrician Manpower',    desc: 'Certified electricians for installation, maintenance and repair across industrial and commercial facilities.' },
  { icon: 'fas fa-wrench',       title: 'Plumbing Work',           desc: 'Complete plumbing solutions — from new installations to preventive maintenance — by skilled tradespeople.' },
  { icon: 'fas fa-truck-loading',title: 'Loading & Unloading',     desc: 'Efficient logistics workforce for material handling at warehouses, factories and distribution hubs.' },
  { icon: 'fas fa-broom',        title: 'Mass Cleaning Services',  desc: 'Large-scale industrial and commercial cleaning by trained sanitation teams — thorough, fast and reliable.' },
];

export default function Services() {
  const refCards = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('svc-card--visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    refCards.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="sec services" id="services">
      <div className="services-head reveal">
        <div>
          <span className="sec-label">Our Expertise</span>
          <h2 className="sec-title">Comprehensive Workforce<br />&amp; Facility Solutions</h2>
        </div>
        <p className="sec-sub">
          From skilled trades to large-scale facility management —
          one trusted partner for all your workforce needs.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <article
            key={i}
            className="svc-card"
            ref={el => (refCards.current[i] = el)}
            style={{ '--delay': `${i * 0.07}s` }}
          >
            <div className="svc-card-top">
              <div className="svc-icon">
                <i className={s.icon} aria-hidden="true" />
              </div>
              <span className="svc-num">0{i + 1}</span>
            </div>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-desc">{s.desc}</p>
            <div className="svc-bar" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
