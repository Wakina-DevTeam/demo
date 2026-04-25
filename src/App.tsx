import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage/LandingPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import CartPage from './pages/CartPage/CartPage';
import LoginModal from './components/LoginModal/LoginModal';
import ContactModal from './components/ContactModal/ContactModal';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontSize: '48px', color: '#111827', margin: '0 0 12px' }}>404</h1>
      <p style={{ color: '#6b7280', marginBottom: '28px' }}>Página no encontrada</p>
      <a
        href="/"
        style={{
          background: '#6b7a56',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Volver al inicio
      </a>
    </div>
  );
}

function AppRoutes() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LandingPage onLoginClick={openLogin} onContactClick={openContact} />}
        />
        <Route
          path="/catalogo"
          element={<CatalogPage onLoginClick={openLogin} onContactClick={openContact} />}
        />
        <Route
          path="/blog"
          element={<BlogsPage onLoginClick={openLogin} onContactClick={openContact} />}
        />
        <Route
          path="/sobre-nosotros"
          element={<AboutUsPage onLoginClick={openLogin} onContactClick={openContact} />}
        />
        <Route
          path="/carrito"
          element={<CartPage onLoginClick={openLogin} onContactClick={openContact} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {loginOpen && <LoginModal onClose={closeLogin} />}
      {contactOpen && <ContactModal onClose={closeContact} />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
