import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Users,
  Crown,
  BookOpen,
  DollarSign,
  Plus,
  Trash2,
  Edit,
  Save,
  Check,
  Flame,
  Search,
  Filter,
  Sparkles,
  Eye,
  CheckCircle2,
  X,
  Lightbulb,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Recipe } from '../../types';
import { HealthTipsCMS } from './HealthTipsCMS';

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    subscriptionConfig,
    updateSubscriptionConfig,
    showToast,
    cookingHistory,
    healthTips,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'metrics' | 'cms' | 'tips' | 'pricing'>('metrics');

  // CMS filters & search
  const [cmsSearch, setCmsSearch] = useState<string>('');
  const [cmsCategory, setCmsCategory] = useState<string>('all');

  // Pricing form state
  const [monthlyPrice, setMonthlyPrice] = useState<number>(subscriptionConfig.monthlyPrice);
  const [annualPrice, setAnnualPrice] = useState<number>(subscriptionConfig.annualPrice);
  const [trialDays, setTrialDays] = useState<number>(subscriptionConfig.trialDays);
  const [discountPercentage, setDiscountPercentage] = useState<number>(
    subscriptionConfig.discountPercentage
  );

  // New/Edit recipe modal
  const [editingRecipe, setEditingRecipe] = useState<Partial<Recipe> | null>(null);

  const categories = [
    { id: 'all', name: 'Todas as Categorias' },
    { id: 'breakfast', name: 'Café da manhã' },
    { id: 'poultry', name: 'Frango e aves' },
    { id: 'beef', name: 'Carnes bovinas' },
    { id: 'pork', name: 'Carne suína' },
    { id: 'fish', name: 'Peixes e frutos do mar' },
    { id: 'salads', name: 'Saladas e vegetais' },
    { id: 'soups', name: 'Sopas e caldos' },
    { id: 'snacks', name: 'Lanches e petiscos' },
    { id: 'desserts', name: 'Sobremesas keto' },
    { id: 'beverages', name: 'Bebidas e cafés' },
    { id: 'breads', name: 'Pães e bases keto' },
    { id: 'sauces', name: 'Molhos, caldas e pastas' },
  ];

  const handleSavePricing = (e: React.FormEvent) => {
    e.preventDefault();
    updateSubscriptionConfig({
      monthlyPrice: Number(monthlyPrice),
      annualPrice: Number(annualPrice),
      trialDays: Number(trialDays),
      discountPercentage: Number(discountPercentage),
    });
    showToast('Configurações de assinatura atualizadas com sucesso!', 'success');
  };

  const handleTogglePremium = (recipe: Recipe) => {
    const updated = { ...recipe, isPremium: !recipe.isPremium };
    updateRecipe(updated);
    showToast(
      `Receita "${recipe.title}" alterada para ${updated.isPremium ? 'VIP/Premium' : 'Gratuita'}!`
    );
  };

  const handleSaveRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRecipe?.title) return;

    if (editingRecipe.id) {
      updateRecipe(editingRecipe as Recipe);
      showToast(`Receita "${editingRecipe.title}" atualizada com sucesso!`, 'success');
    } else {
      const categoryObj = categories.find((c) => c.id === editingRecipe.category);
      const newRec: Recipe = {
        id: `recipe-${Date.now()}`,
        title: editingRecipe.title || 'Nova Receita KetoNobre',
        description: editingRecipe.description || 'Descrição da receita cetogênica.',
        image:
          editingRecipe.image ||
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        category: editingRecipe.category || 'beef',
        categoryName: categoryObj?.name || 'Carnes bovinas',
        prepTime: Number(editingRecipe.prepTime) || 15,
        cookTime: Number(editingRecipe.cookTime) || 20,
        servings: Number(editingRecipe.servings) || 2,
        difficulty: (editingRecipe.difficulty as any) || 'Fácil',
        rating: 5.0,
        reviewCount: 0,
        isPremium: !!editingRecipe.isPremium,
        chefTip: editingRecipe.chefTip || 'Use ingredientes frescos para maximizar sabor e textura.',
        nutrition: editingRecipe.nutrition || {
          calories: 420,
          netCarbs: 4,
          protein: 32,
          fat: 28,
          fiber: 3,
        },
        ingredients: editingRecipe.ingredients?.length
          ? editingRecipe.ingredients
          : [
              { id: '1', name: 'Ingrediente nobre', amount: '350g', category: 'Carnes' },
              { id: '2', name: 'Azeite de oliva extravirgem', amount: '2 colheres de sopa', category: 'Temperos' },
            ],
        steps: editingRecipe.steps?.length
          ? editingRecipe.steps
          : [
              {
                stepNumber: 1,
                instruction: 'Prepare e tempere os ingredientes frescos em temperatura ambiente.',
                timerSeconds: 120,
              },
              {
                stepNumber: 2,
                instruction: 'Grelhe ou asse lentamente até atingir o ponto ideal de suculência.',
                timerSeconds: 300,
              },
            ],
      };
      addRecipe(newRec);
      showToast(`Receita "${newRec.title}" adicionada ao catálogo!`, 'success');
    }

    setEditingRecipe(null);
  };

  // Filtered recipes for CMS
  const filteredRecipes = useMemo(() => {
    return recipes.filter((r) => {
      const matchSearch =
        !cmsSearch ||
        r.title.toLowerCase().includes(cmsSearch.toLowerCase()) ||
        r.description.toLowerCase().includes(cmsSearch.toLowerCase());
      const matchCategory = cmsCategory === 'all' || r.category === cmsCategory;
      return matchSearch && matchCategory;
    });
  }, [recipes, cmsSearch, cmsCategory]);

  return (
    <div
      id="admin-dashboard-screen"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#071A0E] text-white p-4 sm:p-6 lg:p-8 select-none"
    >
      <div className="w-full max-w-4xl mx-auto space-y-6 pb-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1B472C]">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 p-2.5 rounded-xl bg-[#0D2817] border border-[#1B472C] text-xs font-semibold text-[#8EA092] hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Voltar ao App</span>
            </button>
            <div>
              <h1 className="text-xl font-extrabold text-white font-display">Painel Administrativo</h1>
              <p className="text-xs text-[#8EA092]">KetoNobre • Gestão de Catálogo, Métricas e Assinaturas</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#123D24] text-[#A8D94D] border border-[#63B532]/30">
              Admin Ativo
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between p-1.5 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'metrics'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Métricas Gerais
          </button>
          <button
            onClick={() => setActiveTab('cms')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'cms'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Receitas ({recipes.length})
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'tips'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Dicas de Saúde ({healthTips.length})
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'pricing'
                ? 'bg-[#123D24] text-[#A8D94D] shadow-sm'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            Planos
          </button>
        </div>

        {/* TAB 1: METRICS */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-1">
                <div className="flex items-center justify-between text-[#8EA092]">
                  <span className="text-xs font-medium">Total de Usuários</span>
                  <Users size={16} className="text-[#63B532]" />
                </div>
                <span className="text-2xl font-extrabold text-white">4.829</span>
                <span className="text-[10px] text-[#A8D94D] block">+14% este mês</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-1">
                <div className="flex items-center justify-between text-[#8EA092]">
                  <span className="text-xs font-medium">Assinantes VIP</span>
                  <Crown size={16} className="text-amber-400" />
                </div>
                <span className="text-2xl font-extrabold text-white">1.340</span>
                <span className="text-[10px] text-amber-400 block">27.7% conversão</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-1">
                <div className="flex items-center justify-between text-[#8EA092]">
                  <span className="text-xs font-medium">Receitas Cadastradas</span>
                  <BookOpen size={16} className="text-[#63B532]" />
                </div>
                <span className="text-2xl font-extrabold text-white">{recipes.length}</span>
                <span className="text-[10px] text-[#8EA092] block">
                  {recipes.filter((r) => r.isPremium).length} VIP / {recipes.filter((r) => !r.isPremium).length} Grátis
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-1">
                <div className="flex items-center justify-between text-[#8EA092]">
                  <span className="text-xs font-medium">Receita Estimada (MRR)</span>
                  <DollarSign size={16} className="text-[#A8D94D]" />
                </div>
                <span className="text-2xl font-extrabold text-white">R$ 29.4k</span>
                <span className="text-[10px] text-[#A8D94D] block">Crescimento contínuo</span>
              </div>
            </div>

            {/* Top Recipes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Receitas Mais Acessadas */}
              <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Eye size={15} className="text-[#63B532]" />
                  <span>Receitas Mais Acessadas</span>
                </div>
                <div className="space-y-2">
                  {recipes.slice(0, 5).map((r, i) => (
                    <div
                      key={`access-${r.id}`}
                      className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-[#071A0E] border border-[#1B472C]"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[#63B532] font-bold">#{i + 1}</span>
                        <span className="text-white font-medium truncate">{r.title}</span>
                      </div>
                      <span className="text-[#8EA092] shrink-0 font-semibold">{1240 - i * 180} views</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Receitas Mais Preparadas */}
              <div className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <CheckCircle2 size={15} className="text-[#A8D94D]" />
                  <span>Receitas Mais Preparadas</span>
                </div>
                <div className="space-y-2">
                  {recipes.slice(5, 10).map((r, i) => (
                    <div
                      key={`prep-${r.id}`}
                      className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-[#071A0E] border border-[#1B472C]"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-amber-400 font-bold">#{i + 1}</span>
                        <span className="text-white font-medium truncate">{r.title}</span>
                      </div>
                      <span className="text-[#8EA092] shrink-0 font-semibold">{480 - i * 65} preparos</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CMS (Receitas) */}
        {activeTab === 'cms' && (
          <div className="space-y-4">
            {/* Action & Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C]">
              {/* Search */}
              <div className="relative flex-1">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8EA092]" />
                <input
                  type="text"
                  placeholder="Busca rápida por nome da receita..."
                  value={cmsSearch}
                  onChange={(e) => setCmsSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#071A0E] border border-[#1B472C] text-xs text-white placeholder-[#8EA092] outline-none focus:border-[#63B532]"
                />
              </div>

              {/* Category Filter */}
              <div className="w-full sm:w-56">
                <select
                  value={cmsCategory}
                  onChange={(e) => setCmsCategory(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-[#071A0E] border border-[#1B472C] text-xs text-white outline-none focus:border-[#63B532]"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add New Button */}
              <button
                onClick={() =>
                  setEditingRecipe({
                    title: '',
                    description: '',
                    category: 'beef',
                    categoryName: 'Carnes bovinas',
                    prepTime: 15,
                    cookTime: 20,
                    servings: 2,
                    difficulty: 'Fácil',
                    isPremium: false,
                    chefTip: '',
                    nutrition: { calories: 380, netCarbs: 3, protein: 30, fat: 26, fiber: 3 },
                  })
                }
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#63B532] text-[#082817] text-xs font-extrabold shadow-md hover:bg-[#529e28] transition-colors shrink-0"
              >
                <Plus size={15} />
                <span>Adicionar Receita</span>
              </button>
            </div>

            {/* Recipes count banner */}
            <div className="flex justify-between items-center text-xs text-[#8EA092] px-1">
              <span>Mostrando {filteredRecipes.length} de {recipes.length} receitas</span>
              <span>{filteredRecipes.filter((r) => r.isPremium).length} Premium • {filteredRecipes.filter((r) => !r.isPremium).length} Grátis</span>
            </div>

            {/* Recipes list */}
            <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
              {filteredRecipes.slice(0, 50).map((recipe) => (
                <div
                  key={recipe.id}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/40 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white truncate">{recipe.title}</h4>
                      </div>
                      <span className="text-[11px] text-[#8EA092]">
                        {recipe.categoryName} • {recipe.prepTime + recipe.cookTime} min • {recipe.nutrition.netCarbs}g carbo
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Toggle VIP button */}
                    <button
                      onClick={() => handleTogglePremium(recipe)}
                      className={`text-[10px] px-2.5 py-1 rounded-full font-extrabold transition-all ${
                        recipe.isPremium
                          ? 'bg-amber-500 hover:bg-amber-600 text-black shadow-sm'
                          : 'bg-[#123D24] hover:bg-[#184d2f] text-[#A8D94D] border border-[#63B532]/40'
                      }`}
                      title="Alternar entre Gratuita e Premium"
                    >
                      {recipe.isPremium ? '👑 PREMIUM' : 'GRÁTIS'}
                    </button>

                    <button
                      onClick={() => setEditingRecipe({ ...recipe })}
                      className="p-2 rounded-xl bg-[#123D24] text-[#A8D94D] hover:bg-[#184d2f] transition-colors"
                      title="Editar receita"
                    >
                      <Edit size={14} />
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Excluir a receita "${recipe.title}"?`)) {
                          deleteRecipe(recipe.id);
                        }
                      }}
                      className="p-2 rounded-xl bg-red-950/50 text-red-400 hover:bg-red-900/60 transition-colors"
                      title="Excluir receita"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: HEALTH TIPS CMS */}
        {activeTab === 'tips' && <HealthTipsCMS />}

        {/* TAB 4: PRICING CONFIGURATION */}
        {activeTab === 'pricing' && (
          <form
            onSubmit={handleSavePricing}
            className="space-y-5 p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] max-w-xl mx-auto"
          >
            <div>
              <h3 className="text-base font-extrabold text-white font-display">Configurações de Assinatura</h3>
              <p className="text-xs text-[#8EA092] mt-1">
                Modifique os valores dos planos, descontos e teste grátis. Todas as telas de checkout e paywall refletem os valores em tempo real.
              </p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">Preço do Plano Mensal (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  value={monthlyPrice}
                  onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">Preço do Plano Anual (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  value={annualPrice}
                  onChange={(e) => setAnnualPrice(Number(e.target.value))}
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">Dias de Teste Gratuito</label>
                <input
                  type="number"
                  value={trialDays}
                  onChange={(e) => setTrialDays(Number(e.target.value))}
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#8EA092] block mb-1">
                  Destaque de Desconto no Plano Anual (%)
                </label>
                <input
                  type="number"
                  value={discountPercentage}
                  onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                  className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#63B532]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#63B532]/25 transition-all"
            >
              <Save size={16} />
              <span>Salvar Condições de Assinatura</span>
            </button>
          </form>
        )}

        {/* Edit/Create Recipe Modal */}
        {editingRecipe && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
            <form
              onSubmit={handleSaveRecipe}
              className="w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#0D2817] border border-[#1B472C] rounded-3xl p-6 space-y-4 text-white no-scrollbar"
            >
              <div className="flex items-center justify-between border-b border-[#1B472C] pb-3">
                <h3 className="text-base font-bold font-display text-white">
                  {editingRecipe.id ? 'Editar Receita' : 'Nova Receita'}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingRecipe(null)}
                  className="text-[#8EA092] hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-[#8EA092] block mb-1">Título da Receita</label>
                  <input
                    type="text"
                    required
                    value={editingRecipe.title || ''}
                    onChange={(e) => setEditingRecipe({ ...editingRecipe, title: e.target.value })}
                    className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none focus:border-[#63B532]"
                  />
                </div>

                <div>
                  <label className="text-[#8EA092] block mb-1">Descrição</label>
                  <textarea
                    rows={2}
                    value={editingRecipe.description || ''}
                    onChange={(e) => setEditingRecipe({ ...editingRecipe, description: e.target.value })}
                    className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none focus:border-[#63B532]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#8EA092] block mb-1">Categoria</label>
                    <select
                      value={editingRecipe.category || 'beef'}
                      onChange={(e) => {
                        const cat = categories.find((c) => c.id === e.target.value);
                        setEditingRecipe({
                          ...editingRecipe,
                          category: e.target.value as any,
                          categoryName: cat?.name || 'Carnes',
                        });
                      }}
                      className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none focus:border-[#63B532]"
                    >
                      {categories
                        .filter((c) => c.id !== 'all')
                        .map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[#8EA092] block mb-1">Dificuldade</label>
                    <select
                      value={editingRecipe.difficulty || 'Fácil'}
                      onChange={(e) => setEditingRecipe({ ...editingRecipe, difficulty: e.target.value as any })}
                      className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none focus:border-[#63B532]"
                    >
                      <option value="Fácil">Fácil</option>
                      <option value="Média">Média</option>
                      <option value="Difícil">Difícil</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[#8EA092] block mb-1">Prep (min)</label>
                    <input
                      type="number"
                      value={editingRecipe.prepTime || 15}
                      onChange={(e) => setEditingRecipe({ ...editingRecipe, prepTime: Number(e.target.value) })}
                      className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[#8EA092] block mb-1">Cozimento (min)</label>
                    <input
                      type="number"
                      value={editingRecipe.cookTime || 15}
                      onChange={(e) => setEditingRecipe({ ...editingRecipe, cookTime: Number(e.target.value) })}
                      className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[#8EA092] block mb-1">Porções</label>
                    <input
                      type="number"
                      value={editingRecipe.servings || 2}
                      onChange={(e) => setEditingRecipe({ ...editingRecipe, servings: Number(e.target.value) })}
                      className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#8EA092] block mb-1">Dica do Chef</label>
                  <input
                    type="text"
                    value={editingRecipe.chefTip || ''}
                    onChange={(e) => setEditingRecipe({ ...editingRecipe, chefTip: e.target.value })}
                    className="w-full bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2 text-white outline-none focus:border-[#63B532]"
                    placeholder="Segredo gastronômico ou dica de preparo..."
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="edit-is-premium"
                    checked={!!editingRecipe.isPremium}
                    onChange={(e) => setEditingRecipe({ ...editingRecipe, isPremium: e.target.checked })}
                    className="w-4 h-4 rounded accent-[#63B532]"
                  />
                  <label htmlFor="edit-is-premium" className="text-white font-bold cursor-pointer">
                    Receita Exclusiva VIP / Premium
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#1B472C]">
                <button
                  type="button"
                  onClick={() => setEditingRecipe(null)}
                  className="px-4 py-2 rounded-xl bg-[#071A0E] text-[#8EA092] hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#63B532] text-[#082817] font-extrabold hover:bg-[#529e28]"
                >
                  Salvar Receita
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
