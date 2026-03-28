import useReveal from '../hooks/useReveal';
import './About.css';

export default function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="about">
      <div className="container about-inner" ref={ref}>
        <div className="about-text reveal">
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Who We Are</h2>
          <p>Sathvik Enterprises is a leading manpower and facility services company based in Tamil Nadu. We specialize in providing skilled, semi-skilled, and unskilled workforce solutions for industrial, commercial, and facility support operations across the state.</p>
          <p>From large-scale manufacturing plants to corporate offices, our teams bring expertise, discipline, and reliability to every engagement. We maintain high standards through rigorous worker training, transparent communication, and a relentless focus on client satisfaction.</p>
          <p>Operating across Tamil Nadu with deep domain knowledge, Sathvik Enterprises is your single-stop partner for all manpower and facility management needs.</p>
          <div className="about-highlights">
            {['📍 Tamil Nadu Coverage', '🎓 Trained Workforce', '📄 Compliant & Documented', '📞 24/7 Support'].map(h => (
              <span className="highlight" key={h}>{h}</span>
            ))}
          </div>
        </div>

        <div className="about-img-wrap reveal" style={{ '--delay': '0.2s' }}>
          <img src="/industrial_worker.png" alt="Industrial worker at facility" className="about-img" />
          <div className="about-img-badge">
            <span>10+</span> Years of Excellence
          </div>
        </div>
      </div>
    </section>
  );
}
