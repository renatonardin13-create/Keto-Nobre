import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  light?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  light = false,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.35em]',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Chef + Leaf + Dish Emblem */}
      <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#123D24] to-[#082817] p-2 shadow-lg border border-[#63B532]/30 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(99,181,50,0.4)]"
        >
          {/* Dish / Plate base */}
          <ellipse cx="32" cy="54" rx="22" ry="5" fill="#63B532" fillOpacity="0.8" />
          <ellipse cx="32" cy="52" rx="26" ry="6" stroke="#A8D94D" strokeWidth="2.5" />
          
          {/* Chef Hat Body */}
          <path
            d="M20 46C18 38 18 32 24 30C23 23 27 18 34 18C41 18 45 23 44 30C50 32 50 38 48 46H20Z"
            fill="#FFFFFF"
          />
          <path
            d="M22 46H46V49C46 50.1 45.1 51 44 51H24C22.9 51 22 50.1 22 49V46Z"
            fill="#E2E8F0"
          />

          {/* Noble Organic Leaf overlay */}
          <path
            d="M32 44C32 44 43 38 42 22C30 22 24 33 24 33C24 33 30 36 32 44Z"
            fill="#63B532"
          />
          <path
            d="M31 38C34 32 38 27 41 23"
            stroke="#A8D94D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`font-display font-extrabold tracking-tight ${titleSizes[size]} ${light ? 'text-[#123D24]' : 'text-white'}`}>
            Keto
          </span>
          <span className={`font-display font-extrabold tracking-tight text-[#63B532] ${titleSizes[size]}`}>
            Nobre
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#A8D94D] ml-0.5 mb-1 inline-block animate-pulse" />
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-[#63B532]/60 inline-block" />
            <span className={`font-bold uppercase ${subtitleSizes[size]} ${light ? 'text-[#6D756D]' : 'text-[#8EA092]'}`}>
              Receitas que Transformam
            </span>
            <span className="h-[1px] w-3 bg-[#63B532]/60 inline-block" />
          </div>
        )}
      </div>
    </div>
  );
};
