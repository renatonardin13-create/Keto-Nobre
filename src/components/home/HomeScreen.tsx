import React, { useMemo } from 'react';
import {
  Search,
  Calendar,
  ShoppingBag,
  ChefHat,
  Flame,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Clock,
  Heart,
  TrendingUp,
  Award,
  Activity,
  Play,
  Scan,
  Lightbulb,
  Droplets,
  Plus,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RecipeCard } from '../recipe/RecipeCard';
import { HOME_CATEGORIES } from '../../data/categories';

export const HomeScreen: React.FC = () => {
  const {
    user,
    recipes,
    setActiveTab,
    openRecipeDetail,
    startCooking,
    setShowChefModal,
    setSearchQuery,
    setSelectedExploreFilter,
    cookingHistory,
    favorites,
    mealPlan,
    healthTips,
    openTipDetail,
    todayHydration,
    logWaterIntake,
    hydrationProfile,
  } = useApp();

  const featuredHealthTips = useMemo(() => {
    return healthTips.filter((t) => t.status === 'published').slice(0, 2);
  }, [healthTips]);

  const recipeOfTheDay = recipes.find((r) => r.id === 'kn-chicken-001') || recipes[0];
  const forYouRecipes = recipes.filter((r) => r.id !== recipeOfTheDay.id).slice(0, 8);
  const quickRecipes = recipes.filter((r) => r.prepTime + r.cookTime <= 20).slice(0, 4);

  // Next dish from meal planning
  const nextPlannedMeal = useMemo(() => {
    for (const day of mealPlan) {
      if (day.lunch) return { day: day.dayName, meal: 'Almoço', recipe: day.lunch };
      if (day.dinner) return { day: day.dayName, meal: 'Jantar', recipe: day.dinner };
      if (day.breakfast) return { day: day.dayName, meal: 'Café da manhã', recipe: day.breakfast };
    }
    return null;
  }, [mealPlan]);

  // Last prepared or ongoing dish
  const continueCookingRecipe = useMemo(() => {
    if (cookingHistory.length > 0) {
      const last = cookingHistory[0];
      const found = recipes.find((r) => r.id === last.recipeId);
      if (found) return found;
    }
    return recipes[2] || null;
  }, [cookingHistory, recipes]);

  const handleCategoryClick = (catId: string) => {
    setSelectedExploreFilter(catId);
    setActiveTab('explore');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('explore');
  };

  return (
    <div id="home-screen" className="p-4 sm:p-6 lg:p-8 space-y-8 pb-28 select-none w-full max-w-7xl mx-auto">
      {/* Welcome Banner / Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Olá, {user.name.split(' ')[0]} 👋
            </h1>
            {user.isPremium && (
              <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-extrabold shadow-sm">
                VIP
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-[#8EA092] font-medium">
            O que vamos preparar hoje para manter sua cetose com sabor nobre?
          </p>
        </div>

        {/* Streak, Prepared, and Favorites Badges */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-xs shadow-sm">
            <Flame size={16} className="text-amber-400 fill-amber-400" />
            <div>
              <span className="font-extrabold text-white">{user.streakDays}d</span>
              <span className="text-[10px] text-[#8EA092] block">Sequência</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-xs shadow-sm">
            <Award size={16} className="text-[#63B532]" />
            <div>
              <span className="font-extrabold text-white">{user.preparedCount}</span>
              <span className="text-[10px] text-[#8EA092] block">Feitas</span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab('saved')}
            className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-xs shadow-sm cursor-pointer hover:border-[#63B532]/50 transition-colors"
          >
            <Heart size={16} className="text-rose-400 fill-rose-400" />
            <div>
              <span className="font-extrabold text-white">{favorites.length}</span>
              <span className="text-[10px] text-[#8EA092] block">Salvas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Input Bar */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] focus-within:border-[#63B532] transition-colors shadow-inner">
          <Search size={20} className="text-[#8EA092]" />
          <input
            id="home-search-input"
            type="text"
            placeholder="Buscar receitas cetogênicas, carnes nobres, lanches rápidos..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs sm:text-sm text-white placeholder-[#8EA092] w-full outline-none"
          />
          <button
            type="submit"
            className="px-4 py-1.5 rounded-xl bg-[#123D24] text-[#A8D94D] hover:bg-[#63B532] hover:text-[#082817] text-xs font-bold transition-colors"
          >
            Buscar
          </button>
        </div>
      </form>

      {/* NUTRITION & HYDRATION & NEXT MEAL WIDGETS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Widget 1: Hidratação de Hoje */}
        <div
          onClick={() => setActiveTab('hydration')}
          className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#0D2817] via-[#123D24] to-[#0D2817] border border-[#63B532]/30 hover:border-[#63B532] transition-all cursor-pointer group shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#63B532]/20 text-[#63B532]">
                  <Droplets size={16} />
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Hidratação de Hoje
                </span>
              </div>
              <span className="text-xs font-bold text-[#A8D94D] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                <span>{todayHydration.percent}%</span>
                <ChevronRight size={14} />
              </span>
            </div>

            <div className="mt-1">
              <div className="text-xl font-bold text-white font-serif">
                {todayHydration.consumedMl.toLocaleString('pt-BR')}{' '}
                <span className="text-xs font-normal text-[#8EA092]">/ {todayHydration.targetMl.toLocaleString('pt-BR')} ml</span>
              </div>
              <div className="text-[11px] text-[#8EA092] mt-0.5">
                Garrafas: <strong className="text-white">{todayHydration.bottlesConsumed} de {todayHydration.bottlesTarget}</strong>
                {todayHydration.nextIntake && (
                  <span className="ml-1.5 text-[#A8D94D]">
                    • Próx.: {todayHydration.nextIntake.time}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden mt-3 border border-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#63B532] to-[#A8D94D] transition-all"
                style={{ width: `${Math.min(100, todayHydration.percent)}%` }}
              />
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-[#8EA092]">Garrafa {todayHydration.bottleMl}ml</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                logWaterIntake(todayHydration.bottleMl, 'Garrafa Rápida');
              }}
              className="px-2.5 py-1 rounded-xl bg-[#63B532] hover:bg-[#A8D94D] text-[#082817] text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Plus size={12} />
              Registrar Água
            </button>
          </div>
        </div>

        {/* Widget 2: Nutritional Progress preview */}
        <div
          onClick={() => setActiveTab('nutrition')}
          className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#0D2817] to-[#123D24] border border-[#63B532]/30 hover:border-[#63B532] transition-all cursor-pointer group shadow-md"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#63B532]/20 text-[#63B532]">
                <Activity size={16} />
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Progresso Nutricional Hoje
              </span>
            </div>
            <span className="text-xs font-bold text-[#A8D94D] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
              <span>Detalhes</span>
              <ChevronRight size={14} />
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="p-2.5 rounded-xl bg-black/25 border border-[#1B472C]/60">
              <span className="text-[10px] text-[#8EA092] block">Carbs Líq.</span>
              <span className="text-sm font-black text-[#A8D94D]">18g <span className="text-[9px] font-normal text-[#8EA092]">/ 22g</span></span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/25 border border-[#1B472C]/60">
              <span className="text-[10px] text-[#8EA092] block">Proteínas</span>
              <span className="text-sm font-black text-[#63B532]">92g <span className="text-[9px] font-normal text-[#8EA092]">/ 110g</span></span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/25 border border-[#1B472C]/60">
              <span className="text-[10px] text-[#8EA092] block">Gorduras</span>
              <span className="text-sm font-black text-amber-400">124g <span className="text-[9px] font-normal text-[#8EA092]">/ 145g</span></span>
            </div>
          </div>
        </div>

        {/* Widget 2: Next Planned Dish */}
        {nextPlannedMeal ? (
          <div
            onClick={() => openRecipeDetail(nextPlannedMeal.recipe)}
            className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#0D2817] to-[#123D24] border border-[#1B472C] hover:border-[#63B532]/60 transition-all cursor-pointer group shadow-md flex items-center gap-3.5"
          >
            <img
              src={nextPlannedMeal.recipe.image}
              alt={nextPlannedMeal.recipe.title}
              className="w-16 h-16 rounded-2xl object-cover shrink-0 border border-[#1B472C] group-hover:scale-105 transition-transform"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#63B532]/20 text-[#A8D94D]">
                  {nextPlannedMeal.day} • {nextPlannedMeal.meal}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white truncate mt-1 group-hover:text-[#A8D94D]">
                {nextPlannedMeal.recipe.title}
              </h4>
              <p className="text-[11px] text-[#8EA092] mt-0.5">
                {nextPlannedMeal.recipe.prepTime + nextPlannedMeal.recipe.cookTime} min • {nextPlannedMeal.recipe.nutrition.netCarbs}g carbs líquidos
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setActiveTab('planner')}
            className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#0D2817] to-[#123D24] border border-[#1B472C] hover:border-[#63B532]/60 transition-all cursor-pointer flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#A8D94D]">Planejamento Semanal</span>
              <h4 className="text-sm font-bold text-white mt-1">Organize suas refeições da semana</h4>
              <p className="text-[11px] text-[#8EA092]">Gere lista de compras automática com um clique</p>
            </div>
            <Calendar size={22} className="text-[#63B532]" />
          </div>
        )}
      </div>

      {/* Chef IA Interactive Banner */}
      <div
        id="banner-chef-ia"
        onClick={() => setShowChefModal(true)}
        className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#123D24] via-[#0D2817] to-[#123D24] border border-[#63B532]/40 shadow-xl cursor-pointer hover:border-[#63B532] transition-all gap-4"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#63B532] text-[#082817] shadow-lg shadow-[#63B532]/30 group-hover:scale-110 transition-transform flex-shrink-0">
            <Sparkles size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-extrabold text-white font-display">
                Fale com o Chef KetoNobre IA
              </span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#63B532]/20 text-[#A8D94D]">
                Catálogo {recipes.length} Receitas
              </span>
            </div>
            <p className="text-xs text-[#8EA092] mt-0.5">
              "Tenho frango, ovos e queijo na geladeira, o que posso preparar em 20 minutos?"
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#A8D94D] group-hover:translate-x-1 transition-transform self-end sm:self-center">
          <span>Abrir consultor</span>
          <ChevronRight size={16} />
        </div>
      </div>

      {/* Scanner Interactive Banner */}
      <div
        id="home-banner-scanner"
        onClick={() => setActiveTab('scanner')}
        className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#0D2817] via-[#092013] to-[#0D2817] border border-[#63B532]/30 shadow-xl cursor-pointer hover:border-[#63B532] transition-all gap-4"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#123D24] text-[#63B532] border border-[#63B532]/40 shadow-lg shadow-[#63B532]/10 group-hover:scale-110 transition-transform flex-shrink-0">
            <Scan size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-extrabold text-white font-display">
                Scanner de Alimentos & Rótulos
              </span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#63B532]/20 text-[#A8D94D]">
                Novo
              </span>
            </div>
            <p className="text-xs text-[#8EA092] mt-0.5">
              Fotografe um prato ou tabela nutricional para descobrir Net Carbs e compatibilidade keto.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#63B532] group-hover:translate-x-1 transition-transform self-end sm:self-center">
          <span>Escanear agora</span>
          <ChevronRight size={16} />
        </div>
      </div>

      {/* CONTINUAR COZINHANDO (se aplicável) */}
      {continueCookingRecipe && (
        <div className="p-4 rounded-3xl bg-[#0D2817] border border-[#1B472C] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <img
              src={continueCookingRecipe.image}
              alt={continueCookingRecipe.title}
              className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-[#1B472C]"
            />
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold text-[#A8D94D]">
                Continuar Cozinhando
              </span>
              <h4 className="text-sm font-bold text-white truncate">
                {continueCookingRecipe.title}
              </h4>
              <p className="text-[11px] text-[#8EA092]">
                {continueCookingRecipe.prepTime + continueCookingRecipe.cookTime} min • Modo imersivo passo a passo
              </p>
            </div>
          </div>
          <button
            onClick={() => startCooking(continueCookingRecipe)}
            className="px-4 py-2 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold shadow-md flex items-center gap-1.5 shrink-0"
          >
            <Play size={14} className="fill-[#082817]" />
            <span>Retomar</span>
          </button>
        </div>
      )}

      {/* Receita do Dia */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
              Receita do Dia
            </h2>
            <p className="text-xs text-[#8EA092]">
              Seleção do chef para um jantar cetogênico inesquecível
            </p>
          </div>
          <button
            onClick={() => openRecipeDetail(recipeOfTheDay)}
            className="text-xs font-bold text-[#A8D94D] hover:underline flex items-center gap-1"
          >
            <span>Ver detalhes</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <RecipeCard recipe={recipeOfTheDay} featured={true} />
      </section>

      {/* Categorias Gastronômicas */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
              Categorias Gastronômicas
            </h2>
            <p className="text-xs text-[#8EA092]">Pratos organizados para cada momento do seu dia</p>
          </div>
          <button
            onClick={() => {
              setSelectedExploreFilter('all');
              setActiveTab('explore');
            }}
            className="text-xs text-[#8EA092] hover:text-[#A8D94D]"
          >
            Ver todas
          </button>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
          {HOME_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group flex-shrink-0 flex flex-col items-center gap-2 p-2.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 hover:bg-[#123D24]/50 transition-all w-24 sm:w-28"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden relative shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
              </div>
              <span className="text-[11px] font-bold text-white text-center truncate w-full group-hover:text-[#A8D94D]">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Ações Rápidas (4 Ações solicitadas) */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
          Ações Rápidas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <button
            id="shortcut-planner"
            onClick={() => setActiveTab('planner')}
            className="flex flex-col gap-2 p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 hover:bg-[#123D24]/40 transition-all text-left group"
          >
            <div className="p-2.5 rounded-xl bg-[#123D24] text-[#63B532] w-fit group-hover:scale-110 transition-transform">
              <Calendar size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#A8D94D]">
                Planejar Semana
              </h4>
              <p className="text-[10px] text-[#8EA092]">Cardápio inteligente</p>
            </div>
          </button>

          <button
            id="shortcut-shopping"
            onClick={() => setActiveTab('shopping')}
            className="flex flex-col gap-2 p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 hover:bg-[#123D24]/40 transition-all text-left group"
          >
            <div className="p-2.5 rounded-xl bg-[#123D24] text-[#A8D94D] w-fit group-hover:scale-110 transition-transform">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#A8D94D]">
                Lista de Compras
              </h4>
              <p className="text-[10px] text-[#8EA092]">Consolidada por setor</p>
            </div>
          </button>

          <button
            id="shortcut-cook"
            onClick={() => startCooking(recipeOfTheDay)}
            className="flex flex-col gap-2 p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 hover:bg-[#123D24]/40 transition-all text-left group"
          >
            <div className="p-2.5 rounded-xl bg-[#63B532] text-[#082817] w-fit shadow-md shadow-[#63B532]/25 group-hover:scale-110 transition-transform">
              <ChefHat size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#A8D94D]">
                Começar a Cozinhar
              </h4>
              <p className="text-[10px] text-[#8EA092]">Modo imersivo com timer</p>
            </div>
          </button>

          <button
            id="shortcut-chef-ia"
            onClick={() => setShowChefModal(true)}
            className="flex flex-col gap-2 p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 hover:bg-[#123D24]/40 transition-all text-left group"
          >
            <div className="p-2.5 rounded-xl bg-[#123D24] text-[#A8D94D] w-fit group-hover:scale-110 transition-transform">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#A8D94D]">
                Chef IA
              </h4>
              <p className="text-[10px] text-[#8EA092]">Consultor de geladeira</p>
            </div>
          </button>
        </div>
      </section>

      {/* Para Você */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
              Recomendadas Para Você
            </h2>
            <p className="text-xs text-[#8EA092]">Baseadas no seu perfil e preferências cetogênicas</p>
          </div>
          <button
            onClick={() => setActiveTab('explore')}
            className="text-xs font-bold text-[#8EA092] hover:text-[#A8D94D] flex items-center gap-1"
          >
            <span>Ver mais</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {forYouRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Refeições Rápidas */}
      {quickRecipes.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#63B532]" />
              <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
                Pronto em Menos de 20 Minutos
              </h2>
            </div>
            <span className="text-xs text-[#8EA092]">Praticidade máxima</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      )}

      {/* Dicas de Saúde 💡 Highlight Section */}
      {featuredHealthTips.length > 0 && (
        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Lightbulb size={18} className="text-[#63B532]" />
                <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
                  Dicas de Saúde 💡
                </h2>
              </div>
              <p className="text-xs text-[#8EA092]">Conteúdo educativo e prático baseado em evidências</p>
            </div>
            <button
              id="home-btn-see-all-tips"
              onClick={() => setActiveTab('tips')}
              className="text-xs font-bold text-[#63B532] hover:text-[#A8D94D] flex items-center gap-1"
            >
              <span>Ver todas as dicas</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredHealthTips.map((tip) => (
              <div
                key={tip.id}
                onClick={() => {
                  openTipDetail(tip);
                  setActiveTab('tips');
                }}
                className="group p-4 rounded-3xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/70 transition-all cursor-pointer flex gap-4 items-center shadow-lg"
              >
                <img
                  src={tip.cover_image}
                  alt={tip.title}
                  className="w-20 h-20 rounded-2xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase text-[#A8D94D] bg-[#123D24] px-2 py-0.5 rounded-md border border-[#63B532]/30">
                      {tip.category}
                    </span>
                    <span className="text-[11px] text-[#8EA092] flex items-center gap-1">
                      <Clock size={11} className="text-[#63B532]" />
                      {tip.reading_time} min
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#A8D94D] transition-colors line-clamp-1 leading-tight">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#8EA092] line-clamp-1">
                    {tip.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
