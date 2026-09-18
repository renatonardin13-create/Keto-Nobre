import React from 'react';
import {
  Home,
  Search,
  Calendar,
  ShoppingBag,
  Heart,
  ChefHat,
  User,
  ShieldCheck,
  Flame,
  Crown,
  Sparkles,
  Activity,
  Settings,
  Scan,
  Lightbulb,
  Dumbbell,
  Droplets,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const {
    activeTab,
    setActiveTab,
    user,
    shoppingList,
    setShowChefModal,
    setShowPremiumModal,
    setShowAdminPanel,
  } = useApp();

  const uncheckedShoppingCount = shoppingList.filter((i) => !i.checked).length;

  const principalNavItems = [
    { id: 'home' as NavigationTab, label: 'Início', icon: Home, route: '/home' },
    { id: 'explore' as NavigationTab, label: 'Explorar', icon: Search, route: '/explorar' },
    { id: 'planner' as NavigationTab, label: 'Planejar', icon: Calendar, route: '/planejar' },
    {
      id: 'shopping' as NavigationTab,
      label: 'Compras',
      icon: ShoppingBag,
      route: '/compras',
      badge: uncheckedShoppingCount > 0 ? uncheckedShoppingCount : undefined,
    },
    { id: 'saved' as NavigationTab, label: 'Salvos', icon: Heart, route: '/salvos' },
  ];

  const toolsNavItems = [
    {
      id: 'scanner' as NavigationTab,
      label: 'Scanner',
      icon: Scan,
      route: '/scanner',
      badgeText: 'NOVO',
      badgeColor: 'bg-[#63B532] text-[#082817]',
    },
    {
      id: 'nutrition' as NavigationTab,
      label: 'Nutrição',
      icon: Activity,
      route: '/nutricao',
    },
    {
      id: 'chef' as NavigationTab,
      label: 'Chef IA',
      icon: ChefHat,
      route: '/chef',
      badgeText: 'PREMIUM',
      badgeColor: 'bg-gradient-to-r from-amber-400 to-amber-500 text-black',
    },
    {
      id: 'tips' as NavigationTab,
      label: 'Dicas de Saúde',
      icon: Lightbulb,
      route: '/dicas',
    },
    {
      id: 'hydration' as NavigationTab,
      label: 'Hidratação',
      icon: Droplets,
      route: '/hidratacao',
      badgeText: 'NOVO',
      badgeColor: 'bg-[#63B532] text-[#082817]',
    },
    {
      id: 'workouts' as NavigationTab,
      label: 'Treinos',
      icon: Dumbbell,
      route: '/treinos',
      badgeText: 'EM BREVE',
      badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    },
  ];

  const handleNavClick = (tabId: NavigationTab) => {
    if (tabId === 'chef') {
      if (!user.isPremium) {
        setShowPremiumModal(true);
      } else {
        setShowChefModal(true);
      }
      return;
    }
    if (tabId === 'premium') {
      setShowPremiumModal(true);
      return;
    }
    if (tabId === 'admin') {
      setShowAdminPanel(true);
      return;
    }
    setActiveTab(tabId);
  };

  const isUserAdmin = user.isAdmin || user.role === 'admin';

  return (
    <div className="min-h-screen flex flex-col bg-[#071A0E] text-[#F5F8F2]">
      {/* DESKTOP & TABLET SIDEBAR (md: 768px+, lg: 1024px+, xl: 1280px+) */}
      <aside
        aria-label="Navegação Lateral Principal"
        className="hidden md:flex fixed inset-y-0 left-0 z-30 md:w-60 lg:w-64 xl:w-72 flex-col justify-between bg-[#0A2214] border-r border-[#1B472C]/60 p-4 lg:p-5 select-none shadow-xl overflow-y-auto no-scrollbar"
      >
        <div className="space-y-6">
          {/* Header Brand */}
          <div className="px-2 pt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#123D24] to-[#082817] border border-[#63B532] flex items-center justify-center text-[#63B532] font-black text-lg shadow-md shadow-[#63B532]/20 shrink-0">
                K
              </div>
              <div className="min-w-0">
                <span className="font-extrabold text-base lg:text-lg text-white font-display tracking-tight block leading-none">
                  Keto<span className="text-[#63B532]">Nobre</span>
                </span>
                <span className="text-[11px] text-[#8EA092] font-medium leading-none block mt-1 truncate">
                  Receitas que Transformam
                </span>
              </div>
            </div>
          </div>

          {/* GROUP 1: PRINCIPAL */}
          <div className="space-y-1.5">
            <span className="px-3 text-[10px] font-black tracking-wider uppercase text-[#A8D94D]">
              PRINCIPAL
            </span>
            <nav className="space-y-1" aria-label="Navegação Principal">
              {principalNavItems.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    id={`sidebar-nav-${item.id}`}
                    aria-label={item.label}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B532] ${
                      isActive
                        ? 'bg-[#123D24] text-[#63B532] shadow-sm border border-[#63B532]/40'
                        : 'text-[#8EA092] hover:bg-[#0D2817] hover:text-[#F5F8F2]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 lg:gap-3 min-w-0">
                      <div
                        className={`p-1.5 rounded-lg transition-transform shrink-0 ${
                          isActive
                            ? 'bg-[#63B532]/20 text-[#63B532] scale-105'
                            : 'group-hover:scale-110 text-inherit'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-[#63B532] text-[#082817] shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* GROUP 2: FERRAMENTAS */}
          <div className="space-y-1.5 pt-1">
            <span className="px-3 text-[10px] font-black tracking-wider uppercase text-[#A8D94D]">
              FERRAMENTAS
            </span>
            <nav className="space-y-1" aria-label="Ferramentas">
              {toolsNavItems.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    id={`sidebar-nav-${item.id}`}
                    aria-label={item.label}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B532] ${
                      isActive
                        ? 'bg-[#123D24] text-[#63B532] shadow-sm border border-[#63B532]/40'
                        : 'text-[#8EA092] hover:bg-[#0D2817] hover:text-[#F5F8F2]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 lg:gap-3 min-w-0">
                      <div
                        className={`p-1.5 rounded-lg transition-transform shrink-0 ${
                          isActive
                            ? 'bg-[#63B532]/20 text-[#63B532] scale-105'
                            : 'group-hover:scale-110 text-inherit'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badgeText && (
                      <span
                        className={`px-1.5 py-0.5 text-[9px] font-black uppercase rounded-full shrink-0 ${item.badgeColor}`}
                      >
                        {item.badgeText}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* SIDEBAR FOOTER: PREMIUM, PERFIL, CONFIGURAÇÕES (AND ADMIN IF AUTHORIZED) */}
        <div className="space-y-2 pt-4 border-t border-[#1B472C]/60 mt-4">
          {/* Premium Item / Banner */}
          <button
            id="sidebar-nav-premium"
            onClick={() => setShowPremiumModal(true)}
            aria-label="Acesso Premium"
            className={`w-full flex items-center justify-between p-2.5 rounded-2xl border text-left transition-all ${
              user.isPremium
                ? 'bg-gradient-to-r from-[#123D24] to-[#0D2817] border-[#63B532]/40 hover:border-[#63B532]'
                : 'bg-gradient-to-r from-[#123D24] via-[#0D2817] to-[#123D24] border-amber-500/40 hover:border-amber-500'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-1.5 rounded-xl bg-amber-400 text-black shrink-0">
                <Crown size={16} className="fill-black" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-black text-white block truncate">
                  {user.isPremium ? 'KetoNobre VIP' : 'Assinar Premium'}
                </span>
                <span className="text-[10px] text-[#8EA092] block truncate">
                  {user.isPremium ? 'Acesso total ativo' : 'Desbloqueie Chef IA'}
                </span>
              </div>
            </div>
            {user.isPremium ? (
              <span className="text-[9px] font-black bg-[#63B532] text-[#082817] px-1.5 py-0.5 rounded-full shrink-0">
                ATIVO
              </span>
            ) : (
              <Sparkles size={14} className="text-amber-400 shrink-0" />
            )}
          </button>

          {/* Perfil */}
          <button
            id="sidebar-nav-profile"
            aria-label="Perfil do usuário"
            aria-current={activeTab === 'profile' ? 'page' : undefined}
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all group ${
              activeTab === 'profile'
                ? 'bg-[#123D24] text-[#63B532] border border-[#63B532]/40'
                : 'text-[#8EA092] hover:bg-[#0D2817] hover:text-[#F5F8F2]'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-6 h-6 rounded-full object-cover border border-[#63B532]/50 shrink-0"
              />
              <span className="truncate">{user.name}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold shrink-0">
              <Flame size={12} className="fill-amber-400" />
              <span>{user.streakDays}d</span>
            </div>
          </button>

          {/* Configurações */}
          <button
            id="sidebar-nav-settings"
            aria-label="Configurações do aplicativo"
            aria-current={activeTab === 'settings' ? 'page' : undefined}
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all group ${
              activeTab === 'settings'
                ? 'bg-[#123D24] text-[#63B532] border border-[#63B532]/40'
                : 'text-[#8EA092] hover:bg-[#0D2817] hover:text-[#F5F8F2]'
            }`}
          >
            <div className="flex items-center gap-2.5 lg:gap-3 min-w-0">
              <div className="p-1 rounded-lg text-inherit">
                <Settings size={17} />
              </div>
              <span className="truncate">Configurações</span>
            </div>
          </button>

          {/* Painel Admin */}
          <button
            id="sidebar-nav-admin"
            aria-label="Painel Administrativo"
            onClick={() => setShowAdminPanel(true)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold text-amber-400 hover:bg-[#0D2817] transition-all"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <ShieldCheck size={17} />
              <span className="truncate">Painel Admin</span>
            </div>
            <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-400">
              MENU
            </span>
          </button>
        </div>
      </aside>

      {/* TOP BAR (Visible across all screens, responsive padding for sidebar) */}
      <header className="md:pl-60 lg:pl-64 xl:pl-72 sticky top-0 z-20 bg-[#082817]/95 backdrop-blur-md border-b border-[#1B472C]/60 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Mobile Brand or Screen Title */}
          <div className="flex items-center gap-3">
            <div className="md:hidden flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#123D24] border border-[#63B532] flex items-center justify-center text-[#63B532] font-black text-sm">
                K
              </div>
              <div>
                <span className="font-extrabold text-sm text-white font-display tracking-tight">
                  Keto<span className="text-[#63B532]">Nobre</span>
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-[#8EA092]">
              <span className="font-semibold text-[#A8D94D] uppercase tracking-wider">
                {activeTab === 'home' && 'Painel Principal'}
                {activeTab === 'explore' && 'Explorar Catálogo'}
                {activeTab === 'planner' && 'Planejador Semanal'}
                {activeTab === 'shopping' && 'Lista de Compras Inteligente'}
                {activeTab === 'saved' && 'Coleções & Histórico'}
                {activeTab === 'scanner' && 'Scanner de Alimentos IA'}
                {activeTab === 'nutrition' && 'Dashboard Nutricional'}
                {activeTab === 'tips' && 'Dicas de Saúde & Ciência'}
                {activeTab === 'workouts' && 'Treinos & Performance'}
                {activeTab === 'profile' && 'Perfil & Metas'}
                {activeTab === 'settings' && 'Configurações'}
              </span>
            </div>
          </div>

          {/* Right quick actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Chef IA Quick Button */}
            <button
              id="top-bar-chef-btn"
              onClick={() => {
                if (!user.isPremium) {
                  setShowPremiumModal(true);
                } else {
                  setShowChefModal(true);
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#123D24] border border-[#63B532]/40 text-[#A8D94D] text-xs font-bold hover:bg-[#184d2f] hover:border-[#63B532] transition-all shadow-sm"
            >
              <Sparkles size={14} className="text-[#63B532]" />
              <span className="hidden sm:inline">Chef IA</span>
            </button>

            {/* Shopping List Counter */}
            <button
              id="top-bar-shopping-btn"
              onClick={() => setActiveTab('shopping')}
              className="relative p-2 rounded-xl bg-[#0D2817] border border-[#1B472C] text-[#8EA092] hover:text-[#63B532] hover:border-[#63B532]/60 transition-colors"
              title="Lista de compras"
              aria-label={`Lista de compras com ${uncheckedShoppingCount} itens pendentes`}
            >
              <ShoppingBag size={18} />
              {uncheckedShoppingCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#63B532] text-[#082817] text-[10px] font-extrabold flex items-center justify-center">
                  {uncheckedShoppingCount}
                </span>
              )}
            </button>

            {/* Streak indicator */}
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#0D2817] border border-[#1B472C] text-xs font-bold text-amber-400">
              <Flame size={14} className="fill-amber-400" />
              <span>{user.streakDays}d</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="md:pl-60 lg:pl-64 xl:pl-72 flex-1 w-full min-w-0">
        {children}
      </main>
    </div>
  );
};
