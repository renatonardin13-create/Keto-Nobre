import {
  HydrationProfile,
  HydrationCalculationResult,
  HydrationPlannedIntake,
  HydrationDaySchedule,
  DayOfWeekPt,
  HydrationActivity,
  HydrationClimate,
} from '../types/hydration';

/**
 * MOTOR CIENTÍFICO DE ESTIMATIVA DE HIDRATAÇÃO
 * 
 * Referências Científicas:
 * - EFSA (European Food Safety Authority) Panel on Dietetic Products, Nutrition and Allergies (NDA):
 *   Recomendação de referência para ingestão adequada de água diária (homens ~2,5 L, mulheres ~2,0 L
 *   de fluidos totais, com ~70-80% provenientes de bebidas e ~20-30% de alimentos sólidos).
 * - ACSM (American College of Sports Medicine): Ajuste dinâmico por gasto metabólico,
 *   atividade física e taxa de transpiração.
 * - IOM (Institute of Medicine): Ponderação por massa corporal (~30-35 ml/kg/dia para adultos)
 *   e períodos ativos acordados.
 */

export interface CalculationInput {
  weight_kg: number;
  height_cm: number;
  age: number;
  sex: 'female' | 'male' | 'unspecified';
  activity_level: HydrationActivity;
  climate: HydrationClimate;
  bottle_ml: number;
  wake_time: string; // HH:MM, ex: "07:00"
  sleep_time: string; // HH:MM, ex: "23:00"
  has_health_restriction?: boolean;
}

export const ACTIVITY_DESCRIPTIONS: Record<
  HydrationActivity,
  { label: string; desc: string; addedBeverageMl: number }
> = {
  sedentary: {
    label: 'Sedentário',
    desc: 'Pouco ou nenhum exercício formal, rotina predominantemente sentada.',
    addedBeverageMl: 0,
  },
  light: {
    label: 'Levemente Ativo',
    desc: 'Caminhadas diárias leves e atividades de rotina em movimento (~1-3 dias/sem).',
    addedBeverageMl: 300,
  },
  moderate: {
    label: 'Moderadamente Ativo',
    desc: 'Exercícios moderados (30-60 min) ou rotina com esforço físico constante (~3-5 dias/sem).',
    addedBeverageMl: 550,
  },
  very_active: {
    label: 'Muito Ativo',
    desc: 'Treinos intensos diários, alta demanda energética e perda hídrica elevada.',
    addedBeverageMl: 850,
  },
};

export const CLIMATE_DESCRIPTIONS: Record<
  HydrationClimate,
  { label: string; desc: string; addedBeverageMl: number }
> = {
  moderate: {
    label: 'Moderado',
    desc: 'Ambiente ameno ou climatizado (aprox. 18°C a 24°C).',
    addedBeverageMl: 0,
  },
  hot: {
    label: 'Quente',
    desc: 'Temperaturas elevadas ou exposição ao sol com suor perceptível (~25°C a 30°C).',
    addedBeverageMl: 350,
  },
  very_hot: {
    label: 'Muito Quente',
    desc: 'Calor intenso (>30°C) ou ambientes com alta sudorese e umidade.',
    addedBeverageMl: 600,
  },
};

export const STANDARD_BOTTLE_OPTIONS = [
  { label: '250 ml (Copo padrão)', value: 250 },
  { label: '300 ml (Copo grande)', value: 300 },
  { label: '350 ml (Caneca térmica)', value: 350 },
  { label: '400 ml (Squeeze compacta)', value: 400 },
  { label: '500 ml (Garrafa padrão)', value: 500 },
  { label: '600 ml (Squeeze esportiva)', value: 600 },
  { label: '750 ml (Garrafa térmica média)', value: 750 },
  { label: '1.000 ml (Garrafa de 1 litro)', value: 1000 },
];

/**
 * Converte string de hora "HH:MM" para minutos a partir da meia-noite
 */
export function timeToMinutes(timeStr: string): number {
  if (!timeStr || !timeStr.includes(':')) return 420; // 07:00 fallback
  const [h, m] = timeStr.split(':').map((v) => parseInt(v, 10) || 0);
  return h * 60 + m;
}

/**
 * Converte minutos a partir da meia-noite para formato "HH:MM"
 */
export function minutesToTime(minutes: number): string {
  let m = Math.round(minutes) % 1440;
  if (m < 0) m += 1440;
  const hours = Math.floor(m / 60);
  const mins = m % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

/**
 * Arredonda minutos para o múltiplo mais próximo de 15 ou 30 minutos (praticidade diária)
 */
export function roundToPracticalMinutes(minutes: number): number {
  const step = 15;
  return Math.round(minutes / step) * step;
}

/**
 * Calcula a estimativa personalizada e gera o plano prático
 */
export function calculateHydration(input: CalculationInput): HydrationCalculationResult {
  const {
    weight_kg,
    height_cm,
    age,
    sex,
    activity_level,
    climate,
    bottle_ml,
    wake_time,
    sleep_time,
    has_health_restriction,
  } = input;

  // 1. Verificação de Restrições Especiais de Saúde
  if (has_health_restriction) {
    return {
      total_fluids_ml: 0,
      beverage_target_ml: 0,
      food_water_ml: 0,
      bottles_count: 0,
      bottle_ml: Math.max(100, bottle_ml || 500),
      exact_bottles_float: 0,
      additional_ml: 0,
      intake_interval_minutes: 0,
      suggested_times: [],
      is_safe: false,
      has_restriction_alert: true,
      safety_message:
        'Suas necessidades de líquidos podem exigir orientação individual. Converse com um profissional de saúde antes de usar uma meta personalizada.',
      rounding_explanation: 'Cálculo desativado por precaução clínica.',
      reference_note:
        'Indivíduos com restrição médica de fluidos não devem seguir metas automatizadas.',
    };
  }

  // 2. Validações de segurança para impedir NaN, Infinity e valores absurdos
  const safeWeight = Math.min(250, Math.max(30, Number(weight_kg) || 70));
  const safeAge = Math.min(110, Math.max(12, Number(age) || 30));
  const safeHeight = Math.min(240, Math.max(120, Number(height_cm) || 170));
  const safeBottle = Math.min(2000, Math.max(150, Number(bottle_ml) || 500));

  // 3. Taxa basal por peso corporal (ml/kg) com base em faixa etária e sexo
  // Referência IOM/EFSA: Jovens/adultos ~35ml/kg; idosos >55 anos ~30-32ml/kg
  let mlPerKg = 35;
  if (safeAge >= 65) {
    mlPerKg = 30;
  } else if (safeAge >= 50) {
    mlPerKg = 32;
  }

  // Fator Sexo: quando informado, pondera massa magra / composição corporal
  // Homens: padrão ~35 ml/kg; Mulheres: ~32 ml/kg; Não informado: 33 ml/kg conservador
  let sexFactor = 1.0;
  let sexNote = '';
  if (sex === 'male') {
    sexFactor = 1.02;
  } else if (sex === 'female') {
    sexFactor = 0.94;
  } else {
    sexFactor = 0.97;
    sexNote = 'Estimativa conservadora baseada em parâmetros neutros médios.';
  }

  // Cálculo de fluidos totais basais (inclui água de alimentos e bebidas)
  const baseTotalFluids = safeWeight * mlPerKg * sexFactor;

  // 4. Acréscimos por Nível de Atividade e Clima
  const activityConfig = ACTIVITY_DESCRIPTIONS[activity_level] || ACTIVITY_DESCRIPTIONS.moderate;
  const climateConfig = CLIMATE_DESCRIPTIONS[climate] || CLIMATE_DESCRIPTIONS.moderate;

  const activityBonus = activityConfig.addedBeverageMl;
  const climateBonus = climateConfig.addedBeverageMl;

  // 5. Separação de Fluidos Totais vs Água de Bebidas (~80% bebidas, ~20% alimentos)
  // Conforme consenso EFSA, 20% da hidratação diária provém da água naturalmente presente em alimentos sólidos.
  // A meta diária de bebidas foca na ingestão ativa por copos/garrafas.
  const estimatedTotalFluids = Math.round(baseTotalFluids + activityBonus + climateBonus);
  const estimatedFoodWater = Math.round(estimatedTotalFluids * 0.2);
  let rawBeverageTarget = estimatedTotalFluids - estimatedFoodWater;

  // 6. Limites de Segurança Clínica (EFSA / Nefrologia)
  // Capacidade de filtração e excreção renal média em repouso: 800-1000 ml/h
  // Faixa segura recomendada para adultos em vida cotidiana: 1.500 ml a 4.000 ml
  let isSafe = true;
  let safetyMessage: string | undefined;

  if (rawBeverageTarget < 1500) {
    rawBeverageTarget = 1500;
  } else if (rawBeverageTarget > 4000) {
    isSafe = false;
    safetyMessage =
      'Essa estimativa precisa de avaliação individual. Metas superiores a 4.000 ml exigem acompanhamento profissional para evitar sobrecarga renal e diluição de eletrólitos.';
    rawBeverageTarget = 4000;
  }

  // Arredondamento da meta para múltiplo amigável de 50 ml
  const beverageTargetMl = Math.round(rawBeverageTarget / 50) * 50;

  // 7. Cálculo das Garrafas & Arredondamento Prático
  // garrafas_teoricas = meta_ml / bottle_ml
  const exactBottlesFloat = beverageTargetMl / safeBottle;
  const lowerBottles = Math.floor(exactBottlesFloat);
  const upperBottles = Math.ceil(exactBottlesFloat);
  const remainderMl = beverageTargetMl - lowerBottles * safeBottle;

  let bottlesCount = lowerBottles;
  let additionalMl = remainderMl;
  let roundingExplanation = '';

  if (remainderMl === 0) {
    bottlesCount = lowerBottles;
    additionalMl = 0;
    roundingExplanation = `Meta exata de ${bottlesCount} garrafas de ${safeBottle} ml (${beverageTargetMl.toLocaleString('pt-BR')} ml).`;
  } else if (remainderMl <= safeBottle * 0.4) {
    // Pequeno adicional (ex: 2.650 ml com garrafa de 500 ml = 5 garrafas + 150 ml)
    bottlesCount = lowerBottles;
    additionalMl = remainderMl;
    roundingExplanation = `Plano prático: ${bottlesCount} garrafas cheias de ${safeBottle} ml (${(
      bottlesCount * safeBottle
    ).toLocaleString('pt-BR')} ml) mais uma tomada complementar de ${additionalMl} ml para atingir a meta de ${beverageTargetMl.toLocaleString(
      'pt-BR'
    )} ml.`;
  } else {
    // Caso o excedente seja grande, sugere arredondar para a garrafa superior ou manter o complemento
    bottlesCount = upperBottles;
    additionalMl = 0;
    const diff = upperBottles * safeBottle - beverageTargetMl;
    roundingExplanation = `Plano prático sugerido: ${bottlesCount} garrafas de ${safeBottle} ml (${(
      bottlesCount * safeBottle
    ).toLocaleString('pt-BR')} ml), cobrindo a meta com ${diff} ml de margem saudável.`;
  }

  // 8. Programação e Distribuição dos Horários ao Longo do Dia
  // Período acordado = Dormir - Acordar
  const wakeMin = timeToMinutes(wake_time);
  let sleepMin = timeToMinutes(sleep_time);
  if (sleepMin <= wakeMin) sleepMin += 1440; // ultrapassa a meia-noite

  const totalAwakeMinutes = sleepMin - wakeMin;

  // Regra de segurança contra noctúria: evitar tomadas grandes nas últimas 2h30 a 3h antes de dormir
  const sleepBufferMinutes = Math.min(180, Math.max(90, Math.round(totalAwakeMinutes * 0.15)));
  const effectiveHydrationWindowMinutes = Math.max(360, totalAwakeMinutes - sleepBufferMinutes);

  // Número de tomadas a distribuir
  const numberOfIntakes = Math.max(2, Math.min(10, bottlesCount + (additionalMl > 0 ? 1 : 0)));
  const intervalMinutes = Math.round(effectiveHydrationWindowMinutes / Math.max(1, numberOfIntakes - 1));

  const suggestedTimes: string[] = [];
  for (let i = 0; i < numberOfIntakes; i++) {
    const rawTime = wakeMin + i * intervalMinutes;
    const practicalTime = roundToPracticalMinutes(rawTime);
    suggestedTimes.push(minutesToTime(practicalTime));
  }

  const referenceNote =
    'Estimativa educativa baseada em referências da EFSA e ACSM. As necessidades de líquidos variam conforme alimentação, clima, atividade física e condições individuais.';

  return {
    total_fluids_ml: estimatedTotalFluids,
    beverage_target_ml: beverageTargetMl,
    food_water_ml: estimatedFoodWater,
    bottles_count: numberOfIntakes,
    bottle_ml: safeBottle,
    exact_bottles_float: Number(exactBottlesFloat.toFixed(2)),
    additional_ml: additionalMl,
    intake_interval_minutes: intervalMinutes,
    suggested_times: suggestedTimes,
    is_safe: isSafe,
    safety_message: safetyMessage,
    rounding_explanation: roundingExplanation + (sexNote ? ` (${sexNote})` : ''),
    reference_note: referenceNote,
  };
}

/**
 * Cria a lista de tomadas planejadas com status inicial
 */
export function generatePlannedIntakes(
  times: string[],
  bottleMl: number,
  additionalMl: number
): HydrationPlannedIntake[] {
  return times.map((time, idx) => {
    // Se a última tomada for o adicional menor que a garrafa
    const isLast = idx === times.length - 1;
    const amount = isLast && additionalMl > 0 ? additionalMl : bottleMl;

    return {
      id: `intake-${time.replace(':', '')}-${idx}`,
      time,
      amount_ml: amount,
      completed: false,
    };
  });
}

/**
 * Cria a programação completa de 7 dias com base no perfil do usuário
 */
export function generate7DaySchedule(profile: HydrationProfile): HydrationDaySchedule[] {
  const days: { key: DayOfWeekPt; label: string; short: string }[] = [
    { key: 'segunda', label: 'Segunda-feira', short: 'SEG' },
    { key: 'terça', label: 'Terça-feira', short: 'TER' },
    { key: 'quarta', label: 'Quarta-feira', short: 'QUA' },
    { key: 'quinta', label: 'Quinta-feira', short: 'QUI' },
    { key: 'sexta', label: 'Sexta-feira', short: 'SEX' },
    { key: 'sábado', label: 'Sábado', short: 'SÁB' },
    { key: 'domingo', label: 'Domingo', short: 'DOM' },
  ];

  return days.map((day) => {
    // Fim de semana pode ter leve ajuste por padrão ou herdar o perfil
    const result = calculateHydration({
      weight_kg: profile.weight_kg,
      height_cm: profile.height_cm,
      age: profile.age,
      sex: profile.sex,
      activity_level: profile.activity_level,
      climate: profile.climate,
      bottle_ml: profile.bottle_ml,
      wake_time: profile.wake_time,
      sleep_time: profile.sleep_time,
      has_health_restriction: profile.has_health_restriction,
    });

    const planned = generatePlannedIntakes(
      result.suggested_times,
      result.bottle_ml,
      result.additional_ml
    );

    return {
      id: `schedule-${day.key}-${Date.now()}`,
      user_id: profile.user_id,
      day_of_week: day.key,
      label: day.label,
      short_label: day.short,
      target_ml: result.beverage_target_ml,
      bottle_ml: profile.bottle_ml,
      planned_intakes: planned,
      activity_level: profile.activity_level,
      climate: profile.climate,
      wake_time: profile.wake_time,
      sleep_time: profile.sleep_time,
      is_customized: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  });
}
