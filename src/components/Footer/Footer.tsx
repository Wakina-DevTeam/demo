import './Footer.css';

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Column 1 — Brand */}
        <div className="footer__col footer__col--brand">
          <p className="footer__brand-name">Wakiña</p>
          <p className="footer__brand-desc">
            Alimentos frescos y orgánicos directamente del campo a tu mesa. Comprometidos con la
            salud y el bienestar de Bolivia.
          </p>
        </div>

        {/* Column 2 — Contact form */}
        <div className="footer__col footer__col--form">
          <h3 className="footer__heading">Contáctanos</h3>
          <p className="footer__contact-desc">
            ¿Tienes alguna pregunta? Escríbenos y te responderemos pronto.
          </p>
          <button className="footer__contact-btn" onClick={onContactClick}>
            Enviar Mensaje
          </button>
        </div>

        {/* Column 3 — Social & contact info */}
        <div className="footer__col footer__col--social">
          <div className="footer__social-row">
            <button className="footer__social-btn" aria-label="Facebook">FB</button>
            <button className="footer__social-btn" aria-label="Instagram">IG</button>
            <button className="footer__social-btn" aria-label="Twitter / X">TW</button>
            <button className="footer__social-btn" aria-label="TikTok">TK</button>
          </div>

          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">📍</span>
              Calle 2 de obrajes
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">📞</span>
              + 591
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">✉️</span>
              wakiña@wakiña.com
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">🕐</span>
              Lun - Sáb: 8AM - 6PM
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
