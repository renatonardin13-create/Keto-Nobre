import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Droplets,
  AlertCircle,
  Clock,
  CheckCircle,
  Sparkles,
  ShieldAlert,
  Info,
  Save,
  HelpCircle,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  HydrationSex,
  HydrationActivity,
  HydrationClimate,
  HydrationProfile,
} from '../../types/hydration';
import {
  ACTIVITY_DESCRIPTIONS,
  CLIMATE_DESCRIPTIONS,
  STANDARD_BOTTLE_OPTIONS,
  calculateHydration,
} from '../../utils/hydrationCalculator';

interface HydrationCalculatorFormProps {
  onSaved?: () => void;
}

export const HydrationCalculatorForm: React.FC<HydrationCalculatorFormProps> = ({ onSaved }) => {
  const { hydrationProfile, updateHydrationProfile } = useApp();

  // Form local state initialized with current profile
  const [age, setAge] = useState<number>(hydrationProfile.age || 46);
  const [sex, setSex] = useState<HydrationSex>(hydrationProfile.sex || 'male');
  const [weightKg, setWeightKg] = useState<number>(hydrationProfile.weight_kg || 88);
  const [heightCm, setHeightCm] = useState<number>(hydrationProfile.height_cm || 180);
  const [activity, setActivity] = useState<HydrationActivity>(
    hydrationProfile.activity_level || 'moderate'
  );
  const [climate, setClimate] = useState<HydrationClimate>(hydrationProfile.climate || 'moderate');
  const [bottleMl, setBottleMl] = useState<number>(hydrationProfile.bottle_ml || 500);
  const [customBottle, setCustomBottle] = useState<string>('');
  const [isCustomBottle, setIsCustomBottle] = useState<boolean>(false);
  const [wakeTime, setWakeTime] = useState<string>(hydrationProfile.wake_time || '07:00');
  const [sleepTime, setSleepTime] = useState<string>(hydrationProfile.sleep_time || '23:00');
  const [hasHealthRestriction, setHasHealthRestriction] = useState<boolean>(
    hydrationProfile.has_health_restriction || false
  );

  // Dynamic preview calculation
  const effectiveBottle = isCustomBottle ? parseInt(customBottle, 10) || 500 : bottleMl;

  const calculationResult = useMemo(() => {
    return calculateHydration({
      weight_kg: weightKg,
      height_cm: heightCm,
      age,
      sex,
      activity_level: activity,
      climate,
      bottle_ml: effectiveBottle,
      wake_time: wakeTime,
      sleep_time: sleepTime,
      has_health_restriction: hasHealthRestriction,
    });
  }, [
    weightKg,
    heightCm,
    age,
    sex,
    activity,
    climate,
    effectiveBottle,
    wakeTime,
    sleepTime,
    hasHealthRestriction,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateHydrationProfile({
      age,
      sex,
      weight_kg: weightKg,
      height_cm: heightCm,
      activity_level: activity,
      climate,
      bottle_ml: effectiveBottle,
      wake_time: wakeTime,
      sleep_time: sleepTime,
      has_health_restriction: hasHealthRestriction,
      daily_target_ml: calculationResult.beverage_target_ml,
    });
    if (onSaved) onSaved();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Alerta de Restrições Clínicas */}
      <div className="p-4 md:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-100 flex flex-col sm:flex-row items-start gap-4">
        <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-2 flex-1">
          <label className="flex items-center gap-2 font-semibold text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hasHealthRestriction}
              onChange={(e) => setHasHealthRestriction(e.target.checked)}
              className="w-4 h-4 rounded border-amber-400 text-[#123D24] focus:ring-[#63B532]"
            />
            <span>Possuo condição de saúde com restrição de ingestão de líquidos</span>
          </label>
          <p className="text-xs opacity-90 leading-relaxed">
            Exemplos: Doença renal crônica, insuficiência cardíaca congestiva, tratamento dialítico ou recomendação médica restritiva. Nesses casos, o cálculo automático de metas elevadas é desativado por precaução.
          </p>
        </div>
      </div>

      {hasHealthRestriction && (
        <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-900 dark:text-red-200 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            Meta Automática Suspensa por Segurança Clínica
          </div>
          <p className="text-xs leading-relaxed opacity-95">
            Suas necessidades de líquidos podem exigir orientação individual. Converse com um médico ou nutricionista antes de usar uma meta personalizada. Você ainda pode registrar seu consumo livremente sem meta estrita.
          </p>
        </div>
      )}

      {/* Grid Principal: Formulário à esquerda, Painel de Resultado à direita */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Coluna de Entradas (7 colunas) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2 pb-2 border-b border-[#DDE5D9] dark:border-white/10">
              <Calculator className="w-4 h-4 text-[#63B532]" />
              Dados Biométricos & Físicos
            </h3>

            {/* Linha 1: Idade e Sexo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                  Idade (anos)
                </label>
                <input
                  type="number"
                  min="12"
                  max="110"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value, 10) || 30)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5D9] dark:border-white/10 bg-[#F5F7F1] dark:bg-[#071A0E] text-sm text-[#172019] dark:text-[#F5F8F2] focus:ring-2 focus:ring-[#63B532] focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80 flex items-center justify-between">
                  <span>Sexo</span>
                  <span className="text-[10px] text-[#6D756D] normal-case">(Opcional)</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'male' as HydrationSex, label: 'Masc.' },
                    { id: 'female' as HydrationSex, label: 'Fem.' },
                    { id: 'unspecified' as HydrationSex, label: 'Neutro' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSex(item.id)}
                      className={`py-2 px-1 text-xs rounded-xl font-medium border text-center transition-all cursor-pointer ${
                        sex === item.id
                          ? 'bg-[#63B532]/15 border-[#63B532] text-[#123D24] dark:text-[#A8D94D] font-bold'
                          : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent text-[#172019] dark:text-[#F5F8F2]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Linha 2: Peso e Altura */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                  Peso Atual (kg)
                </label>
                <input
                  type="number"
                  min="30"
                  max="250"
                  step="0.5"
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseFloat(e.target.value) || 70)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5D9] dark:border-white/10 bg-[#F5F7F1] dark:bg-[#071A0E] text-sm text-[#172019] dark:text-[#F5F8F2] focus:ring-2 focus:ring-[#63B532] focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  min="120"
                  max="240"
                  value={heightCm}
                  onChange={(e) => setHeightCm(parseInt(e.target.value, 10) || 170)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5D9] dark:border-white/10 bg-[#F5F7F1] dark:bg-[#071A0E] text-sm text-[#172019] dark:text-[#F5F8F2] focus:ring-2 focus:ring-[#63B532] focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Atividade Física & Clima */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2 pb-2 border-b border-[#DDE5D9] dark:border-white/10">
              <Sparkles className="w-4 h-4 text-[#63B532]" />
              Estilo de Vida & Ambiente
            </h3>

            {/* Nível de Atividade Física com descrições */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                Nível de Atividade Física Habitual
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(ACTIVITY_DESCRIPTIONS) as HydrationActivity[]).map((key) => {
                  const item = ACTIVITY_DESCRIPTIONS[key];
                  const isSelected = activity === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActivity(key)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#63B532]/10 border-[#63B532] text-[#123D24] dark:text-[#A8D94D]'
                          : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent text-[#172019] dark:text-[#F5F8F2]'
                      }`}
                    >
                      <div className="font-semibold text-xs flex items-center justify-between">
                        <span>{item.label}</span>
                        {isSelected && <CheckCircle className="w-3.5 h-3.5 text-[#63B532]" />}
                      </div>
                      <p className="text-[11px] text-[#6D756D] dark:text-[#F5F8F2]/65 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clima Habitual com descrições */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                Clima / Temperatura Predominante
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(Object.keys(CLIMATE_DESCRIPTIONS) as HydrationClimate[]).map((key) => {
                  const item = CLIMATE_DESCRIPTIONS[key];
                  const isSelected = climate === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setClimate(key)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#63B532]/10 border-[#63B532] text-[#123D24] dark:text-[#A8D94D]'
                          : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent text-[#172019] dark:text-[#F5F8F2]'
                      }`}
                    >
                      <div className="font-semibold text-xs">{item.label}</div>
                      <p className="text-[10px] text-[#6D756D] dark:text-[#F5F8F2]/65 mt-0.5 line-clamp-2">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Horários & Garrafa */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2 pb-2 border-b border-[#DDE5D9] dark:border-white/10">
              <Clock className="w-4 h-4 text-[#63B532]" />
              Rotina Diária & Tamanho da Garrafa
            </h3>

            {/* Horários de Acordar e Dormir */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                  Horário que Costuma Acordar
                </label>
                <input
                  type="time"
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5D9] dark:border-white/10 bg-[#F5F7F1] dark:bg-[#071A0E] text-sm text-[#172019] dark:text-[#F5F8F2] focus:ring-2 focus:ring-[#63B532] focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                  Horário que Costuma Dormir
                </label>
                <input
                  type="time"
                  value={sleepTime}
                  onChange={(e) => setSleepTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5D9] dark:border-white/10 bg-[#F5F7F1] dark:bg-[#071A0E] text-sm text-[#172019] dark:text-[#F5F8F2] focus:ring-2 focus:ring-[#63B532] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Recipiente / Garrafa Habitual */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
                Tamanho da Garrafa / Recipiente Habitual
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {STANDARD_BOTTLE_OPTIONS.map((opt) => {
                  const isSelected = !isCustomBottle && bottleMl === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setIsCustomBottle(false);
                        setBottleMl(opt.value);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#63B532]/10 border-[#63B532] text-[#123D24] dark:text-[#A8D94D] font-bold'
                          : 'bg-[#F5F7F1] dark:bg-[#071A0E] border-transparent text-[#172019] dark:text-[#F5F8F2]'
                      }`}
                    >
                      <div className="text-xs font-medium">{opt.label}</div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setIsCustomBottle(!isCustomBottle)}
                  className="text-xs text-[#123D24] dark:text-[#A8D94D] font-semibold hover:underline cursor-pointer"
                >
                  {isCustomBottle ? 'Voltar para garrafas pré-definidas' : 'Usar volume personalizado'}
                </button>

                {isCustomBottle && (
                  <div className="mt-2 flex items-center gap-2 max-w-xs">
                    <input
                      type="number"
                      min="100"
                      max="3000"
                      step="50"
                      placeholder="Ex: 650"
                      value={customBottle}
                      onChange={(e) => setCustomBottle(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-[#DDE5D9] dark:border-white/10 bg-[#F5F7F1] dark:bg-[#071A0E] text-xs text-[#172019] dark:text-[#F5F8F2] focus:ring-2 focus:ring-[#63B532]"
                    />
                    <span className="text-xs text-[#6D756D]">ml</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Coluna de Resultados & Explicação Dinâmica (5 colunas) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-6 p-6 rounded-2xl bg-gradient-to-br from-[#123D24] via-[#0D2817] to-[#082817] text-[#F5F8F2] shadow-xl border border-[#63B532]/20 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A8D94D] uppercase tracking-wider">
                <Droplets className="w-4 h-4" />
                Estimativa Calculada
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                Em tempo real
              </span>
            </div>

            {hasHealthRestriction ? (
              <div className="p-4 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
                Recomendação automática suspensa devido a condições médicas indicadas. Consulte seu médico para definir sua cota diária de líquidos.
              </div>
            ) : (
              <>
                {/* Meta de Bebidas em destaque */}
                <div>
                  <div className="text-xs text-[#F5F8F2]/70 uppercase tracking-wider">
                    Meta Diária de Bebidas
                  </div>
                  <div className="text-4xl md:text-5xl font-bold font-serif text-white mt-1">
                    {calculationResult.beverage_target_ml.toLocaleString('pt-BR')}{' '}
                    <span className="text-xl text-[#A8D94D]">ml/dia</span>
                  </div>
                  <div className="text-xs text-[#A8D94D] font-medium mt-1">
                    Equivalente a cerca de{' '}
                    <strong>
                      {calculationResult.bottles_count} garrafas de {effectiveBottle} ml
                    </strong>
                  </div>
                </div>

                {/* Separação Científica: Bebidas vs Alimentos */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Fluidos totais recomendados:</span>
                    <strong className="text-white">
                      {calculationResult.total_fluids_ml.toLocaleString('pt-BR')} ml
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Via bebidas (80%):</span>
                    <strong className="text-[#A8D94D]">
                      {calculationResult.beverage_target_ml.toLocaleString('pt-BR')} ml
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Via alimentos sólidos (20%):</span>
                    <span className="text-white/80">
                      ~{calculationResult.food_water_ml.toLocaleString('pt-BR')} ml
                    </span>
                  </div>
                </div>

                {/* Arredondamento Prático & Garrafas */}
                <div className="space-y-1.5 text-xs">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#63B532]" />
                    Programação Prática & Arredondamento:
                  </div>
                  <p className="text-white/80 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                    {calculationResult.rounding_explanation}
                  </p>
                </div>

                {/* Sugestão de Horários */}
                <div className="space-y-2 text-xs">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#A8D94D]" />
                    Horários Sugeridos ({wakeTime} às {sleepTime}):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {calculationResult.suggested_times.map((time, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white font-mono text-xs"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-white/60">
                    As tomadas encerram antes das últimas horas para não atrapalhar seu sono com idas noturnas ao banheiro.
                  </p>
                </div>

                {/* Alerta se necessário */}
                {calculationResult.safety_message && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-xs">
                    {calculationResult.safety_message}
                  </div>
                )}
              </>
            )}

            {/* Botão de Salvar Perfil */}
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#63B532] to-[#A8D94D] text-[#082817] font-bold text-sm shadow-lg hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              Salvar e Atualizar Minha Rotina
            </button>

            {/* Rodapé Científico */}
            <p className="text-[11px] text-white/60 leading-relaxed text-center pt-2 border-t border-white/10">
              {calculationResult.reference_note}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
