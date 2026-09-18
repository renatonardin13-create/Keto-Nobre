import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Award,
  Calendar,
  Droplets,
  CheckCircle2,
  Trash2,
  BarChart2,
  Filter,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HydrationHistoryView: React.FC = () => {
  const { hydrationLogs, hydrationProfile, deleteHydrationLog } = useApp();
  const [timeRange, setTimeRange] = useState<'today' | '7days' | '30days'>('7days');

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  // Filtra logs pelo período
  const filteredLogs = useMemo(() => {
    const cutoff = new Date();
    if (timeRange === 'today') {
      cutoff.setHours(0, 0, 0, 0);
    } else if (timeRange === '7days') {
      cutoff.setDate(now.getDate() - 7);
    } else {
      cutoff.setDate(now.getDate() - 30);
    }

    const cutoffStr = cutoff.toISOString().split('T')[0];
    return hydrationLogs.filter((l) => l.date >= cutoffStr);
  }, [hydrationLogs, timeRange]);

  // Agrupamento de logs por dia para métricas e gráfico
  const dailyData = useMemo(() => {
    const daysCount = timeRange === 'today' ? 1 : timeRange === '7days' ? 7 : 30;
    const daysList: { date: string; label: string; totalMl: number; targetMl: number }[] = [];

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const dayLabel = d.toLocaleDateString('pt-BR', {
        weekday: timeRange === '30days' ? undefined : 'short',
        day: '2-digit',
        month: '2-digit',
      });

      const dayLogs = hydrationLogs.filter((l) => l.date === dateStr);
      const dayTotal = dayLogs.reduce((acc, l) => acc + l.amount_ml, 0);
      const dayTarget = hydrationProfile.daily_target_ml || 2650;

      daysList.push({
        date: dateStr,
        label: dayLabel,
        totalMl: dayTotal,
        targetMl: dayTarget,
      });
    }

    return daysList;
  }, [hydrationLogs, hydrationProfile, timeRange]);

  // Métricas agregadas
  const totalVolumePeriod = dailyData.reduce((acc, d) => acc + d.totalMl, 0);
  const activeDaysWithWater = dailyData.filter((d) => d.totalMl > 0).length || 1;
  const averageDailyMl = Math.round(totalVolumePeriod / dailyData.length);
  const daysMetTarget = dailyData.filter((d) => d.totalMl >= d.targetMl * 0.95).length;
  const successRate = Math.round((daysMetTarget / dailyData.length) * 100);

  const bottleCapacity = hydrationProfile.bottle_ml || 500;
  const avgBottles = (averageDailyMl / bottleCapacity).toFixed(1);

  // Altura máxima para escala do gráfico
  const maxDayMl = Math.max(
    ...dailyData.map((d) => Math.max(d.totalMl, d.targetMl)),
    hydrationProfile.daily_target_ml || 2650
  );

  return (
    <div className="space-y-6">
      {/* Barra de Filtros */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm">
        <div>
          <h2 className="text-lg font-bold font-serif text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-[#63B532]" />
            Histórico & Desempenho Hídrico
          </h2>
          <p className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/70 mt-0.5">
            Analise sua consistência de hidratação ao longo dos dias e semanas.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] border border-[#DDE5D9] dark:border-white/10">
          {[
            { id: 'today' as const, label: 'Hoje' },
            { id: '7days' as const, label: 'Últimos 7 Dias' },
            { id: '30days' as const, label: 'Últimos 30 Dias' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTimeRange(tab.id)}
              className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                timeRange === tab.id
                  ? 'bg-[#123D24] dark:bg-[#63B532] text-white dark:text-[#082817] shadow-sm'
                  : 'text-[#6D756D] dark:text-[#F5F8F2]/80 hover:text-[#172019] dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-1">
          <div className="text-xs font-semibold text-[#6D756D] dark:text-[#F5F8F2]/70 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-[#63B532]" />
            Média Diária
          </div>
          <div className="text-2xl font-bold font-serif text-[#123D24] dark:text-[#A8D94D]">
            {averageDailyMl.toLocaleString('pt-BR')} ml
          </div>
          <div className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/65">
            Aprox. <strong>{avgBottles} garrafas</strong> ({bottleCapacity} ml) por dia
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-1">
          <div className="text-xs font-semibold text-[#6D756D] dark:text-[#F5F8F2]/70 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            Meta Concluída
          </div>
          <div className="text-2xl font-bold font-serif text-[#172019] dark:text-[#F5F8F2]">
            {daysMetTarget} de {dailyData.length} dias
          </div>
          <div className="text-xs text-[#63B532] font-semibold">
            {successRate}% de consistência no período
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-1">
          <div className="text-xs font-semibold text-[#6D756D] dark:text-[#F5F8F2]/70 uppercase tracking-wider flex items-center gap-1.5">
            <Droplets className="w-4 h-4 text-[#63B532]" />
            Volume Total
          </div>
          <div className="text-2xl font-bold font-serif text-[#172019] dark:text-[#F5F8F2]">
            {(totalVolumePeriod / 1000).toFixed(1)} L
          </div>
          <div className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/65">
            {filteredLogs.length} tomadas registradas no total
          </div>
        </div>
      </div>

      {/* Gráfico de Barras Elegante */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2]">
            Ingestão Hídrica por Dia
          </h3>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#63B532]" />
              <span className="text-[#6D756D] dark:text-[#F5F8F2]/70">Meta batida</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="text-[#6D756D] dark:text-[#F5F8F2]/70">Parcial</span>
            </div>
          </div>
        </div>

        {/* Visualizador de Barras */}
        <div className="h-56 w-full flex items-end gap-2 md:gap-3 pt-6 pb-2 border-b border-[#DDE5D9] dark:border-white/10 overflow-x-auto">
          {dailyData.map((d, idx) => {
            const pctOfMax = maxDayMl > 0 ? (d.totalMl / maxDayMl) * 100 : 0;
            const met = d.totalMl >= d.targetMl * 0.95;
            const isToday = d.date === todayStr;

            return (
              <div
                key={idx}
                className="flex-1 min-w-[28px] max-w-[50px] flex flex-col items-center justify-end h-full group relative"
              >
                {/* Tooltip Hover */}
                <div className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity absolute -top-12 z-20 px-2.5 py-1 rounded-lg bg-black text-white text-[11px] whitespace-nowrap shadow-lg">
                  <strong>{d.label}</strong>: {d.totalMl.toLocaleString('pt-BR')} ml ({Math.round((d.totalMl / d.targetMl) * 100)}%)
                </div>

                {/* Barra */}
                <div
                  className="w-full rounded-t-lg transition-all duration-300 relative overflow-hidden"
                  style={{
                    height: `${Math.max(6, pctOfMax)}%`,
                    backgroundColor: met ? '#63B532' : d.totalMl > 0 ? '#EAB308' : '#DDE5D9',
                  }}
                >
                  {isToday && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  )}
                </div>

                {/* Label do dia abaixo */}
                <span className="text-[10px] text-[#6D756D] dark:text-[#F5F8F2]/70 mt-2 font-medium truncate w-full text-center">
                  {d.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lista Detalhada de Registros */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2]">
          Todos os Registros do Período ({filteredLogs.length})
        </h3>

        {filteredLogs.length === 0 ? (
          <div className="p-6 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] text-center text-xs text-[#6D756D] dark:text-[#F5F8F2]/70">
            Nenhum registro encontrado para este período.
          </div>
        ) : (
          <div className="divide-y divide-[#DDE5D9] dark:divide-white/10 max-h-[350px] overflow-y-auto">
            {filteredLogs.map((log) => (
              <div
                key={log.id}
                className="py-3 flex items-center justify-between text-xs hover:bg-[#F5F7F1]/50 dark:hover:bg-white/5 px-2 rounded-lg transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5 text-[#63B532]" />
                    {log.amount_ml} ml
                    <span className="text-xs font-normal text-[#6D756D] dark:text-[#F5F8F2]/70">
                      ({log.container_label || 'Garrafa'})
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6D756D] dark:text-[#F5F8F2]/60">
                    {new Date(`${log.date}T12:00:00`).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}{' '}
                    às <strong>{log.time}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => deleteHydrationLog(log.id)}
                  className="p-2 text-[#6D756D] hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                  title="Excluir este registro"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
