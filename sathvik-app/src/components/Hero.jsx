import { useEffect, useRef } from 'react';
import './Hero.css';

const WA_ICON = (
  <svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.023 7.768L0 32l8.468-2.003A15.933 15.933 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.852l-.484-.288-5.025 1.188 1.205-4.896-.316-.503A13.271 13.271 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.28-9.854c-.398-.2-2.357-1.162-2.722-1.296-.366-.133-.632-.2-.898.2s-1.031 1.296-1.264 1.563c-.232.265-.464.298-.863.1-.398-.2-1.683-.621-3.205-1.979-1.184-1.057-1.983-2.364-2.216-2.763-.232-.4-.025-.616.174-.814.179-.178.398-.465.598-.698.198-.232.265-.398.398-.664.133-.265.067-.498-.033-.698-.1-.2-.898-2.162-1.23-2.96-.325-.774-.657-.669-.898-.681l-.764-.013c-.265 0-.698.1-1.064.498-.365.398-1.396 1.363-1.396 3.326s1.429 3.857 1.629 4.123c.2.265 2.81 4.29 6.81 6.015.953.41 1.695.656 2.275.838.955.304 1.824.261 2.512.158.766-.114 2.357-.963 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.167-.366-.265-.764-.465z"/></svg>
);

const STATS = [
  { num: 500, suffix: '+', label: 'Workers Deployed' },
  { num: 50,  suffix: '+', label: 'Clients Served' },
  { num: 10,  suffix: '+', label: 'Years Experience' },
];

export default function Hero() {
  const statsRef = useRef([]);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        STATS.forEach(({ num, suffix }, i) => {
          const el = statsRef.current[i];
          if (!el) return;
          let cur = 0;
          const step = num / (1600 / 16);
          const timer = setInterval(() => {
            cur = Math.min(cur + step, num);
            el.textContent = Math.floor(cur) + suffix;
            if (cur >= num) clearInterval(timer);
          }, 16);
        });
      }
    }, { threshold: 0.4 });
    const section = document.querySelector('.hero');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const navH = document.querySelector('.navbar')?.offsetHeight ?? 70;
    window.scrollTo({ top: target.offsetTop - navH - 10, behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <img src="/hero_workers.png" alt="Industrial workers" className="hero-bg-img" />

      <div className="hero-badges">
        <span className="badge badge-support">🕐 24/7 Support Available</span>
        <span className="badge badge-response">⚡ Quick Response Guaranteed</span>
      </div>

      <div className="container hero-content">
        <span className="hero-eyebrow">Tamil Nadu's Trusted Manpower Partner</span>
        <h1 className="hero-headline">
          Reliable Manpower &amp;<br />Facility Services in<br />Tamil Nadu
        </h1>
        <p className="hero-sub">
          Skilled workforce for industrial, commercial, and facility support services.
          Fast deployment, flexible staffing, guaranteed quality.
        </p>

        <div className="hero-stats">
          {STATS.map(({ num, suffix, label }, i) => (
            <div className="stat" key={label}>
              <span className="stat-num" ref={el => statsRef.current[i] = el}>{num}{suffix}</span>
              <span className="stat-lbl">{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-ctas">
          <a href="tel:+919876543210" className="btn btn-primary">📞 Call Now</a>
          <a href="#contact" className="btn btn-secondary" onClick={e => scrollTo(e, '#contact')}>Get Free Quote</a>
          <a href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20manpower%20services." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            {WA_ICON} WhatsApp Us
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
