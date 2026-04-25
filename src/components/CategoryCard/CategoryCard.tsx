import { ASSETS } from '../../assets';
import type { CategoryCardProps } from '../../types';
import './CategoryCard.css';

export default function CategoryCard({ category }: CategoryCardProps) {
  const imgSrc = ASSETS[category.image as keyof typeof ASSETS] as string;

  return (
    <div className="category-card">
      <img
        className="category-card__image"
        src={imgSrc}
        alt={category.title}
        loading="lazy"
      />
      <div className="category-card__info">
        <h3 className="category-card__title">{category.title}</h3>
        <p className="category-card__description">{category.description}</p>
        <a className="category-card__link" href="#">
          Ver más ›
        </a>
      </div>
    </div>
  );
}
