import { useState, useEffect, useRef } from 'react';
import './Clients.css';
import knightLogo from '../assets/knight.jpg';
import transLogo from '../assets/trans.jpg';
import affLogo from '../assets/aff.jpg';

// ── PRODUCTION COMPANIES ──────────────────────────────────────────────────────
const PRODUCTION_CLIENTS = [
  {
    name: 'Dmart',
    location: 'Chennai, India',
    logo: 'https://findvectorlogo.com/wp-content/uploads/2018/12/dmart-vector-logo.png',
    tag: 'Retail & Consumer Goods',
    initials: 'DM',
    bg: '#fff',
  },
  {
    name: 'Omran',
    location: 'Sultanate of Oman',
    logo: 'https://images.seeklogo.com/logo-png/34/2/omran-logo-png_seeklogo-343497.png',
    tag: 'Infrastructure & Investment',
    initials: 'OM',
    bg: '#fff',
  },
  {
    name: 'Konspec',
    location: 'Mangalore, India',
    logo: 'https://konspec.com/wp-content/uploads/2024/05/Konspec-web1.png',
    tag: 'Production & Manufacturing',
    initials: 'KS',
    bg: '#fff',
  },
  {
    name: 'Proconnect Supply Chain',
    location: 'Chennai, India',
    logo: 'https://proconnectlogistics.com/v1/wp-content/themes/proconnect-theme/framework/dist/img/logo-full-color.png',
    tag: 'Logistics & Supply Chain',
    initials: 'PC',
    bg: '#fff',
  },
  {
    name: 'SAC Engine Components Pvt Ltd',
    location: 'Chennai / Gummidipoondi, India',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3fPgWNTdEl6z69UhN8Pwj5u-u_il2cKcsQ&s',
    tag: 'Engine & Auto Components',
    initials: 'SAC',
    bg: '#fff',
  },
];

// ── CONSTRUCTION COMPANIES ────────────────────────────────────────────────────
const CONSTRUCTION_CLIENTS = [
  {
    name: 'Shimizu Corporation',
    location: 'HQ: Tokyo, Japan · India Office: Bengaluru',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvCooATroK_9R85dUWyHs6CYJckB-lGr40Q&s',
    tag: 'Construction & Engineering',
    initials: 'SC',
    bg: '#fff',
  },
  {
    name: 'Knight Frank India',
    location: 'Nungambakkam, Chennai – 600018, Tamil Nadu',
    logo: knightLogo,
    tag: 'Real Estate & Facility Management',
    initials: 'KF',
    bg: '#fff',
  },
  {
    name: 'Transdien Private Limited',
    location: 'Peruvoyal, Mahindra City, Tamil Nadu',
    logo: transLogo,
    tag: 'Industrial Services',
    initials: 'TD',
    bg: '#fff',
  },
  {
    name: 'MOD Forge (P) Ltd',
    location: '52, Eliambedu Village, Ponneri, Tamil Nadu',
    logo: affLogo,
    tag: 'Forging & Manufacturing',
    initials: 'MF',
    bg: '#fff',
  },
];

const TABS = [
  { id: 'construction', label: 'Construction Companies', icon: 'fas fa-hard-hat', data: CONSTRUCTION_CLIENTS },
  { id: 'production',   label: 'Production Companies',   icon: 'fas fa-industry',  data: PRODUCTION_CLIENTS  },
];

// Logo with graceful error-fallback to styled initials badge
function ClientLogo({ client }) {
  const [failed, setFailed] = useState(false);

  if (!client.logo || failed) {
    return <div className="client-initials">{client.initials}</div>;
  }

  return (
    <img
      src={client.logo}
      alt={`${client.name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function ClientCard({ client, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('client-card--visible'); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article ref={ref} className="client-card" style={{ '--ci': index }}>
      <div className="client-logo-box" style={{ background: client.bg }}>
        <ClientLogo client={client} />
      </div>
      <div className="client-info">
        <span className="client-tag">{client.tag}</span>
        <h3 className="client-name">{client.name}</h3>
        <p className="client-loc">
          <i className="fas fa-map-marker-alt" aria-hidden="true" />
          {client.location}
        </p>
      </div>
    </article>
  );
}

export default function Clients() {
  const [activeTab, setActiveTab] = useState('construction');
  const activeData = TABS.find(t => t.id === activeTab).data;

  return (
    <section className="clients-sec sec" id="clients">
      <div className="clients-header reveal">
        <span className="sec-label">Our Clients</span>
        <h2 className="sec-title" style={{ color: '#fff' }}>Trusted by Industry Leaders</h2>
        <p className="sec-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Proud to serve some of the most respected corporations
          in Tamil Nadu's industrial and corporate landscape.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="clients-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`clients-tab-btn${activeTab === tab.id ? ' clients-tab-btn--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
          >
            <i className={tab.icon} aria-hidden="true" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="clients-grid" key={activeTab}>
        {activeData.map((c, i) => (
          <ClientCard key={c.name} client={c} index={i} />
        ))}
      </div>

      <div className="clients-note reveal">
        <i className="fas fa-quote-left" aria-hidden="true" />
        <p>
          "Reliability, quick deployment and zero compliance headaches —
          that's what we've always received from Sathvik Enterprises."
        </p>
        <span>— Operations Manager, Mahindra City Site</span>
      </div>
    </section>
  );
}
