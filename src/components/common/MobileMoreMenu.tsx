import React from 'react';
import {
  X,
  Scan,
  Activity,
  ChefHat,
  Lightbulb,
  Dumbbell,
  ShoppingBag,
  Crown,
  Settings,
  User,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';

interface MobileMoreMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMoreMenu: React.FC<MobileMoreMenuProps> = ({ isOpen, onClose }) => {
  const {
    activeTab,
    setActiveTab,
    user,
    shoppingList,
    setShowChefModal,
    setShowPremiumModal,
    setShowAdminPanel,
  } = useApp();

  if (!isOpen) return null;

  const uncheckedShoppingCount = shoppingList.filter((i) => !i.checked).length;

  const handleItemClick = (tab: NavigationTab) => {
    onClose();
    if (tab === 'chef') {
      if (!user.isPremium) {
        setShowPremiumModal(true);
      } else {
        setShowChefModal(true);
      }
      return;
    }

    if (tab === 'premium') {
      setShowPremiumModal(true);
      return;
    }

    if (tab === 'admin') {
      setShowAdminPanel(true);
      return;
    }

    setActiveTab(tab);
  };

  const toolItems = [
    {
      id: 'scanner' as NavigationTab,
      label: 'Scanner',
      subtitle: 'Análise de alimentos & rótulos',
      icon: Scan,
      badge: 'NOVO',
      badgeColor: 'bg-[#63B532] text-[#082817]',
    },
    {
      id: 'nutrition' as NavigationTab,
      label: 'Nutrição',
      subtitle: 'Acompanhamento de macros e calorias',
      icon: Activity,
    },
    {
      id: 'chef' as NavigationTab,
      label: 'Chef IA',
      subtitle: 'Consultoria culinária cetogênica',
      icon: ChefHat,
      badge: 'PREMIUM',
      badgeColor: 'bg-gradient-to-r from-amber-400 to-amber-500 text-black',
    },
    {
      id: 'tips' as NavigationTab,
      label: 'Dicas de Saúde',
      subtitle: 'Conteúdo educativo baseado em evidências',
      icon: Lightbulb,
    },
    {
      id: 'workouts' as NavigationTab,
      label: 'Treinos',
      subtitle: 'Protocolos adaptados para cetose',
      icon: Dumbbell,
      badge: 'EM BREVE',
      badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    },
    {
      id: 'shopping' as NavigationTab,
      label: 'Compras',
      subtitle: 'Lista inteligente sincronizada',
      icon: ShoppingBag,
      countBadge: uncheckedShoppingCount > 0 ? uncheckedShoppingCount : undefined,
    },
  ];

  const secondaryItems = [
    {
      id: 'profile' as NavigationTab,
      label: 'Meu Perfil',
      subtitle: user.name,
      icon: User,
    },
    {
      id: 'premium' as NavigationTab,
      label: user.isPremium ? 'KetoNobre VIP' : 'Assinar Premium',
      subtitle: user.isPremium ? 'Acesso total desbloqueado' : 'Acesse todas as receitas e Chef IA',
      icon: Crown,
      isSpecial: true,
    },
    {
      id: 'settings' as NavigationTab,
      label: 'Configurações',
      subtitle: 'Preferências de dieta e app',
      icon: Settings,
    },
  ];

  if (user.isAdmin || user.role === 'admin') {
    secondaryItems.push({
      id: 'admin' as NavigationTab,
      label: 'Painel Admin',
      subtitle: 'Gestão de receitas e métricas',
      icon: ShieldCheck,
      isSpecial: false,
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-end bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-h-[85vh] bg-[#071A0E] border-t border-[#1B472C] rounded-t-3xl p-5 overflow-y-auto shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1B472C]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#123D24] text-[#63B532] flex items-center justify-center border border-[#63B532]/40 font-bold text-sm">
              KN
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white font-display">
                Mais Funcionalidades
              </h2>
              <p className="text-[11px] text-[#8EA092]">
                Ferramentas e configurações do ecossistema
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-2 rounded-xl text-[#8EA092] hover:text-white bg-[#0D2817] border border-[#1B472C]"
          >
            <X size={18} />
          </button>
        </div>

        {/* FERRAMENTAS SECTION */}
        <div className="space-y-2">
          <span className="text-[10px] font-black tracking-wider uppercase text-[#A8D94D]">
            FERRAMENTAS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {toolItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-[#123D24] border-[#63B532] text-white'
                      : 'bg-[#0D2817] border-[#1B472C] text-[#8EA092] hover:text-white hover:border-[#63B532]/40'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isActive
                          ? 'bg-[#63B532] text-[#082817]'
                          : 'bg-[#123D24] text-[#63B532]'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white truncate">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                        )}
                        {item.countBadge !== undefined && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#63B532] text-[#082817]">
                            {item.countBadge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#8EA092] truncate block">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-[#8EA092] shrink-0 ml-2" />
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTA & CONFIGURAÇÕES */}
        <div className="space-y-2 pt-2 border-t border-[#1B472C]">
          <span className="text-[10px] font-black tracking-wider uppercase text-[#8EA092]">
            GERAL & CONTA
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {secondaryItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-[#123D24] border-[#63B532] text-white'
                      : item.isSpecial && !user.isPremium
                      ? 'bg-gradient-to-r from-[#123D24] to-[#0D2817] border-[#63B532]/40 text-white'
                      : 'bg-[#0D2817] border-[#1B472C] text-[#8EA092] hover:text-white hover:border-[#63B532]/40'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        item.isSpecial
                          ? 'bg-amber-400 text-black'
                          : 'bg-[#123D24] text-[#A8D94D]'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white block truncate">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-[#8EA092] truncate block">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-[#8EA092] shrink-0 ml-2" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
