import { ASSETS } from '../../assets';
import type { BlogCardProps } from '../../types';
import './BlogCard.css';

export default function BlogCard({ post }: BlogCardProps) {
  const imgSrc = ASSETS[post.image as keyof typeof ASSETS] as string;

  return (
    <div className="blog-card">
      <img
        className="blog-card__image"
        src={imgSrc}
        alt={post.title}
        loading="lazy"
      />
      <div className="blog-card__info">
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <a className="blog-card__link" href="#">
          Leer más ›
        </a>
      </div>
    </div>
  );
}
