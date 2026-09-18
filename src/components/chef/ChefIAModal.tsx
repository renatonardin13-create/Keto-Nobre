import React, { useState, useEffect } from 'react';
import { Sparkles, Send, X, ChefHat, ArrowRight, Eye, Calendar, ShoppingBag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Recipe } from '../../types';

interface ChefMessage {
  role: 'assistant' | 'user';
  text: string;
  recommendedRecipe?: Recipe;
  recommendedRecipes?: Recipe[];
}

export const ChefIAModal: React.FC = () => {
  const {
    showChefModal,
    setShowChefModal,
    recipes,
    openRecipeDetail,
    chefScanContext,
    setChefScanContext,
    chefInitialPrompt,
    setChefInitialPrompt,
    findMatchingRecipesForScan,
    addRecipeIngredientsToShopping,
    updateMealPlanSlot,
    mealPlan,
    showToast,
    todayHydration,
    hydrationProfile,
  } = useApp();

  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<ChefMessage[]>([
    {
      role: 'assistant',
      text: 'Olá! Sou o Chef KetoNobre 👨‍🍳. Como posso ajudar na sua alimentação cetogênica hoje? Diga-me quais ingredientes você tem em mãos ou quanto tempo você tem disponível!',
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle incoming scan context or initial prompt from the Food Scanner
  useEffect(() => {
    if (showChefModal && chefScanContext) {
      const scan = chefScanContext;
      const matching = findMatchingRecipesForScan(scan);

      const userText = chefInitialPrompt || `Analisei no Scanner o alimento "${scan.identified_food}". O que posso preparar?`;
      
      const assistantText = `Encontrei algumas receitas do seu catálogo que utilizam ingredientes semelhantes a "${scan.identified_food}":`;

      setMessages((prev) => [
        ...prev,
        { role: 'user', text: userText },
        {
          role: 'assistant',
          text: assistantText,
          recommendedRecipes: matching.length > 0 ? matching : recipes.slice(0, 3),
        },
      ]);

      // Reset context after inserting
      setChefScanContext(null);
      setChefInitialPrompt(null);
    }
  }, [showChefModal, chefScanContext, chefInitialPrompt]);

  if (!showChefModal) return null;

  const quickPrompts = [
    'Tenho frango, ovos e queijo. O que posso fazer?',
    '💧 Quanto devo beber de água hoje?',
    'Quero uma receita rápida para jantar.',
    'Tenho apenas 20 minutos.',
    'Quero substituir o creme de leite.',
  ];

  const handleAddToPlan = (recipe: Recipe) => {
    // Find next available slot or default to today's dinner
    const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'] as const;
    const currentDay = mealPlan[0]?.dayOfWeek || 'Seg';
    const slot: 'breakfast' | 'lunch' | 'dinner' =
      recipe.category === 'breakfast' ? 'breakfast' : 'dinner';

    updateMealPlanSlot(currentDay, slot, recipe);
    showToast(`📅 "${recipe.title}" adicionado ao plano de ${currentDay}!`, 'success');
  };

  const handleSendPrompt = (promptText: string) => {
    const userMsg = promptText.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      // Intelligent Keto matching across the 600 recipes
      const lower = userMsg.toLowerCase();
      let reply = '';
      let recommendedList: Recipe[] = [];

      // Token search across 600 recipes
      const tokens = lower.split(/\s+/).filter((w) => w.length > 3);
      const matched = recipes.filter((r) => {
        const titleL = r.title.toLowerCase();
        const ingL = r.ingredients.map((i) => i.name.toLowerCase()).join(' ');
        return tokens.some((t) => titleL.includes(t) || ingL.includes(t));
      });

      if (lower.includes('água') || lower.includes('beber') || lower.includes('hidrat')) {
        const bottleSize = hydrationProfile.bottle_ml || 500;
        const bottles = Math.round(todayHydration.targetMl / bottleSize);
        reply = `💧 Com base na sua rotina calculada no módulo de Hidratação Inteligente: sua meta de líquidos recomendada é de **${todayHydration.targetMl.toLocaleString('pt-BR')} ml por dia**, o equivalente a **${bottles} garrafas de ${bottleSize} ml**!
Até agora você registrou **${todayHydration.consumedMl.toLocaleString('pt-BR')} ml** (${todayHydration.percent}% da meta). Faltam apenas **${todayHydration.remainingMl.toLocaleString('pt-BR')} ml**.
${todayHydration.nextIntake ? `\n⏰ Sua próxima tomada recomendada é às **${todayHydration.nextIntake.time}** (${todayHydration.nextIntake.amount_ml} ml).` : '\n🎉 Parabéns, suas tomadas programadas de hoje foram cumpridas!'}
Na cetose, o consumo de água adequado associado a eletrólitos (sódio, potássio e magnésio) previne a chamada "gripe ceto" e mantém o foco mental elevado.`;
      } else if (matched.length > 0) {
        recommendedList = matched.slice(0, 3);
        reply = `Encontrei ótimas receitas cetogênicas no catálogo que combinam perfeitamente com o que você pediu:`;
      } else if (lower.includes('rápida') || lower.includes('minuto')) {
        recommendedList = recipes.filter((r) => r.prepTime + r.cookTime <= 20).slice(0, 3);
        reply = `Para preparos ultrarrápidos e práticos, selecionei as opções mais ágeis do nosso catálogo nobre:`;
      } else if (lower.includes('substituir') && lower.includes('creme de leite')) {
        reply = `Ótima pergunta! Para substituir o creme de leite em dietas cetogênicas você pode usar: 1) Leite de coco integral culinário (com textura cremosa e sem açúcar); 2) Nata fresca pura; 3) Cream cheese amolecido; ou 4) Manteiga ghee com um pouco de caldo de ossos para emulsionar!`;
      } else {
        recommendedList = recipes.slice(0, 3);
        reply = `Com base nos macros cetogênicos ideais para manter você em cetose profunda com alto sabor, recomendo estas receitas:`;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: reply,
          recommendedRecipes: recommendedList.length > 0 ? recommendedList : undefined,
        },
      ]);
      setLoading(false);
    }, 600);
  };

  return (
    <div
      id="chef-ia-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
    >
      <div
        id="chef-ia-modal-card"
        className="relative w-full max-w-md h-[560px] flex flex-col justify-between rounded-3xl bg-[#0D2817] border border-[#1B472C] shadow-2xl text-white overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1B472C] bg-[#082817]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#123D24] border border-[#63B532]/40 text-[#63B532]">
              <ChefHat size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-white font-display">Chef KetoNobre</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#63B532]/20 text-[#A8D94D] font-extrabold">
                  IA Culinária
                </span>
              </div>
              <p className="text-[11px] text-[#8EA092]">Consultor gastronômico cetogênico</p>
            </div>
          </div>

          <button
            onClick={() => setShowChefModal(false)}
            className="p-2 rounded-full text-[#8EA092] hover:text-white hover:bg-[#123D24]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Conversation Message Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 no-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#63B532] text-[#082817] font-semibold rounded-tr-none'
                    : 'bg-[#123D24] text-[#F5F8F2] border border-[#1B472C] rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>

              {/* Linked Recipe Cards if recommended */}
              {msg.recommendedRecipe && (
                <div className="mt-2 w-full max-w-[90%] p-3 rounded-2xl bg-[#071A0E] border border-[#63B532]/40 space-y-2">
                  <div
                    onClick={() => {
                      setShowChefModal(false);
                      openRecipeDetail(msg.recommendedRecipe!);
                    }}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <img
                      src={msg.recommendedRecipe.image}
                      alt={msg.recommendedRecipe.title}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-[#63B532] font-bold block">
                        Receita recomendada
                      </span>
                      <h5 className="text-xs font-bold text-white truncate group-hover:text-[#A8D94D]">
                        {msg.recommendedRecipe.title}
                      </h5>
                      <span className="text-[10px] text-[#8EA092]">
                        {msg.recommendedRecipe.prepTime + msg.recommendedRecipe.cookTime} min •{' '}
                        {msg.recommendedRecipe.nutrition.netCarbs}g carbo líquido
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-[#63B532] mr-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>

                  <div className="flex items-center gap-1.5 pt-1.5 border-t border-[#1B472C]/60">
                    <button
                      type="button"
                      onClick={() => {
                        setShowChefModal(false);
                        openRecipeDetail(msg.recommendedRecipe!);
                      }}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[10px] font-bold text-white transition-colors"
                    >
                      <Eye size={12} className="text-[#63B532]" />
                      Ver receita
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddToPlan(msg.recommendedRecipe!)}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[10px] font-bold text-white transition-colors"
                    >
                      <Calendar size={12} className="text-[#63B532]" />
                      Ao plano
                    </button>
                    <button
                      type="button"
                      onClick={() => addRecipeIngredientsToShopping(msg.recommendedRecipe!)}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[10px] font-bold text-white transition-colors"
                    >
                      <ShoppingBag size={12} className="text-[#63B532]" />
                      Às compras
                    </button>
                  </div>
                </div>
              )}

              {msg.recommendedRecipes && msg.recommendedRecipes.length > 0 && (
                <div className="mt-2 w-full max-w-[95%] space-y-2">
                  {msg.recommendedRecipes.map((recipe) => (
                    <div
                      key={recipe.id}
                      className="p-2.5 rounded-2xl bg-[#071A0E] border border-[#1B472C] hover:border-[#63B532]/60 transition-all space-y-2"
                    >
                      <div
                        onClick={() => {
                          setShowChefModal(false);
                          openRecipeDetail(recipe);
                        }}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-11 h-11 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-white truncate group-hover:text-[#A8D94D]">
                            {recipe.title}
                          </h5>
                          <span className="text-[10px] text-[#8EA092] flex items-center gap-2">
                            <span>{recipe.prepTime + recipe.cookTime} min</span>
                            <span>•</span>
                            <span className="text-[#63B532] font-semibold">
                              {recipe.nutrition.netCarbs}g carbo líquido
                            </span>
                          </span>
                        </div>
                        <ArrowRight size={13} className="text-[#63B532] mr-1 group-hover:translate-x-0.5 transition-transform" />
                      </div>

                      <div className="flex items-center gap-1.5 pt-1 border-t border-[#1B472C]/60">
                        <button
                          type="button"
                          onClick={() => {
                            setShowChefModal(false);
                            openRecipeDetail(recipe);
                          }}
                          className="flex-1 flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[10px] font-bold text-white transition-colors"
                        >
                          <Eye size={11} className="text-[#63B532]" />
                          Ver receita
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAddToPlan(recipe)}
                          className="flex-1 flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[10px] font-bold text-white transition-colors"
                        >
                          <Calendar size={11} className="text-[#63B532]" />
                          Ao plano
                        </button>
                        <button
                          type="button"
                          onClick={() => addRecipeIngredientsToShopping(recipe)}
                          className="flex-1 flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[10px] font-bold text-white transition-colors"
                        >
                          <ShoppingBag size={11} className="text-[#63B532]" />
                          Às compras
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-[#8EA092] p-2">
              <Sparkles size={14} className="text-[#63B532] animate-spin" />
              <span>O Chef está pensando na melhor combinação...</span>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions chips */}
        <div className="px-3 py-2 border-t border-[#1B472C]/50 bg-[#082817]/60">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendPrompt(prompt)}
                className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-[#123D24] text-[#A8D94D] border border-[#1B472C] hover:border-[#63B532] transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input area */}
        <div className="p-3 bg-[#082817] border-t border-[#1B472C]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt(input);
            }}
            className="flex items-center gap-2 bg-[#071A0E] border border-[#1B472C] rounded-2xl px-3 py-1.5 focus-within:border-[#63B532]"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="O que tem na sua geladeira hoje?"
              className="bg-transparent text-xs text-white flex-1 outline-none py-1.5"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className={`p-2 rounded-xl transition-colors ${
                input.trim()
                  ? 'bg-[#63B532] text-[#082817]'
                  : 'bg-[#123D24] text-[#8EA092] opacity-50 cursor-not-allowed'
              }`}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
