import { ASSETS } from '../../assets';
import type { CategoryDetail } from '../../data/categories';
import './CategoryCard.css';

interface CategoryCardProps {
  category: CategoryDetail;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imgSrc = ASSETS[category.image as keyof typeof ASSETS] as string;

  // Use subtitle when available (richer text), fall back to description
  const subtext = category.subtitle ?? category.description;

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
        <p className="category-card__description">{subtext}</p>
      </div>
    </div>
  );
}
