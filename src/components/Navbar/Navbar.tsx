import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import './Navbar.css';

interface NavbarProps {
  onLoginClick?: () => void;
  onContactClick?: () => void;
}

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/catalogo' },
  { label: 'Categorías', href: '/catalogo' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar({ onLoginClick, onContactClick }: NavbarProps) {
  const { isAuthenticated, user, logout, cartItemCount } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleCartClick = () => {
    navigate('/carrito');
    closeMenu();
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const authActions = isAuthenticated ? (
    <div className="navbar__actions">
      <button
        className="navbar__cart-btn"
        onClick={handleCartClick}
        aria-label={`Carrito, ${cartItemCount} artículos`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {cartItemCount > 0 && (
          <span className="navbar__cart-badge">{cartItemCount}</span>
        )}
      </button>
      <div className="navbar__user">
        <span className="navbar__user-name">{user?.name}</span>
        <button className="navbar__btn navbar__btn--outline" onClick={handleLogout}>
          Salir
        </button>
      </div>
    </div>
  ) : (
    <div className="navbar__actions">
      <button className="navbar__btn navbar__btn--outline" onClick={onLoginClick}>
        Crear Cuenta
      </button>
      <button className="navbar__btn navbar__btn--filled" onClick={onLoginClick}>
        Iniciar Sesión
      </button>
    </div>
  );

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          Wakiña
        </Link>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.href} className="navbar__link">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="navbar__link navbar__link--btn" onClick={onContactClick}>
              Contacto
            </button>
          </li>
        </ul>

        {authActions}

        <button
          className="navbar__hamburger"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className={`navbar__hamburger-bar${menuOpen ? ' navbar__hamburger-bar--open' : ''}`} />
          <span className={`navbar__hamburger-bar${menuOpen ? ' navbar__hamburger-bar--open' : ''}`} />
          <span className={`navbar__hamburger-bar${menuOpen ? ' navbar__hamburger-bar--open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar__mobile-menu" aria-label="Menú móvil">
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="navbar__link" onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="navbar__link navbar__link--btn"
                onClick={() => { onContactClick?.(); closeMenu(); }}
              >
                Contacto
              </button>
            </li>
          </ul>

          <div className="navbar__mobile-actions">
            {isAuthenticated ? (
              <>
                <button className="navbar__btn navbar__btn--outline" onClick={handleCartClick}>
                  Carrito {cartItemCount > 0 && `(${cartItemCount})`}
                </button>
                <button className="navbar__btn navbar__btn--filled" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <button
                  className="navbar__btn navbar__btn--outline"
                  onClick={() => { onLoginClick?.(); closeMenu(); }}
                >
                  Crear Cuenta
                </button>
                <button
                  className="navbar__btn navbar__btn--filled"
                  onClick={() => { onLoginClick?.(); closeMenu(); }}
                >
                  Iniciar Sesión
                </button>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
