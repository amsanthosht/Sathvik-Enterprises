import { useEffect, useRef } from 'react';
import './Services.css';

// ─────────────────────────────────────────────────────────────────────────────
// All images: authentic, non-AI stock photography from Unsplash (royalty-free)
// Carefully curated for visual relevance to each service
// ─────────────────────────────────────────────────────────────────────────────
const ALL_SERVICES = [
  // ── Manpower (icon-based accent + photo background) ───────────────────────
  {
    title: 'Manpower Services',
    desc: 'Skilled, semi-skilled and general workforce deployment — tailored to your project scale, timeline and industry requirements',
    // Man working in factory wearing hard hat — Pexels (verified)
    img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgAlt: 'Male factory worker in hard hat and safety vest on production floor',
    icon: 'fas fa-users',
  },
  {
    title: 'Construction',
    desc: 'Full-cycle site manpower — scaffolding, structural masonry and finishing crews for industrial and commercial builds.',
    // Site engineers in hard hats reviewing blueprints — Unsplash (Scott Blake)
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'Site engineers in hard hats reviewing blueprints',
    icon: 'fas fa-hard-hat',
  },
  {
    title: 'Painting Work',
    desc: 'Interior and exterior painting by seasoned professionals delivering durable, clean finishes using premium coatings on schedule.',
    // Paint roller applying white paint to wall — Pexels (confirmed ✓)
    img: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgAlt: 'Close-up of paint roller applying white paint to an interior wall',
    icon: 'fas fa-paint-roller',
  },
  {
    title: 'Plumbing Work',
    desc: 'Complete plumbing solutions — new pipe installations, preventive maintenance and emergency repairs by certified tradespeople.',
    // Industrial pipes and valves — Unsplash
    img: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'Industrial plumbing pipes, valves and fittings on brick wall',
    icon: 'fas fa-wrench',
  },
  {
    title: 'Systems Work',
    desc: 'Skilled computer operators and IT support staff for data entry, workstation management, software operations and back-office systems across your facility.',
    // Person working on laptop in office — Pexels (verified loads)
    img: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgAlt: 'Professional working on laptop computer at office desk',
    icon: 'fas fa-desktop',
  },
  {
    title: 'Housekeeping',
    desc: 'Trained sanitation crews delivering consistent, thorough cleaning for factories, offices and industrial campuses — daily or on-demand.',
    // Janitor mopping shiny commercial corridor floor — Unsplash
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'Janitor in uniform mopping a large commercial facility corridor',
    icon: 'fas fa-broom',
  },
  {
    title: 'Machine Operation',
    desc: 'Experienced operators for CNC equipment, lathes and heavy factory machinery — ensuring safety, precision and maximum uptime.',
    // Man operating industrial machine — Pexels
    img: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgAlt: 'Male operator running heavy industrial machinery on the production floor',
    icon: 'fas fa-cogs',
  },
  {
    title: 'Loading & Unloading',
    desc: 'Efficient logistics workforce for safe material handling — forklifts, palletising and warehouse operations at factories and distribution hubs.',
    // Warehouse forklift with cargo — Unsplash (Opt Lasers)
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'Forklift moving cargo in warehouse — loading and unloading',
    icon: 'fas fa-dolly-flatbed',
  },
  {
    title: 'Packing & Unpacking',
    desc: 'Industrial-grade packing teams for manufactured goods, machinery and cargo — fast, careful and logistics-compliant.',
    // Professional industrial packaging line — Unsplash (Petrebels)
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'Staff at professional industrial packaging and packing line',
    icon: 'fas fa-box-open',
  },
  {
    title: 'Guarding',
    desc: 'Uniformed, trained security personnel for factory gates, construction sites and corporate premises — reliable 24/7 coverage.',
    // Male security guard portrait — Freepik (user-provided)
    img: 'https://img.freepik.com/free-photo/portrait-male-security-guard-with-barbed-wire-fence_23-2150368768.jpg?w=800',
    imgAlt: 'Portrait of male security guard standing by barbed wire fence on duty',
    icon: 'fas fa-shield-alt',
  },
  {
    title: 'Requirement Services',
    desc: 'End-to-end recruitment and staffing — sourcing, screening and placing the right candidates for every industrial or commercial role.',
    // Professional interview panel — Pexels
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgAlt: 'Professional interview panel with recruiters and candidate at corporate meeting',
    icon: 'fas fa-user-check',
  },
  {
    title: 'Carpenter Services',
    desc: 'Expert carpentry for industrial, commercial and residential projects — quality workmanship, on schedule.',
    // Carpenter using tools on a wooden workpiece — Pexels (Ono Kosuki)
    img: 'https://images.pexels.com/photos/5974038/pexels-photo-5974038.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
    imgAlt: 'Carpenter chiseling and shaping wood on a professional workbench',
    icon: 'fas fa-hammer',
  },
];

function ServiceCard({ s, i, refEl }) {
  return (
    <article
      className="svc-card svc-card--photo"
      ref={refEl}
      style={{ '--delay': `${i * 0.055}s` }}
    >
      <div className="svc-photo-wrap">
        <img src={s.img} alt={s.imgAlt} loading="lazy" />
        <div className="svc-photo-overlay">
          <div className="svc-icon svc-icon--overlay">
            <i className={s.icon} aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="svc-card-body">
        <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
        <h3 className="svc-title">{s.title}</h3>
        <p className="svc-desc">{s.desc}</p>
      </div>
      <div className="svc-bar" aria-hidden="true" />
    </article>
  );
}

export default function Services() {
  const refCards = useRef([]);

  useEffect(() => {
    refCards.current = refCards.current.slice(0, ALL_SERVICES.length);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('svc-card--visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.06 });
    refCards.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="sec services" id="services">
      <div className="services-head reveal">
        <div>
          <span className="sec-label">Our Expertise</span>
          <h2 className="sec-title">Our Manpower &amp;<br />Expertise Solutions</h2>
        </div>
        <p className="sec-sub">
          From skilled trades to large-scale facility management —
          one trusted partner for every workforce need.
        </p>
      </div>

      {/* Unified services grid — photo cards for all 12 services */}
      <div className="services-grid services-grid--photo">
        {ALL_SERVICES.map((s, i) => (
          <ServiceCard
            key={s.title}
            s={s}
            i={i}
            refEl={el => (refCards.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}
