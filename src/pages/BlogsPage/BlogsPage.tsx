import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import BlogCard from '../../components/BlogCard/BlogCard';
import { blogPosts } from '../../data/blogPosts';
import { ASSETS } from '../../assets';
import './BlogsPage.css';

// Extended mock blog posts for a richer page
const ALL_POSTS = [
  ...blogPosts,
  {
    id: '4',
    title: 'Cómo conservar tus verduras por más tiempo',
    excerpt: 'Aprende técnicas simples para mantener tus verduras frescas y nutritivas durante más días.',
    image: 'blog1',
  },
  {
    id: '5',
    title: 'Los superalimentos de Bolivia que debes conocer',
    excerpt: 'Bolivia tiene una riqueza natural increíble. Descubre los alimentos más nutritivos de nuestra tierra.',
    image: 'blog2',
  },
  {
    id: '6',
    title: 'Recetas con frutas de temporada',
    excerpt: 'Aprovecha las frutas de temporada con estas deliciosas y fáciles recetas para toda la familia.',
    image: 'blog3',
  },
];

const TOPICS = [
  { label: 'Todos', count: ALL_POSTS.length },
  { label: 'Nutrición', count: 2 },
  { label: 'Recetas', count: 2 },
  { label: 'Sostenibilidad', count: 1 },
  { label: 'Consejos', count: 1 },
];

interface BlogsPageProps {
  onLoginClick?: () => void;
  onContactClick?: () => void;
}

export default function BlogsPage({ onLoginClick, onContactClick }: BlogsPageProps) {
  const [activeTopic, setActiveTopic] = useState('Todos');

  const featured = ALL_POSTS[0];
  const rest = ALL_POSTS.slice(1);
  const featuredImg = ASSETS[featured.image as keyof typeof ASSETS] as string;

  return (
    <div className="blogs-page">
      <Navbar onLoginClick={onLoginClick} onContactClick={onContactClick} />

      {/* Hero */}
      <div className="blogs-page__hero">
        <h1 className="blogs-page__hero-title">
          Blog y <span>Consejos</span>
        </h1>
        <p className="blogs-page__hero-subtitle">
          Aprende sobre alimentación saludable, recetas orgánicas y el mundo de la agricultura sostenible en Bolivia.
        </p>
      </div>

      <main className="blogs-page__main">
        {/* Featured post */}
        <article className="blogs-page__featured">
          <img
            className="blogs-page__featured-image"
            src={featuredImg}
            alt={featured.title}
            loading="lazy"
          />
          <div className="blogs-page__featured-content">
            <span className="blogs-page__featured-tag">Destacado</span>
            <h2 className="blogs-page__featured-title">{featured.title}</h2>
            <p className="blogs-page__featured-excerpt">{featured.excerpt}</p>
            <a href="#" className="blogs-page__featured-link">
              Leer artículo completo →
            </a>
          </div>
        </article>

        {/* Layout: grid + sidebar */}
        <div className="blogs-page__layout">
          <div>
            <h2 className="blogs-page__section-title">Artículos Recientes</h2>
            <div className="blogs-page__grid">
              {rest.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blogs-page__sidebar">
            <h3 className="blogs-page__sidebar-title">Temas</h3>
            <div className="blogs-page__topics">
              {TOPICS.map((topic) => (
                <button
                  key={topic.label}
                  className={`blogs-page__topic${activeTopic === topic.label ? ' blogs-page__topic--active' : ''}`}
                  onClick={() => setActiveTopic(topic.label)}
                >
                  {topic.label}
                  <span className="blogs-page__topic-count">{topic.count}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer onContactClick={onContactClick} />
      <WhatsAppButton phoneNumber="59170000000" />
    </div>
  );
}
