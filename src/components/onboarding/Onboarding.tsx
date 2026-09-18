import React, { useState } from 'react';
import { ChefHat, Calendar, Sparkles, Sliders, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface OnboardingProps {
  onFinish?: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { setOnboardingFinished, setShowAuthModal } = useApp();

  const slides = [
    {
      title: 'Receitas incríveis para o seu dia a dia',
      subtitle: 'Praticidade, saúde e sabor em um só lugar com alta gastronomia cetogênica.',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
      badge: 'Gastronomia Nobre',
      icon: Sparkles,
      buttonText: 'Continuar',
    },
    {
      title: 'Organize sua semana',
      subtitle: 'Escolha suas refeições favoritas e deixe o KetoNobre cuidar automaticamente da sua lista de compras.',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
      badge: 'Planejamento Inteligente',
      icon: Calendar,
      buttonText: 'Continuar',
    },
    {
      title: 'Cozinhe sem complicação',
      subtitle: 'Modo cozinheiro passo a passo com fotos, dicas do chef e timers automáticos integrados.',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
      badge: 'Modo Cozinheiro',
      icon: ChefHat,
      buttonText: 'Continuar',
    },
    {
      title: 'Tudo do seu jeito',
      subtitle: 'Informe preferências, ingredientes que você não gosta e selecione suas categorias favoritas.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      badge: 'Personalizado',
      icon: Sliders,
      buttonText: 'Criar minha experiência',
    },
  ];

  const handleNext = () => {
    if (currentStep < slides.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setOnboardingFinished(true);
    if (onFinish) onFinish();
  };

  const slide = slides[currentStep];
  const Icon = slide.icon;

  return (
    <div
      id="onboarding-flow-container"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#071A0E] text-white p-6 max-w-md mx-auto overflow-hidden select-none"
    >
      {/* Top bar with back and skip */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D2817] border border-[#1B472C]">
          <Icon size={14} className="text-[#63B532]" />
          <span className="text-xs font-semibold text-[#A8D94D]">{slide.badge}</span>
        </div>

        <button
          id="onboarding-skip-btn"
          onClick={handleComplete}
          className="text-xs text-[#8EA092] hover:text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
        >
          Pular
        </button>
      </div>

      {/* Hero Image with curved frame */}
      <div className="relative my-6 flex-1 flex items-center justify-center">
        <div className="relative w-full h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1B472C]/80 group">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A0E] via-transparent to-transparent opacity-80" />
        </div>
      </div>

      {/* Copy and progress */}
      <div className="space-y-4 pb-4">
        {/* Step dots */}
        <div className="flex items-center justify-center gap-2 mb-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'w-7 bg-[#63B532] shadow-[0_0_8px_#63B532]'
                  : 'w-2 bg-[#1B472C]'
              }`}
            />
          ))}
        </div>

        <div className="text-center space-y-2 px-2">
          <h1 className="text-2xl font-extrabold tracking-tight text-white font-display leading-tight">
            {slide.title}
          </h1>
          <p className="text-sm text-[#8EA092] leading-relaxed">
            {slide.subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <button
            id="onboarding-next-btn"
            onClick={handleNext}
            className="w-full py-4 px-6 rounded-2xl bg-[#63B532] hover:bg-[#529e28] active:scale-[0.98] text-[#082817] font-bold text-base shadow-lg shadow-[#63B532]/25 flex items-center justify-center gap-2 transition-all duration-200"
          >
            <span>{slide.buttonText}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
