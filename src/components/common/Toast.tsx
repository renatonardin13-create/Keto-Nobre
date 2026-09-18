import React from 'react';
import { CheckCircle2, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const renderIcon = () => {
    switch (toast.type) {
      case 'favorite':
        return <Heart size={18} className="text-[#63B532] fill-[#63B532]" />;
      case 'list':
        return <ShoppingBag size={18} className="text-[#A8D94D]" />;
      default:
        return <CheckCircle2 size={18} className="text-[#63B532]" />;
    }
  };

  return (
    <div
      id="app-toast-alert"
      role="alert"
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0D2817]/95 border border-[#63B532]/40 text-[#F5F8F2] shadow-xl shadow-black/50 backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-top-4"
    >
      <div className="p-1 rounded-full bg-[#123D24] text-[#63B532]">
        {renderIcon()}
      </div>
      <span className="text-xs font-semibold tracking-wide">
        {toast.message}
      </span>
    </div>
  );
};
