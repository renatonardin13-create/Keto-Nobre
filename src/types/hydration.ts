export type HydrationSex = 'female' | 'male' | 'unspecified';

export type HydrationActivity = 'sedentary' | 'light' | 'moderate' | 'very_active';

export type HydrationClimate = 'moderate' | 'hot' | 'very_hot';

export type DayOfWeekPt = 'segunda' | 'terça' | 'quarta' | 'quinta' | 'sexta' | 'sábado' | 'domingo';

export interface HydrationContainer {
  id: string;
  name: string;
  capacity_ml: number;
  iconType?: 'bottle' | 'cup' | 'glass' | 'mug';
  isDefault?: boolean;
}

export interface HydrationProfile {
  id: string;
  user_id: string;
  weight_kg: number;
  height_cm: number;
  age: number;
  sex: HydrationSex;
  activity_level: HydrationActivity;
  climate: HydrationClimate;
  bottle_ml: number;
  wake_time: string; // HH:MM, ex: "07:00"
  sleep_time: string; // HH:MM, ex: "23:00"
  daily_target_ml: number;
  // Safety & Clinical Conditions
  has_health_restriction?: boolean;
  health_restriction_note?: string;
  rounding_mode?: 'practical' | 'exact_with_bonus' | 'ceiling';
  created_at: string;
  updated_at: string;
}

export interface HydrationPlannedIntake {
  id: string;
  time: string; // HH:MM
  amount_ml: number;
  completed: boolean;
  completed_at?: string;
}

export interface HydrationDaySchedule {
  id: string;
  user_id: string;
  day_of_week: DayOfWeekPt;
  label: string;
  short_label: string;
  target_ml: number;
  bottle_ml: number;
  planned_intakes: HydrationPlannedIntake[];
  activity_level: HydrationActivity;
  climate: HydrationClimate;
  wake_time: string;
  sleep_time: string;
  is_customized?: boolean;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface HydrationLog {
  id: string;
  user_id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  amount_ml: number;
  container_ml: number;
  container_label?: string;
  created_at: string;
}

export interface HydrationCalculationResult {
  total_fluids_ml: number;
  beverage_target_ml: number;
  food_water_ml: number;
  bottles_count: number;
  bottle_ml: number;
  exact_bottles_float: number;
  additional_ml: number;
  intake_interval_minutes: number;
  suggested_times: string[];
  is_safe: boolean;
  safety_message?: string;
  has_restriction_alert?: boolean;
  rounding_explanation: string;
  reference_note: string;
}

export interface TodayHydrationSummary {
  targetMl: number;
  consumedMl: number;
  remainingMl: number;
  percent: number;
  bottlesTarget: number;
  bottlesConsumed: number;
  bottleMl: number;
  nextIntake?: HydrationPlannedIntake;
  logsToday: HydrationLog[];
}
