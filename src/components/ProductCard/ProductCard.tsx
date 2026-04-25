import { ASSETS } from '../../assets';
import type { Product } from '../../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const imgSrc = ASSETS[product.image as keyof typeof ASSETS] as string;

  return (
    <div
      className="product-card"
      data-testid="product-card"
      data-category={product.category}
    >
      <img
        className="product-card__image"
        src={imgSrc}
        alt={product.name}
        loading="lazy"
      />
      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">{product.priceLabel}</p>
        <button
          className="product-card__button"
          onClick={onAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
