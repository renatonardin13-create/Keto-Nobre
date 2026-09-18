import React, { useState } from 'react';
import {
  Dumbbell,
  Flame,
  Zap,
  Heart,
  Droplets,
  Calendar,
  ChefHat,
  Lightbulb,
  Activity,
  CheckCircle2,
  Bell,
  Clock,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WorkoutsScreen: React.FC = () => {
  const {
    setActiveTab,
    showToast,
    setShowChefModal,
    setChefInitialPrompt,
    setSelectedExploreFilter,
    user,
  } = useApp();

  const [waitlistJoined, setWaitlistJoined] = useState<boolean>(() => {
    return localStorage.getItem('ketonobre_workouts_waitlist') === 'true';
  });

  const [preworkoutWaterLogged, setPreworkoutWaterLogged] = useState<boolean>(false);
  const [selectedProtocol, setSelectedProtocol] = useState<number>(0);

  const handleToggleWaitlist = () => {
    const nextState = !waitlistJoined;
    setWaitlistJoined(nextState);
    localStorage.setItem('ketonobre_workouts_waitlist', String(nextState));
    if (nextState) {
      showToast('Inscrição confirmada! Você receberá acesso antecipado aos treinos.', 'success');
    } else {
      showToast('Inscrição cancelada.', 'info');
    }
  };

  const handleRegisterElectrolytes = () => {
    setPreworkoutWaterLogged(true);
    showToast('+500ml e eletrólitos registrados na sua hidratação pré-treino!', 'success');
  };

  const handleAskChefPreWorkout = () => {
    if (setChefInitialPrompt) {
      setChefInitialPrompt('O que devo comer 1 hora antes de um treino pesado de musculação para manter a cetose e ter máxima energia?');
    }
    setShowChefModal(true);
  };

  const handleExploreHighProtein = () => {
    setSelectedExploreFilter('meat');
    setActiveTab('explore');
  };

  const handleViewExerciseTips = () => {
    setActiveTab('tips');
  };

  const protocols = [
    {
      id: 'hypertrophy',
      title: 'Musculação & Hipertrofia Cetogênica',
      icon: Dumbbell,
      badge: 'Preservação Muscular',
      color: '#63B532',
      duration: '45-60 min',
      description:
        'Treino com foco em cargas progressivas e séries de 6 a 10 repetições. Minimiza a queima de glicogênio hepático e estimula a síntese de proteínas com o suporte de gorduras nobres.',
      ketoBenefit:
        'Estimula a captação de aminoácidos sem picos de insulina, acelerando a lipólise pós-exercício.',
      recommendedPre: 'Café com TCM ou manteiga ghee + 500ml de água com flor de sal 40 min antes.',
      recommendedPost: 'Frango nobre com abacate ou omelete cetogênico rico em leucina.',
    },
    {
      id: 'zone2',
      title: 'Cardio Zona 2 (FatMax)',
      icon: Heart,
      badge: 'Oxidação Pura de Gordura',
      color: '#A8D94D',
      duration: '40-50 min',
      description:
        'Exercício aeróbico de intensidade moderada (60-70% da FCM) onde o corpo utiliza prioritariamente ácidos graxos livres e corpos cetônicos como combustível direto.',
      ketoBenefit:
        'Multiplica a densidade mitocondrial e eleva os níveis circulantes de beta-hidroxibutirato (BHB).',
      recommendedPre: 'Treino preferencialmente em jejum de 12-16h + 500ml de água com eletrólitos.',
      recommendedPost: 'Caldo de ossos nutritivo rico em colágeno e sódio ou salada com salmão.',
    },
    {
      id: 'hiit',
      title: 'HIIT Funcional Cetogênico',
      icon: Zap,
      badge: 'Sensibilidade à Insulina',
      color: '#F59E0B',
      duration: '20-25 min',
      description:
        'Intervalos de esforço máximo de 20 a 30 segundos com pausas completas de 60 a 90 segundos. Melhora drástica na sensibilidade à insulina sem elevar excessivamente o cortisol.',
      ketoBenefit:
        'Gera efeito EPOC (queima calórica estendida por até 24h) enquanto mantém a cetose estável.',
      recommendedPre: 'Hidratação reforçada com potássio e magnésio 30 min antes.',
      recommendedPost: 'Proteína nobre (carnes ou ovos) com azeite extravirgem.',
    },
    {
      id: 'fasted',
      title: 'Treino em Jejum Intermitente',
      icon: Flame,
      badge: 'Autofagia & Foco',
      color: '#EC4899',
      duration: '30-45 min',
      description:
        'Estratégia avançada para praticantes keto-adaptados há mais de 4 semanas. Executado no final da janela de jejum para amplificar a autofagia e a queima lipídica.',
      ketoBenefit:
        'Máxima depleção de gordura visceral com preservação garantida por níveis estáveis de cetonas.',
      recommendedPre: '500ml de água com sal rosa do Himalaia e 1 xícara de café preto puro.',
      recommendedPost: 'Refeição nobre completa para quebra do jejum (1ª refeição do dia).',
    },
  ];

  const weeklySchedule = [
    {
      day: 'Segunda-feira',
      title: 'Membros Superiores & Força',
      type: 'Musculação',
      duration: '50 min',
      nutritionNote: 'Meta: 140g proteína no dia • Foco em carnes vermelhas',
    },
    {
      day: 'Terça-feira',
      title: 'Cardio FatMax em Zona 2',
      type: 'Zona 2',
      duration: '45 min',
      nutritionNote: 'Em jejum matinal • Hidratação reforçada com sódio',
    },
    {
      day: 'Quinta-feira',
      title: 'Membros Inferiores & Core',
      type: 'Musculação',
      duration: '55 min',
      nutritionNote: 'Aumentar gorduras saudáveis no almoço para energia duradoura',
    },
    {
      day: 'Sábado',
      title: 'HIIT Funcional & Mobilidade',
      type: 'HIIT & Respiração',
      duration: '30 min',
      nutritionNote: 'Refeição pós-treino rica em eletrólitos e folhas verde-escuras',
    },
  ];

  return (
    <div id="workouts-screen" className="p-4 sm:p-6 lg:p-8 space-y-8 pb-28 select-none w-full max-w-5xl mx-auto">
      {/* Header with Title and Em Breve Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-center gap-2">
              Treinos & Performance 🏃
            </h1>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-black tracking-wider uppercase shadow-sm">
              Em Breve
            </span>
          </div>
          <p className="text-sm text-[#8EA092] max-w-2xl">
            Protocolos de exercícios cientificamente calibrados para quem vive em estado de cetose. Queime gordura com eficiência mitocondrial sem perder força muscular.
          </p>
        </div>

        {/* Waitlist Call-to-action */}
        <button
          onClick={handleToggleWaitlist}
          id="btn-workouts-waitlist"
          className={`px-5 py-3 rounded-2xl font-extrabold text-xs transition-all flex items-center gap-2 shrink-0 shadow-lg ${
            waitlistJoined
              ? 'bg-[#123D24] text-[#A8D94D] border border-[#63B532]/60'
              : 'bg-[#63B532] hover:bg-[#529e28] text-[#082817]'
          }`}
        >
          {waitlistJoined ? (
            <>
              <CheckCircle2 size={16} className="text-[#63B532]" />
              <span>Inscrito no Acesso VIP</span>
            </>
          ) : (
            <>
              <Bell size={16} />
              <span>Avise-me no Lançamento</span>
            </>
          )}
        </button>
      </div>

      {/* VIP Early Access Announcement Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#123D24] via-[#0D2817] to-[#123D24] border border-[#63B532]/40 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A8D94D]">
              <Sparkles size={16} className="text-[#63B532]" />
              <span>Funcionalidade em Desenvolvimento Ativo</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
              Treinar em cetose requer uma fisiologia diferente
            </h2>
            <p className="text-xs sm:text-sm text-[#8EA092] leading-relaxed">
              O módulo de Treinos do KetoNobre integrará automaticamente seus dados nutricionais diários, sugerindo o melhor momento para treinar, a hidratação exata com eletrólitos e as refeições nobres ideais para cada intensidade.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <div className="p-3.5 rounded-2xl bg-[#082817] border border-[#1B472C] text-center">
              <span className="text-xs text-[#8EA092] block">Lançamento previsto</span>
              <span className="text-sm font-extrabold text-white font-display">Próxima Atualização</span>
            </div>
          </div>
        </div>
      </div>

      {/* ECOSYSTEM INTEGRATION BAR (Direct functional bridges) */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-wider uppercase text-[#A8D94D]">
          Conexões do Ecossistema KetoNobre
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Bridge 1: Nutrition */}
          <button
            onClick={() => setActiveTab('nutrition')}
            className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 transition-all text-left group flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#123D24] text-[#63B532] group-hover:scale-110 transition-transform">
                <Activity size={18} />
              </div>
              <ChevronRight size={16} className="text-[#8EA092] group-hover:text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-[#A8D94D]">
                Acompanhar Nutrição
              </span>
              <span className="text-[11px] text-[#8EA092]">Ver gasto calórico e macros</span>
            </div>
          </button>

          {/* Bridge 2: Chef IA */}
          <button
            onClick={handleAskChefPreWorkout}
            className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 transition-all text-left group flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#123D24] text-[#A8D94D] group-hover:scale-110 transition-transform">
                <ChefHat size={18} />
              </div>
              <ChevronRight size={16} className="text-[#8EA092] group-hover:text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-[#A8D94D]">
                Chef IA Pré-Treino
              </span>
              <span className="text-[11px] text-[#8EA092]">Sugestões de refeição pré-treino</span>
            </div>
          </button>

          {/* Bridge 3: Recipes */}
          <button
            onClick={handleExploreHighProtein}
            className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 transition-all text-left group flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#123D24] text-[#63B532] group-hover:scale-110 transition-transform">
                <Flame size={18} />
              </div>
              <ChevronRight size={16} className="text-[#8EA092] group-hover:text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-[#A8D94D]">
                Receitas Pós-Treino
              </span>
              <span className="text-[11px] text-[#8EA092]">Carnes & proteínas nobres</span>
            </div>
          </button>

          {/* Bridge 4: Tips */}
          <button
            onClick={handleViewExerciseTips}
            className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]/60 transition-all text-left group flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#123D24] text-[#A8D94D] group-hover:scale-110 transition-transform">
                <Lightbulb size={18} />
              </div>
              <ChevronRight size={16} className="text-[#8EA092] group-hover:text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-[#A8D94D]">
                Dicas de Exercício
              </span>
              <span className="text-[11px] text-[#8EA092]">Artigos baseados em ciência</span>
            </div>
          </button>
        </div>
      </div>

      {/* INTERACTIVE PRE-WORKOUT ELECTROLYTES CALCULATOR */}
      <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#123D24] text-[#63B532] border border-[#63B532]/30">
              <Droplets size={22} />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white font-display">
                Eletrólitos Pré-Treino Cetogênico
              </h3>
              <p className="text-xs text-[#8EA092]">
                Em cetose, a excreção renal de sódio é aumentada. Hidrate-se 30-45 min antes da sessão.
              </p>
            </div>
          </div>

          <button
            onClick={handleRegisterElectrolytes}
            id="btn-record-preworkout-water"
            className="px-4 py-2.5 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-[#A8D94D] border border-[#63B532]/40 text-xs font-bold transition-all flex items-center gap-2 self-start sm:self-center shadow-sm"
          >
            <Droplets size={15} />
            <span>Registrar +500ml na Hidratação</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-[#082817] border border-[#1B472C]">
            <span className="text-[10px] text-[#8EA092] font-semibold block">Água Filtrada</span>
            <span className="text-lg font-black text-white">500 ml</span>
            <span className="text-[10px] text-[#63B532] block mt-0.5">30 min antes</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#082817] border border-[#1B472C]">
            <span className="text-[10px] text-[#8EA092] font-semibold block">Sódio (Sal Integral)</span>
            <span className="text-lg font-black text-white">800 - 1000 mg</span>
            <span className="text-[10px] text-amber-400 block mt-0.5">Evita tontura/fraqueza</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#082817] border border-[#1B472C]">
            <span className="text-[10px] text-[#8EA092] font-semibold block">Potássio</span>
            <span className="text-lg font-black text-white">300 - 400 mg</span>
            <span className="text-[10px] text-[#A8D94D] block mt-0.5">Previne cãibras</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#082817] border border-[#1B472C]">
            <span className="text-[10px] text-[#8EA092] font-semibold block">Magnésio Quelato</span>
            <span className="text-lg font-black text-white">200 mg</span>
            <span className="text-[10px] text-purple-400 block mt-0.5">Relaxamento muscular</span>
          </div>
        </div>
      </div>

      {/* KETO WORKOUT PROTOCOLS TABS & DETAILS */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
            Protocolos Adaptados à Cetose
          </h2>
          <p className="text-xs text-[#8EA092]">
            Selecione uma modalidade para entender o mecanismo de oxidação e recomendações nutricionais.
          </p>
        </div>

        {/* Horizontal tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {protocols.map((protocol, idx) => {
            const Icon = protocol.icon;
            const isSelected = selectedProtocol === idx;
            return (
              <button
                key={protocol.id}
                onClick={() => setSelectedProtocol(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#123D24] border-[#63B532] shadow-md'
                    : 'bg-[#0D2817] border-[#1B472C] hover:border-[#63B532]/40 text-[#8EA092]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon
                    size={18}
                    style={{ color: isSelected ? '#A8D94D' : '#8EA092' }}
                  />
                  <span className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-[#8EA092]'}`}>
                    {protocol.badge}
                  </span>
                </div>
                <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-[#A8D94D]' : 'text-white'}`}>
                  {protocol.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected protocol detail card */}
        {protocols[selectedProtocol] && (
          <div className="p-6 rounded-3xl bg-[#0D2817] border border-[#1B472C] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-black uppercase text-[#A8D94D] bg-[#123D24] px-2.5 py-0.5 rounded-md border border-[#63B532]/30">
                  {protocols[selectedProtocol].badge}
                </span>
                <h3 className="text-lg font-extrabold text-white font-display mt-2">
                  {protocols[selectedProtocol].title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#082817] border border-[#1B472C] text-xs text-[#8EA092]">
                <Clock size={14} className="text-[#63B532]" />
                <span>Duração sugerida: {protocols[selectedProtocol].duration}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8EA092] leading-relaxed">
              {protocols[selectedProtocol].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#082817] border border-[#1B472C] space-y-1">
                <span className="text-[11px] font-bold text-[#63B532] block">Impacto na Cetose</span>
                <p className="text-xs text-[#F5F8F2] leading-snug">
                  {protocols[selectedProtocol].ketoBenefit}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#082817] border border-[#1B472C] space-y-1">
                <span className="text-[11px] font-bold text-[#A8D94D] block">Estratégia Pré-Treino</span>
                <p className="text-xs text-[#8EA092] leading-snug">
                  {protocols[selectedProtocol].recommendedPre}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#082817] border border-[#1B472C] space-y-1">
                <span className="text-[11px] font-bold text-amber-400 block">Estratégia Pós-Treino</span>
                <p className="text-xs text-[#8EA092] leading-snug">
                  {protocols[selectedProtocol].recommendedPost}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PREVIEW: ROTINA SEMANAL INTEGRADA */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-display">
              Exemplo de Rotina Semanal Cetogênica
            </h2>
            <p className="text-xs text-[#8EA092]">
              Sincronização entre esforço físico e planejamento alimentar
            </p>
          </div>
          <button
            onClick={() => setActiveTab('planner')}
            className="text-xs font-bold text-[#63B532] hover:text-[#A8D94D] flex items-center gap-1"
          >
            <span>Ver Planejador</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {weeklySchedule.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-[#0D2817] border border-[#1B472C] flex items-start gap-3.5 hover:border-[#63B532]/40 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-[#123D24] text-[#63B532] shrink-0 font-bold text-xs">
                {item.day.slice(0, 3)}
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white truncate">{item.title}</span>
                  <span className="text-[10px] text-[#A8D94D] bg-[#123D24] px-1.5 py-0.2 rounded font-semibold">
                    {item.type}
                  </span>
                </div>
                <p className="text-[11px] text-[#8EA092] leading-snug">
                  {item.nutritionNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
