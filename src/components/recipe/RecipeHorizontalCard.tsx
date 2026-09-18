import React from 'react';
import { Clock, Star, Heart, Crown, ArrowRight } from 'lucide-react';
import { Recipe } from '../../types';
import { useApp } from '../../context/AppContext';

interface RecipeHorizontalCardProps {
  recipe: Recipe;
}

export const RecipeHorizontalCard: React.FC<RecipeHorizontalCardProps> = ({ recipe }) => {
  const { openRecipeDetail, favorites, toggleFavorite, user, setShowPremiumModal } = useApp();
  const isFav = favorites.includes(recipe.id);

  const handleClick = () => {
    if (recipe.isPremium && !user.isPremium) {
      setShowPremiumModal(true);
      return;
    }
    openRecipeDetail(recipe);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  return (
    <div
      id={`recipe-row-${recipe.id}`}
      onClick={handleClick}
      className="group flex items-center gap-3.5 p-2.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/50 shadow-md cursor-pointer transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {recipe.isPremium && (
          <div className="absolute top-1 left-1 p-1 rounded-md bg-amber-500 text-black">
            <Crown size={10} className="fill-black" />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-white group-hover:text-[#A8D94D] truncate transition-colors leading-snug">
          {recipe.title}
        </h4>

        <div className="flex items-center gap-2 text-xs text-[#8EA092] mt-1">
          {recipe.reviewCount > 0 && (
            <>
              <span className="flex items-center text-amber-400 font-bold">
                <Star size={11} className="fill-amber-400 mr-0.5" />
                {recipe.rating}
              </span>
              <span>•</span>
            </>
          )}
          <span className="flex items-center gap-1">
            <Clock size={11} className="text-[#63B532]" />
            {recipe.prepTime + recipe.cookTime} min
          </span>
          <span>•</span>
          <span>{recipe.difficulty}</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#123D24] text-[#A8D94D] font-bold">
            {recipe.nutrition.netCarbs}g carbo líquido
          </span>
          <span className="text-[10px] text-[#8EA092]">
            {recipe.nutrition.calories} kcal
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col items-center justify-between self-stretch py-1">
        <button
          id={`row-fav-btn-${recipe.id}`}
          onClick={handleFavorite}
          className="p-1.5 rounded-full text-[#8EA092] hover:text-[#63B532] active:scale-125 transition-transform"
        >
          <Heart
            size={16}
            className={isFav ? 'text-[#63B532] fill-[#63B532]' : 'text-[#8EA092]'}
          />
        </button>

        <div className="text-[#1B472C] group-hover:text-[#63B532] transition-colors">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};
