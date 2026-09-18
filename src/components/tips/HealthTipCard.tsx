import React from 'react';
import { Clock, Calendar, ArrowRight, Bookmark, Sparkles, CheckCircle } from 'lucide-react';
import { HealthTip } from '../../types';
import { useApp } from '../../context/AppContext';

interface HealthTipCardProps {
  tip: HealthTip;
  onClick: () => void;
  featured?: boolean;
}

export const HealthTipCard: React.FC<HealthTipCardProps> = ({ tip, onClick, featured = false }) => {
  const { savedTips, toggleSavedTip } = useApp();
  const isSaved = savedTips.includes(tip.id);

  const formattedDate = new Date(tip.created_at).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  });

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSavedTip(tip.id);
  };

  if (featured) {
    return (
      <div
        id={`health-tip-featured-${tip.id}`}
        onClick={onClick}
        className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/70 transition-all duration-300 shadow-xl hover:shadow-[#63B532]/10 cursor-pointer"
      >
        {/* Cover Image */}
        <div className="relative md:w-5/12 h-52 md:h-auto overflow-hidden flex-shrink-0">
          <img
            src={tip.cover_image}
            alt={tip.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2817] via-transparent to-transparent md:hidden" />
          
          {/* Category Badge & Featured Tag */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#123D24]/90 text-[#A8D94D] backdrop-blur-md border border-[#63B532]/40 shadow-sm">
              {tip.category}
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#63B532] text-[#071A0E] shadow-sm">
              <Sparkles size={11} />
              Destaque
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            id={`btn-bookmark-tip-${tip.id}`}
            onClick={handleBookmarkClick}
            aria-label={isSaved ? 'Remover dos salvos' : 'Salvar dica'}
            className={`absolute top-3.5 right-3.5 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
              isSaved
                ? 'bg-[#63B532] text-[#071A0E]'
                : 'bg-black/50 text-white/80 hover:text-white hover:bg-black/70'
            }`}
          >
            <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-7 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#8EA092] mb-2 font-medium">
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-[#63B532]" />
                {tip.reading_time} min de leitura
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                {formattedDate}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white font-display leading-snug group-hover:text-[#A8D94D] transition-colors">
              {tip.title}
            </h3>

            <p className="text-xs md:text-sm text-[#8EA092] line-clamp-2 md:line-clamp-3 mt-2.5 leading-relaxed">
              {tip.excerpt}
            </p>
          </div>

          <div className="pt-5 flex items-center justify-between border-t border-[#1B472C]/70 mt-4">
            <div className="flex flex-wrap gap-1.5">
              {tip.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#123D24] text-[#A8D94D] border border-[#63B532]/20 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#63B532] group-hover:translate-x-1 transition-transform">
              <span>Ler artigo</span>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Card
  return (
    <div
      id={`health-tip-card-${tip.id}`}
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-3xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 transition-all duration-300 shadow-lg hover:shadow-[#63B532]/5 cursor-pointer"
    >
      {/* Cover Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={tip.cover_image}
          alt={tip.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2817] via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#123D24]/90 text-[#A8D94D] backdrop-blur-md border border-[#63B532]/30 shadow-sm">
            {tip.category}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          id={`btn-bookmark-tip-${tip.id}`}
          onClick={handleBookmarkClick}
          aria-label={isSaved ? 'Remover dos salvos' : 'Salvar dica'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
            isSaved
              ? 'bg-[#63B532] text-[#071A0E]'
              : 'bg-black/50 text-white/80 hover:text-white hover:bg-black/70'
          }`}
        >
          <Bookmark size={14} fill={isSaved ? 'currentColor' : 'none'} />
        </button>

        {/* Reading Time Overlay */}
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
          <Clock size={12} className="text-[#63B532]" />
          <span>{tip.reading_time} min</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-[#8EA092] mb-1.5 font-medium">
            <Calendar size={12} />
            <span>{formattedDate}</span>
            {tip.views_count && tip.views_count > 0 && (
              <>
                <span>•</span>
                <span>{tip.views_count} visualizações</span>
              </>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white font-display line-clamp-2 leading-snug group-hover:text-[#A8D94D] transition-colors">
            {tip.title}
          </h3>

          <p className="text-xs text-[#8EA092] line-clamp-2 mt-2 leading-relaxed">
            {tip.excerpt}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-[#1B472C]/60 mt-3">
          <div className="flex items-center gap-1 text-[11px] text-[#A8D94D] truncate max-w-[65%] font-medium">
            #{tip.tags[0] || tip.category.toLowerCase()}
            {tip.tags[1] && <span className="text-[#8EA092]">#{tip.tags[1]}</span>}
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-bold text-[#63B532] group-hover:translate-x-1 transition-transform">
            <span>Ver dica</span>
            <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </div>
  );
};
