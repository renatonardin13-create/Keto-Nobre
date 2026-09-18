import React, { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Clock,
  Flame,
  ChefHat,
  Plus,
  Minus,
  Check,
  CalendarPlus,
  Share2,
  Sparkles,
  Award,
  X
} from 'lucide-react';
import { Recipe } from '../../types';
import { useApp } from '../../context/AppContext';
import { scaleIngredients } from '../../utils/portions';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose }) => {
  const {
    favorites,
    toggleFavorite,
    startCooking,
    addRecipeIngredientsToShopping,
    updateMealPlanSlot,
    showToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'ingredients' | 'steps' | 'nutrition'>('ingredients');
  const [servingsMultiplier, setServingsMultiplier] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [showPlanPicker, setShowPlanPicker] = useState<boolean>(false);

  const isFav = favorites.includes(recipe.id);

  const currentServings = recipe.servings * servingsMultiplier;
  const currentIngredients = scaleIngredients(recipe.ingredients, recipe.servings, currentServings);

  const toggleCheck = (id: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleStartCooking = () => {
    onClose();
    startCooking(recipe);
  };

  const handleShare = async () => {
    const shareText = `Confira essa receita cetogênica deliciosa no KetoNobre: ${recipe.title} (${recipe.nutrition.netCarbs}g carbo líquido)`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        showToast('Link da receita copiado!');
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Link copiado para a área de transferência!');
    }
  };

  const handleAddToPlan = (day: string, slot: 'breakfast' | 'lunch' | 'dinner' | 'dessert') => {
    updateMealPlanSlot(day, slot, recipe);
    setShowPlanPicker(false);
  };

  return (
    <div
      id="recipe-detail-view"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto select-none"
    >
      <div className="relative w-full max-w-4xl bg-[#071A0E] text-white md:rounded-3xl md:border md:border-[#1B472C] md:shadow-2xl overflow-hidden min-h-screen md:min-h-0 md:max-h-[90vh] flex flex-col md:flex-row">
        {/* LEFT COLUMN: HERO IMAGE & QUICK STATS (Desktop Split Layout) */}
        <div className="relative md:w-5/12 h-72 sm:h-80 md:h-auto overflow-hidden flex flex-col justify-between bg-[#082817]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A0E] via-[#071A0E]/35 to-black/60 md:bg-gradient-to-t md:from-[#071A0E] md:via-transparent md:to-black/60" />

          {/* Top Floating Controls */}
          <div className="relative z-10 p-4 flex items-center justify-between">
            <button
              id="detail-back-btn"
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#082817]/80 backdrop-blur-md border border-[#1B472C] text-white hover:bg-[#123D24] active:scale-95 transition-all shadow-md"
              aria-label="Voltar"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-[#082817]/80 backdrop-blur-md border border-[#1B472C] text-white hover:text-[#63B532] active:scale-95 transition-all shadow-md"
                aria-label="Compartilhar"
              >
                <Share2 size={16} />
              </button>

              <button
                id="detail-favorite-btn"
                onClick={() => toggleFavorite(recipe.id)}
                className="p-2.5 rounded-full bg-[#082817]/80 backdrop-blur-md border border-[#1B472C] text-white active:scale-125 transition-transform shadow-md"
                aria-label="Favoritar"
              >
                <Heart
                  size={18}
                  className={isFav ? 'text-[#63B532] fill-[#63B532]' : 'text-white'}
                />
              </button>
            </div>
          </div>

          {/* Bottom Info on Left (Desktop) */}
          <div className="relative z-10 p-4 sm:p-6 space-y-2 mt-auto">
            <div className="flex items-center gap-2">
              {recipe.reviewCount > 0 && (
                <div className="flex items-center gap-1.5 bg-black/60 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  <span className="text-xs font-bold text-amber-400">
                    ⭐ {recipe.rating}
                  </span>
                  <span className="text-xs text-[#8EA092] font-medium">
                    ({recipe.reviewCount} avaliações)
                  </span>
                </div>
              )}
              {recipe.isPremium && (
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-amber-500 text-black shadow-md">
                  VIP
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-white font-display leading-tight">
              {recipe.title}
            </h1>

            {/* Hidden on mobile, shown on desktop: Start cooking CTA in left column */}
            <div className="hidden md:block pt-3">
              <button
                onClick={handleStartCooking}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#63B532] hover:bg-[#529e28] active:scale-95 text-[#082817] font-extrabold text-sm shadow-xl shadow-[#63B532]/30 flex items-center justify-center gap-2 transition-all"
              >
                <ChefHat size={18} />
                <span>Modo Passo a Passo</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TABS, INGREDIENTS WITH SCALING, STEPS, NUTRITION */}
        <div className="md:w-7/12 flex-1 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
            <div className="text-center">
              <span className="text-[10px] text-[#8EA092] block uppercase tracking-wider">Tempo Total</span>
              <span className="text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <Clock size={13} className="text-[#63B532]" />
                {recipe.prepTime + recipe.cookTime} min
              </span>
            </div>

            <div className="text-center border-x border-[#1B472C]">
              <span className="text-[10px] text-[#8EA092] block uppercase tracking-wider">Carbo Líquido</span>
              <span className="text-xs sm:text-sm font-extrabold text-[#63B532] flex items-center justify-center gap-1 mt-0.5">
                <Flame size={13} />
                {recipe.nutrition.netCarbs * servingsMultiplier}g
              </span>
            </div>

            <div className="text-center">
              <span className="text-[10px] text-[#8EA092] block uppercase tracking-wider">Dificuldade</span>
              <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">
                {recipe.difficulty}
              </span>
            </div>
          </div>

          {/* Description & Chef Tip */}
          <div className="space-y-2.5">
            <p className="text-xs sm:text-sm text-[#8EA092] leading-relaxed">
              {recipe.description}
            </p>
            {recipe.chefTip && (
              <div className="p-3 rounded-2xl bg-[#123D24]/40 border border-[#63B532]/30 flex items-start gap-2.5 text-xs text-[#A8D94D]">
                <Sparkles size={16} className="text-[#63B532] shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-white block">Dica do Chef KetoNobre:</span>
                  <p className="text-[#8EA092] mt-0.5">{recipe.chefTip}</p>
                </div>
              </div>
            )}
          </div>

          {/* Segmented Tabs Control */}
          <div className="flex items-center justify-between p-1 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
            <button
              id="tab-btn-ingredients"
              onClick={() => setActiveTab('ingredients')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'ingredients'
                  ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                  : 'text-[#8EA092] hover:text-white'
              }`}
            >
              Ingredientes ({currentIngredients.length})
            </button>
            <button
              id="tab-btn-steps"
              onClick={() => setActiveTab('steps')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'steps'
                  ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                  : 'text-[#8EA092] hover:text-white'
              }`}
            >
              Modo de Preparo ({recipe.steps.length})
            </button>
            <button
              id="tab-btn-nutrition"
              onClick={() => setActiveTab('nutrition')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'nutrition'
                  ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                  : 'text-[#8EA092] hover:text-white'
              }`}
            >
              Nutrição
            </button>
          </div>

          {/* TAB CONTENT: INGREDIENTES */}
          {activeTab === 'ingredients' && (
            <div className="space-y-4">
              {/* Dynamic Portions controller as requested in Section 17 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
                <div>
                  <span className="text-xs font-bold text-white block">Ajustar Porções</span>
                  <span className="text-[10px] text-[#8EA092]">Recalcula as quantidades automaticamente</span>
                </div>

                <div className="flex items-center gap-2 bg-[#071A0E] border border-[#1B472C] rounded-xl px-2 py-1">
                  <button
                    onClick={() => setServingsMultiplier(Math.max(1, servingsMultiplier - 1))}
                    className="p-1.5 text-[#8EA092] hover:text-white active:scale-95 transition-all"
                    title="Diminuir porções"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="text-xs font-extrabold text-[#A8D94D] min-w-[65px] text-center">
                    {currentServings} {currentServings === 1 ? 'porção' : 'porções'}
                  </span>
                  <button
                    onClick={() => setServingsMultiplier(servingsMultiplier + 1)}
                    className="p-1.5 text-[#8EA092] hover:text-white active:scale-95 transition-all"
                    title="Aumentar porções"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>

              {/* Checklist of scaled ingredients */}
              <div className="space-y-2">
                {currentIngredients.map((ing) => {
                  const isChecked = !!checkedIngredients[ing.id];
                  return (
                    <div
                      key={ing.id}
                      onClick={() => toggleCheck(ing.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#082817] border-[#63B532]/30 opacity-70'
                          : 'bg-[#0D2817] border-[#1B472C] hover:border-[#63B532]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-[#63B532] border-[#63B532] text-black'
                              : 'border-[#1B472C] bg-[#071A0E]'
                          }`}
                        >
                          {isChecked && <Check size={14} className="stroke-[3px]" />}
                        </div>
                        <span
                          className={`text-xs sm:text-sm ${
                            isChecked ? 'line-through text-[#8EA092]' : 'text-white font-medium'
                          }`}
                        >
                          {ing.name}
                        </span>
                      </div>

                      <span className="text-xs font-extrabold text-[#A8D94D] ml-2">
                        {ing.amount}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Add ingredients to shopping list button */}
              <button
                id="add-to-shopping-list-btn"
                onClick={() => addRecipeIngredientsToShopping(recipe, currentIngredients)}
                className="w-full py-3 px-4 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-[#A8D94D] font-bold text-xs flex items-center justify-center gap-2 border border-[#63B532]/40 transition-colors shadow-md"
              >
                <span>+ Adicionar {currentServings} {currentServings === 1 ? 'porção' : 'porções'} à lista de compras</span>
              </button>
            </div>
          )}

          {/* TAB CONTENT: MODO DE PREPARO */}
          {activeTab === 'steps' && (
            <div className="space-y-4">
              <p className="text-xs text-[#8EA092]">
                Siga cada etapa cuidadosamente para obter o ponto e sabor da alta gastronomia cetogênica.
              </p>

              <div className="space-y-3">
                {recipe.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#123D24] text-[#63B532] text-xs font-extrabold border border-[#63B532]/30">
                        Etapa {step.stepNumber}
                      </span>
                      {step.timerSeconds && (
                        <span className="text-xs text-[#8EA092] flex items-center gap-1">
                          <Clock size={12} className="text-[#63B532]" />
                          {Math.floor(step.timerSeconds / 60)} min
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      {step.instruction}
                    </p>

                    {step.tip && (
                      <div className="text-xs p-2.5 rounded-xl bg-[#071A0E] text-[#8EA092] border-l-2 border-[#63B532] italic">
                        💡 Dica do Chef: {step.tip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: NUTRIÇÃO */}
          {activeTab === 'nutrition' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#1B472C]">
                  <span className="text-xs sm:text-sm font-bold text-white">Calorias totais</span>
                  <span className="text-base sm:text-lg font-extrabold text-[#A8D94D]">
                    {recipe.nutrition.calories * servingsMultiplier} kcal
                  </span>
                </div>

                {/* Macro breakdown */}
                <div className="space-y-2.5 pt-1">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#8EA092]">Carboidratos Líquidos</span>
                      <span className="font-bold text-[#63B532]">
                        {recipe.nutrition.netCarbs * servingsMultiplier}g
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#071A0E] overflow-hidden">
                      <div
                        className="h-full bg-[#63B532] rounded-full"
                        style={{ width: `${Math.min(100, recipe.nutrition.netCarbs * 8)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#8EA092]">Proteínas</span>
                      <span className="font-bold text-white">
                        {recipe.nutrition.protein * servingsMultiplier}g
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#071A0E] overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${Math.min(100, recipe.nutrition.protein * 2)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#8EA092]">Gorduras Boas</span>
                      <span className="font-bold text-amber-400">
                        {recipe.nutrition.fat * servingsMultiplier}g
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#071A0E] overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${Math.min(100, recipe.nutrition.fat * 2.5)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#8EA092]">Fibras</span>
                      <span className="font-bold text-[#8EA092]">
                        {recipe.nutrition.fiber * servingsMultiplier}g
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#071A0E] overflow-hidden">
                      <div
                        className="h-full bg-emerald-700 rounded-full"
                        style={{ width: `${Math.min(100, recipe.nutrition.fiber * 15)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-[#8EA092]">
                  * Valores nutricionais aproximados calculados para {currentServings} porções.
                </span>
              </div>
            </div>
          )}

          {/* Add to Meal Plan Picker */}
          <div className="pt-2">
            {!showPlanPicker ? (
              <button
                onClick={() => setShowPlanPicker(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0D2817] hover:bg-[#123D24] text-[#8EA092] hover:text-white text-xs font-semibold flex items-center justify-center gap-2 border border-[#1B472C] transition-colors"
              >
                <CalendarPlus size={15} />
                <span>Adicionar ao Planejamento Semanal</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Escolha o dia e refeição:</span>
                  <button
                    onClick={() => setShowPlanPicker(false)}
                    className="text-[#8EA092] hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {(['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'] as const).map((day) => (
                    <div key={day} className="flex flex-col gap-1 text-center">
                      <span className="text-[10px] font-bold text-[#63B532]">{day}</span>
                      <button
                        onClick={() => handleAddToPlan(day, 'lunch')}
                        className="py-1 rounded bg-[#071A0E] hover:bg-[#123D24] text-[9px] text-[#8EA092] hover:text-white border border-[#1B472C]"
                        title="Almoço"
                      >
                        Alm
                      </button>
                      <button
                        onClick={() => handleAddToPlan(day, 'dinner')}
                        className="py-1 rounded bg-[#071A0E] hover:bg-[#123D24] text-[9px] text-[#8EA092] hover:text-white border border-[#1B472C]"
                        title="Jantar"
                      >
                        Jan
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Start Cooking Bar (only visible on small screens) */}
          <div className="md:hidden pt-4 pb-2">
            <button
              id="btn-start-cooking-mobile"
              onClick={handleStartCooking}
              className="w-full py-4 px-6 rounded-2xl bg-[#63B532] hover:bg-[#529e28] active:scale-[0.98] text-[#082817] font-extrabold text-sm sm:text-base shadow-xl shadow-[#63B532]/30 flex items-center justify-center gap-2.5 transition-all"
            >
              <ChefHat size={20} className="stroke-[2.5px]" />
              <span>👨‍🍳 Começar a cozinhar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
