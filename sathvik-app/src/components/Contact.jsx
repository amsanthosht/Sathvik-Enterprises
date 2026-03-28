import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const WA_ICON = (
  <svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.023 7.768L0 32l8.468-2.003A15.933 15.933 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.852l-.484-.288-5.025 1.188 1.205-4.896-.316-.503A13.271 13.271 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/></svg>
);

const SERVICES_LIST = [
  'Manpower Services', 'Requirement Services', 'Security Services',
  'Electrician Manpower', 'Plumbing Work', 'Carpenter Work',
  'Painting Work', 'Loading & Unloading', 'Mass Cleaning Services', 'Multiple Services',
];

const delay = ms => new Promise(r => setTimeout(r, ms));

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', company: '', phone: '', location: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = true;
    if (!form.company.trim()) e.company = true;
    if (!form.phone.trim())   e.phone   = true;
    if (!form.location.trim())e.location= true;
    if (!form.service)        e.service = true;
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: false }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await delay(1800);
    setSuccess(true);
    setLoading(false);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Request a Free Quote</h2>
          <p className="section-desc">Tell us your requirement. We will contact you quickly.</p>
        </div>

        <div className="contact-inner" ref={ref}>
          {/* Info */}
          <div className="contact-info reveal">
            <h3>Contact Details</h3>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <span className="info-label">Phone / WhatsApp</span>
                <a href="tel:+919876543210" className="info-value">+91 98765 43210</a>
                <a href="tel:+919876543211" className="info-value">+91 98765 43211</a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <span className="info-label">Email</span>
                <a href="mailto:info@sathvikenterprises.in" className="info-value">info@sathvikenterprises.in</a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <span className="info-label">Address</span>
                <span className="info-value">Sathvik Enterprises, Tamil Nadu, India</span>
              </div>
            </div>
            <div className="contact-actions">
              <a href="tel:+919876543210" className="btn btn-primary">📞 Call Now</a>
              <a href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20manpower%20services." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                {WA_ICON} WhatsApp
              </a>
            </div>
            <div className="quick-promise">
              <div className="promise-item">⚡ Response within 2 hours</div>
              <div className="promise-item">✅ Free consultation call</div>
              <div className="promise-item">🔒 No spam, guaranteed</div>
            </div>
          </div>

          {/* Form */}
          {!success ? (
            <form className="contact-form reveal" style={{ '--delay': '0.15s' }} onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className={`form-group${errors.name ? ' error' : ''}`}>
                  <label htmlFor="name">Your Name *</label>
                  <input id="name" name="name" type="text" placeholder="Rajesh Kumar" value={form.name} onChange={handleChange} />
                </div>
                <div className={`form-group${errors.company ? ' error' : ''}`}>
                  <label htmlFor="company">Company Name *</label>
                  <input id="company" name="company" type="text" placeholder="ABC Industries Pvt Ltd" value={form.company} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className={`form-group${errors.phone ? ' error' : ''}`}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                </div>
                <div className={`form-group${errors.location ? ' error' : ''}`}>
                  <label htmlFor="location">Your Location *</label>
                  <input id="location" name="location" type="text" placeholder="Chennai, Tamil Nadu" value={form.location} onChange={handleChange} />
                </div>
              </div>
              <div className={`form-group${errors.service ? ' error' : ''}`}>
                <label htmlFor="service">Service Required *</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">— Select a Service —</option>
                  {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message / Requirement</label>
                <textarea id="message" name="message" rows="4" placeholder="Describe your requirement, number of workers needed, duration, etc." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? '⏳ Sending...' : '📨 Send My Request'}
              </button>
            </form>
          ) : (
            <div className="contact-form form-success reveal" style={{ '--delay': '0.15s' }}>
              <div className="success-icon">✅</div>
              <h3>Request Sent Successfully!</h3>
              <p>Thank you! Our team will contact you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
