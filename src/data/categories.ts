export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  image: string;
  count?: number;
}

export const HOME_CATEGORIES: CategoryItem[] = [
  {
    id: 'breakfast',
    name: 'Café da manhã',
    icon: '🍳',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'lunch',
    name: 'Almoço',
    icon: '🥗',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'dinner',
    name: 'Jantar',
    icon: '🍖',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'dessert',
    name: 'Sobremesas',
    icon: '🍰',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'drinks',
    name: 'Bebidas',
    icon: '🥤',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'quick',
    name: 'Rápidas',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80'
  }
];

export const EXPLORE_FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'breakfast', label: 'Café da Manhã' },
  { id: 'meat', label: 'Carnes' },
  { id: 'poultry', label: 'Aves' },
  { id: 'fish', label: 'Peixes' },
  { id: 'salads', label: 'Saladas' },
  { id: 'soups', label: 'Sopas' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'breads', label: 'Pães & Massas' },
  { id: 'dessert', label: 'Sobremesas' },
  { id: 'drinks', label: 'Bebidas' },
];
