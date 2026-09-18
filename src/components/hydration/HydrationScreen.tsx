import React, { useState } from 'react';
import {
  Droplets,
  Calendar,
  Calculator,
  BarChart2,
  Bell,
  Sparkles,
  Info,
  ShieldAlert,
  ArrowRight,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HydrationTodayView } from './HydrationTodayView';
import { HydrationWeekPlanner } from './HydrationWeekPlanner';
import { HydrationCalculatorForm } from './HydrationCalculatorForm';
import { HydrationHistoryView } from './HydrationHistoryView';
import { HydrationRemindersView } from './HydrationRemindersView';

type HydrationSubTab = 'today' | 'plan' | 'calculator' | 'history' | 'reminders';

export const HydrationScreen: React.FC = () => {
  const { hydrationProfile, todayHydration } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<HydrationSubTab>('today');

  const subTabs = [
    { id: 'today' as HydrationSubTab, label: 'Hoje', icon: Droplets },
    { id: 'plan' as HydrationSubTab, label: 'Plano 7 Dias', icon: Calendar },
    { id: 'calculator' as HydrationSubTab, label: 'Calculadora & Perfil', icon: Calculator },
    { id: 'history' as HydrationSubTab, label: 'Histórico & Análise', icon: BarChart2 },
    { id: 'reminders' as HydrationSubTab, label: 'Lembretes', icon: Bell },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#DDE5D9] dark:border-white/10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#63B532]/15 text-[#123D24] dark:text-[#A8D94D] text-xs font-semibold uppercase tracking-wider">
            <Droplets className="w-3.5 h-3.5" />
            Nutrição Celular & Equilíbrio Eletrolítico
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#172019] dark:text-[#F5F8F2] tracking-tight">
            Hidratação Inteligente
          </h1>
          <p className="text-sm md:text-base text-[#6D756D] dark:text-[#F5F8F2]/75 max-w-2xl">
            Crie uma rotina de hidratação adaptada ao seu perfil.
          </p>
        </div>

        {/* Resumo Rápido no Topo */}
        <div className="flex items-center gap-3 bg-white dark:bg-[#0D2817] p-3 rounded-2xl border border-[#DDE5D9] dark:border-white/10 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#63B532]/15 text-[#123D24] dark:text-[#A8D94D] flex items-center justify-center">
            <Droplets className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <div className="text-[#6D756D] dark:text-[#F5F8F2]/70">Meta diária de bebidas</div>
            <div className="text-base font-bold text-[#172019] dark:text-[#F5F8F2]">
              {hydrationProfile.daily_target_ml?.toLocaleString('pt-BR') || 2650} ml
              <span className="text-xs font-normal text-[#6D756D] ml-1">
                ({Math.round((hydrationProfile.daily_target_ml || 2650) / (hydrationProfile.bottle_ml || 500))} garrafas)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Tabs de Navegação */}
      <div className="flex items-center gap-2 border-b border-[#DDE5D9] dark:border-white/10 overflow-x-auto no-scrollbar pb-1">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id)}
              className={`py-3 px-4 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#123D24] dark:bg-[#63B532] text-white dark:text-[#082817] shadow-sm'
                  : 'text-[#6D756D] dark:text-[#F5F8F2]/75 hover:text-[#172019] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
              {tab.id === 'today' && todayHydration.consumedMl > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white dark:text-[#082817]'
                      : 'bg-[#63B532]/20 text-[#123D24] dark:text-[#A8D94D]'
                  }`}
                >
                  {todayHydration.percent}%
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Conteúdo Dinâmico da Aba Selecionada */}
      <div className="pt-2">
        {activeSubTab === 'today' && (
          <HydrationTodayView
            onOpenSettings={() => setActiveSubTab('calculator')}
            onOpenPlan={() => setActiveSubTab('plan')}
          />
        )}

        {activeSubTab === 'plan' && <HydrationWeekPlanner />}

        {activeSubTab === 'calculator' && (
          <HydrationCalculatorForm onSaved={() => setActiveSubTab('today')} />
        )}

        {activeSubTab === 'history' && <HydrationHistoryView />}

        {activeSubTab === 'reminders' && <HydrationRemindersView />}
      </div>
    </div>
  );
};
