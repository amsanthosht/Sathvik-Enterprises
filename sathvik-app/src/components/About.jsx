import { useEffect, useRef } from 'react';
import './About.css';

const POINTS = [
  { icon: 'fas fa-check', title: 'Vetted & Trained Workforce',     body: 'Every worker is background-verified, briefed on safety protocols and deployed under professional supervision.' },
  { icon: 'fas fa-check', title: 'Rapid Mobilisation',             body: 'We can field teams of any size quickly — helping you hit deadlines without compromising on quality.' },
  { icon: 'fas fa-check', title: 'Statutory Compliance',           body: 'Fully compliant with Tamil Nadu labour laws, PF, ESI and all statutory obligations — zero risk to your business.' },
  { icon: 'fas fa-check', title: 'Two Strategic Office Locations',  body: 'Branch at Ponneri and Head Office at Gummidipoondi — strong local presence across Thiruvallur District.' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.about-anim').forEach((el, i) => {
            setTimeout(() => el.classList.add('about-anim--in'), i * 120);
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about-sec sec" id="about" ref={sectionRef}>
      <div className="about-wrap">
        {/* Images side */}
        <div className="about-images about-anim">
          <div className="about-badge">
            <strong>10+</strong>
            <span>Years of Trust</span>
          </div>
          <img
            className="about-img-main"
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80"
            alt="Facility management professionals at work"
            loading="lazy"
          />
          <img
            className="about-img-inset"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&auto=format&fit=crop&q=80"
            alt="Industrial workforce on site"
            loading="lazy"
          />
        </div>

        {/* Text side */}
        <div className="about-text">
          <div className="about-anim">
            <span className="sec-label">About Sathvik Enterprises</span>
            <h2 className="sec-title">
              Built on Trust,<br />Driven by People
            </h2>
            <p className="sec-sub" style={{ marginBottom: '2rem' }}>
              Founded in Ponneri, Thiruvallur District, Sathvik Enterprises has grown
              into a reliable workforce solutions partner for some of Tamil Nadu's most
              respected industries. We believe the right people, placed well, change everything.
            </p>
          </div>

          <ul className="about-points">
            {POINTS.map((pt, i) => (
              <li key={i} className="about-point about-anim" style={{ '--pi': i }}>
                <div className="about-point-icon">
                  <i className={pt.icon} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="about-point-title">{pt.title}</h4>
                  <p className="about-point-body">{pt.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-gold about-anim" style={{ marginTop: '2rem' }}>
            Partner With Us <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
