import React, { useState } from 'react';
import {
  Bell,
  BellRing,
  CheckCircle,
  AlertTriangle,
  Clock,
  Sparkles,
  Send,
  ShieldCheck,
  Droplets,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HydrationRemindersView: React.FC = () => {
  const {
    hydrationRemindersEnabled,
    setRemindersEnabled,
    hydrationProfile,
    showToast,
    todayHydration,
  } = useApp();

  const [tested, setTested] = useState<boolean>(false);

  const handleToggle = async () => {
    await setRemindersEnabled(!hydrationRemindersEnabled);
  };

  const handleTestNotification = () => {
    setTested(true);
    const title = '💧 KetoNobre • Lembrete de Hidratação';
    const body = `Hora da sua próxima tomada! Restam ${todayHydration.remainingMl} ml para sua meta de hoje. Mantenha sua hidratação e energia estáveis.`;

    if (
      typeof window !== 'undefined' &&
      'Notification' in window &&
      Notification.permission === 'granted'
    ) {
      try {
        new Notification(title, {
          body,
          icon: '/favicon.ico',
        });
      } catch (e) {
        // Fallback to in-app toast
      }
    }

    showToast('Lembrete de teste disparado com sucesso! 💧', 'info');
    setTimeout(() => setTested(false), 4000);
  };

  const notificationSupported = typeof window !== 'undefined' && 'Notification' in window;
  const currentPermission = notificationSupported ? Notification.permission : 'unsupported';

  return (
    <div className="max-w-3xl space-y-6">
      {/* Banner Principal de Lembretes */}
      <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0D2817] border border-[#DDE5D9] dark:border-white/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#DDE5D9] dark:border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BellRing className="w-5 h-5 text-[#63B532]" />
              <h2 className="text-xl font-bold font-serif text-[#172019] dark:text-[#F5F8F2]">
                Lembretes & Notificações Inteligentes
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#6D756D] dark:text-[#F5F8F2]/75">
              Receba avisos gentis espaçados ao longo do dia para não esquecer de beber água.
            </p>
          </div>

          {/* Toggle Switch */}
          <button
            type="button"
            onClick={handleToggle}
            className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              hydrationRemindersEnabled ? 'bg-[#63B532]' : 'bg-gray-300 dark:bg-gray-700'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                hydrationRemindersEnabled ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Status da Permissão do Navegador */}
        <div className="p-4 rounded-xl bg-[#F5F7F1] dark:bg-[#071A0E] border border-[#DDE5D9] dark:border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6D756D] dark:text-[#F5F8F2]/80">
              Permissão do Navegador
            </span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                currentPermission === 'granted'
                  ? 'bg-[#63B532]/20 text-[#123D24] dark:text-[#A8D94D]'
                  : currentPermission === 'denied'
                  ? 'bg-red-500/20 text-red-700 dark:text-red-300'
                  : 'bg-amber-500/20 text-amber-700 dark:text-amber-300'
              }`}
            >
              {currentPermission === 'granted'
                ? 'Permitido no Navegador'
                : currentPermission === 'denied'
                ? 'Bloqueado no Navegador'
                : 'Padrão / Não Solicitado'}
            </span>
          </div>
          <p className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/70 leading-relaxed">
            {currentPermission === 'granted'
              ? 'Seu navegador está autorizado a emitir notificações visuais conforme a programação calculada.'
              : 'Se as notificações nativas do sistema não estiverem autorizadas, o app exibirá alertas internos e sonoros durante sua navegação.'}
          </p>
        </div>

        {/* Botão de Teste */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleTestNotification}
            className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#123D24] dark:bg-[#63B532] text-white dark:text-[#082817] font-semibold text-xs hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            Testar Lembrete Agora
          </button>
          {tested && (
            <span className="text-xs text-[#63B532] font-semibold flex items-center gap-1 animate-fadeIn">
              <CheckCircle className="w-4 h-4" /> Alerta enviado! Verifique seu dispositivo.
            </span>
          )}
        </div>

        {/* Informações da Programação Atual */}
        <div className="pt-4 border-t border-[#DDE5D9] dark:border-white/10 space-y-3">
          <h3 className="text-sm font-bold text-[#172019] dark:text-[#F5F8F2] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#63B532]" />
            Janela de Lembretes do seu Perfil
          </h3>
          <ul className="text-xs text-[#6D756D] dark:text-[#F5F8F2]/75 space-y-2 list-disc list-inside leading-relaxed">
            <li>
              <strong>Início das Tomadas:</strong> {hydrationProfile.wake_time} (logo após acordar, reidratando o corpo em jejum).
            </li>
            <li>
              <strong>Término das Tomadas:</strong> Até às 19:30 / 20:00 (encerrando antes de dormir às {hydrationProfile.sleep_time} para não interromper seu sono profundo).
            </li>
            <li>
              <strong>Distribuição:</strong> Intervalos médios de 2 a 3 horas entre garrafas de {hydrationProfile.bottle_ml || 500} ml.
            </li>
          </ul>
        </div>

        {/* Dicas Clínicas de Boa Prática */}
        <div className="p-4 rounded-xl bg-[#63B532]/10 border border-[#63B532]/20 text-xs text-[#123D24] dark:text-[#A8D94D] space-y-1">
          <p className="font-bold flex items-center gap-1.5">
            <Droplets className="w-4 h-4 text-[#63B532]" />
            Dica Nobre de Ingestão:
          </p>
          <p className="opacity-90 leading-relaxed text-[#172019] dark:text-[#F5F8F2]/80">
            Evite beber 1 litro de uma vez ao perceber que está atrasado na meta. Beba em pequenos goles ritmados ao longo de 20 a 30 minutos para otimizar a absorção celular e preservar o equilíbrio eletrolítico.
          </p>
        </div>
      </div>
    </div>
  );
};
