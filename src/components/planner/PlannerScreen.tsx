import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ShoppingBag,
  Plus,
  RefreshCw,
  Trash2,
  Check,
  ChevronRight,
  Clock,
  Sparkles,
  Share2,
  Grid,
  Columns,
  RotateCcw,
  Utensils
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Recipe, ShoppingItem, MealPlanDay } from '../../types';

export const PlannerScreen: React.FC = () => {
  const {
    mealPlan,
    updateMealPlanSlot,
    generateShoppingListFromPlan,
    shoppingList,
    recipes,
    openRecipeDetail,
    autoFillWeekPlan,
    clearWeekPlan,
    setActiveTab,
    showToast,
  } = useApp();

  const [selectedDay, setSelectedDay] = useState<string>('Seg');
  const [viewFormat, setViewFormat] = useState<'day' | 'week'>('day');

  // Modal to change/select a recipe for a meal slot
  const [recipePickerSlot, setRecipePickerSlot] = useState<{
    day: string;
    slot: 'breakfast' | 'lunch' | 'dinner' | 'dessert';
  } | null>(null);

  // Auto fill modal state
  const [showAutoFillModal, setShowAutoFillModal] = useState<boolean>(false);
  const [autoFillGoal, setAutoFillGoal] = useState<'variety' | 'quick' | 'protein' | 'favorites'>('variety');
  const [autoFillMaxTime, setAutoFillMaxTime] = useState<number>(45);

  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'] as const;
  const currentDayPlan = mealPlan.find((d) => d.dayOfWeek === selectedDay) || mealPlan[0];

  const handleSelectRecipeForSlot = (recipe: Recipe) => {
    if (recipePickerSlot) {
      updateMealPlanSlot(recipePickerSlot.day, recipePickerSlot.slot, recipe);
      setRecipePickerSlot(null);
      showToast(`Refeição atualizada para ${recipe.title}!`);
    }
  };

  const handleGenerateShopping = () => {
    generateShoppingListFromPlan();
    setActiveTab('shopping');
  };

  const handleExecuteAutoFill = () => {
    autoFillWeekPlan({
      preference: autoFillGoal,
      maxTime: autoFillMaxTime < 60 ? autoFillMaxTime : undefined,
    });
    setShowAutoFillModal(false);
  };

  return (
    <div id="planner-screen" className="p-4 sm:p-6 lg:p-8 space-y-6 pb-28 select-none w-full max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Planejamento Semanal
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#123D24] text-[#A8D94D] border border-[#63B532]/30 font-bold">
              7 Dias
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#8EA092] mt-1">
            Organize suas refeições cetogênicas e gere sua lista de compras com um clique
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View toggle (desktop only) */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-[#0D2817] border border-[#1B472C]">
            <button
              onClick={() => setViewFormat('day')}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewFormat === 'day'
                  ? 'bg-[#123D24] text-[#A8D94D]'
                  : 'text-[#8EA092] hover:text-white'
              }`}
              title="Visão Focada por Dia"
            >
              <Columns size={15} />
              <span>Dia</span>
            </button>
            <button
              onClick={() => setViewFormat('week')}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewFormat === 'week'
                  ? 'bg-[#123D24] text-[#A8D94D]'
                  : 'text-[#8EA092] hover:text-white'
              }`}
              title="Visão Semanal Completa (7 Colunas)"
            >
              <Grid size={15} />
              <span>Semana</span>
            </button>
          </div>

          {/* Auto fill button */}
          <button
            id="btn-auto-fill-week"
            onClick={() => setShowAutoFillModal(true)}
            className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-gradient-to-r from-[#123D24] to-[#0D2817] hover:from-[#184d2f] hover:to-[#123D24] border border-[#63B532]/40 text-xs font-extrabold text-[#A8D94D] transition-all shadow-md"
          >
            <Sparkles size={15} className="text-[#63B532]" />
            <span>Preencher Semana</span>
          </button>

          {/* Clear week button */}
          <button
            onClick={clearWeekPlan}
            className="p-2 rounded-xl bg-[#0D2817] hover:bg-red-950/40 text-[#8EA092] hover:text-red-400 border border-[#1B472C] transition-all"
            title="Limpar planejamento semanal"
          >
            <RotateCcw size={16} />
          </button>

          {/* Generate Shopping Button */}
          <button
            id="btn-generate-shopping-top"
            onClick={handleGenerateShopping}
            className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold transition-all shadow-lg shadow-[#63B532]/25"
          >
            <ShoppingBag size={15} />
            <span>Gerar Lista</span>
          </button>
        </div>
      </div>

      {/* VIEW: DAY-BY-DAY (Default on Mobile & Toggleable on Desktop) */}
      {viewFormat === 'day' ? (
        <div className="space-y-6">
          {/* Days of week selector pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
            {days.map((day) => {
              const isSelected = selectedDay === day;
              const dayPlan = mealPlan.find((d) => d.dayOfWeek === day);
              const filledMeals = [
                dayPlan?.breakfast,
                dayPlan?.lunch,
                dayPlan?.dinner,
                dayPlan?.dessert,
              ].filter(Boolean).length;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 min-w-[70px] py-2.5 px-2 rounded-xl text-center transition-all ${
                    isSelected
                      ? 'bg-[#63B532] text-[#082817] shadow-md shadow-[#63B532]/20 font-extrabold scale-105'
                      : 'text-[#8EA092] hover:text-white hover:bg-[#123D24]/50 font-bold'
                  }`}
                >
                  <span className="text-xs block">{day}</span>
                  <span className={`text-[9px] block mt-0.5 ${isSelected ? 'text-[#082817]' : 'text-[#8EA092]'}`}>
                    {filledMeals}/3 refeições
                  </span>
                </button>
              );
            })}
          </div>

          {/* Current Day Title and Nutrition Preview */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                <span>Cardápio de {currentDayPlan.dayName}</span>
              </h2>
              <p className="text-xs text-[#8EA092]">
                Refeições ricas em gorduras boas, proteínas nobres e baixo carboidrato líquido
              </p>
            </div>

            {/* Daily macros estimate: Calorias, Proteína, Gordura, Carbo Líquido */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-[#071A0E] p-2.5 sm:px-3.5 sm:py-2 rounded-xl border border-[#1B472C]">
              <div>
                <span className="text-[#8EA092] block text-[10px]">Carbo Líquido</span>
                <span className="font-extrabold text-[#63B532] text-sm">
                  {[
                    currentDayPlan.breakfast?.nutrition.netCarbs || 0,
                    currentDayPlan.lunch?.nutrition.netCarbs || 0,
                    currentDayPlan.dinner?.nutrition.netCarbs || 0,
                    currentDayPlan.dessert?.nutrition.netCarbs || 0,
                  ].reduce((a, b) => a + b, 0)}g
                </span>
              </div>
              <div className="border-l border-[#1B472C] pl-2 sm:pl-3">
                <span className="text-[#8EA092] block text-[10px]">Proteínas</span>
                <span className="font-extrabold text-blue-400 text-sm">
                  {[
                    currentDayPlan.breakfast?.nutrition.protein || 0,
                    currentDayPlan.lunch?.nutrition.protein || 0,
                    currentDayPlan.dinner?.nutrition.protein || 0,
                    currentDayPlan.dessert?.nutrition.protein || 0,
                  ].reduce((a, b) => a + b, 0)}g
                </span>
              </div>
              <div className="border-l border-[#1B472C] pl-2 sm:pl-3">
                <span className="text-[#8EA092] block text-[10px]">Gorduras</span>
                <span className="font-extrabold text-amber-400 text-sm">
                  {[
                    currentDayPlan.breakfast?.nutrition.fat || 0,
                    currentDayPlan.lunch?.nutrition.fat || 0,
                    currentDayPlan.dinner?.nutrition.fat || 0,
                    currentDayPlan.dessert?.nutrition.fat || 0,
                  ].reduce((a, b) => a + b, 0)}g
                </span>
              </div>
              <div className="border-l border-[#1B472C] pl-2 sm:pl-3">
                <span className="text-[#8EA092] block text-[10px]">Calorias</span>
                <span className="font-extrabold text-white text-sm">
                  {[
                    currentDayPlan.breakfast?.nutrition.calories || 0,
                    currentDayPlan.lunch?.nutrition.calories || 0,
                    currentDayPlan.dinner?.nutrition.calories || 0,
                    currentDayPlan.dessert?.nutrition.calories || 0,
                  ].reduce((a, b) => a + b, 0)} kcal
                </span>
              </div>
            </div>
          </div>

          {/* Meal Slots (Café da manhã, Almoço, Jantar, Sobremesa/Lanche) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Slot: Café da manhã */}
            <MealSlotCard
              title="Café da manhã"
              icon="🍳"
              recipe={currentDayPlan.breakfast}
              onOpenRecipe={(r) => openRecipeDetail(r)}
              onSwap={() => setRecipePickerSlot({ day: selectedDay, slot: 'breakfast' })}
              onRemove={() => updateMealPlanSlot(selectedDay, 'breakfast', undefined)}
            />

            {/* Slot: Almoço */}
            <MealSlotCard
              title="Almoço"
              icon="🥗"
              recipe={currentDayPlan.lunch}
              onOpenRecipe={(r) => openRecipeDetail(r)}
              onSwap={() => setRecipePickerSlot({ day: selectedDay, slot: 'lunch' })}
              onRemove={() => updateMealPlanSlot(selectedDay, 'lunch', undefined)}
            />

            {/* Slot: Jantar */}
            <MealSlotCard
              title="Jantar"
              icon="🍖"
              recipe={currentDayPlan.dinner}
              onOpenRecipe={(r) => openRecipeDetail(r)}
              onSwap={() => setRecipePickerSlot({ day: selectedDay, slot: 'dinner' })}
              onRemove={() => updateMealPlanSlot(selectedDay, 'dinner', undefined)}
            />

            {/* Slot: Sobremesa / Lanche */}
            <MealSlotCard
              title="Sobremesa / Lanche Cetogênico"
              icon="🥑"
              recipe={currentDayPlan.dessert}
              onOpenRecipe={(r) => openRecipeDetail(r)}
              onSwap={() => setRecipePickerSlot({ day: selectedDay, slot: 'dessert' })}
              onRemove={() => updateMealPlanSlot(selectedDay, 'dessert', undefined)}
            />
          </div>

          {/* Bottom Generate Shopping Action Banner */}
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#123D24] via-[#0D2817] to-[#123D24] border border-[#63B532]/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-extrabold text-white font-display">
                Pronto para as compras da semana?
              </h4>
              <p className="text-xs text-[#8EA092]">
                Consolida todos os ingredientes do cardápio em uma lista organizada por setor do supermercado.
              </p>
            </div>
            <button
              onClick={handleGenerateShopping}
              className="py-3 px-6 rounded-xl bg-[#63B532] hover:bg-[#529e28] active:scale-95 text-[#082817] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <ShoppingBag size={18} />
              <span>Gerar Lista Completa</span>
            </button>
          </div>
        </div>
      ) : (
        /* VIEW: FULL 7-DAY WEEKLY GRID (DESKTOP) */
        <div className="space-y-4">
          <div className="grid grid-cols-7 gap-3">
            {days.map((day) => {
              const dayPlan = mealPlan.find((d) => d.dayOfWeek === day) || mealPlan[0];
              return (
                <div
                  key={day}
                  className="rounded-2xl bg-[#0D2817] border border-[#1B472C] p-3 space-y-3 flex flex-col justify-between"
                >
                  <div className="border-b border-[#1B472C] pb-2 text-center">
                    <h3 className="text-sm font-extrabold text-white">{day}</h3>
                    <span className="text-[10px] text-[#8EA092]">{dayPlan.dayName}</span>
                  </div>

                  <div className="space-y-2 flex-1">
                    <CompactMealSlot
                      slotName="Café"
                      icon="🍳"
                      recipe={dayPlan.breakfast}
                      onOpenRecipe={openRecipeDetail}
                      onSwap={() => setRecipePickerSlot({ day, slot: 'breakfast' })}
                    />
                    <CompactMealSlot
                      slotName="Almoço"
                      icon="🥗"
                      recipe={dayPlan.lunch}
                      onOpenRecipe={openRecipeDetail}
                      onSwap={() => setRecipePickerSlot({ day, slot: 'lunch' })}
                    />
                    <CompactMealSlot
                      slotName="Jantar"
                      icon="🍖"
                      recipe={dayPlan.dinner}
                      onOpenRecipe={openRecipeDetail}
                      onSwap={() => setRecipePickerSlot({ day, slot: 'dinner' })}
                    />
                    <CompactMealSlot
                      slotName="Lanche"
                      icon="🥑"
                      recipe={dayPlan.dessert}
                      onOpenRecipe={openRecipeDetail}
                      onSwap={() => setRecipePickerSlot({ day, slot: 'dessert' })}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Auto Fill Modal ("Preencher Minha Semana") */}
      {showAutoFillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-[#0D2817] border border-[#1B472C] p-6 shadow-2xl text-white space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#123D24] border border-[#63B532]/40 text-[#63B532]">
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold font-display">Preencher Minha Semana</h3>
                <p className="text-xs text-[#8EA092]">Gerador inteligente de cardápio cetogênico</p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-white block">Objetivo do Cardápio:</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'variety', label: '🌈 Alta Variedade', desc: 'Pratos variados sem repetição' },
                  { id: 'quick', label: '⚡ Mais Rápido', desc: 'Preparo em menos de 25min' },
                  { id: 'protein', label: '💪 Rica em Proteína', desc: 'Foco em carnes nobres e ovos' },
                  { id: 'favorites', label: '❤️ Priorizar Salvos', desc: 'Usa suas receitas favoritas' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAutoFillGoal(opt.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      autoFillGoal === opt.id
                        ? 'bg-[#123D24] border-[#63B532] text-white shadow-sm'
                        : 'bg-[#071A0E] border-[#1B472C] text-[#8EA092] hover:border-[#63B532]/40'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">{opt.label}</p>
                    <p className="text-[10px] text-[#8EA092] mt-0.5">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white block">Tempo Máximo de Preparo:</label>
              <div className="flex items-center gap-2">
                {[15, 30, 45, 60].map((t) => (
                  <button
                    key={t}
                    onClick={() => setAutoFillMaxTime(t)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      autoFillMaxTime === t
                        ? 'bg-[#63B532] text-[#082817] border-[#63B532]'
                        : 'bg-[#071A0E] border-[#1B472C] text-[#8EA092]'
                    }`}
                  >
                    {t === 60 ? 'Todos' : `≤ ${t}min`}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowAutoFillModal(false)}
                className="flex-1 py-3 rounded-xl bg-[#071A0E] border border-[#1B472C] text-xs font-bold text-[#8EA092] hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleExecuteAutoFill}
                className="flex-1 py-3 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold shadow-lg shadow-[#63B532]/25 transition-all"
              >
                Gerar Cardápio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recipe Picker Modal (when swapping a slot) */}
      {recipePickerSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg h-[540px] flex flex-col rounded-3xl bg-[#0D2817] border border-[#1B472C] shadow-2xl text-white overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-[#1B472C]">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Escolher receita para {recipePickerSlot.slot === 'breakfast' && 'o Café da manhã'}
                  {recipePickerSlot.slot === 'lunch' && 'o Almoço'}
                  {recipePickerSlot.slot === 'dinner' && 'o Jantar'}
                  {recipePickerSlot.slot === 'dessert' && 'a Sobremesa/Lanche'}
                </h3>
                <p className="text-[11px] text-[#8EA092]">Dia selecionado: {recipePickerSlot.day}</p>
              </div>

              <button
                onClick={() => setRecipePickerSlot(null)}
                className="p-2 rounded-full text-[#8EA092] hover:text-white hover:bg-[#123D24]"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-2.5">
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => handleSelectRecipeForSlot(recipe)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#071A0E] border border-[#1B472C] hover:border-[#63B532] cursor-pointer transition-all group"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-white truncate group-hover:text-[#A8D94D]">
                      {recipe.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[11px] text-[#8EA092] mt-0.5">
                      <span>{recipe.prepTime + recipe.cookTime} min</span>
                      <span>•</span>
                      <span className="text-[#63B532] font-semibold">
                        {recipe.nutrition.netCarbs}g carbo
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#63B532] font-bold group-hover:translate-x-0.5 transition-transform pr-2">
                    Escolher
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface MealSlotCardProps {
  title: string;
  icon: string;
  recipe?: Recipe;
  onOpenRecipe: (recipe: Recipe) => void;
  onSwap: () => void;
  onRemove: () => void;
}

const MealSlotCard: React.FC<MealSlotCardProps> = ({
  title,
  icon,
  recipe,
  onOpenRecipe,
  onSwap,
  onRemove,
}) => {
  if (!recipe) {
    return (
      <div
        onClick={onSwap}
        className="flex items-center justify-between p-4 rounded-2xl bg-[#0D2817]/60 border border-dashed border-[#1B472C] hover:border-[#63B532]/60 cursor-pointer transition-all group"
      >
        <div className="flex items-center gap-3 text-xs text-[#8EA092]">
          <span className="text-lg">{icon}</span>
          <div>
            <span className="font-semibold text-white block">{title}</span>
            <span className="text-[11px] text-[#8EA092]">Nenhuma receita definida</span>
          </div>
        </div>
        <button className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-[#123D24] group-hover:bg-[#63B532] text-[#A8D94D] group-hover:text-[#082817] text-xs font-bold transition-all">
          <Plus size={14} />
          <span>Escolher</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/50 transition-all shadow-md">
      {/* Thumbnail */}
      <img
        src={recipe.image}
        alt={recipe.title}
        onClick={() => onOpenRecipe(recipe)}
        className="w-16 h-16 rounded-xl object-cover cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
      />

      {/* Details */}
      <div className="flex-1 min-w-0" onClick={() => onOpenRecipe(recipe)}>
        <div className="flex items-center gap-1.5 text-[10px] text-[#A8D94D] font-bold uppercase">
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-white truncate cursor-pointer hover:text-[#A8D94D] transition-colors mt-0.5">
          {recipe.title}
        </h4>
        <div className="flex items-center gap-2 text-[11px] text-[#8EA092] mt-1">
          <span>{recipe.prepTime + recipe.cookTime} min</span>
          <span>•</span>
          <span className="text-[#63B532] font-semibold">{recipe.nutrition.netCarbs}g carbo</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button
          onClick={onSwap}
          className="p-2 rounded-xl text-[#8EA092] hover:text-[#63B532] hover:bg-[#123D24] transition-colors"
          title="Trocar refeição"
        >
          <RefreshCw size={14} />
        </button>
        <button
          onClick={onRemove}
          className="p-2 rounded-xl text-[#8EA092] hover:text-red-400 hover:bg-[#123D24] transition-colors"
          title="Remover refeição"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

const CompactMealSlot: React.FC<{
  slotName: string;
  icon: string;
  recipe?: Recipe;
  onOpenRecipe: (recipe: Recipe) => void;
  onSwap: () => void;
}> = ({ slotName, icon, recipe, onOpenRecipe, onSwap }) => {
  if (!recipe) {
    return (
      <div
        onClick={onSwap}
        className="p-2 rounded-xl border border-dashed border-[#1B472C] hover:border-[#63B532]/60 cursor-pointer text-center bg-[#071A0E]"
      >
        <span className="text-[10px] text-[#8EA092]">
          {icon} + {slotName}
        </span>
      </div>
    );
  }

  return (
    <div
      onClick={() => onOpenRecipe(recipe)}
      className="p-2 rounded-xl bg-[#071A0E] border border-[#1B472C] hover:border-[#63B532]/50 cursor-pointer space-y-1 group"
    >
      <div className="flex items-center justify-between text-[10px] text-[#A8D94D]">
        <span>
          {icon} {slotName}
        </span>
        <span>{recipe.nutrition.netCarbs}g</span>
      </div>
      <p className="text-[11px] font-bold text-white truncate group-hover:text-[#A8D94D]">
        {recipe.title}
      </p>
    </div>
  );
};
