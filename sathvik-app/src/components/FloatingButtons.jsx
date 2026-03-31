 import './FloatingButtons.css';

export default function FloatingButtons() {
  return (
    <div className="fab-group" aria-label="Quick contact">
      <a
        href="https://wa.me/918122834547"
        className="fab fab--wa"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp" />
        <span className="fab-tooltip">Chat on WhatsApp</span>
      </a>
      <a
        href="tel:8122834547"
        className="fab fab--call"
        aria-label="Call us"
      >
        <i className="fas fa-phone-alt" />
        <span className="fab-tooltip">Call Now</span>
      </a>
    </div>
  );
}
