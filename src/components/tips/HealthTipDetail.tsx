import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Bookmark,
  Share2,
  ExternalLink,
  ChefHat,
  Sparkles,
  Scan,
  Activity,
  Utensils,
  Check,
  Info,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { HealthTip, Recipe } from '../../types';
import { useApp } from '../../context/AppContext';
import { RecipeCard } from '../recipe/RecipeCard';

interface HealthTipDetailProps {
  tip: HealthTip;
  onBack: () => void;
  onSelectTip?: (tip: HealthTip) => void;
}

export const HealthTipDetail: React.FC<HealthTipDetailProps> = ({ tip, onBack, onSelectTip }) => {
  const {
    savedTips,
    toggleSavedTip,
    healthTips,
    sendTipToChef,
    findRecipesForTip,
    openRecipeDetail,
    setActiveTab,
    showToast,
  } = useApp();

  const [copied, setCopied] = useState<boolean>(false);
  const isSaved = savedTips.includes(tip.id);

  const formattedDate = new Date(tip.created_at).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Find related recipes for this tip
  const relatedRecipes = findRecipesForTip(tip);

  // Find other tips in same category or matching tags
  const relatedTips = healthTips
    .filter((t) => t.id !== tip.id && t.status === 'published')
    .filter((t) => t.category === tip.category || t.tags.some((tag) => tip.tags.includes(tag)))
    .slice(0, 3);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      const url = window.location.origin + `/dicas/${tip.slug}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      showToast('Link do artigo copiado para a área de transferência!', 'success');
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleAskChef = (question?: string) => {
    sendTipToChef(tip, question);
  };

  // Convert markdown content into formatted sections
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-4 space-y-2 text-[#D2E2D6] list-disc list-inside">
            {currentList.map((item, idx) => (
              <li key={idx} className="leading-relaxed text-sm sm:text-base">
                <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const formatInlineMarkdown = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="text-[#A8D94D] italic">$1</em>');
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        currentList.push(trimmed.substring(2));
        return;
      }

      flushList();

      if (!trimmed) {
        return;
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3
            key={index}
            className="text-lg sm:text-xl font-bold text-[#A8D94D] font-display mt-6 mb-2 tracking-wide"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h2
            key={index}
            className="text-xl sm:text-2xl font-extrabold text-white font-display mt-8 mb-3 border-b border-[#1B472C]/60 pb-2"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <div key={index} className="flex items-start gap-3 my-2 text-sm sm:text-base text-[#D2E2D6] leading-relaxed">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#123D24] text-[#63B532] font-bold text-xs flex items-center justify-center border border-[#63B532]/30 mt-0.5">
              {trimmed.match(/^\d+/)?.[0]}
            </span>
            <div dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed.replace(/^\d+\.\s*/, '')) }} />
          </div>
        );
      } else {
        elements.push(
          <p
            key={index}
            className="text-sm sm:text-base text-[#D2E2D6] leading-relaxed my-3 font-normal"
            dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div id={`health-tip-detail-${tip.slug}`} className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-in fade-in duration-300">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          id="btn-back-to-tips"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0D2817] hover:bg-[#123D24] border border-[#1B472C] text-sm font-bold text-white hover:text-[#63B532] transition-all group shadow-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>← Voltar para Dicas</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            id="btn-share-tip"
            onClick={handleShare}
            aria-label="Compartilhar artigo"
            className="p-2.5 rounded-2xl bg-[#0D2817] hover:bg-[#123D24] border border-[#1B472C] text-[#8EA092] hover:text-white transition-all shadow-sm"
            title="Copiar link"
          >
            {copied ? <Check size={18} className="text-[#63B532]" /> : <Share2 size={18} />}
          </button>

          <button
            id="btn-bookmark-tip-detail"
            onClick={() => toggleSavedTip(tip.id)}
            aria-label={isSaved ? 'Remover dos salvos' : 'Salvar dica'}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border transition-all text-xs font-bold shadow-sm ${
              isSaved
                ? 'bg-[#63B532] text-[#071A0E] border-[#63B532]'
                : 'bg-[#0D2817] text-white/90 hover:text-white border-[#1B472C] hover:border-[#63B532]/40'
            }`}
          >
            <Bookmark size={15} fill={isSaved ? 'currentColor' : 'none'} />
            <span className="hidden sm:inline">{isSaved ? 'Salvo' : 'Salvar'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header & Cover */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0D2817] border border-[#1B472C] shadow-2xl">
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <img
            src={tip.cover_image}
            alt={tip.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2817] via-[#0D2817]/60 to-transparent" />

          {/* Badge & Metadata */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#123D24]/90 text-[#A8D94D] border border-[#63B532]/40 backdrop-blur-md">
              {tip.category}
            </span>
            {tip.is_featured && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#63B532] text-[#071A0E]">
                <Sparkles size={11} />
                Destaque
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8 -mt-20 relative z-10">
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#8EA092] mb-3 font-medium">
            <span className="flex items-center gap-1.5 text-[#A8D94D]">
              <Clock size={14} className="text-[#63B532]" />
              {tip.reading_time} min de leitura
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formattedDate}
            </span>
            {tip.views_count && tip.views_count > 0 && (
              <>
                <span>•</span>
                <span>{tip.views_count} leituras</span>
              </>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display leading-tight tracking-tight">
            {tip.title}
          </h1>

          {tip.subtitle && (
            <p className="text-base sm:text-lg text-[#A8D94D] font-medium mt-2 leading-snug">
              {tip.subtitle}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1B472C]/60">
            {tip.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-xl bg-[#123D24] text-[#A8D94D] border border-[#63B532]/20 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Health Disclaimer Notice */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#082817] border border-[#63B532]/30 text-xs text-[#8EA092] leading-relaxed">
        <ShieldAlert size={18} className="text-[#63B532] flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-extrabold text-[#F5F8F2] block mb-0.5">
            Aviso Educativo Importante
          </span>
          Conteúdo educativo e informativo baseado em evidências científicas. Não substitui consulta, diagnóstico ou acompanhamento individualizado por um médico, nutricionista ou profissional de saúde.
        </div>
      </div>

      {/* Article Excerpt Callout */}
      {tip.excerpt && (
        <div className="p-5 rounded-2xl bg-gradient-to-r from-[#123D24]/60 to-[#0D2817] border-l-4 border-[#63B532] text-sm sm:text-base text-[#F5F8F2] font-medium leading-relaxed italic">
          "{tip.excerpt}"
        </div>
      )}

      {/* Full Content Body */}
      <article className="p-6 sm:p-8 rounded-3xl bg-[#0D2817] border border-[#1B472C] shadow-lg">
        {renderFormattedContent(tip.content)}
      </article>

      {/* Sources & References Section */}
      {tip.sources && tip.sources.length > 0 && (
        <div className="p-6 rounded-3xl bg-[#082817] border border-[#1B472C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8D94D]">
            <Info size={14} />
            <span>Fontes & Referências Científicas</span>
          </div>
          <ul className="space-y-2">
            {tip.sources.map((src, i) => (
              <li key={i} className="text-xs text-[#8EA092] flex items-center justify-between gap-2">
                <span className="leading-relaxed">• {src.title}</span>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#63B532] hover:underline font-bold flex-shrink-0 ml-2"
                  >
                    <span>Acessar fonte</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* INTERACTIVE INTEGRATION: Chef IA Callout */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#123D24] via-[#092013] to-[#0D2817] border border-[#63B532]/40 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#082817] text-[#63B532] border border-[#63B532]/30 shadow-md">
            <ChefHat size={22} />
          </div>
          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#A8D94D]">
              Consultoria Culinária Interativa
            </span>
            <h3 className="text-lg font-black text-white font-display">
              Perguntar ao Chef IA sobre este conteúdo
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#D2E2D6] leading-relaxed">
          Tire dúvidas práticas sobre como adaptar as orientações do artigo "{tip.title}" na sua rotina diária ou como preparar pratos saborosos com essas diretrizes.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <button
            id="btn-chef-ask-rotina"
            onClick={() => handleAskChef('Como aplicar as orientações deste artigo na minha rotina alimentar cetogênica?')}
            className="px-3.5 py-2 rounded-xl bg-[#082817] hover:bg-[#123D24] border border-[#1B472C] hover:border-[#63B532] text-xs font-bold text-white transition-all shadow-sm"
          >
            "Como aplicar isso na minha rotina?"
          </button>
          <button
            id="btn-chef-ask-receitas"
            onClick={() => handleAskChef('Quais substituições práticas de ingredientes você me recomenda com base neste tema?')}
            className="px-3.5 py-2 rounded-xl bg-[#082817] hover:bg-[#123D24] border border-[#1B472C] hover:border-[#63B532] text-xs font-bold text-white transition-all shadow-sm"
          >
            "Quais ingredientes priorizar?"
          </button>
          <button
            id="btn-chef-open-chat"
            onClick={() => handleAskChef()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#63B532] hover:bg-[#A8D94D] text-[#071A0E] font-black text-xs transition-all shadow-md ml-auto"
          >
            <Sparkles size={14} />
            <span>Falar com o Chef IA</span>
          </button>
        </div>
      </div>

      {/* INTERACTIVE INTEGRATION: Category / Context Specific Action */}
      {tip.actionType === 'scanner' && (
        <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#63B532]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-[#123D24] text-[#63B532] border border-[#63B532]/30">
              <Scan size={22} />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white font-display">
                Coloque em prática com o Scanner IA
              </h4>
              <p className="text-xs text-[#8EA092] mt-0.5">
                Fotografe a tabela nutricional de qualquer produto para desvendar Net Carbs e polióis.
              </p>
            </div>
          </div>
          <button
            id="btn-tip-open-scanner"
            onClick={() => setActiveTab('scanner')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#A8D94D] text-[#071A0E] font-extrabold text-xs transition-all flex-shrink-0"
          >
            <span>Abrir Scanner</span>
            <ChevronRight size={15} />
          </button>
        </div>
      )}

      {tip.actionType === 'hydration' && (
        <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#63B532]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-[#123D24] text-[#63B532] border border-[#63B532]/30">
              <Activity size={22} />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white font-display">
                Acompanhe sua hidratação e metas
              </h4>
              <p className="text-xs text-[#8EA092] mt-0.5">
                Monitore ingestão de água, minerais e balanço de micronutrientes na sua aba de nutrição.
              </p>
            </div>
          </div>
          <button
            id="btn-tip-open-hydration"
            onClick={() => setActiveTab('nutrition')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#A8D94D] text-[#071A0E] font-extrabold text-xs transition-all flex-shrink-0"
          >
            <span>Abrir Acompanhamento</span>
            <ChevronRight size={15} />
          </button>
        </div>
      )}

      {/* INTERACTIVE INTEGRATION: Real Recipes from Catalog */}
      {relatedRecipes.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1B472C] pb-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#A8D94D]">
                Catálogo Nobre
              </span>
              <h3 className="text-xl font-black text-white font-display flex items-center gap-2 mt-0.5">
                <Utensils size={20} className="text-[#63B532]" />
                <span>
                  {tip.actionLabel || `Receitas recomendadas para este tema`}
                </span>
              </h3>
            </div>
            <button
              id="btn-explore-all-tip-recipes"
              onClick={() => setActiveTab('explore')}
              className="text-xs font-extrabold text-[#63B532] hover:underline self-start sm:self-auto"
            >
              Ver todo o acervo (600 receitas) →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))}
          </div>
        </div>
      )}

      {/* Related Health Tips */}
      {relatedTips.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-[#1B472C]">
          <h3 className="text-lg font-black text-white font-display">
            Você também pode gostar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTips.map((related) => (
              <div
                key={related.id}
                id={`related-tip-${related.id}`}
                onClick={() => (onSelectTip ? onSelectTip(related) : null)}
                className="group p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532] cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase text-[#A8D94D] bg-[#123D24] px-2 py-0.5 rounded-md border border-[#63B532]/20">
                    {related.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#A8D94D] transition-colors mt-2 line-clamp-2 leading-snug">
                    {related.title}
                  </h4>
                  <p className="text-xs text-[#8EA092] line-clamp-2 mt-1">
                    {related.excerpt}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#1B472C]/40 flex items-center justify-between text-[11px] text-[#63B532] font-bold">
                  <span>{related.reading_time} min</span>
                  <span className="group-hover:translate-x-1 transition-transform">Ler →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-4 text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#123D24] hover:bg-[#63B532] text-white hover:text-[#071A0E] font-black text-sm transition-all shadow-lg"
        >
          <ArrowLeft size={16} />
          <span>Voltar para todas as Dicas de Saúde</span>
        </button>
      </div>
    </div>
  );
};
