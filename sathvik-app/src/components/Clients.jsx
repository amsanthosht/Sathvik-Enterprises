import useReveal from '../hooks/useReveal';
import './Clients.css';

const CLIENTS = [
  { icon: '🏗️', name: 'Shimizu Corporation Pvt Ltd',  type: 'Construction & Infrastructure' },
  { icon: '🏢', name: 'Knight Frank (India) Pvt Ltd', type: 'Real Estate & Property Management' },
  { icon: '🚢', name: 'Transdien Private Limited',    type: 'Logistics & Transportation' },
  { icon: '⚙️', name: 'MOD Forge (P) Ltd',            type: 'Manufacturing & Forging' },
];

export default function Clients() {
  const ref = useReveal();

  return (
    <section className="section clients" id="clients">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Partners</span>
          <h2 className="section-title">Trusted by Leading Companies</h2>
          <p className="section-desc">We have successfully partnered with renowned corporations across Tamil Nadu and India.</p>
        </div>

        <div className="clients-grid" ref={ref}>
          {CLIENTS.map(({ icon, name, type }, i) => (
            <div className="client-card reveal" key={name} style={{ '--delay': `${i * 0.1}s` }}>
              <div className="client-logo">{icon}</div>
              <div className="client-name">{name}</div>
              <div className="client-type">{type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
