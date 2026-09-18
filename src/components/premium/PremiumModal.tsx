import React, { useState } from 'react';
import {
  Crown,
  Check,
  X,
  Sparkles,
  Calendar,
  ChefHat,
  ShoppingBag,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PremiumModal: React.FC = () => {
  const {
    showPremiumModal,
    setShowPremiumModal,
    user,
    togglePremium,
    subscriptionConfig,
  } = useApp();

  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  if (!showPremiumModal) return null;

  const benefits = [
    'Catálogo completo de receitas nobres',
    'Receitas exclusivas e atualizações semanais',
    'Planejamento semanal de refeições ilimitado',
    'Lista de compras inteligente por setor',
    'Modo Cozinheiro interativo com timers',
    'Conteúdo culinário e dicas do Chef IA',
    'Calculadora automática de macros e cetose',
    'Suporte prioritário e novidades em primeira mão',
  ];

  const handleSubscribe = () => {
    togglePremium();
    setShowPremiumModal(false);
  };

  return (
    <div
      id="premium-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
    >
      <div
        id="premium-modal-card"
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0D2817] to-[#071A0E] border border-amber-500/50 p-6 shadow-2xl text-white space-y-5 no-scrollbar"
      >
        {/* Close button */}
        <button
          onClick={() => setShowPremiumModal(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#123D24] text-[#8EA092] hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Crown Badge Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black shadow-lg shadow-amber-500/30">
            <Crown size={30} className="fill-black" />
          </div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            KetoNobre Club
          </span>
          <h2 className="text-2xl font-extrabold text-white font-display leading-tight">
            Desbloqueie toda a experiência KetoNobre
          </h2>
          <p className="text-xs text-[#8EA092] max-w-xs mx-auto">
            Mais que receitas. Um estilo de vida com alto padrão gastronômico e saúde real.
          </p>
        </div>

        {/* Plan Switcher (Annual vs Monthly) */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#071A0E] border border-[#1B472C]">
          <button
            onClick={() => setBillingCycle('annual')}
            className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-bold transition-all relative ${
              billingCycle === 'annual'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            <span>Anual (Melhor valor)</span>
            <span className="absolute -top-2 -right-1 px-1.5 py-0.2 text-[9px] font-extrabold bg-[#63B532] text-[#082817] rounded-full">
              -{subscriptionConfig.discountPercentage}%
            </span>
          </button>

          <button
            onClick={() => setBillingCycle('monthly')}
            className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            <span>Mensal</span>
          </button>
        </div>

        {/* Pricing Display */}
        <div className="p-4 rounded-2xl bg-[#123D24]/60 border border-[#1B472C] text-center space-y-1">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-xs text-[#8EA092]">R$</span>
            <span className="text-3xl font-extrabold text-white font-display">
              {billingCycle === 'annual'
                ? (subscriptionConfig.annualPrice / 12).toFixed(2).replace('.', ',')
                : subscriptionConfig.monthlyPrice.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs text-[#8EA092]">/mês</span>
          </div>

          <p className="text-[11px] text-[#A8D94D]">
            {billingCycle === 'annual'
              ? `Cobrado anualmente R$ ${subscriptionConfig.annualPrice.toFixed(2).replace('.', ',')} (${subscriptionConfig.trialDays} dias grátis de teste)`
              : `Cobrança mensal recorrente de R$ ${subscriptionConfig.monthlyPrice.toFixed(2).replace('.', ',')}`}
          </p>
        </div>

        {/* Benefits Checklist */}
        <div className="space-y-2.5 pt-1">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs text-white">
              <div className="w-4 h-4 rounded-full bg-[#63B532]/20 text-[#63B532] flex items-center justify-center flex-shrink-0">
                <Check size={12} className="stroke-[3px]" />
              </div>
              <span className="leading-snug">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-2 space-y-2">
          <button
            id="premium-subscribe-btn"
            onClick={handleSubscribe}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-500 active:scale-[0.98] text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <Crown size={18} className="fill-black" />
            <span>{user.isPremium ? 'Mudar Plano / Reativar' : 'Começar Premium com 7 dias grátis'}</span>
          </button>

          <p className="text-[10px] text-center text-[#8EA092]">
            Cancele a qualquer momento nas configurações. Sem multas.
          </p>
        </div>
      </div>
    </div>
  );
};
