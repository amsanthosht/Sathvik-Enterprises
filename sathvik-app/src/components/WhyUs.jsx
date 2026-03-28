import useReveal from '../hooks/useReveal';
import './WhyUs.css';

const POINTS = [
  { icon: '🏆', title: 'Experienced Workforce',            desc: 'All our workers are vetted, trained, and experienced in their respective domains. Zero compromise on quality.' },
  { icon: '🚀', title: 'Quick Deployment',                 desc: 'We can mobilize teams within 24–48 hours. Your deadlines don\'t wait – and neither do we.' },
  { icon: '🔄', title: 'Flexible Staffing',                desc: 'Short-term, long-term, or project-based – we offer engagement models that fit your exact needs.' },
  { icon: '🏭', title: 'Industrial & Commercial Expertise',desc: 'Proven experience across factories, warehouses, construction, offices, and commercial complexes.' },
  { icon: '✅', title: 'Trusted by Leading Companies',     desc: 'We work with renowned corporates and high-growth companies across Tamil Nadu.' },
];

export default function WhyUs() {
  const ref = useReveal();

  return (
    <section className="section why-us" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow" style={{ color: 'var(--yellow)', background: 'rgba(245,158,11,.15)', borderColor: 'rgba(245,158,11,.3)' }}>Our Edge</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Why Choose Sathvik Enterprises?</h2>
        </div>

        <div className="why-grid" ref={ref}>
          {POINTS.map(({ icon, title, desc }, i) => (
            <div className="why-card reveal" key={title} style={{ '--delay': `${i * 0.1}s` }}>
              <div className="why-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
