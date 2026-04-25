export interface Product {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  image: string;
  category: 'frutas' | 'verduras' | 'combos';
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavbarProps {
  onLoginClick?: () => void;
  onContactClick?: () => void;
}

export interface HeroProps {
  onExploreCatalog?: () => void;
  onViewOffers?: () => void;
}

export interface CategoryCardProps {
  category: Category;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export interface IconContentProps {
  item: ValueItem;
}

export interface BlogCardProps {
  post: BlogPost;
}

export interface CategoryBarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export interface FooterProps {}

export interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}
