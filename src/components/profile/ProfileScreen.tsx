import React, { useState } from 'react';
import {
  User,
  Crown,
  Flame,
  Heart,
  BookOpen,
  Folder,
  Settings,
  Bell,
  Sliders,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Award,
  Database,
  Droplets,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminDashboard } from '../admin/AdminDashboard';

export const ProfileScreen: React.FC = () => {
  const {
    user,
    favorites,
    setShowPremiumModal,
    setShowAuthModal,
    setActiveTab,
    darkMode,
    resetAppData,
    showToast,
    cookingHistory,
    hydrationProfile,
    todayHydration,
  } = useApp();

  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState<boolean>(false);
  const [dietPreference, setDietPreference] = useState<string>('Keto Clássica');

  if (showAdmin) {
    return <AdminDashboard onBack={() => setShowAdmin(false)} />;
  }

  const handleLogout = () => {
    setShowAuthModal(true);
  };

  return (
    <div id="profile-screen" className="p-4 sm:p-6 lg:p-8 space-y-6 pb-28 select-none w-full max-w-4xl mx-auto">
      {/* Header Profile Info Card */}
      <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-xl">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#63B532] shadow-xl"
          />
          {user.isPremium && (
            <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-amber-500 text-black shadow-md" title="Membro VIP">
              <Crown size={14} className="fill-black" />
            </div>
          )}
        </div>

        <div className="flex-1 text-center sm:text-left space-y-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              {user.name}
            </h1>
            {user.isPremium ? (
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-extrabold shadow-sm">
                <Crown size={12} className="fill-black" />
                <span>KetoNobre VIP</span>
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#123D24] text-[#8EA092] text-xs font-semibold border border-[#1B472C]">
                Plano Gratuito
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-[#8EA092]">{user.email}</p>

          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            {!user.isPremium && (
              <button
                onClick={() => setShowPremiumModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#63B532] to-[#A8D94D] text-[#082817] text-xs font-extrabold shadow-md hover:opacity-90 transition-opacity"
              >
                <Sparkles size={14} />
                <span>Assinar VIP por R$ 29,90/mês</span>
              </button>
            )}
            <button
              onClick={() => setShowPreferencesModal(true)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-[#A8D94D] text-xs font-bold border border-[#63B532]/30 transition-colors"
            >
              <Sliders size={13} />
              <span>{dietPreference}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-center shadow-md">
          <Award size={20} className="text-[#63B532] mb-1" />
          <span className="text-xl font-extrabold text-white">
            {user.preparedCount || cookingHistory.length}
          </span>
          <span className="text-[11px] text-[#8EA092] font-semibold">Pratos Preparados</span>
        </div>

        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-center shadow-md">
          <div className="flex items-center gap-1 text-amber-400 mb-1">
            <Flame size={20} className="fill-amber-400" />
          </div>
          <span className="text-xl font-extrabold text-white">{user.streakDays} dias</span>
          <span className="text-[11px] text-[#8EA092] font-semibold">Sequência Ativa</span>
        </div>

        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-center shadow-md">
          <Heart size={20} className="text-rose-400 fill-rose-400 mb-1" />
          <span className="text-xl font-extrabold text-white">{favorites.length}</span>
          <span className="text-[11px] text-[#8EA092] font-semibold">Favoritas</span>
        </div>
      </div>

      {/* Hydration Profile Integration Card */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-[#0D2817] via-[#123D24] to-[#082817] border border-[#63B532]/30 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#63B532]/20 text-[#63B532] shadow-sm">
              <Droplets size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-extrabold text-white">Rotina de Hidratação Inteligente</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#63B532]/20 text-[#A8D94D] font-bold">
                  {todayHydration.percent}% Hoje
                </span>
              </div>
              <p className="text-xs text-[#8EA092] mt-0.5">
                Meta diária: <strong className="text-white">{hydrationProfile.daily_target_ml?.toLocaleString('pt-BR') || 2650} ml</strong> • Garrafa de {hydrationProfile.bottle_ml || 500} ml ({hydrationProfile.wake_time} às {hydrationProfile.sleep_time})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('hydration')}
            className="px-4 py-2 rounded-xl bg-[#63B532] hover:bg-[#A8D94D] text-[#082817] text-xs font-bold transition-colors flex items-center gap-1.5 self-end sm:self-auto cursor-pointer"
          >
            <span>Gerenciar Rotina</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* VIP Promo Banner if free */}
      {!user.isPremium && (
        <div
          onClick={() => setShowPremiumModal(true)}
          className="p-5 rounded-3xl bg-gradient-to-r from-amber-500/20 via-[#123D24] to-[#0D2817] border border-amber-500/40 cursor-pointer hover:border-amber-500 transition-all flex items-center justify-between shadow-xl"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-amber-500 text-black shadow-md flex-shrink-0">
              <Crown size={24} className="fill-black" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white">Clube KetoNobre VIP</h4>
              <p className="text-xs text-[#8EA092]">Acesso irrestrito a receitas exclusivas, chef IA e listas ilimitadas.</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-amber-400 flex-shrink-0" />
        </div>
      )}

      {/* Settings & Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Column 1: Preferências & Gerenciamento */}
        <div className="space-y-2 bg-[#0D2817] p-4 rounded-3xl border border-[#1B472C]">
          <h3 className="text-xs uppercase font-extrabold text-[#8EA092] px-2 mb-2 tracking-wider">
            Minha Conta
          </h3>

          <button
            onClick={() => setActiveTab('saved')}
            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#123D24] text-xs font-semibold text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              <Heart size={18} className="text-[#63B532]" />
              <span>Receitas Favoritas & Coleções</span>
            </div>
            <ChevronRight size={16} className="text-[#8EA092]" />
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#123D24] text-xs font-semibold text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              <Settings size={18} className="text-[#63B532]" />
              <span>Configurações do Aplicativo</span>
            </div>
            <ChevronRight size={16} className="text-[#8EA092]" />
          </button>

          <button
            onClick={() => setShowPreferencesModal(true)}
            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#123D24] text-xs font-semibold text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              <Sliders size={18} className="text-[#63B532]" />
              <span>Foco da Dieta ({dietPreference})</span>
            </div>
            <ChevronRight size={16} className="text-[#8EA092]" />
          </button>
        </div>

        {/* Column 2: Sistema & Administração */}
        <div className="space-y-2 bg-[#0D2817] p-4 rounded-3xl border border-[#1B472C]">
          <h3 className="text-xs uppercase font-extrabold text-[#8EA092] px-2 mb-2 tracking-wider">
            Administração & Dados
          </h3>

          {/* Admin Panel button - ONLY for authorized users */}
          {(user.isAdmin || user.role === 'admin') && (
            <button
              id="btn-open-admin-dashboard"
              onClick={() => setShowAdmin(true)}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#123D24]/60 hover:bg-[#123D24] border border-[#63B532]/30 text-xs font-bold text-[#A8D94D] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-[#63B532]" />
                <div>
                  <span className="block text-white">Painel do Administrador</span>
                  <span className="text-[10px] text-[#8EA092] font-normal">Cadastrar receitas, gerenciar usuários e métricas</span>
                </div>
              </div>
              <ChevronRight size={16} className="text-[#63B532]" />
            </button>
          )}

          <button
            onClick={() => {
              if (confirm('Deseja restaurar os dados originais de demonstração?')) {
                resetAppData();
              }
            }}
            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#123D24] text-xs font-semibold text-[#8EA092] hover:text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              <Database size={18} />
              <span>Restaurar dados de demonstração</span>
            </div>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-red-950/40 text-xs font-bold text-red-400 transition-colors"
          >
            <div className="flex items-center gap-3">
              <LogOut size={18} />
              <span>Sair da Conta</span>
            </div>
          </button>
        </div>
      </div>

      {/* Dietary Preferences Modal */}
      {showPreferencesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#0D2817] border border-[#1B472C] rounded-3xl p-6 space-y-4 text-white shadow-2xl">
            <h3 className="text-base font-bold font-display text-white">Preferências Cetogênicas</h3>
            <p className="text-xs text-[#8EA092]">
              Personalize o foco das suas receitas e distribuição de macronutrientes:
            </p>

            <div className="space-y-2.5">
              {[
                { name: 'Keto Clássica', desc: '75% gordura, 20% proteína, 5% carboidrato líquido' },
                { name: 'Keto Alta Proteína', desc: 'Ideal para hipertrofia, saciedade e preservação muscular' },
                { name: 'Low Carb Moderada', desc: 'Até 30g a 40g de carboidratos líquidos diários' },
                { name: 'Keto Sem Laticínios', desc: 'Zero leite, creme de leite ou queijos amarelos' },
              ].map((pref) => (
                <div
                  key={pref.name}
                  onClick={() => setDietPreference(pref.name)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    dietPreference === pref.name
                      ? 'bg-[#123D24] border-[#63B532] text-white shadow-md'
                      : 'bg-[#071A0E] border-[#1B472C] text-[#8EA092] hover:border-[#63B532]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-white">{pref.name}</span>
                    {dietPreference === pref.name && (
                      <CheckCircle2 size={18} className="text-[#63B532]" />
                    )}
                  </div>
                  <span className="text-[11px] block mt-1">{pref.desc}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setShowPreferencesModal(false);
                showToast(`Preferência salva: ${dietPreference}`);
              }}
              className="w-full py-3.5 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] text-xs font-extrabold shadow-lg shadow-[#63B532]/30"
            >
              Salvar Preferência
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
