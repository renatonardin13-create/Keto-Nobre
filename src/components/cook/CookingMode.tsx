import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  List,
  Flame,
  Volume2,
  X
} from 'lucide-react';
import { Recipe } from '../../types';
import { useApp } from '../../context/AppContext';

interface CookingModeProps {
  recipe: Recipe;
  onExit: () => void;
}

export const CookingMode: React.FC<CookingModeProps> = ({ recipe, onExit }) => {
  const { finishCooking, showToast, user } = useApp();
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [showIngredientsDrawer, setShowIngredientsDrawer] = useState<boolean>(false);

  const steps = recipe.steps || [];
  const currentStep = steps[currentStepIndex] || {
    stepNumber: 1,
    instruction: 'Prepare os ingredientes.',
    timerSeconds: 180,
  };

  // Step Timer
  const initialSeconds = currentStep.timerSeconds || 180;
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);
  const [timerAlertFired, setTimerAlertFired] = useState<boolean>(false);

  // Play synthetic pleasant audio chime via Web Audio API
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {
      // audio context muted or not permitted
    }
  };

  // Reset timer when step changes
  useEffect(() => {
    const sec = steps[currentStepIndex]?.timerSeconds || 180;
    setTimeLeft(sec);
    setIsTimerRunning(false);
    setTimerAlertFired(false);
  }, [currentStepIndex, steps]);

  // Timer countdown effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning && !timerAlertFired) {
      setIsTimerRunning(false);
      setTimerAlertFired(true);
      playChime();
      showToast('⏰ Tempo da etapa concluído!');
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, timerAlertFired, showToast]);

  const toggleTimer = () => {
    if (timeLeft === 0) {
      resetTimer();
      setIsTimerRunning(true);
      return;
    }
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerAlertFired(false);
    setTimeLeft(steps[currentStepIndex]?.timerSeconds || 180);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setShowCelebration(true);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleFinish = () => {
    finishCooking(recipe);
  };

  const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div
      id="cooking-mode-screen"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#071A0E] text-white p-4 sm:p-6 select-none overflow-y-auto"
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col justify-between min-h-full space-y-6">
        {/* Top Header & Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <button
              id="cook-exit-btn"
              onClick={onExit}
              className="flex items-center gap-1 text-xs font-semibold text-[#8EA092] hover:text-white p-2 rounded-xl bg-[#0D2817] border border-[#1B472C]"
            >
              <ArrowLeft size={16} />
              <span>Sair</span>
            </button>

            <span className="text-xs font-bold text-[#A8D94D] uppercase tracking-wider">
              Modo Cozinhar • {recipe.title}
            </span>

            <button
              onClick={() => setShowIngredientsDrawer(!showIngredientsDrawer)}
              className="flex items-center gap-1.5 text-xs font-bold text-[#63B532] p-2 rounded-xl bg-[#0D2817] border border-[#1B472C] hover:border-[#63B532]"
              title="Ver ingredientes"
            >
              <List size={15} />
              <span className="hidden sm:inline">Ingredientes</span>
            </button>
          </div>

          {/* Linear Progress Bar */}
          <div className="space-y-1">
            <div className="w-full h-2.5 rounded-full bg-[#0D2817] overflow-hidden border border-[#1B472C]/50">
              <div
                className="h-full bg-gradient-to-r from-[#63B532] to-[#A8D94D] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-[#8EA092]">
              <span>Etapa {currentStepIndex + 1} de {steps.length}</span>
              <span>{Math.round(progressPercent)}% concluído</span>
            </div>
          </div>
        </div>

        {/* Center Stage: Step Instruction & Visual */}
        <div className="space-y-4 my-auto">
          {/* Step Tag */}
          <div className="text-center">
            <span className="px-3 py-1 rounded-full bg-[#123D24] text-[#A8D94D] font-extrabold text-xs border border-[#63B532]/30">
              Etapa {currentStep.stepNumber}
            </span>
          </div>

          {/* Large instruction text */}
          <div className="text-center px-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display leading-snug">
              {currentStep.instruction}
            </h2>
          </div>

          {/* Picture if present */}
          <div className="relative w-full h-48 sm:h-56 rounded-3xl overflow-hidden border border-[#1B472C] shadow-2xl">
            <img
              src={currentStep.image || recipe.image}
              alt={`Passo ${currentStep.stepNumber}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A0E] via-transparent to-transparent opacity-50" />
          </div>

          {/* Interactive Timer Block */}
          {currentStep.timerSeconds ? (
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-3xl bg-[#0D2817] border border-[#1B472C] shadow-lg space-y-3">
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-3xl sm:text-4xl font-extrabold tracking-widest ${
                    timeLeft === 0
                      ? 'text-rose-400 animate-pulse'
                      : isTimerRunning
                      ? 'text-[#A8D94D]'
                      : 'text-white'
                  }`}
                >
                  {formatTime(timeLeft)}
                </span>

                <button
                  onClick={resetTimer}
                  className="p-2 rounded-xl bg-[#071A0E] text-[#8EA092] hover:text-white border border-[#1B472C]"
                  title="Reiniciar timer"
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              <button
                id="btn-cook-timer-toggle"
                onClick={toggleTimer}
                className={`w-full max-w-xs py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  isTimerRunning
                    ? 'bg-amber-500 hover:bg-amber-600 text-black shadow-md'
                    : 'bg-[#63B532] hover:bg-[#529e28] text-[#082817] shadow-lg shadow-[#63B532]/20'
                }`}
              >
                {isTimerRunning ? (
                  <>
                    <Pause size={16} className="fill-current" />
                    <span>Pausar Timer</span>
                  </>
                ) : (
                  <>
                    <Play size={16} className="fill-current" />
                    <span>{timeLeft === 0 ? 'Repetir Timer' : 'Iniciar Timer'}</span>
                  </>
                )}
              </button>
            </div>
          ) : null}

          {/* Chef tip for this step */}
          {currentStep.tip && (
            <div className="text-xs p-3 rounded-2xl bg-[#0D2817] border border-[#1B472C] text-[#8EA092] text-center max-w-xl mx-auto">
              💡 <span className="font-bold text-white">Dica do Chef:</span> {currentStep.tip}
            </div>
          )}
        </div>

        {/* Bottom Step Navigation: ← Anterior | Próximo → */}
        <div className="flex items-center gap-3 pt-4">
          <button
            id="cook-prev-step-btn"
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`flex-1 py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all border ${
              currentStepIndex === 0
                ? 'opacity-30 border-[#1B472C] bg-[#0D2817] text-[#8EA092] cursor-not-allowed'
                : 'border-[#1B472C] bg-[#0D2817] hover:bg-[#123D24] text-white'
            }`}
          >
            <ChevronLeft size={18} />
            <span>Passo Anterior</span>
          </button>

          <button
            id="cook-next-step-btn"
            onClick={handleNext}
            className="flex-1 py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 bg-[#63B532] hover:bg-[#529e28] text-[#082817] shadow-xl shadow-[#63B532]/25 active:scale-95 transition-all"
          >
            <span>{currentStepIndex === steps.length - 1 ? 'Concluir Receita' : 'Próximo Passo'}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Ingredients Quick Drawer / Modal */}
      {showIngredientsDrawer && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#0D2817] border border-[#1B472C] rounded-t-3xl sm:rounded-3xl p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#1B472C]">
              <h3 className="text-sm font-bold text-white font-display">Ingredientes Necessários</h3>
              <button
                onClick={() => setShowIngredientsDrawer(false)}
                className="p-1 rounded-full text-[#8EA092] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              {recipe.ingredients.map((ing) => (
                <div
                  key={ing.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#071A0E] border border-[#1B472C] text-xs"
                >
                  <span className="text-white font-medium">{ing.name}</span>
                  <span className="font-extrabold text-[#A8D94D]">{ing.amount}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowIngredientsDrawer(false)}
              className="w-full py-2.5 rounded-xl bg-[#123D24] text-[#A8D94D] font-bold text-xs"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {showCelebration && (
        <div
          id="cook-celebration-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/85 backdrop-blur-md animate-in fade-in"
        >
          <div className="w-full max-w-sm rounded-3xl bg-[#0D2817] border border-[#63B532] p-6 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#123D24] flex items-center justify-center text-[#63B532] border border-[#63B532]/40 animate-bounce">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#A8D94D] uppercase tracking-widest">
                Prato Finalizado com Sucesso!
              </span>
              <h3 className="text-xl font-extrabold text-white font-display">
                {recipe.title}
              </h3>
              <p className="text-xs text-[#8EA092]">
                Sua receita foi concluída e adicionada ao seu histórico de preparo. Mais um passo em sua transformação saudável!
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#071A0E] border border-[#1B472C] flex justify-around text-center">
              <div>
                <span className="block text-sm font-extrabold text-[#63B532]">
                  {user.preparedCount + 1}
                </span>
                <span className="text-[10px] text-[#8EA092]">Pratos Preparados</span>
              </div>
              <div>
                <span className="block text-sm font-extrabold text-amber-400">
                  🔥 {user.streakDays + 1} dias
                </span>
                <span className="text-[10px] text-[#8EA092]">Sequência Ativa</span>
              </div>
            </div>

            <button
              id="finish-cooking-confirm-btn"
              onClick={handleFinish}
              className="w-full py-3.5 px-4 rounded-xl bg-[#63B532] hover:bg-[#529e28] text-[#082817] font-extrabold text-sm shadow-lg shadow-[#63B532]/30 transition-all"
            >
              Salvar e Voltar ao Início
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
