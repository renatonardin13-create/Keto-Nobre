export interface RawIngredient {
  name: string;
  qty: number;
  unit: string;
  cat: 'proteínas' | 'vegetais' | 'laticínios' | 'despensa' | 'temperos';
  opt?: boolean;
}

export interface RawStep {
  title: string;
  desc: string;
  timer?: number | null;
  tip?: string;
}

export interface RawRecipeInput {
  title: string;
  shortDesc: string;
  desc: string;
  category: string;
  subcategory: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fiber: number;
  fat: number;
  isPremium: boolean;
  tags: string[];
  image: string;
  ingredients: RawIngredient[];
  steps: RawStep[];
  chefTip: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function buildOfficialRecipe(input: RawRecipeInput, index: number) {
  const slug = slugify(input.title);
  const netCarbs = Math.max(0, input.carbs - input.fiber);
  const totalTime = input.prepTime + input.cookTime;

  return {
    id: `kn-${input.category}-${String(index + 1).padStart(3, '0')}`,
    slug,
    title: input.title,
    short_description: input.shortDesc,
    description: input.desc,
    category: input.category,
    subcategory: input.subcategory,
    difficulty: input.difficulty,
    prep_time_minutes: input.prepTime,
    cook_time_minutes: input.cookTime,
    total_time_minutes: totalTime,
    servings: input.servings,
    calories: input.calories,
    protein_g: input.protein,
    carbs_g: input.carbs,
    net_carbs_g: netCarbs,
    fat_g: input.fat,
    fiber_g: input.fiber,
    is_premium: input.isPremium,
    tags: input.tags,
    cover_image: input.image,
    ingredients: input.ingredients.map((ing) => ({
      name: ing.name,
      quantity: ing.qty,
      unit: ing.unit,
      optional: !!ing.opt,
      category: ing.cat,
    })),
    steps: input.steps.map((st, sIdx) => ({
      step_number: sIdx + 1,
      title: st.title,
      description: st.desc,
      timer_seconds: st.timer !== undefined ? st.timer : null,
      tip: st.tip,
    })),
    chef_tip: input.chefTip,
    source_type: 'original' as const,
    source_reference: 'Laboratório Gastronômico KetoNobre',
    status: 'published' as const,
    created_at: '2026-03-01T10:00:00.000Z',
    updated_at: '2026-03-18T10:00:00.000Z',
  };
}
