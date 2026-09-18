import React, { useState, useMemo } from 'react';
import {
  Lightbulb,
  Search,
  Filter,
  Sparkles,
  Bookmark,
  X,
  Clock,
  ArrowRight,
  Heart,
  TrendingUp,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { HealthTip, HealthTipCategory } from '../../types';
import { useApp } from '../../context/AppContext';
import { HealthTipCard } from './HealthTipCard';
import { HealthTipDetail } from './HealthTipDetail';

const CATEGORIES: HealthTipCategory[] = [
  'Todos',
  'Alimentação',
  'Bem-estar',
  'Exercícios',
  'Sono',
  'Saúde Mental',
  'Imunidade',
  'Hidratação',
  'Hábitos',
  'Nutrição',
];

export const HealthTipsScreen: React.FC = () => {
  const {
    healthTips,
    activeTip,
    openTipDetail,
    closeTipDetail,
    savedTips,
    viewedTips,
    user,
    recipes,
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<HealthTipCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);

  // Filter tips by status (published for normal users), category, search, and saved filter
  const filteredTips = useMemo(() => {
    return healthTips
      .filter((tip) => tip.status === 'published')
      .filter((tip) => {
        if (showSavedOnly && !savedTips.includes(tip.id)) {
          return false;
        }

        if (selectedCategory !== 'Todos' && tip.category !== selectedCategory) {
          return false;
        }

        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchTitle = tip.title.toLowerCase().includes(query);
          const matchSubtitle = (tip.subtitle || '').toLowerCase().includes(query);
          const matchExcerpt = tip.excerpt.toLowerCase().includes(query);
          const matchContent = tip.content.toLowerCase().includes(query);
          const matchCategory = tip.category.toLowerCase().includes(query);
          const matchTags = tip.tags.some((tag) => tag.toLowerCase().includes(query));

          return (
            matchTitle ||
            matchSubtitle ||
            matchExcerpt ||
            matchContent ||
            matchCategory ||
            matchTags
          );
        }

        return true;
      });
  }, [healthTips, selectedCategory, searchQuery, showSavedOnly, savedTips]);

  // Featured tips
  const featuredTips = useMemo(() => {
    return healthTips
      .filter((tip) => tip.status === 'published' && tip.is_featured)
      .slice(0, 3);
  }, [healthTips]);

  // Personalized "Recomendado para você"
  // Based on: viewed content categories, user dietary preference, and saved recipe tastes
  const recommendedTips = useMemo(() => {
    if (selectedCategory !== 'Todos' || searchQuery.trim() || showSavedOnly) {
      return [];
    }

    const viewedSet = new Set(viewedTips);
    const favoriteCategories = user.preferences?.favoriteCategories || [];

    return healthTips
      .filter((tip) => tip.status === 'published')
      .map((tip) => {
        let score = 0;
        // Prioritize unviewed or topics matching diet style
        if (!viewedSet.has(tip.id)) score += 2;
        if (tip.tags.some((t) => favoriteCategories.some((fc) => fc.toLowerCase().includes(t)))) {
          score += 3;
        }
        if (tip.category === 'Alimentação' || tip.category === 'Nutrição') {
          score += 2;
        }
        return { tip, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.tip);
  }, [healthTips, selectedCategory, searchQuery, showSavedOnly, viewedTips, user.preferences]);

  // If a tip is actively being viewed in detail mode
  if (activeTip) {
    return (
      <HealthTipDetail
        tip={activeTip}
        onBack={closeTipDetail}
        onSelectTip={(t) => openTipDetail(t)}
      />
    );
  }

  return (
    <div id="health-tips-screen" className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-in fade-in duration-300">
      {/* Hero Header */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0D2817] via-[#082817] to-[#0D2817] border border-[#1B472C] shadow-2xl overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#63B532]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D24] text-[#A8D94D] text-xs font-black uppercase tracking-wider border border-[#63B532]/30">
            <Lightbulb size={14} className="text-[#63B532]" />
            <span>Educação em Saúde</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Dicas de Saúde <span className="text-[#63B532]">💡</span>
          </h1>

          <p className="text-lg sm:text-xl font-bold text-[#A8D94D]">
            Conteúdo educativo para sua saúde
          </p>

          <p className="text-sm sm:text-base text-[#D2E2D6] leading-relaxed max-w-2xl font-normal">
            Informações confiáveis, práticas e baseadas em evidências para ajudar você a cuidar melhor da sua alimentação, rotina e bem-estar.
          </p>
        </div>

        {/* Quick Stats or Disclaimer pill */}
        <div className="mt-6 pt-5 border-t border-[#1B472C]/60 flex flex-wrap items-center justify-between gap-4 text-xs text-[#8EA092]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#63B532]" />
            <span>Baseado em evidências e literatura científica</span>
          </div>

          <div className="flex items-center gap-3">
            <span>{healthTips.filter((t) => t.status === 'published').length} artigos publicados</span>
            <span>•</span>
            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
                showSavedOnly
                  ? 'bg-[#63B532] text-[#071A0E] border-[#63B532]'
                  : 'bg-[#123D24] text-[#A8D94D] border-[#63B532]/30 hover:bg-[#1B472C]'
              }`}
            >
              <Bookmark size={13} fill={showSavedOnly ? 'currentColor' : 'none'} />
              <span>Salvos ({savedTips.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8EA092]">
            <Search size={18} />
          </div>
          <input
            id="input-search-health-tips"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar dicas por título, assunto, fibras, sono, hidratação..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-[#0D2817] border border-[#1B472C] focus:border-[#63B532] focus:ring-2 focus:ring-[#63B532]/20 text-white placeholder-[#8EA092] text-sm transition-all shadow-inner outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8EA092] hover:text-white"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Scrollable Categories Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none select-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat && !showSavedOnly;
            return (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowSavedOnly(false);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#63B532] text-[#071A0E] border-[#63B532] shadow-md shadow-[#63B532]/20 scale-105'
                    : 'bg-[#0D2817] text-[#8EA092] hover:text-white border-[#1B472C] hover:border-[#63B532]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION: Dicas em Destaque (Only when no search & 'Todos' category) */}
      {selectedCategory === 'Todos' && !searchQuery.trim() && !showSavedOnly && featuredTips.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-[#63B532]" />
              <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                Dicas em Destaque
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {featuredTips.map((tip) => (
              <HealthTipCard
                key={tip.id}
                tip={tip}
                onClick={() => openTipDetail(tip)}
                featured={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* SECTION: Recomendado para você (When 'Todos' and no active search) */}
      {recommendedTips.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-[#A8D94D]" />
              <h2 className="text-lg sm:text-xl font-black text-white font-display">
                Recomendado para você
              </h2>
            </div>
            <span className="text-xs text-[#8EA092]">Baseado em seus hábitos e preferências</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedTips.map((tip) => (
              <HealthTipCard
                key={tip.id}
                tip={tip}
                onClick={() => openTipDetail(tip)}
              />
            ))}
          </div>
        </div>
      )}

      {/* SECTION: Todas as Dicas / Resultado do Filtro */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-[#1B472C] pb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-black text-white font-display">
              {showSavedOnly
                ? 'Dicas Salvas'
                : selectedCategory === 'Todos'
                ? 'Todos os Artigos Educativos'
                : `Dicas de ${selectedCategory}`}
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#123D24] text-[#A8D94D] border border-[#63B532]/30 font-bold">
              {filteredTips.length}
            </span>
          </div>

          {(selectedCategory !== 'Todos' || searchQuery || showSavedOnly) && (
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
                setShowSavedOnly(false);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#63B532] hover:underline"
            >
              <RotateCcw size={13} />
              <span>Ver todas as dicas</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredTips.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-[#0D2817] border border-[#1B472C] space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#123D24] text-[#63B532] flex items-center justify-center mx-auto border border-[#63B532]/30 shadow-inner">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-lg font-bold text-white">
              {showSavedOnly
                ? 'Você ainda não salvou nenhuma dica.'
                : 'Não encontramos dicas nessa categoria.'}
            </h3>
            <p className="text-xs sm:text-sm text-[#8EA092] max-w-md mx-auto">
              {showSavedOnly
                ? 'Clique no ícone de marcador nos artigos para salvá-los e consultá-los com facilidade quando quiser.'
                : 'Tente utilizar outros termos na busca ou selecione outra categoria para explorar os conteúdos educativos.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
                setShowSavedOnly(false);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#63B532] text-[#071A0E] font-black text-xs hover:bg-[#A8D94D] transition-all shadow-md"
            >
              <span>Restaurar todos os filtros</span>
            </button>
          </div>
        ) : (
          /* Grid of Health Tip Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTips.map((tip) => (
              <HealthTipCard
                key={tip.id}
                tip={tip}
                onClick={() => openTipDetail(tip)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
