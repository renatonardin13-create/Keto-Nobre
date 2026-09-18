import React, { useState, useMemo } from 'react';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Sparkles,
  ExternalLink,
  X,
  Clock,
  Eye,
  CheckCircle2,
  AlertCircle,
  Archive,
  Image as ImageIcon,
  Save,
} from 'lucide-react';
import { HealthTip, HealthTipCategory, HealthTipStatus } from '../../types';
import { useApp } from '../../context/AppContext';

const CATEGORIES: HealthTipCategory[] = [
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

const PRESET_IMAGES = [
  { label: 'Vegetais & Fibras', url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80' },
  { label: 'Hidratação & Água', url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80' },
  { label: 'Sono & Relaxamento', url: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=800&q=80' },
  { label: 'Rótulos & Mercado', url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80' },
  { label: 'Gorduras Nobres', url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80' },
  { label: 'Exercícios & Treino', url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' },
];

export const HealthTipsCMS: React.FC = () => {
  const {
    healthTips,
    addHealthTip,
    updateHealthTip,
    deleteHealthTip,
    toggleFeatureHealthTip,
    showToast,
  } = useApp();

  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Modal Editor state
  const [editingTip, setEditingTip] = useState<Partial<HealthTip> | null>(null);
  const [tagsInput, setTagsInput] = useState<string>('');
  const [sourcesList, setSourcesList] = useState<{ title: string; url?: string }[]>([]);

  const filteredTips = useMemo(() => {
    return healthTips.filter((tip) => {
      const matchSearch =
        !search ||
        tip.title.toLowerCase().includes(search.toLowerCase()) ||
        tip.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        tip.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchCategory =
        selectedCategory === 'all' || tip.category === selectedCategory;

      const matchStatus =
        selectedStatus === 'all' || tip.status === selectedStatus;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [healthTips, search, selectedCategory, selectedStatus]);

  const handleOpenNew = () => {
    setEditingTip({
      id: `tip-${Date.now()}`,
      slug: '',
      title: '',
      subtitle: '',
      excerpt: '',
      content: '',
      category: 'Alimentação',
      tags: ['nutrição', 'saúde'],
      cover_image: PRESET_IMAGES[0].url,
      reading_time: 4,
      is_featured: false,
      status: 'published',
      created_at: new Date().toISOString(),
      views_count: 0,
    });
    setTagsInput('nutrição, saúde');
    setSourcesList([{ title: 'Diretrizes Nutricionais Brasileiras', url: 'https://saude.gov.br' }]);
  };

  const handleOpenEdit = (tip: HealthTip) => {
    setEditingTip({ ...tip });
    setTagsInput(tip.tags.join(', '));
    setSourcesList(tip.sources || []);
  };

  const handleSaveTip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTip || !editingTip.title?.trim() || !editingTip.content?.trim()) {
      showToast('Por favor, preencha o título e o conteúdo da dica.', 'info');
      return;
    }

    const slug =
      editingTip.slug?.trim() ||
      editingTip.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

    const parsedTags = tagsInput
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    const tipToSave: HealthTip = {
      id: editingTip.id || `tip-${Date.now()}`,
      slug,
      title: editingTip.title.trim(),
      subtitle: editingTip.subtitle?.trim(),
      excerpt: editingTip.excerpt?.trim() || editingTip.content.substring(0, 150) + '...',
      content: editingTip.content.trim(),
      category: (editingTip.category as HealthTipCategory) || 'Alimentação',
      tags: parsedTags.length > 0 ? parsedTags : ['saúde'],
      cover_image:
        editingTip.cover_image?.trim() || PRESET_IMAGES[0].url,
      reading_time: Math.max(1, Number(editingTip.reading_time) || 3),
      is_featured: Boolean(editingTip.is_featured),
      status: (editingTip.status as HealthTipStatus) || 'published',
      created_at: editingTip.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
      views_count: editingTip.views_count || 0,
      sources: sourcesList.filter((s) => s.title.trim()),
      relatedRecipeQuery: editingTip.relatedRecipeQuery,
      actionType: editingTip.actionType,
      actionLabel: editingTip.actionLabel,
    };

    const exists = healthTips.some((t) => t.id === tipToSave.id);
    if (exists) {
      updateHealthTip(tipToSave);
    } else {
      addHealthTip(tipToSave);
    }

    setEditingTip(null);
  };

  const handleQuickStatusChange = (tip: HealthTip, nextStatus: HealthTipStatus) => {
    updateHealthTip({ ...tip, status: nextStatus });
  };

  const addSourceField = () => {
    setSourcesList([...sourcesList, { title: '', url: '' }]);
  };

  const removeSourceField = (index: number) => {
    setSourcesList(sourcesList.filter((_, i) => i !== index));
  };

  const updateSourceField = (index: number, key: 'title' | 'url', val: string) => {
    const updated = [...sourcesList];
    updated[index][key] = val;
    setSourcesList(updated);
  };

  return (
    <div id="health-tips-cms" className="space-y-6">
      {/* Header & New Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-[#0D2817] border border-[#1B472C]">
        <div>
          <h2 className="text-lg font-black text-white font-display flex items-center gap-2">
            <span>Dicas de Saúde Educativas</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#123D24] text-[#A8D94D] border border-[#63B532]/30">
              {healthTips.length} artigos
            </span>
          </h2>
          <p className="text-xs text-[#8EA092] mt-0.5">
            Publique artigos baseados em evidências, gerencie destaques e vincule a receitas e ferramentas.
          </p>
        </div>

        <button
          id="btn-admin-new-tip"
          onClick={handleOpenNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#A8D94D] text-[#071A0E] font-black text-xs transition-all shadow-md self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Criar Nova Dica</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative sm:col-span-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8EA092]" />
          <input
            type="text"
            placeholder="Buscar por título ou tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0D2817] border border-[#1B472C] rounded-2xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-[#8EA092] outline-none focus:border-[#63B532]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-[#0D2817] border border-[#1B472C] rounded-2xl px-3 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
        >
          <option value="all">Todas as Categorias</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="bg-[#0D2817] border border-[#1B472C] rounded-2xl px-3 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
        >
          <option value="all">Todos os Status</option>
          <option value="published">Publicados</option>
          <option value="draft">Rascunhos</option>
          <option value="archived">Arquivados</option>
        </select>
      </div>

      {/* Tips Table / List */}
      <div className="rounded-3xl bg-[#0D2817] border border-[#1B472C] overflow-hidden divide-y divide-[#1B472C]/60 shadow-lg">
        {filteredTips.length === 0 ? (
          <div className="text-center py-12 px-4 text-[#8EA092] text-xs">
            Nenhuma dica encontrada com os filtros aplicados.
          </div>
        ) : (
          filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#123D24]/20 transition-colors"
            >
              {/* Info column */}
              <div className="flex items-start gap-3.5 flex-1 min-w-0">
                <img
                  src={tip.cover_image}
                  alt={tip.title}
                  className="w-16 h-16 rounded-2xl object-cover flex-shrink-0 border border-[#1B472C]"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 space-y-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#123D24] text-[#A8D94D] border border-[#63B532]/30">
                      {tip.category}
                    </span>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        tip.status === 'published'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                          : tip.status === 'draft'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800/40'
                          : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                      }`}
                    >
                      {tip.status === 'published' ? 'Publicado' : tip.status === 'draft' ? 'Rascunho' : 'Arquivado'}
                    </span>

                    {tip.is_featured && (
                      <span className="flex items-center gap-1 text-[10px] font-black text-[#071A0E] bg-[#63B532] px-2 py-0.5 rounded-md">
                        <Sparkles size={10} />
                        Destaque
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white truncate">{tip.title}</h4>
                  <p className="text-xs text-[#8EA092] line-clamp-1">{tip.excerpt}</p>

                  <div className="flex items-center gap-3 text-[11px] text-[#8EA092]">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {tip.reading_time} min
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {tip.views_count || 0} visualizações
                    </span>
                    <span>•</span>
                    <span>/{tip.slug}</span>
                  </div>
                </div>
              </div>

              {/* Actions Column */}
              <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0">
                {/* Status Toggle buttons */}
                <select
                  value={tip.status}
                  onChange={(e) => handleQuickStatusChange(tip, e.target.value as HealthTipStatus)}
                  className="bg-[#071A0E] border border-[#1B472C] rounded-xl px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#63B532]"
                >
                  <option value="published">Publicado</option>
                  <option value="draft">Rascunho</option>
                  <option value="archived">Arquivado</option>
                </select>

                {/* Featured toggle */}
                <button
                  onClick={() => toggleFeatureHealthTip(tip.id)}
                  title={tip.is_featured ? 'Remover dos destaques' : 'Destacar artigo'}
                  className={`p-2 rounded-xl transition-all ${
                    tip.is_featured
                      ? 'bg-[#63B532] text-[#071A0E]'
                      : 'bg-[#071A0E] text-[#8EA092] hover:text-white border border-[#1B472C]'
                  }`}
                >
                  <Sparkles size={14} />
                </button>

                {/* Edit */}
                <button
                  onClick={() => handleOpenEdit(tip)}
                  title="Editar dica"
                  className="p-2 rounded-xl bg-[#123D24] text-[#A8D94D] hover:bg-[#184d2f] transition-colors"
                >
                  <Edit size={14} />
                </button>

                {/* Delete */}
                <button
                  onClick={() => {
                    if (confirm(`Tem certeza que deseja excluir "${tip.title}"?`)) {
                      deleteHealthTip(tip.id);
                    }
                  }}
                  title="Excluir dica"
                  className="p-2 rounded-xl bg-red-950/40 text-red-400 hover:bg-red-900/50 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL: Full Article Editor */}
      {editingTip && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0D2817] border border-[#1B472C] rounded-3xl max-w-2xl w-full p-6 space-y-5 my-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#1B472C] pb-4">
              <h3 className="text-lg font-black text-white font-display">
                {editingTip.id?.startsWith('tip-') && healthTips.some((t) => t.id === editingTip.id)
                  ? 'Editar Dica de Saúde'
                  : 'Criar Nova Dica de Saúde'}
              </h3>
              <button
                onClick={() => setEditingTip(null)}
                className="p-1.5 rounded-xl hover:bg-[#123D24] text-[#8EA092] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveTip} className="space-y-4">
              {/* Title & Subtitle */}
              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                  Título da Dica *
                </label>
                <input
                  type="text"
                  required
                  value={editingTip.title || ''}
                  onChange={(e) => setEditingTip({ ...editingTip, title: e.target.value })}
                  placeholder="Ex: Fibras na Dieta Cetogênica"
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                  Subtítulo (Opcional)
                </label>
                <input
                  type="text"
                  value={editingTip.subtitle || ''}
                  onChange={(e) => setEditingTip({ ...editingTip, subtitle: e.target.value })}
                  placeholder="Ex: Como manter o intestino saudável sem sair da cetose"
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                />
              </div>

              {/* Slug & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                    Slug da URL (/dicas/[slug])
                  </label>
                  <input
                    type="text"
                    value={editingTip.slug || ''}
                    onChange={(e) => setEditingTip({ ...editingTip, slug: e.target.value })}
                    placeholder="gerado-automaticamente"
                    className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                    Categoria *
                  </label>
                  <select
                    value={editingTip.category || 'Alimentação'}
                    onChange={(e) =>
                      setEditingTip({
                        ...editingTip,
                        category: e.target.value as HealthTipCategory,
                      })
                    }
                    className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                  Resumo / Chamada (Excerpt) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={editingTip.excerpt || ''}
                  onChange={(e) => setEditingTip({ ...editingTip, excerpt: e.target.value })}
                  placeholder="Breve resumo informativo de 1 a 2 frases para os cards..."
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                />
              </div>

              {/* Content Body */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-[#8EA092]">
                    Conteúdo Completo (Suporta Markdown: ## Título, * Itens, **negrito**) *
                  </label>
                </div>
                <textarea
                  rows={8}
                  required
                  value={editingTip.content || ''}
                  onChange={(e) => setEditingTip({ ...editingTip, content: e.target.value })}
                  placeholder="Escreva as orientações educativas detalhadas..."
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532] font-mono leading-relaxed"
                />
              </div>

              {/* Image URL & Quick Presets */}
              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                  URL da Imagem de Capa
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={editingTip.cover_image || ''}
                    onChange={(e) =>
                      setEditingTip({ ...editingTip, cover_image: e.target.value })
                    }
                    placeholder="https://..."
                    className="flex-1 bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                  />
                </div>
                {/* Presets */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[11px] text-[#8EA092] self-center mr-1">Sugestões:</span>
                  {PRESET_IMAGES.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setEditingTip({ ...editingTip, cover_image: preset.url })}
                      className="text-[10px] px-2 py-1 rounded-lg bg-[#071A0E] hover:bg-[#123D24] text-[#A8D94D] border border-[#1B472C]"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags & Reading Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                    Tags (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="fibras, intestino, sementes"
                    className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                    Tempo Estimado de Leitura (minutos)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={editingTip.reading_time || 3}
                    onChange={(e) =>
                      setEditingTip({
                        ...editingTip,
                        reading_time: Number(e.target.value),
                      })
                    }
                    className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                  />
                </div>
              </div>

              {/* Status & Featured */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#071A0E] border border-[#1B472C]">
                <div>
                  <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                    Status de Publicação
                  </label>
                  <select
                    value={editingTip.status || 'published'}
                    onChange={(e) =>
                      setEditingTip({
                        ...editingTip,
                        status: e.target.value as HealthTipStatus,
                      })
                    }
                    className="w-full bg-[#0D2817] border border-[#1B472C] rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#63B532]"
                  >
                    <option value="published">Publicado</option>
                    <option value="draft">Rascunho</option>
                    <option value="archived">Arquivado</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-4 sm:pt-6">
                  <input
                    type="checkbox"
                    id="chk-is-featured"
                    checked={Boolean(editingTip.is_featured)}
                    onChange={(e) =>
                      setEditingTip({ ...editingTip, is_featured: e.target.checked })
                    }
                    className="rounded text-[#63B532] focus:ring-[#63B532]"
                  />
                  <label htmlFor="chk-is-featured" className="text-xs font-bold text-white flex items-center gap-1">
                    <Sparkles size={14} className="text-[#63B532]" />
                    <span>Destacar na Página Inicial</span>
                  </label>
                </div>
              </div>

              {/* Integrations (Recipes / Scanner / Chef) */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-[#071A0E] border border-[#1B472C]">
                <h4 className="text-xs font-bold text-[#A8D94D]">Integrações com o App</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-[#8EA092] block mb-1">
                      Termo de busca para Receitas Relacionadas
                    </label>
                    <input
                      type="text"
                      value={editingTip.relatedRecipeQuery || ''}
                      onChange={(e) =>
                        setEditingTip({ ...editingTip, relatedRecipeQuery: e.target.value })
                      }
                      placeholder="Ex: salada, chia, abacate"
                      className="w-full bg-[#0D2817] border border-[#1B472C] rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#63B532]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#8EA092] block mb-1">
                      Ação Específica Integrada
                    </label>
                    <select
                      value={editingTip.actionType || 'none'}
                      onChange={(e) =>
                        setEditingTip({
                          ...editingTip,
                          actionType: e.target.value as any,
                        })
                      }
                      className="w-full bg-[#0D2817] border border-[#1B472C] rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#63B532]"
                    >
                      <option value="none">Nenhuma</option>
                      <option value="recipes">Catálogo de Receitas</option>
                      <option value="scanner">Scanner IA de Alimentos</option>
                      <option value="hydration">Acompanhamento de Nutrição</option>
                      <option value="chef">Chef IA</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#8EA092]">
                    Fontes & Referências Científicas
                  </label>
                  <button
                    type="button"
                    onClick={addSourceField}
                    className="text-[11px] font-bold text-[#63B532] hover:underline"
                  >
                    + Adicionar Fonte
                  </button>
                </div>
                {sourcesList.map((src, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Nome da fonte (ex: Harvard Health)"
                      value={src.title}
                      onChange={(e) => updateSourceField(i, 'title', e.target.value)}
                      className="flex-1 bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-1.5 text-xs text-white outline-none focus:border-[#63B532]"
                    />
                    <input
                      type="url"
                      placeholder="Link da fonte (opcional)"
                      value={src.url || ''}
                      onChange={(e) => updateSourceField(i, 'url', e.target.value)}
                      className="flex-1 bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-1.5 text-xs text-white outline-none focus:border-[#63B532]"
                    />
                    <button
                      type="button"
                      onClick={() => removeSourceField(i)}
                      className="p-1.5 text-red-400 hover:text-red-300"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1B472C]">
                <button
                  type="button"
                  onClick={() => setEditingTip(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#071A0E] hover:bg-[#123D24] text-xs font-semibold text-[#8EA092] hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#A8D94D] text-[#071A0E] font-black text-xs transition-all shadow-md"
                >
                  <Save size={15} />
                  <span>Salvar Artigo</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
