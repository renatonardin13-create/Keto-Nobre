import { Ingredient } from '../types';
import { parseQuantity } from './shopping';

export function calculateScaledIngredientAmount(
  originalAmount: string,
  baseServings: number,
  targetServings: number
): string {
  if (baseServings <= 0 || targetServings <= 0 || baseServings === targetServings) {
    return originalAmount;
  }

  const factor = targetServings / baseServings;
  const parsed = parseQuantity(originalAmount);

  if (!parsed.isNumeric) {
    return originalAmount;
  }

  const scaledVal = parsed.value * factor;
  const u = parsed.unit.toLowerCase();

  // Convert grams to kg if >= 1000g
  if (u === 'g') {
    if (scaledVal >= 1000) {
      const kg = (scaledVal / 1000).toFixed(1).replace('.0', '');
      return `${kg.replace('.', ',')}kg`;
    }
    return `${Math.round(scaledVal)}g`;
  }

  if (u === 'kg') {
    const val = scaledVal.toFixed(2).replace('.00', '').replace(/0$/, '');
    return `${val.replace('.', ',')}kg`;
  }

  // Milliliters to liters if >= 1000ml
  if (u === 'ml') {
    if (scaledVal >= 1000) {
      const l = (scaledVal / 1000).toFixed(1).replace('.0', '');
      return `${l.replace('.', ',')}L`;
    }
    return `${Math.round(scaledVal)}ml`;
  }

  // Units, spoons, cloves, etc.
  const cleanNum = Number.isInteger(scaledVal)
    ? scaledVal.toString()
    : scaledVal.toFixed(1).replace('.0', '').replace('.', ',');

  if (u) {
    return `${cleanNum} ${parsed.unit}`;
  }
  return cleanNum;
}

export function scaleIngredients(
  ingredients: Ingredient[],
  baseServings: number,
  targetServings: number
): Ingredient[] {
  return ingredients.map((ing) => ({
    ...ing,
    amount: calculateScaledIngredientAmount(ing.amount, baseServings, targetServings),
  }));
}
