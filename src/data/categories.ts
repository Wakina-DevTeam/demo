import type { Category } from '../types';

export interface CategoryDetail extends Category {
  subtitle: string;
  longDescription: string;
  starProducts: string[]; // up to 3 product image keys from ASSETS
  icon: string; // SVG path string for the leaf/icon
}

export const categories: CategoryDetail[] = [
  {
    id: 'frutas',
    title: 'Frutas Frescas',
    subtitle: 'Frutas de temporada, orgánicas y llenas de sabor',
    description: 'Las mejores frutas orgánicas de temporada, cultivadas con amor y sin pesticidas.',
    longDescription:
      'Provenientes de cultivos responsables, estas frutas destacan por ser de temporada, lo que garantiza su sabor auténtico y su óptimo estado de maduración. Muchas de ellas son cultivadas bajo prácticas orgánicas, priorizando el respeto por el medio ambiente y la salud del consumidor.\n\nDentro de esta categoría se incluyen variedades especiales que resaltan por sus características únicas, como su dulzura, textura o propiedades nutritivas, ofreciendo una experiencia más rica y diferenciada. Estas frutas suelen ser producidas por agricultores locales y productores comprometidos con técnicas sostenibles, quienes aseguran un proceso de cultivo y cosecha cuidadoso, manteniendo la frescura desde el origen hasta el consumidor final.',
    image: 'frutas',
    starProducts: ['manzana', 'mandarina', 'naranja'],
    icon: 'leaf',
  },
  {
    id: 'verduras',
    title: 'Verduras y hortalizas',
    subtitle: 'Frescas del campo, nutritivas y llenas de vida',
    description: 'Verduras frescas y nutritivas, cosechadas directamente de nuestros campos.',
    longDescription:
      'Nuestras verduras y hortalizas son seleccionadas cuidadosamente de agricultores locales que practican la agricultura sostenible. Cada pieza llega a tu mesa con el máximo de nutrientes y frescura.\n\nDesde lechugas crujientes hasta tomates jugosos, nuestra selección abarca todo lo que necesitas para una alimentación equilibrada y saludable. Cultivadas sin pesticidas artificiales, estas verduras son ideales para familias que buscan lo mejor para su salud.',
    image: 'verduras',
    starProducts: ['lechuga', 'tomate', 'espinaca'],
    icon: 'leaf',
  },
  {
    id: 'tuberculos',
    title: 'Tubérculos y raíces',
    subtitle: 'Raíces andinas con sabor y tradición boliviana',
    description: 'Tubérculos y raíces andinas llenas de nutrientes y sabor tradicional boliviano.',
    longDescription:
      'Los tubérculos y raíces andinas son parte fundamental de la gastronomía boliviana. Cultivados en las alturas de los Andes, estos productos concentran una riqueza nutricional única gracias al suelo y clima de la región.\n\nPapas nativas, ocas, mashuas y otros tubérculos tradicionales forman parte de esta categoría especial, conectando la tradición culinaria con la alimentación moderna y saludable.',
    image: 'tuberculos',
    starProducts: ['papa', 'zanahoria', 'zapallo'],
    icon: 'leaf',
  },
  {
    id: 'hierbas',
    title: 'Hierbas y aromáticas',
    subtitle: 'Aromas naturales para tu cocina',
    description: 'Hierbas frescas y aromáticas para dar sabor y salud a tus comidas.',
    longDescription:
      'Las hierbas aromáticas son el toque final que transforma cualquier plato. Cultivadas de forma natural, nuestras hierbas llegan frescas y llenas de aroma para potenciar tus recetas.\n\nDesde hierbabuena y albahaca hasta muña y huacatay, ofrecemos una selección de hierbas locales e internacionales que complementan perfectamente la cocina boliviana y mediterránea.',
    image: 'verduras',
    starProducts: ['espinaca', 'lechuga', 'tomate'],
    icon: 'leaf',
  },
  {
    id: 'combos',
    title: 'Combos familiares',
    subtitle: 'Todo lo que tu familia necesita en un solo pedido',
    description: 'Combos pensados para familias, con la mejor selección de productos frescos.',
    longDescription:
      'Nuestros combos familiares están diseñados para simplificar tu compra semanal. Cada combo incluye una selección balanceada de frutas, verduras y tubérculos frescos, pensada por nuestros nutricionistas para cubrir las necesidades de toda la familia.\n\nAhorra tiempo y dinero con nuestros combos, que te garantizan variedad, frescura y el mejor precio del mercado. Perfectos para familias que valoran la alimentación saludable sin complicaciones.',
    image: 'frutas',
    starProducts: ['combo1', 'combo2', 'combo3'],
    icon: 'truck',
  },
  {
    id: 'saludables',
    title: 'Combos saludables',
    subtitle: 'Selección especial para un estilo de vida sano',
    description: 'Combos especialmente curados para quienes buscan una alimentación saludable.',
    longDescription:
      'Los combos saludables están pensados para personas que buscan mejorar su alimentación de forma práctica. Cada combo incluye productos seleccionados por su alto valor nutricional y sus beneficios para la salud.\n\nIdeal para deportistas, personas con dietas especiales o simplemente quienes quieren incorporar más nutrientes a su día a día. Todos los productos son orgánicos y de primera calidad.',
    image: 'verduras',
    starProducts: ['espinaca', 'naranja', 'manzana'],
    icon: 'heart',
  },
  {
    id: 'temporada',
    title: 'Productos de temporada',
    subtitle: 'Lo mejor de cada estación, en su punto justo',
    description: 'Los mejores productos según la temporada, siempre frescos y al mejor precio.',
    longDescription:
      'Consumir productos de temporada es la mejor forma de disfrutar sabores auténticos y precios accesibles. Nuestra selección cambia con las estaciones para ofrecerte siempre lo más fresco del mercado.\n\nAl elegir productos de temporada, también apoyas a los agricultores locales y reduces el impacto ambiental de tu consumo. Una elección inteligente para ti y para el planeta.',
    image: 'frutas',
    starProducts: ['manzana', 'lechuga', 'papa'],
    icon: 'heart',
  },
];
