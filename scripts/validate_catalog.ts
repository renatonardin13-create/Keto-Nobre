import fs from 'fs';
import path from 'path';

interface RecipeCheck {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  prepTime: number;
  cookTime: number;
  nutrition: {
    calories: number;
    protein: number;
    netCarbs: number;
    fat: number;
    fiber: number;
  };
  ingredients: any[];
  steps: any[];
  chefTip?: string;
}

const catalogPath = path.resolve(process.cwd(), 'public/catalog_500.json');
if (!fs.existsSync(catalogPath)) {
  console.error('Catalog file not found!');
  process.exit(1);
}

const rawData = fs.readFileSync(catalogPath, 'utf-8');
const catalog = JSON.parse(rawData);

console.log('====================================');
console.log('AUDITORIA OFICIAL DO CATÁLOGO KETONOBRE');
console.log('====================================');

let total = catalog.length;
let incomplete = 0;
let duplicateSlugs = 0;
let duplicateTitles = 0;

const seenSlugs = new Set<string>();
const seenTitles = new Set<string>();

catalog.forEach((r: any, idx: number) => {
  // Check completeness
  const hasBasic = r.id && r.slug && r.title && r.category && r.description;
  const hasNutr = r.calories !== undefined && r.protein_g !== undefined && r.net_carbs_g !== undefined;
  const hasIng = Array.isArray(r.ingredients) && r.ingredients.length >= 2;
  const hasSteps = Array.isArray(r.steps) && r.steps.length >= 2;
  const hasTip = !!r.chef_tip;

  if (!hasBasic || !hasNutr || !hasIng || !hasSteps || !hasTip) {
    console.warn(`[INCOMPLETA] Receita #${idx + 1} (${r.id || 'sem id'}): campos faltantes`);
    incomplete++;
  }

  // Check slug duplication
  if (seenSlugs.has(r.slug)) {
    console.warn(`[SLUG DUPLICADO] ${r.slug}`);
    duplicateSlugs++;
  }
  seenSlugs.add(r.slug);

  // Check title duplication
  const normTitle = r.title.toLowerCase().trim();
  if (seenTitles.has(normTitle)) {
    console.warn(`[TÍTULO DUPLICADO] ${r.title}`);
    duplicateTitles++;
  }
  seenTitles.add(normTitle);
});

console.log(`Total: ${total}`);
console.log(`Incompletas: ${incomplete}`);
console.log(`Slugs duplicados: ${duplicateSlugs}`);
console.log(`Duplicidades: ${duplicateTitles}`);

if (total === 500 && incomplete === 0 && duplicateSlugs === 0 && duplicateTitles === 0) {
  console.log('\n✓ VALIDAÇÃO 100% APROVADA: O catálogo atende a todos os critérios com perfeição!');
} else {
  console.error('\n✗ FALHA NA VALIDAÇÃO');
  process.exit(1);
}
