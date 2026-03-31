import { useState, useRef } from 'react';
import './Contact.css';

// ─── GOOGLE FORM CONFIG ────────────────────────────────────────────────────
// 1. Go to: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
// 2. Replace GOOGLE_FORM_ACTION with your form's action URL
// 3. Right-click each field → Inspect → find name="entry.XXXXXXXXX"
// 4. Replace each ENTRY_* value below with the real entry IDs from your form

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSexample_REPLACE_THIS/formResponse';

const ENTRY = {
  name:    'entry.000000001',   // ← replace with real entry ID
  company: 'entry.000000002',
  phone:   'entry.000000003',
  email:   'entry.000000004',
  service: 'entry.000000005',
  message: 'entry.000000006',
};
// ──────────────────────────────────────────────────────────────────────────

const SERVICES_LIST = [
  'Manpower Services', 'Requirement Services',
  'Carpenter Services', 'Painting Work', 'Electrician Manpower',
  'Plumbing Work', 'Loading & Unloading Service', 'Mass Cleaning Services',
  'Multiple / All Services',
];

const CONTACT_DETAILS = [
  { icon: 'fas fa-user-tie',       label: 'Contact Person', value: 'C. Gopi',                                       href: null },
  { icon: 'fas fa-phone-alt',      label: 'Phone',          value: '8122834547 / 6385096446',                       href: 'tel:8122834547' },
  { icon: 'fas fa-envelope',       label: 'Email',          value: 'sathvikponneri@gmail.com',                      href: 'mailto:sathvikponneri@gmail.com' },
  { icon: 'fas fa-map-marker-alt', label: 'Branch Office',  value: 'No.88, Dhandapani Nadar St, Ponneri – 601 204', href: null },
  { icon: 'fas fa-building',       label: 'Head Office',    value: 'No.116, Perumal Koil St, Ayanallur, Gummidipoondi – 601201', href: null },
];

export default function Contact() {
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields,  setFields]  = useState({
    name: '', company: '', phone: '', email: '', service: '', message: '',
  });

  const iframeRef = useRef(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    // Build the hidden form and submit it into the invisible iframe
    // This avoids all CORS issues — Google Forms accepts cross-origin POSTs
    const iframe = iframeRef.current;
    const form   = document.createElement('form');
    form.method  = 'POST';
    form.action  = GOOGLE_FORM_ACTION;
    form.target  = 'gf-hidden-iframe';

    const addField = (name, value) => {
      const input = document.createElement('input');
      input.type  = 'hidden';
      input.name  = name;
      input.value = value;
      form.appendChild(input);
    };

    addField(ENTRY.name,    fields.name);
    addField(ENTRY.company, fields.company || '—');
    addField(ENTRY.phone,   fields.phone);
    addField(ENTRY.email,   fields.email  || '—');
    addField(ENTRY.service, fields.service);
    addField(ENTRY.message, fields.message || '—');

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Google Forms submission lands on a "recorded" page inside the iframe —
    // we simply wait 1.5 s then show success (no server round-trip needed)
    iframe.onload = () => {
      setSent(true);
      setLoading(false);
    };

    // Fallback timer in case onload doesn't fire
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="contact-sec sec" id="contact">
      {/* Hidden iframe — receives Google Form's redirect response silently */}
      <iframe
        ref={iframeRef}
        name="gf-hidden-iframe"
        title="form-submit-target"
        style={{ display: 'none' }}
      />

      <div className="contact-header reveal">
        <span className="sec-label">Get in Touch</span>
        <h2 className="sec-title">Let's Build Your<br />Workforce Together</h2>
      </div>

      <div className="contact-wrap">
        {/* Info column */}
        <div className="contact-info reveal">
          <h3 className="contact-info-h">Talk to us directly</h3>
          <p className="contact-info-p">
            Whether you need a single specialist or a complete facility management team,
            we respond within 24 hours. Reach us by phone, email, or the form.
          </p>
          {CONTACT_DETAILS.map((d, i) => (
            <div key={i} className="contact-detail">
              <div className="contact-icon">
                <i className={d.icon} aria-hidden="true" />
              </div>
              <div className="contact-detail-text">
                <small>{d.label}</small>
                {d.href
                  ? <a href={d.href}>{d.value}</a>
                  : <span>{d.value}</span>
                }
              </div>
            </div>
          ))}

          <a href="https://wa.me/918122834547" className="contact-wa" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <div className="contact-form-box reveal">
          {sent ? (
            <div className="contact-success">
              <i className="fas fa-check-circle" aria-hidden="true" />
              <h3>Enquiry Sent!</h3>
              <p>Thank you — we'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="contact-form-h">Send an Enquiry</h3>
              <p className="contact-form-sub">We'll reply with pricing and availability within 24 hours.</p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-name">Your Name *</label>
                    <input id="f-name" type="text" name="name" placeholder="e.g. Rajesh Kumar" required
                      value={fields.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-company">Company</label>
                    <input id="f-company" type="text" name="company" placeholder="Company name (optional)"
                      value={fields.company} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-phone">Phone *</label>
                    <input id="f-phone" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required
                      value={fields.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-email">Email</label>
                    <input id="f-email" type="email" name="email" placeholder="you@example.com"
                      value={fields.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="f-service">Service Required *</label>
                  <select id="f-service" name="service" required value={fields.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="f-msg">Your Requirements</label>
                  <textarea id="f-msg" name="message" rows="4"
                    placeholder="Tell us your project needs — workers required, duration, location…"
                    value={fields.message} onChange={handleChange} />
                </div>

                <button type="submit" className="btn-navy btn-full" disabled={loading}>
                  {loading
                    ? <><i className="fas fa-spinner fa-spin" /> Sending…</>
                    : <><i className="fas fa-paper-plane" /> Send Enquiry</>
                  }
                </button>
                <p className="form-note">
                  <i className="fas fa-lock" aria-hidden="true" />
                  Your details are kept confidential and used only to respond to your enquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
