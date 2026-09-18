import React, { useState } from 'react';
import {
  Heart,
  Folder,
  Plus,
  X,
  ArrowRight,
  FolderPlus,
  History,
  Clock,
  ChefHat,
  Flame,
  Calendar
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RecipeHorizontalCard } from '../recipe/RecipeHorizontalCard';
import { RecipeCard } from '../recipe/RecipeCard';

export const SavedScreen: React.FC = () => {
  const {
    favorites,
    collections,
    createCollection,
    cookingHistory,
    recipes,
    openRecipeDetail,
    startCooking,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'favorites' | 'collections' | 'history'>('favorites');
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [newCollectionName, setNewCollectionName] = useState<string>('');

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  const selectedCollection = collections.find((c) => c.id === selectedCollectionId);
  const collectionRecipes = selectedCollection
    ? recipes.filter((r) => selectedCollection.recipeIds.includes(r.id))
    : [];

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollectionName.trim()) return;
    createCollection(newCollectionName);
    setNewCollectionName('');
    setShowCreateModal(false);
  };

  return (
    <div id="saved-screen" className="p-4 sm:p-6 lg:p-8 space-y-6 pb-28 select-none w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white font-display">
            Salvos & Histórico
          </h1>
          <p className="text-xs sm:text-sm text-[#8EA092] mt-0.5">
            Suas receitas favoritas, coleções personalizadas e pratos já preparados
          </p>
        </div>

        {activeTab === 'collections' && (
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold shadow-md transition-all self-start sm:self-auto"
          >
            <Plus size={15} />
            <span>Nova Coleção</span>
          </button>
        )}
      </div>

      {/* Segmented 3-Tab Control: Favoritas vs Coleções vs Histórico */}
      <div className="flex items-center justify-between p-1 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
        <button
          onClick={() => {
            setActiveTab('favorites');
            setSelectedCollectionId(null);
          }}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'favorites'
              ? 'bg-[#123D24] text-[#A8D94D] shadow-sm border border-[#63B532]/30'
              : 'text-[#8EA092] hover:text-white'
          }`}
        >
          <Heart size={15} className={activeTab === 'favorites' ? 'fill-current' : ''} />
          <span>Favoritas ({favoriteRecipes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('collections')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'collections'
              ? 'bg-[#123D24] text-[#A8D94D] shadow-sm border border-[#63B532]/30'
              : 'text-[#8EA092] hover:text-white'
          }`}
        >
          <Folder size={15} />
          <span>Coleções ({collections.length})</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('history');
            setSelectedCollectionId(null);
          }}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'history'
              ? 'bg-[#123D24] text-[#A8D94D] shadow-sm border border-[#63B532]/30'
              : 'text-[#8EA092] hover:text-white'
          }`}
        >
          <History size={15} />
          <span>Histórico ({cookingHistory.length})</span>
        </button>
      </div>

      {/* TAB 1: FAVORITAS */}
      {activeTab === 'favorites' && (
        <div className="space-y-4">
          {favoriteRecipes.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-[#0D2817] rounded-3xl border border-[#1B472C] p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#123D24] text-[#63B532] flex items-center justify-center mx-auto">
                <Heart size={28} />
              </div>
              <h4 className="text-base font-bold text-white">Nenhum prato favorito salvo</h4>
              <p className="text-xs text-[#8EA092] max-w-sm mx-auto">
                Toque no ícone de coração em qualquer receita do catálogo para salvá-la aqui para acesso rápido.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {favoriteRecipes.map((recipe) => (
                <RecipeHorizontalCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: COLEÇÕES */}
      {activeTab === 'collections' && (
        <div className="space-y-4">
          {selectedCollection ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedCollectionId(null)}
                  className="text-xs text-[#63B532] font-bold flex items-center gap-1.5 hover:underline"
                >
                  ← Voltar para todas as coleções
                </button>
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{selectedCollection.icon || '📁'}</span>
                  <span>{selectedCollection.name}</span>
                </span>
              </div>

              {collectionRecipes.length === 0 ? (
                <div className="py-12 text-center space-y-2 bg-[#0D2817] rounded-3xl border border-[#1B472C] p-6">
                  <p className="text-xs text-[#8EA092]">Nenhuma receita nesta coleção ainda.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {collectionRecipes.map((recipe) => (
                    <RecipeHorizontalCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {collections.map((col) => {
                const count = col.recipeIds.length;
                return (
                  <div
                    key={col.id}
                    onClick={() => setSelectedCollectionId(col.id)}
                    className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 cursor-pointer transition-all h-32 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{col.icon || '📁'}</span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#123D24] text-[#A8D94D] font-bold">
                        {count} {count === 1 ? 'receita' : 'receitas'}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#A8D94D] truncate">
                        {col.name}
                      </h4>
                      <span className="text-[11px] text-[#8EA092] flex items-center gap-1 mt-0.5">
                        <span>Abrir coleção</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Add Collection Card */}
              <div
                onClick={() => setShowCreateModal(true)}
                className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#0D2817]/40 border border-dashed border-[#1B472C] hover:border-[#63B532]/60 cursor-pointer transition-all h-32 text-center text-[#8EA092] hover:text-white group"
              >
                <FolderPlus size={28} className="text-[#63B532] mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">+ Criar nova coleção</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: HISTÓRICO DE PREPARO */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          {cookingHistory.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-[#0D2817] rounded-3xl border border-[#1B472C] p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#123D24] text-[#63B532] flex items-center justify-center mx-auto">
                <ChefHat size={28} />
              </div>
              <h4 className="text-base font-bold text-white">Nenhum prato preparado ainda</h4>
              <p className="text-xs text-[#8EA092] max-w-sm mx-auto">
                Ao concluir o modo de preparo passo a passo de uma receita, ela será registrada aqui para acompanhar sua jornada cetogênica!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {cookingHistory.map((item) => {
                const recipe = recipes.find((r) => r.id === item.recipeId);
                if (!recipe) return null;

                const dateFormatted = new Date(item.preparedAt || item.cookedAt || Date.now()).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                });

                return (
                  <div
                    key={item.recipeId}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/50 transition-all shadow-md group"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      onClick={() => openRecipeDetail(recipe)}
                      className="w-20 h-20 rounded-xl object-cover cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0" onClick={() => openRecipeDetail(recipe)}>
                      <div className="flex items-center gap-2 text-[10px] text-[#A8D94D] font-bold">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {dateFormatted}
                        </span>
                        <span>•</span>
                        <span>{item.timesPrepared}x preparado</span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white truncate cursor-pointer hover:text-[#A8D94D] transition-colors mt-0.5">
                        {recipe.title}
                      </h4>

                      <div className="flex items-center gap-2 text-[11px] text-[#8EA092] mt-1">
                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                        <span>•</span>
                        <span className="text-[#63B532] font-semibold">
                          {recipe.nutrition.netCarbs}g carbo
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => startCooking(recipe)}
                      className="py-2 px-3 rounded-xl bg-[#123D24] hover:bg-[#63B532] text-[#A8D94D] hover:text-[#082817] text-xs font-bold transition-colors flex items-center gap-1 flex-shrink-0"
                      title="Cozinhar novamente"
                    >
                      <ChefHat size={14} />
                      <span className="hidden sm:inline">Repetir</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Create Collection Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <form
            onSubmit={handleCreateSubmit}
            className="w-full max-w-sm bg-[#0D2817] border border-[#1B472C] rounded-3xl p-6 space-y-4 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#1B472C]">
              <h3 className="text-base font-bold font-display text-white">Nova Coleção</h3>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="text-[#8EA092] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div>
              <label className="text-xs text-[#8EA092] mb-1.5 block">Nome da coleção</label>
              <input
                type="text"
                placeholder="Ex: Jantares Especiais, Lanches de Trabalho"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                autoFocus
                required
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-[#1B472C] text-xs font-bold text-[#8EA092]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold shadow-md"
              >
                Salvar Coleção
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
