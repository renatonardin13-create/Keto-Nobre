import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
  Clock,
  Flame,
  Award,
  Filter,
  Check,
  ArrowUpDown,
  Zap,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EXPLORE_FILTERS } from '../../data/categories';
import { RecipeHorizontalCard } from '../recipe/RecipeHorizontalCard';
import { RecipeCard } from '../recipe/RecipeCard';

type SortOption = 'recent' | 'quick' | 'protein' | 'carbs' | 'favorites';

export const ExploreScreen: React.FC = () => {
  const {
    recipes,
    searchQuery,
    setSearchQuery,
    selectedExploreFilter,
    setSelectedExploreFilter,
    favorites,
  } = useApp();

  const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);
  const [maxTime, setMaxTime] = useState<number>(60);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [pricingFilter, setPricingFilter] = useState<'all' | 'free' | 'premium'>('all');
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [maxCarbs, setMaxCarbs] = useState<number>(15);
  const [minProtein, setMinProtein] = useState<number>(0);
  const [maxCalories, setMaxCalories] = useState<number>(850);
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Filter & Search logic across 500 recipes
  const filteredAndSortedRecipes = useMemo(() => {
    const list = recipes.filter((recipe) => {
      // Category filter
      if (selectedExploreFilter !== 'all' && recipe.category !== selectedExploreFilter) {
        return false;
      }

      // Search Query: checks title, description, category, and ingredients
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const totalTime = recipe.prepTime + recipe.cookTime;

        if ((query.includes('20 minuto') || query.includes('rápida') || query.includes('rapida')) && totalTime > 20) {
          return false;
        }

        const matchTitle = recipe.title.toLowerCase().includes(query);
        const matchDesc = recipe.description.toLowerCase().includes(query);
        const matchCategory = recipe.categoryName.toLowerCase().includes(query);
        const matchIngredient = recipe.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(query)
        );

        if (!matchTitle && !matchDesc && !matchCategory && !matchIngredient) {
          return false;
        }
      }

      // Advanced filters
      const totalTime = recipe.prepTime + recipe.cookTime;
      if (totalTime > maxTime) return false;
      if (selectedDifficulty !== 'all' && recipe.difficulty !== selectedDifficulty) return false;
      
      // Pricing Filter
      if (pricingFilter === 'premium' && !recipe.isPremium) return false;
      if (pricingFilter === 'free' && recipe.isPremium) return false;

      // Favorites
      if (onlyFavorites && !favorites.includes(recipe.id)) return false;

      // Nutrition limits
      if (recipe.nutrition.netCarbs > maxCarbs) return false;
      if (recipe.nutrition.protein < minProtein) return false;
      if (recipe.nutrition.calories > maxCalories) return false;

      return true;
    });

    // Sorting
    return list.sort((a, b) => {
      if (sortBy === 'quick') {
        return (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime);
      }
      if (sortBy === 'protein') {
        return b.nutrition.protein - a.nutrition.protein;
      }
      if (sortBy === 'carbs') {
        return a.nutrition.netCarbs - b.nutrition.netCarbs;
      }
      if (sortBy === 'favorites') {
        const aFav = favorites.includes(a.id) ? 1 : 0;
        const bFav = favorites.includes(b.id) ? 1 : 0;
        return bFav - aFav;
      }
      // 'recent'
      return (b.id > a.id ? 1 : -1);
    });
  }, [
    recipes,
    selectedExploreFilter,
    searchQuery,
    maxTime,
    selectedDifficulty,
    pricingFilter,
    onlyFavorites,
    maxCarbs,
    minProtein,
    maxCalories,
    sortBy,
    favorites,
  ]);

  // Paginated slice for optimal performance
  const visibleRecipes = useMemo(() => {
    return filteredAndSortedRecipes.slice(0, visibleCount);
  }, [filteredAndSortedRecipes, visibleCount]);

  const resetFilters = () => {
    setMaxTime(60);
    setSelectedDifficulty('all');
    setPricingFilter('all');
    setOnlyFavorites(false);
    setMaxCarbs(15);
    setMinProtein(0);
    setMaxCalories(850);
    setSelectedExploreFilter('all');
    setSearchQuery('');
    setSortBy('recent');
    setVisibleCount(24);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  return (
    <div id="explore-screen" className="p-4 sm:p-6 lg:p-8 space-y-6 pb-28 select-none w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white font-display">
            Explorar Catálogo KetoNobre
          </h1>
          <p className="text-xs sm:text-sm text-[#8EA092] mt-0.5">
            {recipes.length} receitas nobres completas com busca por ingrediente, macros e tempo
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-xs text-[#8EA092]">
            <ArrowUpDown size={14} className="text-[#63B532]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent text-white text-xs outline-none font-semibold cursor-pointer"
            >
              <option value="recent" className="bg-[#0D2817] text-white">Mais Recentes</option>
              <option value="quick" className="bg-[#0D2817] text-white">Mais Rápidas</option>
              <option value="protein" className="bg-[#0D2817] text-white">Maior Proteína</option>
              <option value="carbs" className="bg-[#0D2817] text-white">Menor Carboidrato</option>
              <option value="favorites" className="bg-[#0D2817] text-white">Minhas Favoritas</option>
            </select>
          </div>

          {/* Filter Modal Button */}
          <button
            id="btn-toggle-filter-modal"
            onClick={() => setShowAdvancedFilters(true)}
            className="relative p-2.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-[#8EA092] hover:text-[#63B532] hover:border-[#63B532] transition-colors"
            title="Filtros avançados"
          >
            <SlidersHorizontal size={18} />
            {(pricingFilter !== 'all' || onlyFavorites || maxTime < 60 || selectedDifficulty !== 'all' || maxCarbs < 15 || minProtein > 0) && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#63B532] ring-2 ring-[#0D2817]" />
            )}
          </button>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] focus-within:border-[#63B532] transition-colors">
        <Search size={18} className="text-[#8EA092]" />
        <input
          id="explore-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(24);
          }}
          placeholder="Buscar por título, ingrediente (ex: salmão, abacate, queijo brie)..."
          className="bg-transparent text-xs text-white placeholder-[#8EA092] w-full outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#8EA092] hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Horizontal Category Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {EXPLORE_FILTERS.map((filter) => {
          const isActive = selectedExploreFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => {
                setSelectedExploreFilter(filter.id);
                setVisibleCount(24);
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-[#63B532] text-[#082817] shadow-md shadow-[#63B532]/20'
                  : 'bg-[#0D2817] text-[#8EA092] border border-[#1B472C] hover:border-[#63B532]/40 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Result Count and View Mode */}
      <div className="flex items-center justify-between px-1 pt-1 text-xs text-[#8EA092]">
        <span className="font-semibold text-white">
          Exibindo {Math.min(visibleCount, filteredAndSortedRecipes.length)} de {filteredAndSortedRecipes.length} receitas
        </span>

        <div className="flex items-center gap-1 bg-[#0D2817] border border-[#1B472C] p-0.5 rounded-lg">
          <button
            onClick={() => setViewMode('list')}
            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-colors ${
              viewMode === 'list' ? 'bg-[#123D24] text-[#A8D94D]' : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Lista
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-colors ${
              viewMode === 'grid' ? 'bg-[#123D24] text-[#A8D94D]' : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Grade
          </button>
        </div>
      </div>

      {/* Recipes List / Grid */}
      {filteredAndSortedRecipes.length === 0 ? (
        <div className="py-16 text-center space-y-3 bg-[#0D2817] rounded-3xl border border-[#1B472C] p-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#123D24] flex items-center justify-center text-[#8EA092]">
            <Filter size={24} />
          </div>
          <h3 className="text-sm font-bold text-white">Nenhuma receita encontrada</h3>
          <p className="text-xs text-[#8EA092] max-w-xs mx-auto">
            Tente buscar com outros termos ou redefina os filtros aplicados.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-[#A8D94D] text-xs font-bold border border-[#63B532]/40 transition-colors"
          >
            Limpar todos os filtros
          </button>
        </div>
      ) : viewMode === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {visibleRecipes.map((recipe) => (
            <RecipeHorizontalCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visibleRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

      {/* Efficient Pagination Load More Button */}
      {visibleCount < filteredAndSortedRecipes.length && (
        <div className="text-center pt-4 pb-2">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-2xl bg-[#123D24] hover:bg-[#184d2f] text-[#A8D94D] border border-[#63B532]/40 text-xs font-extrabold shadow-md transition-all hover:scale-105"
          >
            Carregar mais 24 receitas ({filteredAndSortedRecipes.length - visibleCount} restantes)
          </button>
        </div>
      )}

      {/* Advanced Filters Drawer / Modal */}
      {showAdvancedFilters && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#0D2817] border border-[#1B472C] rounded-t-3xl sm:rounded-3xl p-5 space-y-5 text-white max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#1B472C] pb-3">
              <h3 className="text-base font-bold font-display text-white">Filtros Avançados</h3>
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="p-1 rounded-full text-[#8EA092] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Acesso: Gratuita / Premium / Todas */}
            <div className="space-y-1.5">
              <label className="text-xs text-[#8EA092] block">Tipo de Receita:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'all', label: 'Todas' },
                  { id: 'free', label: 'Gratuitas' },
                  { id: 'premium', label: 'VIP Premium' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPricingFilter(item.id as any)}
                    className={`py-2 px-1 text-xs rounded-xl font-semibold border transition-all ${
                      pricingFilter === item.id
                        ? 'bg-[#123D24] text-[#A8D94D] border-[#63B532]'
                        : 'bg-[#071A0E] text-[#8EA092] border-[#1B472C]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tempo máximo */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#8EA092]">Tempo máximo total:</span>
                <span className="font-bold text-[#A8D94D]">{maxTime} minutos</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={maxTime}
                onChange={(e) => setMaxTime(Number(e.target.value))}
                className="w-full accent-[#63B532] cursor-pointer"
              />
            </div>

            {/* Carboidratos Líquidos Máximos */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#8EA092]">Carboidratos líquidos máximos:</span>
                <span className="font-bold text-[#63B532]">{maxCarbs}g</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={maxCarbs}
                onChange={(e) => setMaxCarbs(Number(e.target.value))}
                className="w-full accent-[#63B532] cursor-pointer"
              />
            </div>

            {/* Proteína Mínima */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#8EA092]">Proteína mínima por porção:</span>
                <span className="font-bold text-[#63B532]">{minProtein}g</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={minProtein}
                onChange={(e) => setMinProtein(Number(e.target.value))}
                className="w-full accent-[#63B532] cursor-pointer"
              />
            </div>

            {/* Dificuldade */}
            <div className="space-y-2">
              <label className="text-xs text-[#8EA092] block">Dificuldade:</label>
              <div className="grid grid-cols-4 gap-2">
                {['all', 'easy', 'medium', 'hard'].map((diff) => {
                  const labelMap: Record<string, string> = {
                    all: 'Todas',
                    easy: 'Fácil',
                    medium: 'Média',
                    hard: 'Alta',
                  };
                  return (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`py-2 px-1 text-xs rounded-xl font-semibold border transition-all ${
                        selectedDifficulty === diff
                          ? 'bg-[#123D24] text-[#A8D94D] border-[#63B532]'
                          : 'bg-[#071A0E] text-[#8EA092] border-[#1B472C]'
                      }`}
                    >
                      {labelMap[diff]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Checkbox: Apenas Favoritas */}
            <label
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className="flex items-center justify-between p-3 rounded-xl bg-[#071A0E] border border-[#1B472C] cursor-pointer"
            >
              <span className="text-xs font-medium text-white">❤️ Apenas salvas nos favoritos</span>
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                  onlyFavorites ? 'bg-[#63B532] border-[#63B532] text-black' : 'border-[#1B472C]'
                }`}
              >
                {onlyFavorites && <Check size={14} className="stroke-[3px]" />}
              </div>
            </label>

            {/* Bottom Modal Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={resetFilters}
                className="flex-1 py-3 px-4 rounded-xl border border-[#1B472C] text-xs font-semibold text-[#8EA092] hover:text-white"
              >
                Limpar
              </button>
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] font-extrabold text-xs shadow-lg shadow-[#63B532]/25"
              >
                Aplicar filtros
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
