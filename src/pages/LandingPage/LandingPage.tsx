import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import IconContent from '../../components/IconContent/IconContent';
import BlogCard from '../../components/BlogCard/BlogCard';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { values } from '../../data/values';
import { blogPosts } from '../../data/blogPosts';
import { useAuth } from '../../context/useAuth';
import './LandingPage.css';

interface LandingPageProps {
  onLoginClick?: () => void;
  onContactClick?: () => void;
}

export default function LandingPage({ onLoginClick, onContactClick }: LandingPageProps) {
  const { addToCart } = useAuth();
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Navbar onLoginClick={onLoginClick} onContactClick={onContactClick} />
      <main>
        <Hero
          onExploreCatalog={() => navigate('/catalogo')}
          onViewOffers={() => navigate('/catalogo')}
        />

        {/* Categories Section */}
        <section className="lp-section lp-categories">
          <div className="lp-section__container">
            <h2 className="lp-section__heading">Categorías Destacadas</h2>
            <p className="lp-section__subtitle">
              Explora nuestra variedad de productos frescos y orgánicos
            </p>
            <div className="lp-categories__grid">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="lp-section lp-products">
          <div className="lp-section__container">
            <h2 className="lp-section__heading">Productos Destacados</h2>
            <p className="lp-section__subtitle">Los favoritos de nuestros clientes</p>
            <div className="lp-products__grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="lp-section lp-values">
          <div className="lp-section__container">
            <h2 className="lp-section__heading">Nuestros Valores</h2>
            <p className="lp-section__subtitle">Lo que nos hace diferentes</p>
            <div className="lp-values__grid">
              {values.map((item) => (
                <IconContent key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="lp-section lp-blog">
          <div className="lp-section__container">
            <h2 className="lp-section__heading">Blog y Consejos</h2>
            <p className="lp-section__subtitle">Aprende sobre alimentación saludable</p>
            <div className="lp-blog__grid">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onContactClick={onContactClick} />
      <WhatsAppButton phoneNumber="59170000000" />
    </>
  );
}
