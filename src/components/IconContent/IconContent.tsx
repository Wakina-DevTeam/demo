import { ASSETS } from '../../assets';
import type { IconContentProps } from '../../types';
import './IconContent.css';

export default function IconContent({ item }: IconContentProps) {
  const iconSrc = ASSETS[item.icon as keyof typeof ASSETS];

  return (
    <div className="icon-content">
      <div className="icon-content__circle">
        <img
          className="icon-content__icon"
          src={iconSrc}
          alt={item.title}
        />
      </div>
      <h3 className="icon-content__title">{item.title}</h3>
      <p className="icon-content__description">{item.description}</p>
    </div>
  );
}
