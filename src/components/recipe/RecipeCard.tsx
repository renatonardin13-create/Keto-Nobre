import React from 'react';
import { Clock, Star, Heart, Flame, Crown } from 'lucide-react';
import { Recipe } from '../../types';
import { useApp } from '../../context/AppContext';

interface RecipeCardProps {
  recipe: Recipe;
  featured?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured = false }) => {
  const { openRecipeDetail, favorites, toggleFavorite, user, setShowPremiumModal } = useApp();
  const isFav = favorites.includes(recipe.id);

  const handleClick = () => {
    if (recipe.isPremium && !user.isPremium) {
      setShowPremiumModal(true);
      return;
    }
    openRecipeDetail(recipe);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  if (featured) {
    return (
      <div
        id={`recipe-featured-${recipe.id}`}
        onClick={handleClick}
        className="group relative w-full rounded-3xl overflow-hidden bg-[#0D2817] border border-[#1B472C] shadow-2xl cursor-pointer transition-all duration-300 hover:border-[#63B532]/60 hover:shadow-black/70"
      >
        {/* Big Recipe of the Day Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2817] via-[#0D2817]/40 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#082817]/80 backdrop-blur-md border border-[#63B532]/40 text-[#A8D94D] text-xs font-bold tracking-wide">
              <span>🌟 Receita do dia</span>
            </div>

            <button
              id={`fav-btn-featured-${recipe.id}`}
              onClick={handleFavoriteClick}
              className="p-2.5 rounded-full bg-[#082817]/80 backdrop-blur-md border border-[#1B472C] text-white hover:text-[#63B532] active:scale-125 transition-transform duration-200"
              aria-label="Favoritar receita"
            >
              <Heart
                size={18}
                className={isFav ? 'text-[#63B532] fill-[#63B532]' : 'text-white'}
              />
            </button>
          </div>

          {/* Cooking time pill on image */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
            <Clock size={13} className="text-[#63B532]" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
        </div>

        {/* Content body */}
        <div className="p-4 space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {recipe.reviewCount > 0 && (
                <>
                  <span className="flex items-center text-xs font-bold text-amber-400">
                    <Star size={13} className="fill-amber-400 mr-1" />
                    {recipe.rating}
                  </span>
                  <span className="text-[#8EA092] text-xs">({recipe.reviewCount})</span>
                  <span className="text-[#1B472C]">•</span>
                </>
              )}
              <span className="text-xs font-semibold text-[#63B532]">
                {recipe.nutrition.netCarbs}g carbo líquido
              </span>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#A8D94D] transition-colors leading-snug font-display">
              {recipe.title}
            </h3>
            <p className="text-xs text-[#8EA092] line-clamp-1 mt-1">
              {recipe.description}
            </p>
          </div>

          {/* Quick specs and CTA */}
          <div className="flex items-center justify-between pt-1 border-t border-[#1B472C]/60">
            <div className="flex items-center gap-2 text-xs text-[#8EA092]">
              <span>{recipe.difficulty}</span>
              <span>•</span>
              <span>{recipe.categoryName}</span>
            </div>

            <button
              id={`btn-view-${recipe.id}`}
              className="py-2 px-4 rounded-xl bg-[#63B532] hover:bg-[#529e28] active:scale-95 text-[#082817] text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md shadow-[#63B532]/20"
            >
              <span>Ver receita</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Standard vertical card
  return (
    <div
      id={`recipe-card-${recipe.id}`}
      onClick={handleClick}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#0D2817] border border-[#1B472C] shadow-lg cursor-pointer transition-all duration-300 hover:border-[#63B532]/50 hover:shadow-xl hover:-translate-y-0.5"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2817] via-transparent to-transparent" />

        {/* Favorite toggle button */}
        <button
          id={`fav-btn-${recipe.id}`}
          onClick={handleFavoriteClick}
          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-[#082817]/80 backdrop-blur-md border border-[#1B472C] text-white hover:text-[#63B532] active:scale-125 transition-transform"
        >
          <Heart
            size={15}
            className={isFav ? 'text-[#63B532] fill-[#63B532]' : 'text-white'}
          />
        </button>

        {recipe.isPremium && (
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-extrabold shadow-md">
            <Crown size={11} className="fill-black" />
            <span>PREMIUM</span>
          </div>
        )}

        <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-medium text-white">
          <Clock size={11} className="text-[#63B532]" />
          <span>{recipe.prepTime + recipe.cookTime} min</span>
        </div>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#8EA092] mb-1">
            {recipe.reviewCount > 0 ? (
              <span className="flex items-center text-amber-400 font-bold">
                <Star size={11} className="fill-amber-400 mr-1" />
                {recipe.rating}
              </span>
            ) : (
              <span className="text-[#8EA092] text-[10px]">{recipe.categoryName}</span>
            )}
            <span className="text-[#63B532] font-semibold">{recipe.difficulty}</span>
          </div>

          <h4 className="text-sm font-bold text-white group-hover:text-[#A8D94D] transition-colors leading-snug line-clamp-2">
            {recipe.title}
          </h4>
        </div>

        <div className="pt-2 border-t border-[#1B472C]/40 flex items-center justify-between text-[11px]">
          <span className="text-[#8EA092]">{recipe.categoryName}</span>
          <span className="px-2 py-0.5 rounded bg-[#123D24] text-[#A8D94D] font-bold">
            {recipe.nutrition.netCarbs}g carbo
          </span>
        </div>
      </div>
    </div>
  );
};
