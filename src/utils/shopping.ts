import { ShoppingItem, Recipe } from '../types';

interface ParsedQuantity {
  value: number;
  unit: string;
  isNumeric: boolean;
  raw: string;
}

export function parseQuantity(raw: string): ParsedQuantity {
  const text = (raw || '').trim().toLowerCase();
  
  // Match patterns like "500g", "1.5kg", "200ml", "1 l", "2 dentes", "3 colheres", "4 unidades"
  const match = text.match(/^([\d.,]+)\s*([a-zA-Zçãéíóú/]+.*)?$/);
  if (!match) {
    return { value: 0, unit: text, isNumeric: false, raw: raw || '' };
  }

  const num = parseFloat(match[1].replace(',', '.'));
  if (isNaN(num)) {
    return { value: 0, unit: text, isNumeric: false, raw: raw || '' };
  }

  const unit = (match[2] || '').trim();
  return { value: num, unit, isNumeric: true, raw };
}

export function formatMergedQuantity(q1: ParsedQuantity, q2: ParsedQuantity): string {
  if (!q1.isNumeric || !q2.isNumeric) {
    if (q1.raw === q2.raw) return q1.raw;
    return `${q1.raw} + ${q2.raw}`;
  }

  const u1 = q1.unit;
  const u2 = q2.unit;

  // Grams / Kilograms
  let g1 = u1 === 'kg' ? q1.value * 1000 : u1 === 'g' ? q1.value : null;
  let g2 = u2 === 'kg' ? q2.value * 1000 : u2 === 'g' ? q2.value : null;

  if (g1 !== null && g2 !== null) {
    const totalG = g1 + g2;
    if (totalG >= 1000) {
      const kgVal = (totalG / 1000).toFixed(1).replace('.0', '');
      return `${kgVal.replace('.', ',')}kg`;
    }
    return `${Math.round(totalG)}g`;
  }

  // Milliliters / Liters
  let ml1 = u1 === 'l' || u1 === 'litro' || u1 === 'litros' ? q1.value * 1000 : u1 === 'ml' ? q1.value : null;
  let ml2 = u2 === 'l' || u2 === 'litro' || u2 === 'litros' ? q2.value * 1000 : u2 === 'ml' ? q2.value : null;

  if (ml1 !== null && ml2 !== null) {
    const totalMl = ml1 + ml2;
    if (totalMl >= 1000) {
      const lVal = (totalMl / 1000).toFixed(1).replace('.0', '');
      return `${lVal.replace('.', ',')}L`;
    }
    return `${Math.round(totalMl)}ml`;
  }

  // Same exact unit (e.g. colheres, dentes, unidades, xícaras)
  if (u1 && u1 === u2) {
    const total = q1.value + q2.value;
    const cleanTotal = Number.isInteger(total) ? total.toString() : total.toFixed(1).replace('.0', '').replace('.', ',');
    return `${cleanTotal} ${u1}`;
  }

  return `${q1.raw} + ${q2.raw}`;
}

export type ConsolidateInput =
  | { name: string; amount: string; category: ShoppingItem['category']; recipeTitle?: string; checked?: boolean }
  | ShoppingItem;

export function consolidateIngredients(items: ConsolidateInput[]): ShoppingItem[] {
  const map = new Map<string, {
    ingredient: string;
    parsed: ParsedQuantity;
    category: ShoppingItem['category'];
    recipeTitles: Set<string>;
    checked: boolean;
  }>();

  items.forEach((item) => {
    const name = 'ingredient' in item ? item.ingredient : item.name;
    const amount = 'quantity' in item ? item.quantity : item.amount;
    const isChecked = item.checked || false;

    // Normalize key by stripping whitespace and lowercasing
    const key = name.toLowerCase().trim().replace(/\s+/g, ' ');
    const parsed = parseQuantity(amount);

    if (map.has(key)) {
      const existing = map.get(key)!;
      const mergedStr = formatMergedQuantity(existing.parsed, parsed);
      existing.parsed = parseQuantity(mergedStr);
      if (item.recipeTitle) existing.recipeTitles.add(item.recipeTitle);
      if (isChecked) existing.checked = true;
    } else {
      const titles = new Set<string>();
      if (item.recipeTitle) titles.add(item.recipeTitle);
      map.set(key, {
        ingredient: name,
        parsed,
        category: item.category,
        recipeTitles: titles,
        checked: isChecked,
      });
    }
  });

  const result: ShoppingItem[] = [];
  let index = 0;
  map.forEach((value) => {
    result.push({
      id: `consolidated-${Date.now()}-${index++}`,
      ingredient: value.ingredient,
      quantity: value.parsed.raw,
      category: value.category,
      recipeTitle: Array.from(value.recipeTitles).join(', '),
      checked: value.checked,
      addedAt: Date.now(),
    });
  });

  return result;
}
