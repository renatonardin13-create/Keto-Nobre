import { HydrationProfile, HydrationLog } from '../types/hydration';

export function generateInitialHydrationLogs(profile: HydrationProfile): HydrationLog[] {
  const logs: HydrationLog[] = [];
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  // Logs for TODAY: 4 intakes of 500ml = 2.000 ml (as in section 15 example)
  const todayEntries = [
    { time: '07:15', amount: 500, label: 'Garrafa Principal' },
    { time: '10:10', amount: 500, label: 'Garrafa Principal' },
    { time: '13:20', amount: 500, label: 'Garrafa Principal' },
    { time: '16:05', amount: 500, label: 'Garrafa Principal' },
  ];

  todayEntries.forEach((entry, idx) => {
    logs.push({
      id: `log-today-${idx + 1}`,
      user_id: profile.user_id,
      date: todayStr,
      time: entry.time,
      amount_ml: entry.amount,
      container_ml: 500,
      container_label: entry.label,
      created_at: new Date(now.getTime() - (4 - idx) * 3600000 * 2.5).toISOString(),
    });
  });

  // Logs for past 30 days for realistic metrics (Hoje, 7 dias, 30 dias)
  // Section 18 example percentages: Seg: 92%, Ter: 100%, Qua: 84%, Qui: 100%, Sex: 76%, Sáb: 95%, Dom: 88%
  const samplePcts = [1.0, 0.92, 0.84, 1.0, 0.76, 0.95, 0.88, 0.92, 1.0, 0.85, 0.9, 0.95, 0.8, 1.0, 0.92];

  for (let i = 1; i <= 30; i++) {
    const d = new Date();
    d.setDate(now.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const pct = samplePcts[i % samplePcts.length] || 0.9;
    const dayTarget = profile.daily_target_ml || 2500;
    const totalDayMl = Math.round((dayTarget * pct) / 250) * 250;

    // Distribute into 3-5 logs
    let remaining = totalDayMl;
    const times = ['07:30', '10:30', '13:45', '16:30', '19:15'];
    let tIdx = 0;

    while (remaining > 0 && tIdx < times.length) {
      const take = Math.min(remaining, profile.bottle_ml || 500);
      logs.push({
        id: `log-hist-${i}-${tIdx}`,
        user_id: profile.user_id,
        date: dateStr,
        time: times[tIdx],
        amount_ml: take,
        container_ml: profile.bottle_ml || 500,
        container_label: take === 250 ? 'Copo de Água' : 'Garrafa Principal',
        created_at: new Date(d.getTime() + tIdx * 3600000 * 3).toISOString(),
      });
      remaining -= take;
      tIdx++;
    }
  }

  return logs;
}
