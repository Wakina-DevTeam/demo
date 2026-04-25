import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import { ASSETS } from '../../assets';
import { products } from '../../data/products';
import type { Product } from '../../types';
import './CartPage.css';

interface CartItem {
  product: Product;
  quantity: number;
}

// Seed cart with 3 mock items for demo
const INITIAL_CART: CartItem[] = [
  { product: products[0], quantity: 2 },
  { product: products[1], quantity: 1 },
  { product: products[5], quantity: 3 },
];

interface CartPageProps {
  onLoginClick?: () => void;
  onContactClick?: () => void;
}

export default function CartPage({ onLoginClick, onContactClick }: CartPageProps) {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = items.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const whatsappText = encodeURIComponent(
    `Hola, quiero hacer un pedido:\n${items
      .map((i) => `- ${i.product.name} x${i.quantity} (${i.product.priceLabel})`)
      .join('\n')}\nTotal: Bs ${total.toFixed(2).replace('.', ',')}`
  );

  return (
    <div className="cart-page">
      <Navbar onLoginClick={onLoginClick} onContactClick={onContactClick} />
      <main className="cart-page__main">
        <h1 className="cart-page__title">Carrito de Compras</h1>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty__icon">🛒</div>
            <h2 className="cart-empty__title">Tu carrito está vacío</h2>
            <p className="cart-empty__text">
              Agrega productos desde nuestro catálogo para comenzar tu pedido.
            </p>
            <Link to="/catalogo" className="cart-empty__cta">
              Ver Catálogo
            </Link>
          </div>
        ) : (
          <div className="cart-page__layout">
            {/* Items */}
            <div className="cart-page__items">
              {items.map(({ product, quantity }) => {
                const imgSrc = ASSETS[product.image as keyof typeof ASSETS] as string;
                return (
                  <div key={product.id} className="cart-item">
                    <img
                      className="cart-item__image"
                      src={imgSrc}
                      alt={product.name}
                      loading="lazy"
                    />
                    <div className="cart-item__info">
                      <p className="cart-item__name">{product.name}</p>
                      <p className="cart-item__category">{product.category}</p>
                      <div className="cart-item__price-row">
                        <span className="cart-item__price">{product.priceLabel}</span>
                        <div className="cart-item__qty">
                          <button
                            className="cart-item__qty-btn"
                            onClick={() => updateQty(product.id, -1)}
                            aria-label="Reducir cantidad"
                          >
                            −
                          </button>
                          <span className="cart-item__qty-value">{quantity}</span>
                          <button
                            className="cart-item__qty-btn"
                            onClick={() => updateQty(product.id, 1)}
                            aria-label="Aumentar cantidad"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeItem(product.id)}
                      aria-label={`Eliminar ${product.name}`}
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <aside className="cart-summary">
              <h2 className="cart-summary__title">Resumen del Pedido</h2>

              <div className="cart-summary__row">
                <span className="cart-summary__label">Subtotal</span>
                <span className="cart-summary__value">
                  Bs {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="cart-summary__row">
                <span className="cart-summary__label">Envío</span>
                <span className="cart-summary__value">
                  Bs {shipping.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <hr className="cart-summary__divider" />

              <div className="cart-summary__row">
                <span className="cart-summary__total-label">Total</span>
                <span className="cart-summary__total-value">
                  Bs {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button className="cart-summary__checkout">
                Confirmar Pedido
              </button>

              <a
                className="cart-summary__whatsapp"
                href={`https://wa.me/59170000000?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir por WhatsApp
              </a>
            </aside>
          </div>
        )}
      </main>
      <Footer onContactClick={onContactClick} />
      <WhatsAppButton phoneNumber="59170000000" />
    </div>
  );
}
