import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Recipe,
  UserProfile,
  MealPlanDay,
  ShoppingItem,
  RecipeCollection,
  AdminMetrics,
  SubscriptionConfig,
  NavigationTab,
  PreparedHistoryItem,
  SmartPlanOptions,
  Ingredient,
  FoodScan,
  HealthTip,
  HydrationProfile,
  HydrationDaySchedule,
  HydrationLog,
  HydrationContainer,
  TodayHydrationSummary,
  DayOfWeekPt,
} from '../types';
import { INITIAL_RECIPES } from '../data/recipes';
import { INITIAL_HEALTH_TIPS } from '../data/healthTips';
import { consolidateIngredients } from '../utils/shopping';
import { getTabFromPath, TAB_TO_ROUTE } from '../utils/navigation';
import { calculateHydration, generate7DaySchedule, generatePlannedIntakes, timeToMinutes } from '../utils/hydrationCalculator';
import { generateInitialHydrationLogs } from '../utils/hydrationHistorySeed';

interface ToastState {
  message: string;
  type?: 'success' | 'info' | 'favorite' | 'list';
}

interface AppContextType {
  // Navigation
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  
  // App Lifecycle
  splashFinished: boolean;
  setSplashFinished: (v: boolean) => void;
  onboardingFinished: boolean;
  setOnboardingFinished: (v: boolean) => void;
  
  // User & Auth
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  togglePremium: () => void;
  
  // Recipes
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  activeDetailRecipe: Recipe | null;
  openRecipeDetail: (recipe: Recipe) => void;
  closeRecipeDetail: () => void;
  
  // Cooking Mode & History
  activeCookingRecipe: Recipe | null;
  startCooking: (recipe: Recipe) => void;
  finishCooking: (recipe: Recipe) => void;
  exitCooking: () => void;
  cookingHistory: PreparedHistoryItem[];
  addCookingHistory: (recipe: Recipe) => void;
  
  // Favorites & Collections
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  collections: RecipeCollection[];
  createCollection: (name: string) => void;
  addRecipeToCollection: (collectionId: string, recipeId: string) => void;
  removeRecipeFromCollection: (collectionId: string, recipeId: string) => void;
  
  // Meal Plan
  mealPlan: MealPlanDay[];
  setMealPlan: React.Dispatch<React.SetStateAction<MealPlanDay[]>>;
  updateMealPlanSlot: (
    dayOfWeek: string,
    slot: 'breakfast' | 'lunch' | 'dinner' | 'dessert',
    recipe: Recipe | undefined
  ) => void;
  generateShoppingListFromPlan: () => void;
  autoFillWeekPlan: (options: SmartPlanOptions) => void;
  clearWeekPlan: () => void;
  swapPlanMeals: (
    dayFrom: string,
    slotFrom: 'breakfast' | 'lunch' | 'dinner' | 'dessert',
    dayTo: string,
    slotTo: 'breakfast' | 'lunch' | 'dinner' | 'dessert'
  ) => void;
  
  // Shopping List
  shoppingList: ShoppingItem[];
  toggleShoppingItem: (id: string) => void;
  addShoppingItem: (name: string, quantity: string, category?: ShoppingItem['category']) => void;
  addRecipeIngredientsToShopping: (recipe: Recipe, customIngredients?: Ingredient[]) => void;
  deleteShoppingItem: (id: string) => void;
  clearCheckedShoppingItems: () => void;
  checkAllShoppingItems: () => void;
  
  // Modals & Panels
  showPremiumModal: boolean;
  setShowPremiumModal: (v: boolean) => void;
  showAdminPanel: boolean;
  setShowAdminPanel: (v: boolean) => void;
  showChefModal: boolean;
  setShowChefModal: (v: boolean) => void;
  showAuthModal: boolean;
  setShowAuthModal: (v: boolean) => void;
  
  // Admin & Subscription Config
  subscriptionConfig: SubscriptionConfig;
  setSubscriptionConfig: React.Dispatch<React.SetStateAction<SubscriptionConfig>>;
  updateSubscriptionConfig: (config: Partial<SubscriptionConfig>) => void;
  adminMetrics: AdminMetrics;
  resetAppData: () => void;
  
  // Search & Navigation shortcuts
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedExploreFilter: string;
  setSelectedExploreFilter: (f: string) => void;
  
  // Theme & Feedback
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  toggleDarkMode: () => void;
  toast: ToastState | null;
  showToast: (message: string, type?: ToastState['type']) => void;

  // Scanner & Food Analysis
  foodScans: FoodScan[];
  saveFoodScan: (scan: FoodScan) => void;
  deleteFoodScan: (id: string) => void;
  clearFoodScans: () => void;
  sendScanToChef: (scan: FoodScan) => void;
  addScannedFoodToShopping: (scan: FoodScan) => void;
  findMatchingRecipesForScan: (scan: FoodScan) => Recipe[];
  chefInitialPrompt: string | null;
  setChefInitialPrompt: (prompt: string | null) => void;
  chefScanContext: FoodScan | null;
  setChefScanContext: (scan: FoodScan | null) => void;

  // Health Tips (Dicas de Saúde)
  healthTips: HealthTip[];
  activeTip: HealthTip | null;
  setActiveTip: (tip: HealthTip | null) => void;
  openTipDetail: (tip: HealthTip) => void;
  closeTipDetail: () => void;
  savedTips: string[];
  toggleSavedTip: (tipId: string) => void;
  viewedTips: string[];
  markTipViewed: (tipId: string) => void;
  addHealthTip: (tip: HealthTip) => void;
  updateHealthTip: (tip: HealthTip) => void;
  deleteHealthTip: (id: string) => void;
  toggleFeatureHealthTip: (id: string) => void;
  sendTipToChef: (tip: HealthTip, customQuestion?: string) => void;
  findRecipesForTip: (tip: HealthTip) => Recipe[];

  // Smart Hydration (Hidratação Inteligente)
  hydrationProfile: HydrationProfile;
  hydrationSchedules: HydrationDaySchedule[];
  hydrationLogs: HydrationLog[];
  hydrationContainers: HydrationContainer[];
  hydrationRemindersEnabled: boolean;
  todayHydration: TodayHydrationSummary;
  updateHydrationProfile: (newProfile: Partial<HydrationProfile>) => void;
  updateDaySchedule: (day: DayOfWeekPt, updates: Partial<HydrationDaySchedule>) => void;
  logWaterIntake: (amountMl: number, containerLabel?: string, timeStr?: string) => void;
  togglePlannedIntake: (day: DayOfWeekPt, intakeId: string) => void;
  deleteHydrationLog: (logId: string) => void;
  resetHydrationDay: (dateStr?: string) => void;
  setRemindersEnabled: (enabled: boolean) => Promise<boolean>;
  recalculateSchedules: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_USER: UserProfile = {
  id: 'user-1',
  name: 'João Silva',
  email: 'joao.silva@exemplo.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  isPremium: true,
  isAdmin: true,
  role: 'admin',
  streakDays: 5,
  preparedCount: 12,
  preferences: {
    dietType: 'Keto Estrito',
    allergies: ['Amendoim'],
    dislikedIngredients: ['Coentro'],
    favoriteCategories: ['Carnes', 'Aves', 'Café da manhã'],
  },
};

const INITIAL_COLLECTIONS: RecipeCollection[] = [
  { id: 'col-1', name: 'Fazer esta semana', icon: '⭐', recipeIds: [INITIAL_RECIPES[0]?.id || 'kn-breakfast-001', INITIAL_RECIPES[70]?.id || 'kn-chicken-001', INITIAL_RECIPES[150]?.id || 'kn-meat-001'] },
  { id: 'col-2', name: 'Receitas rápidas', icon: '⚡', recipeIds: [INITIAL_RECIPES[340]?.id || 'kn-quick_meals-001', INITIAL_RECIPES[1]?.id || 'kn-breakfast-002'] },
  { id: 'col-3', name: 'Café da manhã', icon: '🍳', recipeIds: [INITIAL_RECIPES[0]?.id || 'kn-breakfast-001', INITIAL_RECIPES[2]?.id || 'kn-breakfast-003'] },
  { id: 'col-4', name: 'Almoço', icon: '🥗', recipeIds: [INITIAL_RECIPES[70]?.id || 'kn-chicken-001', INITIAL_RECIPES[290]?.id || 'kn-salads-001'] },
  { id: 'col-5', name: 'Jantar Nobre', icon: '🍖', recipeIds: [INITIAL_RECIPES[150]?.id || 'kn-meat-001', INITIAL_RECIPES[230]?.id || 'kn-seafood-001'] },
  { id: 'col-6', name: 'Sobremesas', icon: '🍰', recipeIds: [INITIAL_RECIPES[440]?.id || 'kn-desserts-001', INITIAL_RECIPES[441]?.id || 'kn-desserts-002'] },
];

const INITIAL_COOKING_HISTORY: PreparedHistoryItem[] = [
  {
    id: 'h-1',
    recipeId: INITIAL_RECIPES[70]?.id || 'kn-chicken-001',
    recipeTitle: INITIAL_RECIPES[70]?.title || 'Frango Nobre com Ervas',
    recipeImage: INITIAL_RECIPES[70]?.image,
    categoryName: INITIAL_RECIPES[70]?.categoryName || 'Aves',
    cookedAt: 'Hoje',
    count: 3,
  },
  {
    id: 'h-2',
    recipeId: INITIAL_RECIPES[0]?.id || 'kn-breakfast-001',
    recipeTitle: INITIAL_RECIPES[0]?.title || 'Ovos Nobres Cetogênicos',
    recipeImage: INITIAL_RECIPES[0]?.image,
    categoryName: INITIAL_RECIPES[0]?.categoryName || 'Café da manhã',
    cookedAt: 'Ontem',
    count: 4,
  },
  {
    id: 'h-3',
    recipeId: INITIAL_RECIPES[150]?.id || 'kn-meat-001',
    recipeTitle: INITIAL_RECIPES[150]?.title || 'Picanha Nobre',
    recipeImage: INITIAL_RECIPES[150]?.image,
    categoryName: INITIAL_RECIPES[150]?.categoryName || 'Carnes',
    cookedAt: 'Há 3 dias',
    count: 2,
  },
  {
    id: 'h-4',
    recipeId: INITIAL_RECIPES[230]?.id || 'kn-seafood-001',
    recipeTitle: INITIAL_RECIPES[230]?.title || 'Salmão Grelhado',
    recipeImage: INITIAL_RECIPES[230]?.image,
    categoryName: INITIAL_RECIPES[230]?.categoryName || 'Peixes',
    cookedAt: 'Há 5 dias',
    count: 2,
  },
];

const INITIAL_HYDRATION_PROFILE: HydrationProfile = {
  id: 'hyd-profile-1',
  user_id: 'user-1',
  weight_kg: 88,
  height_cm: 180,
  age: 46,
  sex: 'male',
  activity_level: 'moderate',
  climate: 'moderate',
  bottle_ml: 500,
  wake_time: '07:00',
  sleep_time: '23:00',
  daily_target_ml: 2650,
  has_health_restriction: false,
  rounding_mode: 'practical',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

const INITIAL_CONTAINERS: HydrationContainer[] = [
  { id: 'cnt-1', name: 'Garrafa Principal', capacity_ml: 500, iconType: 'bottle', isDefault: true },
  { id: 'cnt-2', name: 'Copo de Água', capacity_ml: 250, iconType: 'glass', isDefault: false },
  { id: 'cnt-3', name: 'Squeeze Térmica', capacity_ml: 750, iconType: 'bottle', isDefault: false },
  { id: 'cnt-4', name: 'Jarra / Garrafão', capacity_ml: 1000, iconType: 'bottle', isDefault: false },
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & Lifecycle
  const [activeTab, setActiveTabState] = useState<NavigationTab>(() => {
    if (typeof window !== 'undefined') {
      return getTabFromPath(window.location.pathname);
    }
    return 'home';
  });
  const [splashFinished, setSplashFinished] = useState<boolean>(false);
  const [onboardingFinished, setOnboardingFinished] = useState<boolean>(() => {
    return localStorage.getItem('ketonobre_onboarding_done') === 'true';
  });

  // User
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('ketonobre_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  // Cooking History
  const [cookingHistory, setCookingHistory] = useState<PreparedHistoryItem[]>(() => {
    const saved = localStorage.getItem('ketonobre_cooking_history');
    return saved ? JSON.parse(saved) : INITIAL_COOKING_HISTORY;
  });

  // Recipes
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem('ketonobre_recipes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_RECIPES.length) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse cached recipes:', e);
      }
    }
    return INITIAL_RECIPES;
  });

  const [activeDetailRecipe, setActiveDetailRecipe] = useState<Recipe | null>(null);
  const [activeCookingRecipe, setActiveCookingRecipe] = useState<Recipe | null>(null);

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('ketonobre_favs');
    return saved ? JSON.parse(saved) : [INITIAL_RECIPES[0]?.id, INITIAL_RECIPES[70]?.id, INITIAL_RECIPES[150]?.id].filter(Boolean);
  });

  // Collections
  const [collections, setCollections] = useState<RecipeCollection[]>(() => {
    const saved = localStorage.getItem('ketonobre_collections');
    return saved ? JSON.parse(saved) : INITIAL_COLLECTIONS;
  });

  // Meal Plan Initializer
  const [mealPlan, setMealPlan] = useState<MealPlanDay[]>(() => {
    const saved = localStorage.getItem('ketonobre_meal_plan');
    if (saved) return JSON.parse(saved);
    const om = INITIAL_RECIPES.find((r) => r.category === 'breakfast') || INITIAL_RECIPES[0];
    const fc = INITIAL_RECIPES.find((r) => r.category === 'poultry') || INITIAL_RECIPES[70];
    const sl = INITIAL_RECIPES.find((r) => r.category === 'fish') || INITIAL_RECIPES[230];
    const sc = INITIAL_RECIPES.find((r) => r.category === 'salads') || INITIAL_RECIPES[290];
    const pn = INITIAL_RECIPES.find((r) => r.category === 'meat') || INITIAL_RECIPES[150];
    const pk = INITIAL_RECIPES.find((r) => r.category === 'breakfast' && r.id !== om.id) || INITIAL_RECIPES[1];
    const st = INITIAL_RECIPES.find((r) => r.category === 'meat' && r.id !== pn.id) || INITIAL_RECIPES[151];
    const ds = INITIAL_RECIPES.find((r) => r.category === 'dessert') || INITIAL_RECIPES[440];

    return [
      { dayOfWeek: 'Seg', dayName: 'Segunda-feira', breakfast: om, lunch: fc, dinner: sl, dessert: ds },
      { dayOfWeek: 'Ter', dayName: 'Terça-feira', breakfast: pk, lunch: sc, dinner: pn },
      { dayOfWeek: 'Qua', dayName: 'Quarta-feira', breakfast: om, lunch: fc, dinner: st, dessert: ds },
      { dayOfWeek: 'Qui', dayName: 'Quinta-feira', breakfast: pk, lunch: sl, dinner: sc },
      { dayOfWeek: 'Sex', dayName: 'Sexta-feira', breakfast: om, lunch: pn, dinner: fc, dessert: ds },
      { dayOfWeek: 'Sáb', dayName: 'Sábado', breakfast: pk, lunch: st, dinner: sl },
      { dayOfWeek: 'Dom', dayName: 'Domingo', breakfast: om, lunch: pn, dinner: sc, dessert: ds },
    ];
  });

  // Shopping List
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(() => {
    const saved = localStorage.getItem('ketonobre_shopping');
    if (saved) return JSON.parse(saved);
    return [
      { id: 's-1', ingredient: 'Peito de frango', quantity: '1,5 kg', category: 'Proteínas', checked: false, addedAt: Date.now() },
      { id: 's-2', ingredient: 'Salmão fresco', quantity: '600g', category: 'Proteínas', checked: false, addedAt: Date.now() },
      { id: 's-3', ingredient: 'Carne moída / Alcatra', quantity: '500g', category: 'Proteínas', checked: true, addedAt: Date.now() },
      { id: 's-4', ingredient: 'Brócolis', quantity: '1 unidade', category: 'Vegetais', checked: false, addedAt: Date.now() },
      { id: 's-5', ingredient: 'Abobrinha italiana', quantity: '2 unidades', category: 'Vegetais', checked: false, addedAt: Date.now() },
      { id: 's-6', ingredient: 'Tomate cereja', quantity: '6 unidades', category: 'Vegetais', checked: true, addedAt: Date.now() },
      { id: 's-7', ingredient: 'Espinafre baby', quantity: '1 maço', category: 'Vegetais', checked: false, addedAt: Date.now() },
      { id: 's-8', ingredient: 'Creme de leite fresco', quantity: '2 unidades (400ml)', category: 'Laticínios', checked: false, addedAt: Date.now() },
      { id: 's-9', ingredient: 'Queijo mussarela / Queijo de cabra', quantity: '300g', category: 'Laticínios', checked: false, addedAt: Date.now() },
      { id: 's-10', ingredient: 'Manteiga com sal de qualidade', quantity: '200g', category: 'Laticínios', checked: false, addedAt: Date.now() },
    ];
  });

  // Modals & Panels
  const [showPremiumModal, setShowPremiumModal] = useState<boolean>(false);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);
  const [showChefModal, setShowChefModal] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  // Search & Filter Shortcuts
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedExploreFilter, setSelectedExploreFilter] = useState<string>('all');

  // Subscription Pricing (Configurable via Admin)
  const [subscriptionConfig, setSubscriptionConfig] = useState<SubscriptionConfig>(() => {
    const saved = localStorage.getItem('ketonobre_sub_config');
    return saved ? JSON.parse(saved) : {
      monthlyPrice: 29.90,
      annualPrice: 249.90,
      discountPercentage: 30,
      trialDays: 7,
    };
  });

  // Theme (Locked to Dark Luxury mode per user request)
  const [darkMode] = useState<boolean>(true);

  // Scanner & Food Analysis
  const [foodScans, setFoodScans] = useState<FoodScan[]>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_food_scans');
      if (saved) {
        const parsed: FoodScan[] = JSON.parse(saved);
        return parsed.filter((item) => item.user_id === user.id);
      }
    } catch (e) {
      console.warn('Error loading food scans from storage:', e);
    }
    return [
      {
        id: 'scan-demo-1',
        user_id: user.id,
        image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        identified_food: 'Costelinha Suína com Ervas & Alecrim',
        category: 'Carnes Nobres',
        approx_portion: '1 porção (~220g)',
        visible_ingredients: ['Costela suína nobre', 'Azeite de oliva', 'Alecrim fresco', 'Flor de sal'],
        calories: 490,
        protein_g: 38,
        carbs_g: 0.5,
        fiber_g: 0,
        net_carbs_g: 0.5,
        fat_g: 37,
        keto_status: 'compatible',
        keto_analysis: 'Perfil cetogênico perfeito: zero impacto glicêmico, alto teor de gorduras nobres para saciedade prolongada e densidade proteica excelente.',
        is_packaged: false,
        confidence: 95,
        created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
      },
    ];
  });

  const [chefInitialPrompt, setChefInitialPrompt] = useState<string | null>(null);
  const [chefScanContext, setChefScanContext] = useState<FoodScan | null>(null);

  // Toast
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = (message: string, type: ToastState['type'] = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const setActiveTab = (tab: NavigationTab) => {
    if (tab === 'admin') {
      if (user.isAdmin || user.role === 'admin') {
        setShowAdminPanel(true);
      } else {
        showToast('Acesso restrito ao Administrador.', 'info');
      }
      return;
    }

    if (tab === 'chef') {
      if (!user.isPremium) {
        setShowPremiumModal(true);
        return;
      }
      setShowChefModal(true);
      return;
    }

    if (tab === 'premium') {
      setShowPremiumModal(true);
      return;
    }

    setActiveTabState(tab);
    if (typeof window !== 'undefined') {
      const targetRoute = TAB_TO_ROUTE[tab] || '/home';
      if (window.location.pathname !== targetRoute) {
        window.history.pushState({ tab }, '', targetRoute);
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const tab = getTabFromPath(window.location.pathname);
      setActiveTabState(tab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Persist states to localStorage
  useEffect(() => {
    localStorage.setItem('ketonobre_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('ketonobre_recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('ketonobre_favs', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('ketonobre_collections', JSON.stringify(collections));
  }, [collections]);

  useEffect(() => {
    localStorage.setItem('ketonobre_meal_plan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  useEffect(() => {
    localStorage.setItem('ketonobre_shopping', JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem('ketonobre_sub_config', JSON.stringify(subscriptionConfig));
  }, [subscriptionConfig]);

  useEffect(() => {
    localStorage.setItem('ketonobre_onboarding_done', onboardingFinished ? 'true' : 'false');
  }, [onboardingFinished]);

  useEffect(() => {
    try {
      const allSaved = localStorage.getItem('ketonobre_food_scans');
      let merged: FoodScan[] = [];
      if (allSaved) {
        const existing: FoodScan[] = JSON.parse(allSaved);
        merged = existing.filter((item) => item.user_id !== user.id);
      }
      merged.push(...foodScans);
      localStorage.setItem('ketonobre_food_scans', JSON.stringify(merged));
    } catch (e) {
      // ignore
    }
  }, [foodScans, user.id]);

  // Health Tips (Dicas de Saúde)
  const [healthTips, setHealthTips] = useState<HealthTip[]>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_health_tips');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error loading health tips from storage:', e);
    }
    return INITIAL_HEALTH_TIPS;
  });

  const [activeTip, setActiveTip] = useState<HealthTip | null>(null);

  const [savedTips, setSavedTips] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_saved_tips');
      return saved ? JSON.parse(saved) : ['tip-fibras-alimentacao', 'tip-interpretando-rotulos'];
    } catch (e) {
      return ['tip-fibras-alimentacao'];
    }
  });

  const [viewedTips, setViewedTips] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_viewed_tips');
      return saved ? JSON.parse(saved) : ['tip-fibras-alimentacao'];
    } catch (e) {
      return [];
    }
  });

  // Smart Hydration (Hidratação Inteligente) States
  const [hydrationProfile, setHydrationProfile] = useState<HydrationProfile>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_hydration_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error loading hydration profile:', e);
    }
    return INITIAL_HYDRATION_PROFILE;
  });

  const [hydrationSchedules, setHydrationSchedules] = useState<HydrationDaySchedule[]>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_hydration_schedules');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error loading hydration schedules:', e);
    }
    return generate7DaySchedule(INITIAL_HYDRATION_PROFILE);
  });

  const [hydrationContainers, setHydrationContainers] = useState<HydrationContainer[]>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_hydration_containers');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error loading hydration containers:', e);
    }
    return INITIAL_CONTAINERS;
  });

  const [hydrationLogs, setHydrationLogs] = useState<HydrationLog[]>(() => {
    try {
      const saved = localStorage.getItem('ketonobre_hydration_logs');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error loading hydration logs:', e);
    }
    return generateInitialHydrationLogs(INITIAL_HYDRATION_PROFILE);
  });

  const [hydrationRemindersEnabled, setHydrationRemindersEnabled] = useState<boolean>(() => {
    return localStorage.getItem('ketonobre_hydration_reminders') === 'true';
  });

  // Persist Hydration States
  useEffect(() => {
    localStorage.setItem('ketonobre_hydration_profile', JSON.stringify(hydrationProfile));
  }, [hydrationProfile]);

  useEffect(() => {
    localStorage.setItem('ketonobre_hydration_schedules', JSON.stringify(hydrationSchedules));
  }, [hydrationSchedules]);

  useEffect(() => {
    localStorage.setItem('ketonobre_hydration_containers', JSON.stringify(hydrationContainers));
  }, [hydrationContainers]);

  useEffect(() => {
    localStorage.setItem('ketonobre_hydration_logs', JSON.stringify(hydrationLogs));
  }, [hydrationLogs]);

  useEffect(() => {
    localStorage.setItem('ketonobre_hydration_reminders', hydrationRemindersEnabled ? 'true' : 'false');
  }, [hydrationRemindersEnabled]);

  // Dark mode class sync with html
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.className = 'bg-[#071A0E] text-[#F5F8F2] antialiased';
  }, []);

  const toggleDarkMode = () => {};
  const setDarkMode = () => {};

  const togglePremium = () => {
    const updated = !user.isPremium;
    setUser((prev) => ({ ...prev, isPremium: updated }));
    showToast(updated ? '👑 Plano Premium ativado com sucesso!' : 'Modo Grátis ativado.');
  };

  const openRecipeDetail = (recipe: Recipe) => {
    setActiveDetailRecipe(recipe);
  };

  const closeRecipeDetail = () => {
    setActiveDetailRecipe(null);
  };

  const startCooking = (recipe: Recipe) => {
    setActiveCookingRecipe(recipe);
  };

  const addCookingHistory = (recipe: Recipe) => {
    setCookingHistory((prev) => {
      const existingIdx = prev.findIndex((item) => item.recipeId === recipe.id);
      let updated: PreparedHistoryItem[];
      if (existingIdx >= 0) {
        updated = [...prev];
        const existing = updated[existingIdx];
        const currentCount = ((existing?.count || existing?.timesPrepared || 1) as number) + 1;
        updated[existingIdx] = {
          ...existing,
          count: currentCount,
          timesPrepared: currentCount,
          cookedAt: 'Agora mesmo',
          preparedAt: new Date().toISOString(),
        };
      } else {
        updated = [
          {
            id: `hist-${Date.now()}`,
            recipeId: recipe.id,
            recipeTitle: recipe.title,
            recipeImage: recipe.image,
            categoryName: recipe.categoryName,
            cookedAt: 'Agora mesmo',
            preparedAt: new Date().toISOString(),
            count: 1,
            timesPrepared: 1,
          },
          ...prev,
        ];
      }
      try {
        localStorage.setItem('ketonobre_cooking_history', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  const finishCooking = (recipe: Recipe) => {
    setUser((prev) => {
      const nextUser = {
        ...prev,
        preparedCount: prev.preparedCount + 1,
        streakDays: prev.streakDays + 1,
      };
      localStorage.setItem('ketonobre_user', JSON.stringify(nextUser));
      return nextUser;
    });
    addCookingHistory(recipe);
    setActiveCookingRecipe(null);
    showToast(`🎉 Parabéns! Você concluiu "${recipe.title}"! 🔥 Sequência ampliada!`, 'success');
  };

  const exitCooking = () => {
    setActiveCookingRecipe(null);
  };

  const toggleFavorite = (recipeId: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(recipeId);
      const next = isFav ? prev.filter((id) => id !== recipeId) : [...prev, recipeId];
      try {
        localStorage.setItem('ketonobre_favs', JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      showToast(isFav ? 'Removido dos favoritos' : '❤️ Adicionado aos favoritos!', 'favorite');
      return next;
    });
  };

  const createCollection = (name: string) => {
    if (!name.trim()) return;
    const newCol: RecipeCollection = {
      id: `col-${Date.now()}`,
      name: name.trim(),
      icon: '📁',
      recipeIds: [],
    };
    setCollections((prev) => {
      const next = [...prev, newCol];
      localStorage.setItem('ketonobre_collections', JSON.stringify(next));
      return next;
    });
    showToast(`Coleção "${name}" criada com sucesso!`);
  };

  const addRecipeToCollection = (collectionId: string, recipeId: string) => {
    setCollections((prev) => {
      const next = prev.map((col) => {
        if (col.id === collectionId) {
          if (!col.recipeIds.includes(recipeId)) {
            return { ...col, recipeIds: [...col.recipeIds, recipeId] };
          }
        }
        return col;
      });
      localStorage.setItem('ketonobre_collections', JSON.stringify(next));
      return next;
    });
    showToast('Receita adicionada à coleção!');
  };

  const removeRecipeFromCollection = (collectionId: string, recipeId: string) => {
    setCollections((prev) => {
      const next = prev.map((col) => {
        if (col.id === collectionId) {
          return { ...col, recipeIds: col.recipeIds.filter((id) => id !== recipeId) };
        }
        return col;
      });
      localStorage.setItem('ketonobre_collections', JSON.stringify(next));
      return next;
    });
    showToast('Receita removida da coleção.');
  };

  const updateMealPlanSlot = (
    dayOfWeek: string,
    slot: 'breakfast' | 'lunch' | 'dinner' | 'dessert',
    recipe: Recipe | undefined
  ) => {
    setMealPlan((prev) => {
      const updated = prev.map((d) => {
        if (d.dayOfWeek === dayOfWeek) {
          return { ...d, [slot]: recipe };
        }
        return d;
      });
      try {
        localStorage.setItem('ketonobre_meal_plan', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
    showToast('Planejamento semanal atualizado!');
  };

  const autoFillWeekPlan = (options: SmartPlanOptions) => {
    let pool = [...recipes];

    // Filter by maxTime if requested
    if (options.maxTime === '15') {
      pool = pool.filter((r) => r.cookTime + r.prepTime <= 18);
    } else if (options.maxTime === '30') {
      pool = pool.filter((r) => r.cookTime + r.prepTime <= 32);
    }

    // Filter/prioritize by goal
    if (options.goal === 'favorites' && favorites.length > 0) {
      const favRecipes = pool.filter((r) => favorites.includes(r.id));
      if (favRecipes.length >= 3) pool = favRecipes;
    } else if (options.goal === 'protein') {
      pool.sort((a, b) => b.nutrition.protein - a.nutrition.protein);
    } else if (options.goal === 'quick') {
      pool.sort((a, b) => (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime));
    }

    const breakfasts = pool.filter((r) => r.category === 'breakfast' || r.category === 'drinks' || r.category === 'quick');
    const lunches = pool.filter((r) => r.category === 'lunch' || r.category === 'poultry' || r.category === 'salads' || r.category === 'quick');
    const dinners = pool.filter((r) => r.category === 'dinner' || r.category === 'meat' || r.category === 'fish');
    const desserts = pool.filter((r) => r.category === 'dessert');

    const getRandom = (arr: Recipe[], fallbackIndex: number) => {
      if (!arr || arr.length === 0) return pool[fallbackIndex % pool.length];
      return arr[Math.floor(Math.random() * arr.length)];
    };

    const newPlan: MealPlanDay[] = [
      { dayOfWeek: 'Seg', dayName: 'Segunda-feira', breakfast: getRandom(breakfasts, 0), lunch: getRandom(lunches, 1), dinner: getRandom(dinners, 2), dessert: getRandom(desserts, 0) },
      { dayOfWeek: 'Ter', dayName: 'Terça-feira', breakfast: getRandom(breakfasts, 1), lunch: getRandom(lunches, 2), dinner: getRandom(dinners, 3) },
      { dayOfWeek: 'Qua', dayName: 'Quarta-feira', breakfast: getRandom(breakfasts, 2), lunch: getRandom(lunches, 3), dinner: getRandom(dinners, 0), dessert: getRandom(desserts, 1) },
      { dayOfWeek: 'Qui', dayName: 'Quinta-feira', breakfast: getRandom(breakfasts, 3), lunch: getRandom(lunches, 0), dinner: getRandom(dinners, 1) },
      { dayOfWeek: 'Sex', dayName: 'Sexta-feira', breakfast: getRandom(breakfasts, 0), lunch: getRandom(lunches, 1), dinner: getRandom(dinners, 2), dessert: getRandom(desserts, 2) },
      { dayOfWeek: 'Sáb', dayName: 'Sábado', breakfast: getRandom(breakfasts, 1), lunch: getRandom(lunches, 2), dinner: getRandom(dinners, 3) },
      { dayOfWeek: 'Dom', dayName: 'Domingo', breakfast: getRandom(breakfasts, 2), lunch: getRandom(lunches, 3), dinner: getRandom(dinners, 0), dessert: getRandom(desserts, 0) },
    ];

    setMealPlan(newPlan);
    try {
      localStorage.setItem('ketonobre_meal_plan', JSON.stringify(newPlan));
    } catch (e) {
      // ignore
    }
    showToast('✨ Semana planejada de forma inteligente com sucesso!', 'success');
  };

  const clearWeekPlan = () => {
    const emptyPlan: MealPlanDay[] = [
      { dayOfWeek: 'Seg', dayName: 'Segunda-feira' },
      { dayOfWeek: 'Ter', dayName: 'Terça-feira' },
      { dayOfWeek: 'Qua', dayName: 'Quarta-feira' },
      { dayOfWeek: 'Qui', dayName: 'Quinta-feira' },
      { dayOfWeek: 'Sex', dayName: 'Sexta-feira' },
      { dayOfWeek: 'Sáb', dayName: 'Sábado' },
      { dayOfWeek: 'Dom', dayName: 'Domingo' },
    ];
    setMealPlan(emptyPlan);
    try {
      localStorage.setItem('ketonobre_meal_plan', JSON.stringify(emptyPlan));
    } catch (e) {
      // ignore
    }
    showToast('Planejamento semanal resetado!');
  };

  const swapPlanMeals = (
    day1: string,
    slot1: 'breakfast' | 'lunch' | 'dinner' | 'dessert',
    day2: string,
    slot2: 'breakfast' | 'lunch' | 'dinner' | 'dessert'
  ) => {
    setMealPlan((prev) => {
      const updated = [...prev];
      const d1 = updated.find((d) => d.dayOfWeek === day1);
      const d2 = updated.find((d) => d.dayOfWeek === day2);
      if (d1 && d2) {
        const temp = d1[slot1];
        d1[slot1] = d2[slot2];
        d2[slot2] = temp;
      }
      try {
        localStorage.setItem('ketonobre_meal_plan', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
    showToast('Refeições alternadas com sucesso!');
  };

  const generateShoppingListFromPlan = () => {
    const rawItems: { name: string; amount: string; category: any; recipeTitle: string }[] = [];

    mealPlan.forEach((day) => {
      const slots = [day.breakfast, day.lunch, day.dinner, day.dessert];
      slots.forEach((recipe) => {
        if (recipe && recipe.ingredients) {
          recipe.ingredients.forEach((ing) => {
            rawItems.push({
              name: ing.name,
              amount: ing.amount,
              category: ing.category,
              recipeTitle: `${day.dayOfWeek}: ${recipe.title}`,
            });
          });
        }
      });
    });

    if (rawItems.length === 0) {
      showToast('Nenhuma refeição planejada ainda para gerar lista.');
      return;
    }

    const newShoppingItems: ShoppingItem[] = rawItems.map((item, idx) => ({
      id: `shop-plan-${Date.now()}-${idx}`,
      ingredient: item.name,
      quantity: item.amount,
      category: item.category,
      recipeTitle: item.recipeTitle,
      checked: false,
      addedAt: Date.now(),
    }));

    setShoppingList((prev) => consolidateIngredients([...prev, ...newShoppingItems]));
    showToast('🛒 Lista de compras gerada a partir do planejamento semanal!', 'success');
  };

  const addRecipeIngredientsToShopping = (recipe: Recipe, customIngredients?: Ingredient[]) => {
    const ingsToUse = customIngredients || recipe.ingredients;
    const newItems: ShoppingItem[] = ingsToUse.map((ing) => ({
      id: `shop-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      ingredient: ing.name,
      quantity: ing.amount,
      category: ing.category,
      recipeTitle: recipe.title,
      checked: false,
      addedAt: Date.now(),
    }));

    setShoppingList((prev) => consolidateIngredients([...prev, ...newItems]));
    showToast(`Ingredientes de "${recipe.title}" adicionados à lista de compras!`, 'success');
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const addShoppingItem = (name: string, quantity: string, category: ShoppingItem['category'] = 'Vegetais') => {
    if (!name.trim()) return;
    const newItem: ShoppingItem = {
      id: `item-${Date.now()}`,
      ingredient: name.trim(),
      quantity: quantity.trim() || '1 un',
      category,
      checked: false,
      addedAt: Date.now(),
    };
    setShoppingList((prev) => [newItem, ...prev]);
    showToast(`"${name}" adicionado à lista!`);
  };

  const deleteShoppingItem = (id: string) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCheckedShoppingItems = () => {
    setShoppingList((prev) => prev.filter((item) => !item.checked));
    showToast('Itens marcados removidos!');
  };

  const checkAllShoppingItems = () => {
    setShoppingList((prev) => prev.map((item) => ({ ...item, checked: true })));
    showToast('Todos os itens marcados!');
  };

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
    showToast(`Receita "${newRecipe.title}" cadastrada no catálogo!`);
  };

  const updateRecipe = (updated: Recipe) => {
    setRecipes((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
    showToast(`Receita "${updated.title}" atualizada com sucesso!`);
  };

  const deleteRecipe = (id: string) => {
    setRecipes((prev) => prev.filter((r) => r.id !== id));
    showToast('Receita removida do catálogo.');
  };

  const updateSubscriptionConfig = (newConfig: Partial<SubscriptionConfig>) => {
    setSubscriptionConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const resetAppData = () => {
    setRecipes(INITIAL_RECIPES);
    setUser(INITIAL_USER);
    setFavorites(['frango-cremoso', 'salmao-legumes', 'picanha-nobre']);
    setCollections(INITIAL_COLLECTIONS);
    showToast('Dados de demonstração restaurados!');
  };

  // Metrics for Admin Dashboard
  const adminMetrics: AdminMetrics = {
    totalUsers: 2450,
    premiumUsers: 840,
    totalRecipes: recipes.length,
    monthlyRevenue: 25116.00,
    mostViewedRecipes: [
      { title: 'Frango Cremoso com Ervas', views: 4320 },
      { title: 'Picanha Nobre com Manteiga de Ervas', views: 3890 },
      { title: 'Salmão Grelhado com Legumes', views: 3410 },
      { title: 'Omelete Mediterrânea', views: 2980 },
    ],
    mostPreparedRecipes: [
      { title: 'Frango Cremoso com Ervas', count: 1420 },
      { title: 'Omelete Mediterrânea', count: 1210 },
      { title: 'Salada Caesar com Peito Grelhado', count: 980 },
    ],
    cancellationsRate: 1.8,
  };

  const saveFoodScan = (scan: FoodScan) => {
    setFoodScans((prev) => {
      const filtered = prev.filter((s) => s.id !== scan.id);
      return [scan, ...filtered];
    });
    showToast('✨ Análise salva com sucesso no seu histórico!', 'success');
  };

  const deleteFoodScan = (id: string) => {
    setFoodScans((prev) => prev.filter((s) => s.id !== id));
    showToast('Análise removida do histórico.');
  };

  const clearFoodScans = () => {
    setFoodScans([]);
    showToast('Histórico do Scanner limpo com sucesso.');
  };

  const addScannedFoodToShopping = (scan: FoodScan) => {
    const ingredientsToAdd = (scan.visible_ingredients && scan.visible_ingredients.length > 0)
      ? scan.visible_ingredients
      : [scan.identified_food];

    const newItems: ShoppingItem[] = ingredientsToAdd.map((ingName, idx) => ({
      id: `shop-scan-${Date.now()}-${idx}`,
      ingredient: ingName,
      quantity: idx === 0 && scan.approx_portion ? scan.approx_portion : '1 porção',
      category: scan.category.includes('Carne') || scan.category.includes('Aves') || scan.category.includes('Peixe')
        ? 'Proteínas'
        : scan.category.includes('Vegeta') || scan.category.includes('Salada')
        ? 'Vegetais'
        : scan.category.includes('Laticíni')
        ? 'Laticínios'
        : 'Outros',
      recipeTitle: `Scan: ${scan.identified_food}`,
      checked: false,
      addedAt: Date.now(),
    }));

    setShoppingList((prev) => consolidateIngredients([...prev, ...newItems]));
    showToast(`🛒 ${ingredientsToAdd.length} ingrediente(s) adicionados à lista de compras!`, 'list');
  };

  const findMatchingRecipesForScan = (scan: FoodScan): Recipe[] => {
    const queryTokens = [
      ...scan.identified_food.toLowerCase().split(/\s+/),
      ...(scan.visible_ingredients || []).flatMap((i) => i.toLowerCase().split(/\s+/)),
      scan.category.toLowerCase(),
    ].filter((t) => t.length > 3 && !['com', 'para', 'molho', 'nobre', 'porção', 'fresco', 'fresca'].includes(t));

    const scored = recipes.map((recipe) => {
      let score = 0;
      const titleLower = recipe.title.toLowerCase();
      const descLower = (recipe.description || '').toLowerCase();
      const ingNames = recipe.ingredients.map((i) => i.name.toLowerCase()).join(' ');

      queryTokens.forEach((token) => {
        if (titleLower.includes(token)) score += 5;
        if (ingNames.includes(token)) score += 4;
        if (descLower.includes(token)) score += 2;
      });

      if (
        (scan.category.includes('Carne') && recipe.category === 'meat') ||
        (scan.category.includes('Aves') && recipe.category === 'poultry') ||
        (scan.category.includes('Peixe') && recipe.category === 'fish') ||
        (scan.category.includes('Vegeta') && recipe.category === 'salads') ||
        (scan.category.includes('Laticíni') && recipe.category === 'breakfast') ||
        (scan.category.includes('Sopa') && recipe.category === 'soups')
      ) {
        score += 3;
      }

      return { recipe, score };
    });

    const matches = scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.recipe);

    if (matches.length === 0) {
      return recipes.slice(0, 4);
    }
    return matches.slice(0, 6);
  };

  const sendScanToChef = (scan: FoodScan) => {
    const prompt = `Analisei no Scanner o alimento "${scan.identified_food}". Quais receitas cetogênicas você sugere preparar com ingredientes semelhantes?`;
    setChefScanContext(scan);
    setChefInitialPrompt(prompt);
    setShowChefModal(true);
  };

  // Persist health tips
  useEffect(() => {
    localStorage.setItem('ketonobre_health_tips', JSON.stringify(healthTips));
  }, [healthTips]);

  useEffect(() => {
    localStorage.setItem('ketonobre_saved_tips', JSON.stringify(savedTips));
  }, [savedTips]);

  useEffect(() => {
    localStorage.setItem('ketonobre_viewed_tips', JSON.stringify(viewedTips));
  }, [viewedTips]);

  // Check URL on mount for /dicas/[slug]
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/dicas/')) {
        const slug = path.replace('/dicas/', '').replace(/\/$/, '');
        const found = healthTips.find((t) => t.slug === slug);
        if (found) {
          setActiveTip(found);
          setActiveTab('tips');
        }
      }

      const handlePopState = () => {
        const p = window.location.pathname;
        if (p.startsWith('/dicas/')) {
          const s = p.replace('/dicas/', '').replace(/\/$/, '');
          const found = healthTips.find((t) => t.slug === s);
          if (found) {
            setActiveTip(found);
            setActiveTab('tips');
          }
        } else if (activeTip) {
          setActiveTip(null);
        }
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, [healthTips]);

  const openTipDetail = (tip: HealthTip) => {
    setActiveTip(tip);
    markTipViewed(tip.id);
    if (typeof window !== 'undefined') {
      window.history.pushState({ tipSlug: tip.slug }, '', `/dicas/${tip.slug}`);
    }
  };

  const closeTipDetail = () => {
    setActiveTip(null);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/');
    }
  };

  const markTipViewed = (tipId: string) => {
    setViewedTips((prev) => {
      if (!prev.includes(tipId)) {
        return [tipId, ...prev];
      }
      return prev;
    });
    setHealthTips((prev) =>
      prev.map((t) => (t.id === tipId ? { ...t, views_count: (t.views_count || 0) + 1 } : t))
    );
  };

  const toggleSavedTip = (tipId: string) => {
    setSavedTips((prev) => {
      const exists = prev.includes(tipId);
      if (exists) {
        showToast('Dica removida dos seus salvos', 'info');
        return prev.filter((id) => id !== tipId);
      } else {
        showToast('Dica salva com sucesso!', 'favorite');
        return [tipId, ...prev];
      }
    });
  };

  const addHealthTip = (tip: HealthTip) => {
    setHealthTips((prev) => [tip, ...prev]);
    showToast(`Dica "${tip.title}" criada com sucesso!`, 'success');
  };

  const updateHealthTip = (updated: HealthTip) => {
    setHealthTips((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    if (activeTip?.id === updated.id) {
      setActiveTip(updated);
    }
    showToast(`Dica "${updated.title}" atualizada com sucesso!`, 'success');
  };

  const deleteHealthTip = (id: string) => {
    setHealthTips((prev) => prev.filter((t) => t.id !== id));
    if (activeTip?.id === id) {
      setActiveTip(null);
    }
    showToast('Dica de saúde removida com sucesso.', 'info');
  };

  const toggleFeatureHealthTip = (id: string) => {
    setHealthTips((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const next = !t.is_featured;
          showToast(next ? 'Dica destacada na página principal!' : 'Dica removida dos destaques.');
          return { ...t, is_featured: next };
        }
        return t;
      })
    );
  };

  const sendTipToChef = (tip: HealthTip, customQuestion?: string) => {
    const question =
      customQuestion ||
      `Sobre o tema "${tip.title}": como aplicar essas orientações práticas na minha rotina e alimentação cetogênica?`;
    const prompt = `[Dica de Saúde Educativa: "${tip.title}"]\n${question}`;
    setChefInitialPrompt(prompt);
    setShowChefModal(true);
  };

  const findRecipesForTip = (tip: HealthTip): Recipe[] => {
    const query = tip.relatedRecipeQuery || tip.category.toLowerCase();
    const tokens = query.toLowerCase().split(/\s+/).filter((t) => t.length > 2);
    const scored = recipes.map((recipe) => {
      let score = 0;
      const titleL = recipe.title.toLowerCase();
      const catL = (recipe.categoryName || '').toLowerCase();
      const descL = (recipe.description || '').toLowerCase();
      const ingL = recipe.ingredients.map((i) => i.name.toLowerCase()).join(' ');

      tokens.forEach((t) => {
        if (titleL.includes(t)) score += 4;
        if (ingL.includes(t)) score += 3;
        if (catL.includes(t)) score += 2;
        if (descL.includes(t)) score += 1;
      });

      return { recipe, score };
    });

    const matches = scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.recipe);

    return matches.length > 0 ? matches.slice(0, 4) : recipes.slice(0, 4);
  };

  // Hydration Methods & Today Computation
  const todayHydration: TodayHydrationSummary = useMemo(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    const logsToday = hydrationLogs.filter((l) => l.date === todayStr);
    const consumedMl = logsToday.reduce((sum, l) => sum + l.amount_ml, 0);
    const targetMl = hydrationProfile.daily_target_ml || 2650;
    const remainingMl = Math.max(0, targetMl - consumedMl);
    const percent = targetMl > 0 ? Math.min(100, Math.round((consumedMl / targetMl) * 100)) : 0;
    const bottleMl = hydrationProfile.bottle_ml || 500;
    const bottlesTarget = Math.round(targetMl / bottleMl);
    const bottlesConsumed = Math.floor(consumedMl / bottleMl);

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const dayNamePt = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][now.getDay()] as DayOfWeekPt;
    const currentSchedule = hydrationSchedules.find((s) => s.day_of_week === dayNamePt) || hydrationSchedules[0];

    let nextIntake = currentSchedule?.planned_intakes.find((p) => {
      const pMin = timeToMinutes(p.time);
      return pMin >= currentMinutes && !p.completed;
    });

    if (!nextIntake && currentSchedule?.planned_intakes.length > 0) {
      nextIntake = currentSchedule.planned_intakes.find((p) => !p.completed) || currentSchedule.planned_intakes[currentSchedule.planned_intakes.length - 1];
    }

    return {
      targetMl,
      consumedMl,
      remainingMl,
      percent,
      bottlesTarget,
      bottlesConsumed,
      bottleMl,
      nextIntake,
      logsToday,
    };
  }, [hydrationLogs, hydrationProfile, hydrationSchedules]);

  const updateHydrationProfile = (newProfileData: Partial<HydrationProfile>) => {
    const updated: HydrationProfile = {
      ...hydrationProfile,
      ...newProfileData,
      updated_at: new Date().toISOString(),
    };

    const calc = calculateHydration({
      weight_kg: updated.weight_kg,
      height_cm: updated.height_cm,
      age: updated.age,
      sex: updated.sex,
      activity_level: updated.activity_level,
      climate: updated.climate,
      bottle_ml: updated.bottle_ml,
      wake_time: updated.wake_time,
      sleep_time: updated.sleep_time,
      has_health_restriction: updated.has_health_restriction,
    });

    updated.daily_target_ml = calc.beverage_target_ml;
    setHydrationProfile(updated);

    setHydrationSchedules((prev) =>
      prev.map((sch) => {
        if (sch.is_customized) return sch;
        const dayCalc = calculateHydration({
          weight_kg: updated.weight_kg,
          height_cm: updated.height_cm,
          age: updated.age,
          sex: updated.sex,
          activity_level: sch.activity_level,
          climate: sch.climate,
          bottle_ml: updated.bottle_ml,
          wake_time: sch.wake_time || updated.wake_time,
          sleep_time: sch.sleep_time || updated.sleep_time,
          has_health_restriction: updated.has_health_restriction,
        });
        return {
          ...sch,
          target_ml: dayCalc.beverage_target_ml,
          bottle_ml: updated.bottle_ml,
          planned_intakes: generatePlannedIntakes(dayCalc.suggested_times, dayCalc.bottle_ml, dayCalc.additional_ml),
          updated_at: new Date().toISOString(),
        };
      })
    );

    showToast('Perfil de hidratação atualizado com sucesso!', 'success');
  };

  const updateDaySchedule = (day: DayOfWeekPt, updates: Partial<HydrationDaySchedule>) => {
    setHydrationSchedules((prev) =>
      prev.map((sch) => {
        if (sch.day_of_week !== day) return sch;

        const merged: HydrationDaySchedule = {
          ...sch,
          ...updates,
          is_customized: true,
          updated_at: new Date().toISOString(),
        };

        const dayCalc = calculateHydration({
          weight_kg: hydrationProfile.weight_kg,
          height_cm: hydrationProfile.height_cm,
          age: hydrationProfile.age,
          sex: hydrationProfile.sex,
          activity_level: merged.activity_level,
          climate: merged.climate,
          bottle_ml: merged.bottle_ml || hydrationProfile.bottle_ml,
          wake_time: merged.wake_time || hydrationProfile.wake_time,
          sleep_time: merged.sleep_time || hydrationProfile.sleep_time,
          has_health_restriction: hydrationProfile.has_health_restriction,
        });

        merged.target_ml = dayCalc.beverage_target_ml;
        merged.planned_intakes = generatePlannedIntakes(dayCalc.suggested_times, dayCalc.bottle_ml, dayCalc.additional_ml);

        return merged;
      })
    );
    showToast(`Programação de ${day} atualizada com sucesso!`, 'success');
  };

  const logWaterIntake = (amountMl: number, containerLabel?: string, timeStr?: string) => {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const computedTime = timeStr || `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newLog: HydrationLog = {
      id: `log-${Date.now()}`,
      user_id: user.id,
      date: dateStr,
      time: computedTime,
      amount_ml: amountMl,
      container_ml: amountMl,
      container_label: containerLabel || 'Garrafa Principal',
      created_at: now.toISOString(),
    };

    setHydrationLogs((prev) => [newLog, ...prev]);

    const dayNamePt = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][now.getDay()] as DayOfWeekPt;
    setHydrationSchedules((prev) =>
      prev.map((sch) => {
        if (sch.day_of_week !== dayNamePt) return sch;
        let marked = false;
        const updatedIntakes = sch.planned_intakes.map((intake) => {
          if (!intake.completed && !marked) {
            marked = true;
            return { ...intake, completed: true, completed_at: computedTime };
          }
          return intake;
        });
        return { ...sch, planned_intakes: updatedIntakes };
      })
    );

    showToast(`+${amountMl.toLocaleString('pt-BR')} ml registrados! Hidratação em dia. 💧`, 'success');
  };

  const togglePlannedIntake = (day: DayOfWeekPt, intakeId: string) => {
    let nowCompleted = false;
    let intakeAmount = 500;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    setHydrationSchedules((prev) =>
      prev.map((sch) => {
        if (sch.day_of_week !== day) return sch;
        const updated = sch.planned_intakes.map((intake) => {
          if (intake.id === intakeId) {
            nowCompleted = !intake.completed;
            intakeAmount = intake.amount_ml;
            return {
              ...intake,
              completed: nowCompleted,
              completed_at: nowCompleted ? timeStr : undefined,
            };
          }
          return intake;
        });
        return { ...sch, planned_intakes: updated };
      })
    );

    const dayNamePt = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][now.getDay()] as DayOfWeekPt;
    if (day === dayNamePt && nowCompleted) {
      logWaterIntake(intakeAmount, 'Tomada Programada', timeStr);
    }
  };

  const deleteHydrationLog = (logId: string) => {
    setHydrationLogs((prev) => prev.filter((l) => l.id !== logId));
    showToast('Registro de água removido.', 'info');
  };

  const resetHydrationDay = (dateStr?: string) => {
    const targetDate = dateStr || new Date().toISOString().split('T')[0];
    setHydrationLogs((prev) => prev.filter((l) => l.date !== targetDate));
    const dayNamePt = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][new Date().getDay()] as DayOfWeekPt;
    setHydrationSchedules((prev) =>
      prev.map((sch) => {
        if (sch.day_of_week !== dayNamePt) return sch;
        return {
          ...sch,
          planned_intakes: sch.planned_intakes.map((i) => ({ ...i, completed: false, completed_at: undefined })),
        };
      })
    );
    showToast('Registros do dia redefinidos.', 'info');
  };

  const setRemindersEnabled = async (enabled: boolean): Promise<boolean> => {
    if (enabled && typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          setHydrationRemindersEnabled(true);
          showToast('Lembretes inteligentes ativados no navegador! 💧', 'success');
          return true;
        } else {
          setHydrationRemindersEnabled(false);
          showToast('Permissão de notificações não concedida. Usando lembretes internos no app.', 'info');
          return false;
        }
      } catch (e) {
        setHydrationRemindersEnabled(enabled);
        return false;
      }
    } else {
      setHydrationRemindersEnabled(enabled);
      showToast(enabled ? 'Lembretes internos ativados.' : 'Lembretes desativados.', 'info');
      return true;
    }
  };

  const recalculateSchedules = () => {
    const new7Days = generate7DaySchedule(hydrationProfile);
    setHydrationSchedules(new7Days);
    showToast('Plano de 7 dias recalculado com sucesso!', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        splashFinished,
        setSplashFinished,
        onboardingFinished,
        setOnboardingFinished,
        user,
        setUser,
        togglePremium,
        recipes,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        activeDetailRecipe,
        openRecipeDetail,
        closeRecipeDetail,
        activeCookingRecipe,
        startCooking,
        finishCooking,
        exitCooking,
        cookingHistory,
        addCookingHistory,
        favorites,
        toggleFavorite,
        collections,
        createCollection,
        addRecipeToCollection,
        removeRecipeFromCollection,
        mealPlan,
        setMealPlan,
        updateMealPlanSlot,
        generateShoppingListFromPlan,
        autoFillWeekPlan,
        clearWeekPlan,
        swapPlanMeals,
        shoppingList,
        toggleShoppingItem,
        addShoppingItem,
        addRecipeIngredientsToShopping,
        deleteShoppingItem,
        clearCheckedShoppingItems,
        checkAllShoppingItems,
        showPremiumModal,
        setShowPremiumModal,
        showAdminPanel,
        setShowAdminPanel,
        showChefModal,
        setShowChefModal,
        showAuthModal,
        setShowAuthModal,
        subscriptionConfig,
        setSubscriptionConfig,
        updateSubscriptionConfig,
        adminMetrics,
        resetAppData,
        searchQuery,
        setSearchQuery,
        selectedExploreFilter,
        setSelectedExploreFilter,
        darkMode,
        setDarkMode,
        toggleDarkMode,
        toast,
        showToast,
        foodScans,
        saveFoodScan,
        deleteFoodScan,
        clearFoodScans,
        sendScanToChef,
        addScannedFoodToShopping,
        findMatchingRecipesForScan,
        chefInitialPrompt,
        setChefInitialPrompt,
        chefScanContext,
        setChefScanContext,
        healthTips,
        activeTip,
        setActiveTip,
        openTipDetail,
        closeTipDetail,
        savedTips,
        toggleSavedTip,
        viewedTips,
        markTipViewed,
        addHealthTip,
        updateHealthTip,
        deleteHealthTip,
        toggleFeatureHealthTip,
        sendTipToChef,
        findRecipesForTip,
        hydrationProfile,
        hydrationSchedules,
        hydrationLogs,
        hydrationContainers,
        hydrationRemindersEnabled,
        todayHydration,
        updateHydrationProfile,
        updateDaySchedule,
        logWaterIntake,
        togglePlannedIntake,
        deleteHydrationLog,
        resetHydrationDay,
        setRemindersEnabled,
        recalculateSchedules,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
