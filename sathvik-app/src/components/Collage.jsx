import useReveal from '../hooks/useReveal';
import './Collage.css';

const IMAGES = [
  { src: '/hero_workers.png',      label: 'Industrial Workforce',  large: true },
  { src: '/logistics_worker.png',  label: 'Loading & Logistics' },
  { src: '/office_team.png',       label: 'Corporate Manpower' },
  { src: '/gardening_worker.png',  label: 'Facility & Cleaning' },
  { src: '/industrial_worker.png', label: 'Industrial Operations' },
];

export default function Collage() {
  const ref = useReveal();

  return (
    <section className="section collage-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">See Our Work</span>
          <h2 className="section-title">Our People in Action</h2>
          <p className="section-desc">From factory floors to office corridors – our workforce is everywhere you need them.</p>
        </div>

        <div className="collage-grid" ref={ref}>
          {IMAGES.map(({ src, label, large }, i) => (
            <div
              className={`collage-item reveal${large ? ' collage-large' : ''}`}
              key={label}
              style={{ '--delay': `${i * 0.1}s` }}
            >
              <img src={src} alt={label} loading="lazy" />
              <div className="collage-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
