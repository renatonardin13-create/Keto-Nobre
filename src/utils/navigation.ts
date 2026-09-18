import { NavigationTab } from '../types';

export const TAB_TO_ROUTE: Record<NavigationTab, string> = {
  home: '/home',
  explore: '/explorar',
  planner: '/planejar',
  shopping: '/compras',
  saved: '/salvos',
  favorites: '/salvos',
  scanner: '/scanner',
  nutrition: '/nutricao',
  chef: '/chef',
  tips: '/dicas',
  workouts: '/treinos',
  hydration: '/hidratacao',
  profile: '/perfil',
  settings: '/configuracoes',
  premium: '/premium',
  admin: '/admin',
};

export const ROUTE_TO_TAB: Record<string, NavigationTab> = {
  '/': 'home',
  '/home': 'home',
  '/explorar': 'explore',
  '/explore': 'explore',
  '/planejar': 'planner',
  '/planner': 'planner',
  '/compras': 'shopping',
  '/shopping': 'shopping',
  '/salvos': 'saved',
  '/saved': 'saved',
  '/scanner': 'scanner',
  '/nutricao': 'nutrition',
  '/nutrition': 'nutrition',
  '/chef': 'chef',
  '/dicas': 'tips',
  '/tips': 'tips',
  '/treinos': 'workouts',
  '/workouts': 'workouts',
  '/hidratacao': 'hydration',
  '/hydration': 'hydration',
  '/perfil': 'profile',
  '/profile': 'profile',
  '/configuracoes': 'settings',
  '/settings': 'settings',
  '/premium': 'premium',
  '/admin': 'admin',
};

export function getTabFromPath(pathname: string): NavigationTab {
  const normalized = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (normalized.startsWith('/dicas/')) {
    return 'tips';
  }
  return ROUTE_TO_TAB[normalized] || 'home';
}
