import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  Droplets,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Sun,
  Flame,
  Clock,
  RotateCcw,
  Check,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  DayOfWeekPt,
  HydrationDaySchedule,
  HydrationActivity,
  HydrationClimate,
} from '../../types/hydration';
import {
  ACTIVITY_DESCRIPTIONS,
  CLIMATE_DESCRIPTIONS,
  calculateHydration,
} from '../../utils/hydrationCalculator';

export const HydrationWeekPlanner: React.FC = () => {
  const {
    hydrationSchedules,
    hydrationProfile,
    updateDaySchedule,
    recalculateSchedules,
  } = useApp();

  const [editingDay, setEditingDay] = useState<HydrationDaySchedule | null>(null);
  const [customActivity, setCustomActivity] = useState<HydrationActivity>('moderate');
  const [customClimate, setCustomClimate] = useState<HydrationClimate>('moderate');

  const handleOpenEdit = (schedule: HydrationDaySchedule) => {
    setEditingDay(schedule);
    setCustomActivity(schedule.activity_level);
    setCustomClimate(schedule.climate);
  };

  const handleSaveEdit = () => {
    if (!editingDay) return;
    updateDaySchedule(editingDay.day_of_week, {
      activity_level: customActivity,
      climate: customClimate,
    });
    setEditingDay(null);
  };

  const currentDayIndex = new Date().getDay();
  const dayKeys: DayOfWeekPt[] = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const todayKey = dayKeys[currentDayIndex];

  return (
    <div className="space-y-6">
      {/* Cabeçalho do Planejador */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#63B532]" />
            <h2 className="text-xl font-bold font-serif text-[#172019] dark:text-[#F5F8F2]">
              Programação Semanal de Hidratação
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#6D756D] dark:text-[#F5F8F2]/75 mt-1 max-w-2xl">
            Sua rotina varia ao longo da semana? Adapte os dias com treinos pesados ou dias de descanso para recalcular automaticamente as garrafas e os horários.
          </p>
        </div>

        <button
          type="button"
          onClick={recalculateSchedules}
          className="py-2.5 px-4 rounded-xl border border-[#DDE5D9] dark:border-white/10 hover:bg-[#F5F7F1] dark:hover:bg-white/5 text-xs font-semibold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2 cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#63B532]" />
          Sincronizar com Perfil Geral
        </button>
      </div>

      {/* Grid dos 7 Dias da Semana */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {hydrationSchedules.map((schedule) => {
          const isToday = schedule.day_of_week === todayKey;
          const bottlesCount = Math.round(schedule.target_ml / (schedule.bottle_ml || 500));
          const completedIntakes = schedule.planned_intakes.filter((i) => i.completed).length;

          return (
            <div
              key={schedule.id}
              className={`p-5 rounded-2xl border transition-all relative ${
                isToday
                  ? 'bg-[#123D24]/10 dark:bg-[#123D24]/30 border-[#63B532] shadow-md ring-1 ring-[#63B532]/30'
                  : 'bg-white dark:bg-[#0D2817] border-[#DDE5D9] dark:border-white/10 hover:border-[#63B532]/40'
              }`}
            >
              {/* Badge de Hoje */}
              {isToday && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#63B532] text-[#082817] text-[10px] font-bold uppercase tracking-wider">
                  Hoje
                </div>
              )}

              {/* Título do Dia */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#63B532]">
                  {schedule.short_label}
                </span>
                <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2]">
                  {schedule.label}
                </h3>
              </div>

              {/* Meta do Dia */}
              <div className="mt-4 p-3 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/70">Meta diária</span>
                  <span className="text-base font-bold text-[#123D24] dark:text-[#A8D94D]">
                    {schedule.target_ml.toLocaleString('pt-BR')} ml
                  </span>
                </div>
                <div className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/70 flex items-center justify-between">
                  <span>Garrafas ({schedule.bottle_ml || 500} ml):</span>
                  <strong className="text-[#172019] dark:text-[#F5F8F2]">{bottlesCount} garrafas</strong>
                </div>
              </div>

              {/* Condições configuradas para este dia */}
              <div className="mt-3 space-y-1.5 text-xs text-[#6D756D] dark:text-[#F5F8F2]/75">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    Atividade:
                  </span>
                  <strong className="text-[#172019] dark:text-[#F5F8F2]">
                    {ACTIVITY_DESCRIPTIONS[schedule.activity_level]?.label || 'Moderada'}
                  </strong>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    Clima:
                  </span>
                  <strong className="text-[#172019] dark:text-[#F5F8F2]">
                    {CLIMATE_DESCRIPTIONS[schedule.climate]?.label || 'Moderado'}
                  </strong>
                </div>

                {schedule.is_customized && (
                  <div className="text-[11px] text-[#63B532] font-semibold pt-1">
                    ✓ Programação personalizada
                  </div>
                )}
              </div>

              {/* Botão de Personalização do Dia */}
              <div className="mt-4 pt-3 border-t border-[#DDE5D9] dark:border-white/10">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(schedule)}
                  className="w-full py-2 px-3 rounded-xl bg-transparent hover:bg-[#63B532]/10 border border-[#63B532]/30 text-xs font-semibold text-[#123D24] dark:text-[#A8D94D] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Personalizar este dia
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de Personalização do Dia */}
      {editingDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-2xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[#DDE5D9] dark:border-white/10 pb-3">
              <div>
                <h3 className="text-lg font-bold font-serif text-[#172019] dark:text-[#F5F8F2]">
                  Personalizar {editingDay.label}
                </h3>
                <p className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/70 mt-0.5">
                  Ajuste a rotina esperada para este dia específico.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingDay(null)}
                className="text-[#6D756D] hover:text-black dark:hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            {/* Atividade Física do Dia */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                Atividade física prevista neste dia
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(ACTIVITY_DESCRIPTIONS) as HydrationActivity[]).map((actKey) => {
                  const act = ACTIVITY_DESCRIPTIONS[actKey];
                  const isSelected = customActivity === actKey;
                  return (
                    <button
                      key={actKey}
                      type="button"
                      onClick={() => setCustomActivity(actKey)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#63B532]/10 border-[#63B532] text-[#123D24] dark:text-[#A8D94D]'
                          : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent text-[#172019] dark:text-[#F5F8F2]'
                      }`}
                    >
                      <div className="font-semibold text-xs">{act.label}</div>
                      <div className="text-[10px] text-[#6D756D] dark:text-[#F5F8F2]/60 line-clamp-1">
                        {act.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clima do Dia */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                Clima previsto neste dia
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(CLIMATE_DESCRIPTIONS) as HydrationClimate[]).map((climKey) => {
                  const clim = CLIMATE_DESCRIPTIONS[climKey];
                  const isSelected = customClimate === climKey;
                  return (
                    <button
                      key={climKey}
                      type="button"
                      onClick={() => setCustomClimate(climKey)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#63B532]/10 border-[#63B532] text-[#123D24] dark:text-[#A8D94D]'
                          : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent text-[#172019] dark:text-[#F5F8F2]'
                      }`}
                    >
                      <div className="font-semibold text-xs">{clim.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pré-visualização do cálculo recalculado */}
            {(() => {
              const previewCalc = calculateHydration({
                weight_kg: hydrationProfile.weight_kg,
                height_cm: hydrationProfile.height_cm,
                age: hydrationProfile.age,
                sex: hydrationProfile.sex,
                activity_level: customActivity,
                climate: customClimate,
                bottle_ml: editingDay.bottle_ml || hydrationProfile.bottle_ml,
                wake_time: editingDay.wake_time || hydrationProfile.wake_time,
                sleep_time: editingDay.sleep_time || hydrationProfile.sleep_time,
              });

              return (
                <div className="p-3 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] border border-[#DDE5D9] dark:border-white/10 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-[#6D756D] dark:text-[#F5F8F2]/70">Nova meta para este dia:</span>
                    <div className="font-bold text-base text-[#123D24] dark:text-[#A8D94D]">
                      {previewCalc.beverage_target_ml.toLocaleString('pt-BR')} ml
                    </div>
                  </div>
                  <div className="text-right text-xs text-[#6D756D] dark:text-[#F5F8F2]/70">
                    Garrafas de {editingDay.bottle_ml || 500} ml:
                    <div className="font-bold text-sm text-[#172019] dark:text-[#F5F8F2]">
                      {previewCalc.bottles_count} tomadas sugeridas
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Botões do Modal */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditingDay(null)}
                className="py-2 px-4 rounded-xl text-xs font-semibold text-[#6D756D] hover:text-[#172019] dark:hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveEdit}
                className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#63B532] to-[#A8D94D] text-[#082817] text-xs font-bold shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Salvar Programação de {editingDay.short_label}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
