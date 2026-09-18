export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type CategoryId =
  | 'all'
  | 'breakfast'
  | 'poultry'
  | 'beef'
  | 'meat'
  | 'pork'
  | 'fish'
  | 'salads'
  | 'soups'
  | 'snacks'
  | 'desserts'
  | 'dessert'
  | 'beverages'
  | 'drinks'
  | 'breads'
  | 'sauces'
  | 'lunch'
  | 'dinner'
  | 'quick';

export type Difficulty = 'Fácil' | 'Médio' | 'Difícil';

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  quantity?: number;
  unit?: string;
  optional?: boolean;
  category: 'Proteínas' | 'Carnes' | 'Vegetais' | 'Laticínios' | 'Despensa' | 'Temperos' | 'Outros';
}

export interface RecipeStep {
  stepNumber: number;
  number?: number;
  title?: string;
  instruction: string;
  description?: string;
  timerSeconds?: number;
  timer_seconds?: number;
  tip?: string;
  chef_tip?: string;
  image?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number; // in grams
  netCarbs: number; // in grams
  fat: number; // in grams
  fiber: number; // in grams
  carbs?: number; // total carbs in grams
  vitC?: number; // mg
  iron?: number; // mg
  magnesium?: number; // mg
  b12?: number; // mcg
  vitD?: number; // IU
  zinc?: number; // mg
  potassium?: number; // mg
  calcium?: number; // mg
  omega3?: number; // g
}

export interface Recipe {
  id: string;
  slug?: string;
  title: string;
  short_description?: string;
  description: string;
  image: string;
  cover_image?: string;
  category: CategoryId;
  subcategory?: string;
  categoryName: string;
  difficulty: Difficulty;
  prepTime: number; // minutes
  prep_time_minutes?: number;
  cookTime: number; // minutes
  cook_time_minutes?: number;
  total_time_minutes?: number;
  servings: number;
  rating: number;
  reviewCount: number;
  isPremium: boolean;
  is_premium?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  tags?: string[];
  nutrition: NutritionInfo;
  calories?: number;
  protein_g?: number;
  carbs_g?: number;
  net_carbs_g?: number;
  fat_g?: number;
  fiber_g?: number;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  videoUrl?: string;
  createdAt?: string;
  created_at?: string;
  updated_at?: string;
  chefTip?: string;
  chef_tip?: string;
}

export type NavigationTab =
  | 'home'
  | 'explore'
  | 'scanner'
  | 'planner'
  | 'shopping'
  | 'saved'
  | 'favorites'
  | 'chef'
  | 'tips'
  | 'nutrition'
  | 'workouts'
  | 'hydration'
  | 'profile'
  | 'settings'
  | 'premium'
  | 'admin';

export * from './hydration';

export type KetoStatus = 'compatible' | 'moderate' | 'incompatible' | 'not_recommended';

export type HealthTipCategory =
  | 'Todos'
  | 'Alimentação'
  | 'Bem-estar'
  | 'Exercícios'
  | 'Sono'
  | 'Saúde Mental'
  | 'Imunidade'
  | 'Hidratação'
  | 'Hábitos'
  | 'Nutrição';

export type HealthTipStatus = 'draft' | 'published' | 'archived';

export interface HealthTipSource {
  title: string;
  url?: string;
}

export interface HealthTip {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: HealthTipCategory;
  tags: string[];
  cover_image: string;
  reading_time: number;
  is_featured: boolean;
  status: HealthTipStatus;
  created_at: string;
  updated_at: string;
  sources?: HealthTipSource[];
  relatedRecipeQuery?: string;
  actionType?: 'recipes' | 'scanner' | 'hydration' | 'chef' | 'none';
  actionLabel?: string;
  views_count?: number;
}

export interface FoodScan {
  id: string;
  user_id: string;
  image_url: string;
  identified_food: string;
  category: string;
  approx_portion?: string;
  visible_ingredients?: string[];
  calories: number;
  protein_g: number;
  carbs_g: number;
  net_carbs_g: number;
  fat_g: number;
  fiber_g: number;
  keto_status: KetoStatus;
  keto_analysis?: string;
  is_packaged?: boolean;
  confidence: number;
  created_at: string;
}

export interface MealPlanDay {
  dayOfWeek: 'Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sáb' | 'Dom';
  dayName: string;
  breakfast?: Recipe;
  lunch?: Recipe;
  dinner?: Recipe;
  dessert?: Recipe;
}

export interface PreparedHistoryItem {
  id: string;
  recipeId: string;
  recipeTitle?: string;
  recipeImage?: string;
  categoryName?: string;
  cookedAt?: string;
  preparedAt?: string;
  count?: number;
  timesPrepared?: number;
}

export interface SmartPlanOptions {
  goal?: 'variety' | 'quick' | 'budget' | 'protein' | 'favorites';
  preference?: string;
  maxTime?: number | string | '15' | '30' | 'all';
}

export interface ShoppingItem {
  id: string;
  ingredient: string;
  quantity: string;
  category: 'Carnes' | 'Proteínas' | 'Vegetais' | 'Laticínios' | 'Despensa' | 'Temperos' | 'Outros';
  recipeTitle?: string;
  checked: boolean;
  addedAt: number;
}

export interface RecipeCollection {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  recipeIds: string[];
}

export interface UserPreferences {
  dietType: 'Keto Estrito' | 'Keto Moderado' | 'Low Carb Flexível';
  allergies: string[];
  dislikedIngredients: string[];
  favoriteCategories: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isPremium: boolean;
  isAdmin?: boolean;
  role?: 'user' | 'admin';
  streakDays: number;
  preparedCount: number;
  preferences: UserPreferences;
}

export interface AdminMetrics {
  totalUsers: number;
  premiumUsers: number;
  totalRecipes: number;
  monthlyRevenue: number;
  mostViewedRecipes: { title: string; views: number }[];
  mostPreparedRecipes: { title: string; count: number }[];
  cancellationsRate: number;
}

export interface SubscriptionConfig {
  monthlyPrice: number;
  annualPrice: number;
  discountPercentage: number;
  trialDays: number;
}
