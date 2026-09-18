import React, { useState } from 'react';
import {
  Settings,
  User,
  Sliders,
  Bell,
  Shield,
  Trash2,
  Database,
  Crown,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  RotateCcw,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SettingsScreen: React.FC = () => {
  const {
    user,
    setUser,
    resetAppData,
    showToast,
    setShowPremiumModal,
    setShowAdminPanel,
    setActiveTab,
  } = useApp();

  const [dietType, setDietType] = useState(user.preferences?.dietType || 'Keto Estrito');
  const [measurementUnit, setMeasurementUnit] = useState<'metric' | 'imperial'>('metric');
  const [notifications, setNotifications] = useState({
    hydration: true,
    mealPlanner: true,
    dailyTip: true,
    newRecipes: true,
  });

  const handleDietChange = (newDiet: 'Keto Estrito' | 'Keto Moderado' | 'Low Carb Flexível') => {
    setDietType(newDiet);
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        dietType: newDiet,
      },
    }));
    showToast(`Preferência atualizada para ${newDiet}`, 'success');
  };

  const handleToggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      showToast('Preferências de notificação salvas!', 'info');
      return updated;
    });
  };

  const handleReset = () => {
    if (window.confirm('Deseja realmente restaurar todos os dados padrões do aplicativo?')) {
      resetAppData();
      showToast('Aplicativo restaurado com sucesso!', 'success');
    }
  };

  return (
    <div id="settings-screen" className="p-4 sm:p-6 lg:p-8 space-y-8 pb-28 select-none w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-center gap-2">
          <Settings size={28} className="text-[#63B532]" />
          <span>Configurações</span>
        </h1>
        <p className="text-sm text-[#8EA092]">
          Gerencie suas preferências nutricionais, notificações, exibição e privacidade.
        </p>
      </div>

      {/* PLAN & ACCOUNT STATUS CARD */}
      <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-14 h-14 rounded-2xl object-cover border border-[#63B532]/50"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">{user.name}</h3>
              {user.isPremium ? (
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-black">
                  VIP
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-[#123D24] text-[#8EA092] text-[10px] font-bold border border-[#1B472C]">
                  Gratuito
                </span>
              )}
            </div>
            <p className="text-xs text-[#8EA092]">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={() => setActiveTab('profile')}
            className="px-4 py-2 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-white text-xs font-bold border border-[#1B472C] transition-all"
          >
            Ver Perfil
          </button>
          {!user.isPremium && (
            <button
              onClick={() => setShowPremiumModal(true)}
              className="px-4 py-2 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold shadow-md transition-all flex items-center gap-1.5"
            >
              <Crown size={14} className="fill-[#082817]" />
              <span>Fazer Upgrade</span>
            </button>
          )}
        </div>
      </div>

      {/* SECTION 1: PREFERÊNCIAS CETOGÊNICAS */}
      <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] space-y-4">
        <div className="flex items-center gap-2.5">
          <Sliders size={20} className="text-[#63B532]" />
          <h2 className="text-base font-extrabold text-white font-display">
            Diretriz Nutricional
          </h2>
        </div>
        <p className="text-xs text-[#8EA092]">
          Ajusta os cálculos de limites de carboidratos líquidos nas receitas e no Scanner IA.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              id: 'Keto Estrito',
              desc: 'Até 20g net carbs/dia • Máxima cetose terapêutica',
            },
            {
              id: 'Keto Moderado',
              desc: 'Até 35g net carbs/dia • Flexibilidade & saciedade',
            },
            {
              id: 'Low Carb Flexível',
              desc: 'Até 50g net carbs/dia • Transição suave de hábitos',
            },
          ].map((option) => {
            const isSelected = dietType === option.id;
            return (
              <button
                key={option.id}
                onClick={() =>
                  handleDietChange(option.id as 'Keto Estrito' | 'Keto Moderado' | 'Low Carb Flexível')
                }
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#123D24] border-[#63B532] shadow-md'
                    : 'bg-[#082817] border-[#1B472C] hover:border-[#63B532]/40 text-[#8EA092]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#A8D94D]' : 'text-white'}`}>
                    {option.id}
                  </span>
                  {isSelected && <CheckCircle2 size={16} className="text-[#63B532]" />}
                </div>
                <p className="text-[11px] text-[#8EA092] leading-snug">{option.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: NOTIFICAÇÕES INTELIGENTES */}
      <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] space-y-4">
        <div className="flex items-center gap-2.5">
          <Bell size={20} className="text-[#63B532]" />
          <h2 className="text-base font-extrabold text-white font-display">
            Lembretes & Notificações
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              key: 'hydration' as const,
              title: 'Lembrete de Hidratação & Eletrólitos',
              desc: 'Notificação a cada 2 horas para manter ingestão de água e sódio.',
            },
            {
              key: 'mealPlanner' as const,
              title: 'Planejamento de Cardápio Semanal',
              desc: 'Lembrete aos domingos para definir as refeições da semana.',
            },
            {
              key: 'dailyTip' as const,
              title: 'Dica de Saúde do Dia',
              desc: 'Receba um conteúdo educativo baseado em ciência todas as manhãs.',
            },
            {
              key: 'newRecipes' as const,
              title: 'Novas Receitas Adicionadas',
              desc: 'Notificar quando novos pratos cetogênicos forem publicados.',
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#082817] border border-[#1B472C]"
            >
              <div>
                <h4 className="text-xs font-bold text-white">{item.title}</h4>
                <p className="text-[11px] text-[#8EA092]">{item.desc}</p>
              </div>
              <button
                onClick={() => handleToggleNotification(item.key)}
                className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                  notifications[item.key] ? 'bg-[#63B532]' : 'bg-[#1B472C]'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    notifications[item.key] ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: DADOS & ARMAZENAMENTO */}
      <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] space-y-4">
        <div className="flex items-center gap-2.5">
          <Database size={20} className="text-[#63B532]" />
          <h2 className="text-base font-extrabold text-white font-display">
            Dados & Armazenamento Local
          </h2>
        </div>
        <p className="text-xs text-[#8EA092]">
          Seus dados de receitas favoritas, histórico do scanner e notas são salvos com segurança neste dispositivo.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold transition-all flex items-center gap-2"
          >
            <RotateCcw size={15} />
            <span>Restaurar Dados Originais</span>
          </button>
        </div>
      </div>

      {/* SECTION 5: ADMIN ACCESS (Authorized only) */}
      {(user.isAdmin || user.role === 'admin') && (
        <div className="p-6 rounded-3xl bg-[#082817] border border-amber-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-400">
              <ShieldCheck size={20} />
              <h3 className="text-sm font-extrabold">Acesso Administrativo</h3>
            </div>
            <button
              onClick={() => setShowAdminPanel(true)}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-black text-xs font-extrabold hover:bg-amber-400 transition-colors"
            >
              Abrir Painel Admin
            </button>
          </div>
          <p className="text-xs text-[#8EA092]">
            Você está autenticado com privilégios de administrador. Você pode gerenciar receitas, dicas de saúde e configurações de preços.
          </p>
        </div>
      )}
    </div>
  );
};
