import { ASSETS } from '../../assets';
import type { HeroProps } from '../../types';
import './Hero.css';

export default function Hero({ onExploreCatalog, onViewOffers }: HeroProps) {
  return (
    <section className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${ASSETS.hero})` }}
        aria-hidden="true"
      />
      <div className="hero__content">
        <h1 className="hero__headline">
          Alimentos{' '}
          <span className="hero__headline--frescos">Frescos</span>{' '}
          y{' '}
          <span className="hero__headline--naturales">Naturales</span>
        </h1>
        <p className="hero__subtitle">
          Descubre nuestra selección de productos orgánicos, cultivados con amor y respeto por la naturaleza.
        </p>
        <div className="hero__cta-group">
          <button className="hero__btn-primary" onClick={onExploreCatalog}>
            Explorar Catálogo
          </button>
          <button className="hero__btn-secondary" onClick={onViewOffers}>
            Ver Ofertas
          </button>
        </div>
      </div>
    </section>
  );
}
