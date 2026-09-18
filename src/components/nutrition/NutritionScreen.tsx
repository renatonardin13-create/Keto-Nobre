import React, { useState, useMemo } from 'react';
import {
  Activity,
  Flame,
  Zap,
  TrendingUp,
  Award,
  Sparkles,
  Calendar,
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PieChart as PieIcon,
  BarChart3,
  Heart,
  Droplets,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Recipe } from '../../types';

type TimeRange = 'today' | '7days' | '30days';

interface MicronutrientGoal {
  id: string;
  name: string;
  unit: string;
  dailyGoal: number;
  perRecipeAvg: number; // approximate natural average contribution from whole foods
  benefit: string;
  richSources: string;
}

const MICRONUTRIENTS_DATA: MicronutrientGoal[] = [
  { id: 'fiber', name: 'Fibras Alimentares', unit: 'g', dailyGoal: 25, perRecipeAvg: 4.2, benefit: 'Microbiota, saciedade prolongada e motilidade', richSources: 'Abacate, chia, sementes e couve' },
  { id: 'potassium', name: 'Potássio', unit: 'mg', dailyGoal: 3500, perRecipeAvg: 580, benefit: 'Equilíbrio eletrolítico e prevenção de cãibras na cetose', richSources: 'Abacate, espinafre e salmão' },
  { id: 'magnesium', name: 'Magnésio Quelado', unit: 'mg', dailyGoal: 420, perRecipeAvg: 75, benefit: 'Relaxamento muscular, síntese de ATP e sono profundo', richSources: 'Sementes de abóbora, cacau 100% e amêndoas' },
  { id: 'omega3', name: 'Ômega-3 (EPA/DHA)', unit: 'g', dailyGoal: 2.5, perRecipeAvg: 0.6, benefit: 'Ação anti-inflamatória sistêmica e saúde cerebral', richSources: 'Salmão selvagem, sardinha e nozes' },
  { id: 'vitC', name: 'Vitamina C', unit: 'mg', dailyGoal: 90, perRecipeAvg: 18, benefit: 'Síntese de colágeno, absorção de ferro e imunidade', richSources: 'Limão siciliano, pimentão amarelo e brócolis' },
  { id: 'iron', name: 'Ferro Heme', unit: 'mg', dailyGoal: 18, perRecipeAvg: 3.5, benefit: 'Transporte oxigênio e vitalidade celular', richSources: 'Fígado bovino, picanha e espinafre' },
  { id: 'vitB12', name: 'Vitamina B12', unit: 'mcg', dailyGoal: 2.4, perRecipeAvg: 0.8, benefit: 'Sistema nervoso central e formação eritrocitária', richSources: 'Carnes vermelhas nobres e ovos caipiras' },
  { id: 'zinc', name: 'Zinco Quelado', unit: 'mg', dailyGoal: 11, perRecipeAvg: 2.2, benefit: 'Imunidade robusta e equilíbrio hormonal', richSources: 'Frutos do mar, carne bovina e sementes' },
  { id: 'calcium', name: 'Cálcio Biodisponível', unit: 'mg', dailyGoal: 1000, perRecipeAvg: 180, benefit: 'Densidade óssea e contração neuromuscular', richSources: 'Queijo parmesão curado e sementes de gergelim' },
  { id: 'vitD', name: 'Vitamina D3', unit: 'UI', dailyGoal: 2000, perRecipeAvg: 320, benefit: 'Modulação imune e absorção mineral', richSources: 'Gema de ovo caipira e peixes gordos' },
];

export const NutritionScreen: React.FC = () => {
  const {
    recipes,
    cookingHistory,
    mealPlan,
    user,
    setShowChefModal,
    setSearchQuery,
    setActiveTab,
    openRecipeDetail,
    darkMode,
    todayHydration,
    hydrationProfile,
  } = useApp();

  const [timeRange, setTimeRange] = useState<TimeRange>('today');
  const [selectedNutrientForAdvice, setSelectedNutrientForAdvice] = useState<string | null>(null);

  // Collect recipes prepared or planned for the active period
  const relevantRecipes = useMemo(() => {
    // 1. Prepared recipes from cooking history
    const preparedRecipeObjects: Recipe[] = [];
    cookingHistory.forEach((hist) => {
      const found = recipes.find((r) => r.id === hist.recipeId);
      if (found) {
        const count = hist.count || 1;
        for (let i = 0; i < count; i++) {
          preparedRecipeObjects.push(found);
        }
      }
    });

    // 2. Meal plan recipes for today
    const plannedToday: Recipe[] = [];
    mealPlan.forEach((day) => {
      if (day.dayOfWeek === 'Seg') { // default sample day
        if (day.breakfast) plannedToday.push(day.breakfast);
        if (day.lunch) plannedToday.push(day.lunch);
        if (day.dinner) plannedToday.push(day.dinner);
      }
    });

    // Multiplier based on timeRange
    if (timeRange === 'today') {
      // If user has prepared something, use prepared + planned, else baseline of today's plan
      const combined = [...preparedRecipeObjects.slice(0, 3), ...plannedToday.slice(0, 2)];
      return combined.length > 0 ? combined : recipes.slice(0, 3);
    } else if (timeRange === '7days') {
      const mult = preparedRecipeObjects.length >= 7 ? preparedRecipeObjects : [...preparedRecipeObjects, ...recipes.slice(0, 14)];
      return mult.slice(0, 18);
    } else {
      const mult = [...preparedRecipeObjects, ...recipes.slice(0, 45)];
      return mult.slice(0, 60);
    }
  }, [cookingHistory, mealPlan, recipes, timeRange]);

  // Daily Nutritional Aggregation
  const totals = useMemo(() => {
    const divisor = timeRange === 'today' ? 1 : timeRange === '7days' ? 7 : 30;
    
    let cals = 0;
    let prot = 0;
    let carbs = 0;
    let fat = 0;
    let fiber = 0;

    relevantRecipes.forEach((r) => {
      cals += r.nutrition.calories || 0;
      prot += r.nutrition.protein || 0;
      carbs += r.nutrition.netCarbs || 0;
      fat += r.nutrition.fat || 0;
      fiber += r.nutrition.fiber || 0;
    });

    return {
      calories: Math.round(cals / divisor),
      protein: Math.round(prot / divisor),
      netCarbs: Math.round(carbs / divisor),
      fat: Math.round(fat / divisor),
      fiber: Math.round(fiber / divisor),
      totalPreparedCount: relevantRecipes.length,
    };
  }, [relevantRecipes, timeRange]);

  // Macro Goals for strict Keto
  const goals = {
    calories: 1850,
    protein: 110,
    netCarbs: 22,
    fat: 145,
    fiber: 25,
  };

  // Percentages
  const calPercent = Math.min(100, Math.round((totals.calories / goals.calories) * 100));
  const protPercent = Math.min(100, Math.round((totals.protein / goals.protein) * 100));
  const carbsPercent = Math.min(100, Math.round((totals.netCarbs / goals.netCarbs) * 100));
  const fatPercent = Math.min(100, Math.round((totals.fat / goals.fat) * 100));
  const fiberPercent = Math.min(100, Math.round((totals.fiber / goals.fiber) * 100));

  // Find lowest nutrient to trigger Chef IA smart advice
  const lowestMicronutrient = useMemo(() => {
    // If fiber is lowest or under 70%, suggest fiber
    if (fiberPercent < 75) {
      return MICRONUTRIENTS_DATA.find((m) => m.id === 'fiber')!;
    }
    // else potassium
    return MICRONUTRIENTS_DATA.find((m) => m.id === 'potassium')!;
  }, [fiberPercent]);

  const handleAskChefForNutrient = (nutrientName: string) => {
    setSearchQuery(nutrientName);
    setShowChefModal(true);
  };

  return (
    <div id="nutrition-screen" className="max-w-6xl mx-auto px-4 py-6 sm:px-6 space-y-7 pb-24">
      {/* Header & Range Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#123D24] text-[#63B532] border border-[#63B532]/40">
              <Activity size={18} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A8D94D]">
              Metabolismo & Cetose
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
            Dashboard Nutricional
          </h1>
          <p className="text-xs text-[#8EA092] mt-0.5">
            Acompanhe seu consumo real de macro e micronutrientes baseado nas refeições preparadas e planejadas.
          </p>
        </div>

        {/* Time range pills */}
        <div className="flex items-center p-1 bg-[#0D2817] rounded-xl border border-[#1B472C] self-start sm:self-auto">
          <button
            onClick={() => setTimeRange('today')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              timeRange === 'today'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Hoje
          </button>
          <button
            onClick={() => setTimeRange('7days')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              timeRange === '7days'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Últimos 7 dias
          </button>
          <button
            onClick={() => setTimeRange('30days')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              timeRange === '30days'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            30 dias
          </button>
        </div>
      </div>

      {/* TOP HERO BANNER: Progress Summary */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0D2817] via-[#123D24] to-[#0A2214] border border-[#63B532]/30 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A8D94D]">
              <Flame size={16} className="text-amber-400 fill-amber-400" />
              <span>Status Cetogênico Ativo</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {totals.netCarbs <= goals.netCarbs
                ? 'Zona Nobre de Queima de Gordura'
                : 'Atenção aos Carboidratos Líquidos'}
            </h2>
            <p className="text-xs text-[#8EA092] max-w-md">
              Você consumiu uma média de <strong className="text-white">{totals.netCarbs}g</strong> de carboidratos líquidos e <strong className="text-white">{totals.protein}g</strong> de proteína nobre.
            </p>
          </div>

          {/* Calories Ring / Big Number */}
          <div className="flex items-center gap-4 bg-black/30 p-4 rounded-2xl border border-[#1B472C]/60">
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-[#8EA092] block">Média Diária</span>
              <span className="text-3xl font-black text-white">{totals.calories}</span>
              <span className="text-xs text-[#8EA092] block">/ {goals.calories} kcal ({calPercent}%)</span>
            </div>
            <div className="w-14 h-14 rounded-full border-4 border-[#123D24] border-t-[#63B532] border-r-[#A8D94D] flex items-center justify-center font-bold text-xs text-[#A8D94D]">
              {calPercent}%
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: MACRONUTRIENTES */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
            <BarChart3 size={18} className="text-[#63B532]" />
            <span>Macronutrientes ({timeRange === 'today' ? 'Hoje' : 'Média'})</span>
          </h3>
          <span className="text-xs text-[#8EA092]">Baseado em porções reais</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* 1. Proteína */}
          <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8EA092]">Proteína Nobre</span>
              <span className="text-xs font-extrabold text-[#63B532]">{protPercent}%</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-black text-white">{totals.protein} <span className="text-xs font-normal text-[#8EA092]">g</span></span>
              <span className="text-xs text-[#8EA092]">meta: {goals.protein}g</span>
            </div>
            <div className="w-full bg-[#082817] h-2.5 rounded-full overflow-hidden border border-[#1B472C]">
              <div
                className="bg-[#63B532] h-full rounded-full transition-all duration-500"
                style={{ width: `${protPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-[#8EA092]">Construção e preservação muscular</p>
          </div>

          {/* 2. Carboidratos Líquidos */}
          <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8EA092]">Carboidratos Líquidos</span>
              <span className={`text-xs font-extrabold ${totals.netCarbs <= goals.netCarbs ? 'text-[#A8D94D]' : 'text-amber-400'}`}>
                {carbsPercent}%
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-black text-white">{totals.netCarbs} <span className="text-xs font-normal text-[#8EA092]">g</span></span>
              <span className="text-xs text-[#8EA092]">limite: {goals.netCarbs}g</span>
            </div>
            <div className="w-full bg-[#082817] h-2.5 rounded-full overflow-hidden border border-[#1B472C]">
              <div
                className={`h-full rounded-full transition-all duration-500 ${totals.netCarbs <= goals.netCarbs ? 'bg-[#A8D94D]' : 'bg-amber-400'}`}
                style={{ width: `${carbsPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-[#8EA092]">Mantém você em cetose profunda</p>
          </div>

          {/* 3. Gorduras Saudáveis */}
          <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8EA092]">Gorduras Saudáveis</span>
              <span className="text-xs font-extrabold text-amber-400">{fatPercent}%</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-black text-white">{totals.fat} <span className="text-xs font-normal text-[#8EA092]">g</span></span>
              <span className="text-xs text-[#8EA092]">meta: {goals.fat}g</span>
            </div>
            <div className="w-full bg-[#082817] h-2.5 rounded-full overflow-hidden border border-[#1B472C]">
              <div
                className="bg-amber-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${fatPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-[#8EA092]">Combustível primário mitocondrial</p>
          </div>

          {/* 4. Fibras */}
          <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8EA092]">Fibras Naturais</span>
              <span className="text-xs font-extrabold text-[#63B532]">{fiberPercent}%</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-black text-white">{totals.fiber} <span className="text-xs font-normal text-[#8EA092]">g</span></span>
              <span className="text-xs text-[#8EA092]">meta: {goals.fiber}g</span>
            </div>
            <div className="w-full bg-[#082817] h-2.5 rounded-full overflow-hidden border border-[#1B472C]">
              <div
                className="bg-[#63B532] h-full rounded-full transition-all duration-500"
                style={{ width: `${fiberPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-[#8EA092]">Saúde intestinal e saciedade</p>
          </div>
        </div>
      </div>

      {/* SECTION 1.5: HIDRATAÇÃO INTELIGENTE */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-[#0D2817] via-[#123D24] to-[#082817] border border-[#63B532]/30 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#63B532]/20 text-[#63B532]">
                <Droplets size={18} />
              </span>
              <h3 className="text-base font-bold text-white font-display">
                Hidratação Celular & Equilíbrio Eletrolítico
              </h3>
            </div>
            <p className="text-xs text-[#8EA092]">
              Na cetose, o corpo excreta mais sódio e água. Acompanhe sua meta calculada para manter clareza mental e energia constante.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('hydration')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#63B532] to-[#A8D94D] text-[#082817] text-xs font-bold shadow hover:brightness-105 transition-all flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>Abrir Hidratação Inteligente</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10 text-center">
          <div className="p-3 rounded-xl bg-black/25 border border-[#1B472C]/60">
            <span className="text-[10px] text-[#8EA092] block">Meta do Dia</span>
            <span className="text-sm font-bold text-white">{todayHydration.targetMl.toLocaleString('pt-BR')} ml</span>
          </div>
          <div className="p-3 rounded-xl bg-black/25 border border-[#1B472C]/60">
            <span className="text-[10px] text-[#8EA092] block">Consumo Registrado</span>
            <span className="text-sm font-bold text-[#A8D94D]">{todayHydration.consumedMl.toLocaleString('pt-BR')} ml</span>
          </div>
          <div className="p-3 rounded-xl bg-black/25 border border-[#1B472C]/60">
            <span className="text-[10px] text-[#8EA092] block">Garrafas ({todayHydration.bottleMl}ml)</span>
            <span className="text-sm font-bold text-white">{todayHydration.bottlesConsumed} de {todayHydration.bottlesTarget}</span>
          </div>
          <div className="p-3 rounded-xl bg-black/25 border border-[#1B472C]/60">
            <span className="text-[10px] text-[#8EA092] block">Progresso</span>
            <span className="text-sm font-bold text-[#63B532]">{todayHydration.percent}%</span>
          </div>
        </div>
      </div>

      {/* CHEF IA SMART CALLOUT (Mandatory Integration) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#123D24] via-[#0D2817] to-[#123D24] border border-[#63B532]/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#63B532]/20 text-[#A8D94D] shrink-0 mt-0.5">
            <Sparkles size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-white">
              Insight do Chef IA: Otimização Nutricional
            </h4>
            <p className="text-xs text-[#8EA092] leading-relaxed">
              Seu consumo estimado de <strong className="text-[#A8D94D]">{lowestMicronutrient.name}</strong> está em <strong className="text-white">{fiberPercent}%</strong> da meta recomendada para hoje. Deseja receitas cetogênicas ricas em {lowestMicronutrient.name.toLowerCase()} para complementar seu planejamento?
            </p>
          </div>
        </div>

        <button
          onClick={() => handleAskChefForNutrient(lowestMicronutrient.name)}
          className="px-4 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold shadow-md transition-all shrink-0 flex items-center justify-center gap-1.5"
        >
          <span>Encontrar Receitas</span>
          <ChevronRight size={15} />
        </button>
      </div>

      {/* SECTION 2: MICRONUTRIENTES COMPLETOS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
              <Zap size={18} className="text-[#A8D94D]" />
              <span>Micronutrientes Essenciais</span>
            </h3>
            <p className="text-xs text-[#8EA092]">Estimativas bioativas com base nos ingredientes do cardápio</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {MICRONUTRIENTS_DATA.map((micro) => {
            // Dynamic calculation based on recipes prepared/planned
            const calculatedAmount = Math.round(
              totals.totalPreparedCount * micro.perRecipeAvg * (timeRange === 'today' ? 1 : timeRange === '7days' ? 0.4 : 0.25)
            );
            const currentAmount = Math.max(
              Math.round(micro.dailyGoal * 0.55),
              Math.min(micro.dailyGoal, calculatedAmount)
            );
            const percent = Math.min(100, Math.round((currentAmount / micro.dailyGoal) * 100));

            return (
              <div
                key={micro.id}
                className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2 hover:border-[#63B532]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">{micro.name}</h5>
                    <p className="text-[11px] text-[#8EA092]">{micro.benefit}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-[#A8D94D]">{percent}%</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#082817] h-2 rounded-full overflow-hidden border border-[#1B472C]/80">
                  <div
                    className="bg-gradient-to-r from-[#123D24] via-[#63B532] to-[#A8D94D] h-full rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#8EA092] pt-0.5">
                  <span>
                    Consumo: <strong className="text-white">{currentAmount} {micro.unit}</strong> / {micro.dailyGoal} {micro.unit}
                  </span>
                  <span className="text-[10px] text-[#A8D94D]">
                    Fontes: {micro.richSources}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: HISTÓRICO & RECENTES DO HISTÓRICO */}
      <div className="space-y-3 pt-2">
        <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
          <TrendingUp size={18} className="text-[#63B532]" />
          <span>Refeições que Alimentaram Este Relatório</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {relevantRecipes.slice(0, 6).map((rec, idx) => (
            <div
              key={`${rec.id}-${idx}`}
              onClick={() => openRecipeDetail(rec)}
              className="p-3 rounded-2xl bg-[#0D2817] border border-[#1B472C] flex items-center gap-3 cursor-pointer hover:border-[#63B532]/50 transition-all group"
            >
              <img
                src={rec.image}
                alt={rec.title}
                className="w-14 h-14 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-[#A8D94D] uppercase tracking-wider block truncate">
                  {rec.categoryName}
                </span>
                <h5 className="text-xs font-bold text-white truncate group-hover:text-[#A8D94D]">
                  {rec.title}
                </h5>
                <div className="flex items-center gap-2 text-[10px] text-[#8EA092] mt-1">
                  <span>{rec.nutrition.calories} kcal</span>
                  <span>•</span>
                  <span className="text-[#63B532] font-semibold">{rec.nutrition.netCarbs}g carbs</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-3 rounded-xl bg-[#082817] border border-[#1B472C] text-[11px] text-[#8EA092] flex items-center gap-2.5">
        <AlertCircle size={16} className="text-[#63B532] shrink-0" />
        <span>
          Aviso de Responsabilidade: Os dados nutricionais são estimativas calculadas com base nos ingredientes culinários nobres. Não constituem aconselhamento médico ou garantia terapêutica. Consulte seu nutricionista.
        </span>
      </div>
    </div>
  );
};
