import React, { useEffect, useState } from 'react';
import { Logo } from '../common/Logo';
import { Leaf } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Stage 0: background glow
    const t1 = setTimeout(() => setStage(1), 300); // logo appears
    const t2 = setTimeout(() => setStage(2), 700); // leaf glows
    const t3 = setTimeout(() => setStage(3), 1100); // text appears
    const t4 = setTimeout(() => onFinish(), 2400); // auto transition

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div
      id="splash-screen"
      onClick={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 bg-[#071A0E] text-white cursor-pointer select-none overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#123D24]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#63B532]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top spacer */}
      <div className="w-full flex justify-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFinish();
          }}
          className="text-xs text-[#8EA092] hover:text-white px-3 py-1 rounded-full border border-[#1B472C]"
        >
          Pular
        </button>
      </div>

      {/* Center Animated Logo and Brand */}
      <div className="relative flex flex-col items-center justify-center text-center z-10">
        <div
          className={`transition-all duration-700 transform ${
            stage >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'
          }`}
        >
          <Logo size="xl" showSubtitle={false} />
        </div>

        {stage >= 2 && (
          <div className="flex items-center gap-1.5 my-3 animate-pulse">
            <Leaf size={20} className="text-[#63B532] fill-[#63B532]/30" />
            <span className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#63B532] to-transparent" />
          </div>
        )}

        <div
          className={`transition-all duration-700 transform ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-sm font-bold tracking-[0.35em] text-[#A8D94D] uppercase mt-1">
            Receitas que Transformam
          </h2>
        </div>
      </div>

      {/* Bottom Motto */}
      <div className="z-10 text-center pb-6">
        <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#123D24]/60 flex items-center justify-center border border-[#63B532]/30 animate-bounce">
          <Leaf size={16} className="text-[#63B532]" />
        </div>
        <p className="text-xs text-[#8EA092] font-medium tracking-wide">
          Sua cozinha. Um futuro mais saudável.
        </p>
      </div>
    </div>
  );
};
