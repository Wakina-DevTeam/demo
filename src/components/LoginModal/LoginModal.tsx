import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/useAuth';
import './LoginModal.css';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  // Focus email on open
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      onClose();
    } catch {
      setError('Correo o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-modal__overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div className="login-modal">
        <button className="login-modal__close" onClick={onClose} aria-label="Cerrar">✕</button>

        <p className="login-modal__logo">Wakiña</p>
        <h2 className="login-modal__title" id="login-modal-title">Iniciar Sesión</h2>
        <p className="login-modal__subtitle">Bienvenido de vuelta</p>

        <form className="login-modal__form" onSubmit={handleSubmit} noValidate>
          <div className="login-modal__field">
            <label className="login-modal__label" htmlFor="login-email">
              Correo Electrónico
            </label>
            <input
              ref={emailRef}
              id="login-email"
              className={`login-modal__input${error ? ' login-modal__input--error' : ''}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              autoComplete="email"
            />
          </div>

          <div className="login-modal__field">
            <label className="login-modal__label" htmlFor="login-password">
              Contraseña
            </label>
            <input
              id="login-password"
              className={`login-modal__input${error ? ' login-modal__input--error' : ''}`}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="login-modal__error">{error}</p>}

          <button type="button" className="login-modal__forgot">
            ¿Olvidaste tu contraseña?
          </button>

          <button type="submit" className="login-modal__submit" disabled={loading}>
            {loading ? 'Ingresando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="login-modal__divider">
          <span className="login-modal__divider-text">¿No tienes cuenta?</span>
        </div>

        <p className="login-modal__register">
          <button className="login-modal__register-link" type="button">
            Crear una cuenta gratis
          </button>
        </p>
      </div>
    </div>
  );
}
