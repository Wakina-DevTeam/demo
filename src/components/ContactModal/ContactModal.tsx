import { useState, useEffect } from 'react';
import './ContactModal.css';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  return (
    <div
      className="contact-modal__overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="contact-modal">
        <button className="contact-modal__close" onClick={onClose} aria-label="Cerrar">✕</button>

        {sent ? (
          <div className="contact-modal__success">
            <div className="contact-modal__success-icon">✅</div>
            <h2 className="contact-modal__success-title">¡Mensaje enviado!</h2>
            <p className="contact-modal__success-text">
              Nos pondremos en contacto contigo pronto.
            </p>
          </div>
        ) : (
          <>
            <h2 className="contact-modal__title" id="contact-modal-title">Contáctanos</h2>
            <p className="contact-modal__subtitle">
              ¿Tienes alguna pregunta o pedido especial? Escríbenos y te responderemos a la brevedad.
            </p>

            <form className="contact-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="contact-modal__field">
                <label className="contact-modal__label" htmlFor="contact-name">
                  Nombre Completo
                </label>
                <input
                  id="contact-name"
                  className="contact-modal__input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="contact-modal__field">
                <label className="contact-modal__label" htmlFor="contact-email">
                  Correo Electrónico
                </label>
                <input
                  id="contact-email"
                  className="contact-modal__input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  required
                />
              </div>

              <div className="contact-modal__field">
                <label className="contact-modal__label" htmlFor="contact-message">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  className="contact-modal__textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>

              <button type="submit" className="contact-modal__submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
