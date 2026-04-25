import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import { ASSETS } from '../../assets';
import './AboutUsPage.css';

const TEAM = [
  { name: 'María Quispe', role: 'Fundadora & CEO', avatar: 'frutas' },
  { name: 'Carlos Mamani', role: 'Director de Operaciones', avatar: 'verduras' },
  { name: 'Ana Flores', role: 'Responsable de Calidad', avatar: 'tuberculos' },
];

const VALUES = [
  { icon: '🌱', title: '100% Orgánico', text: 'Sin pesticidas ni químicos artificiales.' },
  { icon: '🚚', title: 'Entrega Fresca', text: 'Del campo a tu mesa en menos de 24 horas.' },
  { icon: '🤝', title: 'Compromiso Social', text: 'Apoyamos a agricultores locales bolivianos.' },
  { icon: '⭐', title: 'Calidad Garantizada', text: 'Control riguroso en cada producto.' },
];

interface AboutUsPageProps {
  onLoginClick?: () => void;
  onContactClick?: () => void;
}

export default function AboutUsPage({ onLoginClick, onContactClick }: AboutUsPageProps) {
  return (
    <div className="about-page">
      <Navbar onLoginClick={onLoginClick} onContactClick={onContactClick} />

      {/* Hero */}
      <div className="about-page__hero">
        <span className="about-page__hero-tag">Nuestra Historia</span>
        <h1 className="about-page__hero-title">
          Somos <span>Wakiña</span>
        </h1>
        <p className="about-page__hero-subtitle">
          Una empresa boliviana comprometida con llevar alimentos frescos, orgánicos y de calidad directamente a tu mesa.
        </p>
      </div>

      {/* Story */}
      <section className="about-page__story">
        <img
          className="about-page__story-image"
          src={ASSETS.hero}
          alt="Nuestros campos orgánicos"
          loading="lazy"
        />
        <div>
          <span className="about-page__story-tag">Quiénes Somos</span>
          <h2 className="about-page__story-title">
            Nacimos del amor por la tierra boliviana
          </h2>
          <p className="about-page__story-text">
            Wakiña nació en 2020 con una misión clara: conectar a los agricultores bolivianos con las familias que buscan alimentos frescos y saludables. Trabajamos directamente con productores locales para garantizar la mejor calidad en cada producto.
          </p>
          <p className="about-page__story-text">
            Nuestro nombre, "Wakiña", proviene del quechua y significa "el que cuida". Eso es exactamente lo que hacemos: cuidar la tierra, cuidar a nuestros agricultores y cuidar tu salud.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="about-page__stats">
        <div className="about-page__stats-inner">
          <div>
            <p className="about-page__stat-number">500+</p>
            <p className="about-page__stat-label">Clientes satisfechos</p>
          </div>
          <div>
            <p className="about-page__stat-number">50+</p>
            <p className="about-page__stat-label">Agricultores aliados</p>
          </div>
          <div>
            <p className="about-page__stat-number">100%</p>
            <p className="about-page__stat-label">Productos orgánicos</p>
          </div>
          <div>
            <p className="about-page__stat-number">4</p>
            <p className="about-page__stat-label">Años de experiencia</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="about-page__mission">
        <h2 className="about-page__section-title">Misión y Visión</h2>
        <p className="about-page__section-subtitle">
          Los principios que guían cada decisión que tomamos
        </p>
        <div className="about-page__mv-grid">
          <div className="about-page__mv-card">
            <div className="about-page__mv-icon">🎯</div>
            <h3 className="about-page__mv-title">Nuestra Misión</h3>
            <p className="about-page__mv-text">
              Proveer alimentos orgánicos frescos y de alta calidad a las familias bolivianas, apoyando a los agricultores locales y promoviendo hábitos de vida saludables a través de una cadena de suministro transparente y sostenible.
            </p>
          </div>
          <div className="about-page__mv-card">
            <div className="about-page__mv-icon">🌟</div>
            <h3 className="about-page__mv-title">Nuestra Visión</h3>
            <p className="about-page__mv-text">
              Ser la plataforma líder de alimentos orgánicos en Bolivia, reconocida por su compromiso con la calidad, la sostenibilidad y el bienestar de las comunidades agrícolas, expandiéndonos a toda Latinoamérica para 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-page__team">
        <div className="about-page__team-inner">
          <h2 className="about-page__section-title">Nuestro Equipo</h2>
          <p className="about-page__section-subtitle">
            Las personas detrás de Wakiña
          </p>
          <div className="about-page__team-grid">
            {TEAM.map((member) => {
              const avatar = ASSETS[member.avatar as keyof typeof ASSETS] as string;
              return (
                <div key={member.name} className="about-page__team-card">
                  <img
                    className="about-page__team-avatar"
                    src={avatar}
                    alt={member.name}
                    loading="lazy"
                  />
                  <div className="about-page__team-info">
                    <p className="about-page__team-name">{member.name}</p>
                    <p className="about-page__team-role">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-page__values">
        <h2 className="about-page__section-title">Nuestros Valores</h2>
        <p className="about-page__section-subtitle">
          Lo que nos hace únicos y diferentes
        </p>
        <div className="about-page__values-grid">
          {VALUES.map((v) => (
            <div key={v.title} className="about-page__value-card">
              <div className="about-page__value-icon">{v.icon}</div>
              <h3 className="about-page__value-title">{v.title}</h3>
              <p className="about-page__value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="about-page__cta">
        <h2 className="about-page__cta-title">¿Listo para probar lo mejor de Bolivia?</h2>
        <p className="about-page__cta-text">
          Explora nuestro catálogo y recibe productos frescos en tu puerta.
        </p>
        <Link to="/catalogo" className="about-page__cta-btn">
          Ver Catálogo
        </Link>
      </div>

      <Footer onContactClick={onContactClick} />
      <WhatsAppButton phoneNumber="59170000000" />
    </div>
  );
}
