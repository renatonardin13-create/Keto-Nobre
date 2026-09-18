import React, { useState } from 'react';
import {
  ShoppingBag,
  Plus,
  Trash2,
  Check,
  Share2,
  Copy,
  Calendar,
  Layers,
  Sparkles,
  CheckCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ShoppingItem } from '../../types';

export const ShoppingScreen: React.FC = () => {
  const {
    shoppingList,
    toggleShoppingItem,
    addShoppingItem,
    deleteShoppingItem,
    clearCheckedShoppingItems,
    checkAllShoppingItems,
    setActiveTab,
    showToast,
  } = useApp();

  const [viewMode, setViewMode] = useState<'category' | 'recipe'>('category');
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemQuantity, setNewItemQuantity] = useState<string>('');
  const [newItemCategory, setNewItemCategory] = useState<ShoppingItem['category']>('Vegetais');

  const categoriesList: ShoppingItem['category'][] = [
    'Carnes',
    'Vegetais',
    'Laticínios',
    'Despensa',
    'Temperos',
    'Outros',
  ];

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    addShoppingItem(newItemName, newItemQuantity || '1 un', newItemCategory);
    setNewItemName('');
    setNewItemQuantity('');
  };

  const generateFormattedText = () => {
    const lines = [
      '🛒 *Lista de Compras KetoNobre*',
      'Receitas que Transformam',
      '--------------------------------',
      ...shoppingList.map(
        (i) => `${i.checked ? '☑️ [OK]' : '◻️ [ ]'} ${i.ingredient} - ${i.quantity} (${i.category})`
      ),
      '--------------------------------',
      'KetoNobre • Estilo de Vida Cetogênico',
    ];
    return lines.join('\n');
  };

  const handleCopyList = async () => {
    if (shoppingList.length === 0) {
      showToast('Sua lista de compras está vazia.');
      return;
    }
    const text = generateFormattedText();
    try {
      await navigator.clipboard.writeText(text);
      showToast('📋 Lista copiada para a área de transferência!', 'success');
    } catch (e) {
      showToast('Erro ao copiar lista.');
    }
  };

  const handleShareList = async () => {
    if (shoppingList.length === 0) {
      showToast('Sua lista de compras está vazia.');
      return;
    }

    const text = generateFormattedText();

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Lista de Compras KetoNobre',
          text,
        });
      } catch (e) {
        handleCopyList();
      }
    } else {
      handleCopyList();
    }
  };

  const totalItems = shoppingList.length;
  const checkedItems = shoppingList.filter((i) => i.checked).length;
  const progress = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  // Normalise category mapping so 'Proteínas' displays under 'Carnes'
  const getNormalizedCategory = (cat: ShoppingItem['category']): ShoppingItem['category'] => {
    if (cat === 'Proteínas') return 'Carnes';
    return categoriesList.includes(cat) ? cat : 'Outros';
  };

  const groupedByCategory = categoriesList
    .map((cat) => ({
      category: cat,
      items: shoppingList.filter((item) => getNormalizedCategory(item.category) === cat),
    }))
    .filter((group) => group.items.length > 0);

  const groupedByRecipe = Array.from(
    new Set(shoppingList.map((i) => i.recipeTitle || 'Itens Avulsos'))
  ).map((title) => ({
    recipeTitle: title,
    items: shoppingList.filter((i) => (i.recipeTitle || 'Itens Avulsos') === title),
  }));

  return (
    <div id="shopping-screen" className="p-4 sm:p-6 lg:p-8 space-y-6 pb-28 select-none max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Lista de Compras
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#123D24] text-[#A8D94D] border border-[#63B532]/30 font-bold">
              Consolidada
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#8EA092] mt-1">
            Quantidades calculadas e organizadas por setor para suas compras cetogênicas
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Copiar texto */}
          <button
            id="btn-copy-shopping-text"
            onClick={handleCopyList}
            className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-[#0D2817] hover:bg-[#123D24] border border-[#1B472C] text-xs font-bold text-white transition-all shadow-sm"
            title="Copiar lista em formato texto"
          >
            <Copy size={15} className="text-[#63B532]" />
            <span>Copiar Texto</span>
          </button>

          {/* Compartilhar */}
          <button
            id="btn-share-shopping-list"
            onClick={handleShareList}
            className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-[#0D2817] hover:bg-[#123D24] border border-[#1B472C] text-xs font-bold text-white transition-all shadow-sm"
            title="Compartilhar lista"
          >
            <Share2 size={15} />
            <span>Compartilhar</span>
          </button>

          <button
            onClick={checkAllShoppingItems}
            className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-[#0D2817] hover:bg-[#123D24] border border-[#1B472C] text-xs font-bold text-[#A8D94D] transition-all"
          >
            <CheckCheck size={15} />
            <span className="hidden sm:inline">Marcar todos</span>
          </button>

          {checkedItems > 0 && (
            <button
              onClick={clearCheckedShoppingItems}
              className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-800/40 text-xs font-bold text-red-300 transition-all"
            >
              <Trash2 size={15} />
              <span>Limpar comprados ({checkedItems})</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress Card (ex: 8/20 comprados) */}
      {totalItems > 0 && (
        <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white">Progresso no supermercado</span>
            <span className="font-extrabold text-[#A8D94D]">
              {checkedItems}/{totalItems} comprados ({progress}%)
            </span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-[#071A0E] overflow-hidden border border-[#1B472C]/40">
            <div
              className="h-full bg-gradient-to-r from-[#63B532] to-[#A8D94D] transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Quick Add Custom Item Form */}
      <form onSubmit={handleAddItem} className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-white">
          <Plus size={15} className="text-[#63B532]" />
          <span>Adicionar item avulso</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
          <div className="sm:col-span-6">
            <input
              type="text"
              placeholder="Nome do item (ex: Azeite de oliva, Sal rosa, Espinafre...)"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-[#071A0E] border border-[#1B472C] text-xs text-white placeholder-[#8EA092] outline-none focus:border-[#63B532]"
            />
          </div>

          <div className="sm:col-span-3">
            <input
              type="text"
              placeholder="Qtd (ex: 500g, 1 un, 2 vidros)"
              value={newItemQuantity}
              onChange={(e) => setNewItemQuantity(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-[#071A0E] border border-[#1B472C] text-xs text-white placeholder-[#8EA092] outline-none focus:border-[#63B532]"
            />
          </div>

          <div className="sm:col-span-2">
            <select
              value={newItemCategory}
              onChange={(e) => setNewItemCategory(e.target.value as ShoppingItem['category'])}
              className="w-full py-2.5 px-2.5 rounded-xl bg-[#071A0E] border border-[#1B472C] text-xs text-white outline-none focus:border-[#63B532]"
            >
              {categoriesList.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-1">
            <button
              type="submit"
              className="w-full h-full py-2.5 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold flex items-center justify-center transition-colors shadow-sm"
              title="Adicionar item"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </form>

      {/* View Mode Toggle: Por Categoria vs Por Receita */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0D2817] border border-[#1B472C]">
          <button
            onClick={() => setViewMode('category')}
            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'category'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Por Categoria
          </button>
          <button
            onClick={() => setViewMode('recipe')}
            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'recipe'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Por Receita
          </button>
        </div>

        <span className="text-xs text-[#8EA092]">
          {totalItems} {totalItems === 1 ? 'item' : 'itens'} na lista
        </span>
      </div>

      {/* Empty State */}
      {totalItems === 0 ? (
        <div className="py-16 text-center space-y-4 rounded-3xl bg-[#0D2817] border border-[#1B472C] p-8">
          <div className="w-16 h-16 rounded-2xl bg-[#123D24] text-[#63B532] flex items-center justify-center mx-auto shadow-inner">
            <ShoppingBag size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">Sua lista de compras está vazia</h3>
            <p className="text-xs text-[#8EA092] max-w-sm mx-auto">
              Gere automaticamente a lista a partir do seu planejamento semanal ou adicione itens avulsos acima.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('planner')}
            className="py-2.5 px-5 rounded-xl bg-[#63B532] text-[#082817] text-xs font-extrabold inline-flex items-center gap-2 shadow-lg shadow-[#63B532]/20 hover:scale-105 transition-transform"
          >
            <Calendar size={16} />
            <span>Abrir Planejador Semanal</span>
          </button>
        </div>
      ) : (
        /* Items View */
        <div className="space-y-6">
          {viewMode === 'category' ? (
            groupedByCategory.map((group) => (
              <div key={group.category} className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#A8D94D]">
                    {group.category} ({group.items.length})
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {group.items.map((item) => (
                    <ShoppingItemCard
                      key={item.id}
                      item={item}
                      onToggle={() => toggleShoppingItem(item.id)}
                      onDelete={() => deleteShoppingItem(item.id)}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            groupedByRecipe.map((group) => (
              <div key={group.recipeTitle} className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A8D94D] px-1">
                  {group.recipeTitle} ({group.items.length})
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {group.items.map((item) => (
                    <ShoppingItemCard
                      key={item.id}
                      item={item}
                      onToggle={() => toggleShoppingItem(item.id)}
                      onDelete={() => deleteShoppingItem(item.id)}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

interface ShoppingItemCardProps {
  item: ShoppingItem;
  onToggle: () => void;
  onDelete: () => void;
}

const ShoppingItemCard: React.FC<ShoppingItemCardProps> = ({ item, onToggle, onDelete }) => {
  return (
    <div
      onClick={onToggle}
      className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer select-none group ${
        item.checked
          ? 'bg-[#082817] border-[#1B472C]/50 opacity-60'
          : 'bg-[#0D2817] border-[#1B472C] hover:border-[#63B532]/50 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors flex-shrink-0 ${
            item.checked
              ? 'bg-[#63B532] border-[#63B532] text-[#082817]'
              : 'border-[#1B472C] bg-[#071A0E] group-hover:border-[#63B532]'
          }`}
        >
          {item.checked && <Check size={13} className="stroke-[3px]" />}
        </div>

        <div className="min-w-0">
          <p
            className={`text-xs font-semibold truncate ${
              item.checked ? 'line-through text-[#8EA092]' : 'text-white'
            }`}
          >
            {item.ingredient}
          </p>
          <div className="flex items-center gap-2 text-[10px] text-[#8EA092]">
            <span className="font-bold text-[#A8D94D]">{item.quantity}</span>
            {item.recipeTitle && (
              <span className="truncate max-w-[120px]">• {item.recipeTitle}</span>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="p-1.5 rounded-lg text-[#8EA092] hover:text-red-400 hover:bg-red-950/30 opacity-0 group-hover:opacity-100 transition-opacity"
        title="Remover item"
      >
        <Trash2 size={13} />
      </button>
    </div>
  );
};
