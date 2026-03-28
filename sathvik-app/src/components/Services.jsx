import useReveal from '../hooks/useReveal';
import './Services.css';

const SERVICES = [
  { icon: '👷', title: 'Manpower Services',      desc: 'Trained and reliable industrial workers for all sectors including manufacturing, logistics, and operations.' },
  { icon: '📋', title: 'Requirement Services',   desc: 'End-to-end staffing solutions – we assess your needs and deploy the right people quickly.' },
  { icon: '🛡️', title: 'Security Services',       desc: 'Professional security personnel for factories, offices, warehouses, and commercial properties.' },
  { icon: '⚡', title: 'Electrician Manpower',   desc: 'Skilled and licensed electricians for industrial installations, maintenance, and wiring work.' },
  { icon: '🔧', title: 'Plumbing Work',           desc: 'Expert plumbers for commercial and industrial plumbing installations and maintenance.' },
  { icon: '🪚', title: 'Carpenter Work',          desc: 'Skilled carpenters for furniture making, office fit-outs, and site construction support.' },
  { icon: '🎨', title: 'Painting Work',           desc: 'Professional painters for interior, exterior, industrial, and commercial painting projects.' },
  { icon: '📦', title: 'Loading & Unloading',    desc: 'Reliable labour for loading, unloading, shifting, and material handling at your site.' },
  { icon: '🧹', title: 'Mass Cleaning Services', desc: 'Large-scale industrial and commercial cleaning for factories, offices, and construction sites.' },
];

export default function Services() {
  const ref = useReveal();

  const scrollTo = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (!target) return;
    const navH = document.querySelector('.navbar')?.offsetHeight ?? 70;
    window.scrollTo({ top: target.offsetTop - navH - 10, behavior: 'smooth' });
  };

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">Complete manpower and facility management solutions tailored to your industry needs.</p>
        </div>

        <div className="services-grid" ref={ref}>
          {SERVICES.map(({ icon, title, desc }) => (
            <div className="service-card reveal" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="#contact" className="btn btn-primary" onClick={scrollTo}>Request a Service Quote →</a>
        </div>
      </div>
    </section>
  );
}
