import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { useAuth } from '../../context/useAuth';
import './CatalogPage.css';

// Count products per category id
const COUNTS: Record<string, number> = {};
for (const p of products) {
  COUNTS[p.category] = (COUNTS[p.category] ?? 0) + 1;
}

interface CatalogPageProps {
  onLoginClick?: () => void;
  onContactClick?: () => void;
}

export default function CatalogPage({ onLoginClick, onContactClick }: CatalogPageProps) {
  // null = "Todos" (no filter)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useAuth();

  const filtered =
    selectedCategory === null
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const activeLabel =
    selectedCategory === null
      ? 'Todos los Productos'
      : (categories.find((c) => c.id === selectedCategory)?.title ?? selectedCategory);

  return (
    <div className="catalog-page">
      <Navbar onLoginClick={onLoginClick} onContactClick={onContactClick} />

      <CategoryBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        counts={COUNTS}
      />

      <main className="catalog-page__main">
        <div className="catalog-page__header">
          <h1 className="catalog-page__title">{activeLabel}</h1>
          <p className="catalog-page__count">
            {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="catalog-page__empty">No hay productos en esta categoría</p>
        ) : (
          <div className="catalog-page__grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </main>

      <Footer onContactClick={onContactClick} />
      <WhatsAppButton phoneNumber="59170000000" />
    </div>
  );
}
