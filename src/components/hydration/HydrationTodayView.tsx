import React, { useState } from 'react';
import {
  Droplets,
  Plus,
  Clock,
  CheckCircle2,
  Circle,
  Trash2,
  Sparkles,
  Info,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HydrationContainer } from '../../types/hydration';

interface HydrationTodayViewProps {
  onOpenSettings: () => void;
  onOpenPlan: () => void;
}

export const HydrationTodayView: React.FC<HydrationTodayViewProps> = ({
  onOpenSettings,
  onOpenPlan,
}) => {
  const {
    todayHydration,
    hydrationProfile,
    hydrationContainers,
    logWaterIntake,
    togglePlannedIntake,
    deleteHydrationLog,
    resetHydrationDay,
  } = useApp();

  const [selectedContainer, setSelectedContainer] = useState<HydrationContainer>(
    hydrationContainers.find((c) => c.isDefault) || hydrationContainers[0]
  );
  const [customMlInput, setCustomMlInput] = useState<string>('300');
  const [showCustomInput, setShowCustomInput] = useState<boolean>(false);
  const [showLogHistory, setShowLogHistory] = useState<boolean>(false);

  const {
    targetMl,
    consumedMl,
    remainingMl,
    percent,
    bottlesTarget,
    bottlesConsumed,
    bottleMl,
    nextIntake,
    logsToday,
  } = todayHydration;

  const handleQuickLog = (amount: number, label?: string) => {
    logWaterIntake(amount, label || selectedContainer.name);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(customMlInput, 10);
    if (val > 0 && val <= 3000) {
      logWaterIntake(val, `Medida Avulsa (${val} ml)`);
      setShowCustomInput(false);
    }
  };

  // Day name in Portuguese for current schedule
  const todayNamePt = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][
    new Date().getDay()
  ];

  // Visual bottles representation: up to 10 slots
  const visualBottleCount = Math.max(1, Math.min(10, bottlesTarget || 5));
  const filledBottles = Math.min(visualBottleCount, bottlesConsumed);

  return (
    <div className="space-y-6">
      {/* Restrição de saúde alerta se ativado */}
      {hydrationProfile.has_health_restriction && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Orientação Médica Individualizada</p>
            <p className="mt-0.5 text-xs opacity-90">
              Você indicou restrições clínicas de fluidos. Siga rigorosamente as recomendações do seu médico ou nutricionista antes de atingir metas automáticas.
            </p>
          </div>
        </div>
      )}

      {/* Hero Card de Hoje - Padrão KetoNobre */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#123D24] via-[#0D2817] to-[#082817] text-[#F5F8F2] shadow-xl relative overflow-hidden border border-[#63B532]/20">
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#63B532]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#63B532]/20 border border-[#63B532]/30 text-[#A8D94D] text-xs font-semibold uppercase tracking-wider">
              <Droplets className="w-3.5 h-3.5" />
              Status de Hidratação de Hoje
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-white">
                  {consumedMl.toLocaleString('pt-BR')}{' '}
                  <span className="text-2xl font-normal text-[#A8D94D]">/ {targetMl.toLocaleString('pt-BR')} ml</span>
                </h2>
              </div>
              <p className="text-sm text-[#F5F8F2]/75 mt-1">
                {percent >= 100 ? (
                  <span className="text-[#A8D94D] font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Meta diária alcançada! Hidratação excelente.
                  </span>
                ) : (
                  <span>
                    Faltam <strong>{remainingMl.toLocaleString('pt-BR')} ml</strong> para sua meta educativa diária.
                  </span>
                )}
              </p>
            </div>

            {/* Garrafas visuais */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs text-[#F5F8F2]/70 mb-2">
                <span>
                  Garrafas ({bottleMl} ml): <strong>{bottlesConsumed} de {bottlesTarget}</strong>
                </span>
                <span className="font-bold text-[#A8D94D]">{percent}%</span>
              </div>

              {/* Barra de progresso */}
              <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#63B532] to-[#A8D94D] transition-all duration-500 shadow-[0_0_12px_rgba(99,181,50,0.5)]"
                  style={{ width: `${Math.min(100, percent)}%` }}
                />
              </div>

              {/* Ícones de garrafas interativas */}
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {Array.from({ length: visualBottleCount }).map((_, i) => {
                  const isFilled = i < filledBottles;
                  return (
                    <div
                      key={i}
                      title={`Garrafa ${i + 1} (${bottleMl} ml) - ${isFilled ? 'Consumida' : 'Pendente'}`}
                      className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
                        isFilled
                          ? 'bg-[#63B532] text-[#082817] shadow-[0_0_8px_rgba(99,181,50,0.4)]'
                          : 'bg-white/10 text-white/40 border border-white/10'
                      }`}
                    >
                      <Droplets className="w-4 h-4" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Próxima Tomada & Ações Rápidas */}
          <div className="w-full lg:w-auto flex-shrink-0 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-[#A8D94D] font-medium uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                Próxima Tomada Sugerida
              </div>
              {nextIntake ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-serif text-white">
                    {nextIntake.time}
                  </span>
                  <span className="text-sm text-white/70">
                    ({nextIntake.amount_ml} ml)
                  </span>
                </div>
              ) : (
                <div className="text-sm font-medium text-white/90">
                  Todas as tomadas de hoje concluídas! 🎉
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleQuickLog(selectedContainer.capacity_ml, selectedContainer.name)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#63B532] to-[#A8D94D] text-[#082817] font-semibold text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Registrar +{selectedContainer.capacity_ml} ml ({selectedContainer.name})
              </button>

              <button
                type="button"
                onClick={() => setShowCustomInput(!showCustomInput)}
                className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white/90 font-medium transition-colors text-center cursor-pointer"
              >
                {showCustomInput ? 'Fechar medida avulsa' : 'Registrar outro volume ou recipiente'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Painel de Recipientes & Registro Rápido */}
      {showCustomInput && (
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#63B532]" />
              Escolha um Recipiente ou Digite a Quantidade
            </h3>
            <button
              type="button"
              onClick={() => setShowCustomInput(false)}
              className="text-xs text-[#6D756D] hover:text-[#172019] dark:hover:text-white"
            >
              Cancelar
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hydrationContainers.map((container) => {
              const isSelected = selectedContainer.id === container.id;
              return (
                <button
                  key={container.id}
                  type="button"
                  onClick={() => {
                    setSelectedContainer(container);
                    handleQuickLog(container.capacity_ml, container.name);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#63B532]/10 border-[#63B532] text-[#123D24] dark:text-[#A8D94D]'
                      : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent hover:border-[#63B532]/40 text-[#172019] dark:text-[#F5F8F2]'
                  }`}
                >
                  <div className="font-semibold text-sm">{container.name}</div>
                  <div className="text-xs text-[#6D756D] dark:text-[#A8D94D] mt-0.5">
                    {container.capacity_ml} ml
                  </div>
                </button>
              );
            })}
          </div>

          <form onSubmit={handleCustomSubmit} className="flex items-center gap-3 pt-2">
            <div className="flex-1 relative">
              <input
                type="number"
                min="50"
                max="3000"
                step="50"
                value={customMlInput}
                onChange={(e) => setCustomMlInput(e.target.value)}
                placeholder="Volume em ml (ex: 350)"
                className="w-full px-4 py-2 rounded-xl border border-[#DDE5D9] dark:border-white/10 bg-[#F5F7F1] dark:bg-[#071A0E] text-[#172019] dark:text-[#F5F8F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#63B532]"
              />
              <span className="absolute right-3 top-2.5 text-xs text-[#6D756D]">ml</span>
            </div>
            <button
              type="submit"
              className="py-2 px-5 rounded-xl bg-[#123D24] dark:bg-[#63B532] text-white dark:text-[#082817] font-semibold text-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              Registrar
            </button>
          </form>
        </div>
      )}

      {/* Programação do Dia & Linha do Tempo de Horários */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna 1 & 2: Horários do Dia */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#63B532]" />
                Horários Planejados de Hoje
              </h3>
              <p className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/70 mt-0.5">
                Distribuição espaçada ao longo do seu período acordado ({hydrationProfile.wake_time} às {hydrationProfile.sleep_time}).
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenPlan}
              className="text-xs font-semibold text-[#123D24] dark:text-[#A8D94D] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Ver plano semanal <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Lista de tomadas programadas */}
          <div className="divide-y divide-[#DDE5D9] dark:divide-white/10">
            {todayHydration.logsToday && (
              <div className="space-y-2">
                {/* Visualização dos horários sugeridos para o dia */}
                {hydrationProfile.rounding_mode && (
                  <div className="p-3 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] text-xs text-[#6D756D] dark:text-[#F5F8F2]/80 flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#63B532] flex-shrink-0 mt-0.5" />
                    <div>
                      {hydrationProfile.rounding_mode === 'practical'
                        ? 'Horários espaçados para evitar desconforto gástrico e sobrecarga renal. O plano encerra até ~3h antes de dormir para preservar a qualidade do seu sono.'
                        : 'Acompanhe as tomadas ao longo do dia para manter hidratação celular contínua.'}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tomadas geradas dinamicamente */}
            <div className="pt-2 space-y-2.5">
              {todayHydration.nextIntake ? (
                <div className="text-xs font-medium text-[#6D756D] dark:text-[#F5F8F2]/70">
                  Clique na caixa para marcar tomada ou use o botão rápido:
                </div>
              ) : null}

              {/* Linha do tempo interativa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Mostra as tomadas do dia com botão interativo */}
                {[
                  { time: '07:00', ml: bottleMl },
                  { time: '10:00', ml: bottleMl },
                  { time: '13:00', ml: bottleMl },
                  { time: '16:00', ml: bottleMl },
                  { time: '19:00', ml: Math.max(150, targetMl - 4 * bottleMl || bottleMl) },
                ].map((item, idx) => {
                  const isDone = (idx + 1) * bottleMl <= consumedMl;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleQuickLog(item.ml, `Tomada das ${item.time}`)}
                      className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        isDone
                          ? 'bg-[#63B532]/10 border-[#63B532]/40 text-[#123D24] dark:text-[#A8D94D]'
                          : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent hover:border-[#63B532]/30 text-[#172019] dark:text-[#F5F8F2]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-[#63B532]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#6D756D] dark:text-white/40" />
                        )}
                        <div>
                          <div className="font-semibold text-sm">{item.time}</div>
                          <div className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/60">
                            Tomada {idx + 1} ({item.ml} ml)
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          isDone
                            ? 'bg-[#63B532] text-[#082817]'
                            : 'bg-white dark:bg-white/10 text-[#6D756D] dark:text-white/80'
                        }`}
                      >
                        {isDone ? 'Concluída' : 'Registrar'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Coluna 3: Histórico de Ingestões de Hoje */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#63B532]" />
              Registros de Hoje ({logsToday.length})
            </h3>

            {logsToday.length > 0 && (
              <button
                type="button"
                onClick={() => resetHydrationDay()}
                className="text-xs text-[#6D756D] hover:text-red-500 flex items-center gap-1 cursor-pointer"
                title="Redefinir registros de hoje"
              >
                <RotateCcw className="w-3 h-3" /> Limpar
              </button>
            )}
          </div>

          {logsToday.length === 0 ? (
            <div className="p-6 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] text-center space-y-2">
              <Droplets className="w-8 h-8 text-[#63B532]/50 mx-auto" />
              <p className="text-sm font-medium text-[#172019] dark:text-[#F5F8F2]">
                Nenhum registro hoje ainda
              </p>
              <p className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/60">
                Comece seu dia bebendo a primeira garrafa e registre pelo botão acima.
              </p>
            </div>
          ) : (
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {logsToday.map((log) => (
                <div
                  key={log.id}
                  className="p-2.5 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#123D24] dark:text-[#A8D94D]">
                      {log.time}
                    </span>
                    <span className="text-[#6D756D] dark:text-[#F5F8F2]/70">
                      {log.container_label || 'Água'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#172019] dark:text-[#F5F8F2]">
                      +{log.amount_ml} ml
                    </span>
                    <button
                      type="button"
                      onClick={() => deleteHydrationLog(log.id)}
                      className="text-[#6D756D] hover:text-red-500 p-1 cursor-pointer"
                      title="Excluir este registro"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Atalhos para configuração */}
          <div className="pt-3 border-t border-[#DDE5D9] dark:border-white/10 space-y-2">
            <button
              type="button"
              onClick={onOpenSettings}
              className="w-full py-2 px-3 rounded-xl border border-[#DDE5D9] dark:border-white/10 hover:bg-[#F5F7F1] dark:hover:bg-white/5 text-xs font-semibold text-[#172019] dark:text-[#F5F8F2] flex items-center justify-between cursor-pointer"
            >
              <span>Ajustar peso, clima ou garrafa</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#63B532]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
