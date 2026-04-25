import { useState, useEffect, useRef, type JSX } from 'react';
import { ASSETS } from '../../assets';
import type { CategoryDetail } from '../../data/categories';
import './CategoryBar.css';

// SVG icons used in the design
const ICONS: Record<string, JSX.Element> = {
  leaf: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 1-1 2-2 2-4-4 0-7 3-7 7 0 1.5.5 2.9 1.3 4H6c.5-2 1.5-4 3-5.5C10 7 13 6 17 8z" />
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

interface CategoryBarProps {
  categories: CategoryDetail[];
  selected: string | null;
  onSelect: (id: string | null) => void;
  counts?: Record<string, number>; // product count per category id
}

export default function CategoryBar({ categories, selected, onSelect, counts }: CategoryBarProps) {
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Only show categories that have at least 1 product (or no counts provided)
  const visibleCategories = counts
    ? categories.filter((c) => (counts[c.id] ?? 0) > 0)
    : categories;

  const activeCategory = visibleCategories.find((c) => c.id === selected) ?? null;

  const handleClick = (id: string) => {
    if (selected === id) {
      // Toggle off
      onSelect(null);
      setPanelOpen(false);
    } else {
      onSelect(id);
      setPanelOpen(true);
    }
  };

  // Animate panel open
  useEffect(() => {
    if (panelOpen && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [panelOpen, selected]);

  return (
    <div className="category-bar">
      {/* ── Icon row ── */}
      <div className="category-bar__track">
        <div className="category-bar__inner">
          {visibleCategories.map((cat) => {
            const isActive = selected === cat.id;
            const count = counts?.[cat.id];
            return (
              <button
                key={cat.id}
                className={`category-bar__item${isActive ? ' category-bar__item--active' : ''}`}
                onClick={() => handleClick(cat.id)}
                aria-pressed={isActive}
                aria-expanded={isActive && panelOpen}
              >
                <span className="category-bar__icon-wrap">
                  {ICONS[cat.icon] ?? ICONS.leaf}
                  {count !== undefined && (
                    <span className="category-bar__badge" aria-label={`${count} productos`}>
                      {count}
                    </span>
                  )}
                </span>
                <span className="category-bar__label">{cat.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Expanded panel ── */}
      {panelOpen && activeCategory && (
        <div
          ref={panelRef}
          className="category-bar__panel"
          role="region"
          aria-label={`Información sobre ${activeCategory.title}`}
        >
          {/* Left: image mosaic */}
          <div className="category-bar__panel-images">
            {activeCategory.starProducts.slice(0, 3).map((imgKey, i) => {
              const src = ASSETS[imgKey as keyof typeof ASSETS] as string;
              return (
                <div key={i} className="category-bar__panel-img-wrap">
                  <img
                    src={src}
                    alt=""
                    className="category-bar__panel-img"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Right: text */}
          <div className="category-bar__panel-content">
            <h2 className="category-bar__panel-title">{activeCategory.title}</h2>
            <p className="category-bar__panel-subtitle">{activeCategory.subtitle}</p>
            <div className="category-bar__panel-desc">
              {activeCategory.longDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            className="category-bar__panel-close"
            onClick={() => { onSelect(null); setPanelOpen(false); }}
            aria-label="Cerrar panel"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
