import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { X, Mail, Lock, User as UserIcon, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AuthModal: React.FC = () => {
  const { showAuthModal, setShowAuthModal, setUser, showToast } = useApp();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [name, setName] = useState<string>('João Silva');
  const [email, setEmail] = useState<string>('joao.silva@exemplo.com');
  const [password, setPassword] = useState<string>('••••••••');

  if (!showAuthModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      name: name || 'João Silva',
      email: email || 'joao.silva@exemplo.com',
    }));
    setShowAuthModal(false);
    showToast(`Bem-vindo, ${name || 'João Silva'}!`);
  };

  const handleOAuthLogin = (provider: 'Google' | 'Apple') => {
    setUser((prev) => ({
      ...prev,
      name: 'João Silva',
      email: 'joao.silva@exemplo.com',
    }));
    setShowAuthModal(false);
    showToast(`Conectado com ${provider}!`);
  };

  return (
    <div
      id="auth-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
    >
      <div
        id="auth-modal-card"
        className="relative w-full max-w-md rounded-3xl bg-[#0D2817] border border-[#1B472C] p-6 shadow-2xl text-white space-y-5"
      >
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#123D24] text-[#8EA092] hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="text-center pt-2 space-y-1.5">
          <div className="flex justify-center mb-1">
            <Logo size="lg" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">
            {isLogin ? 'Bem-vindo(a) de volta!' : 'Crie sua conta no KetoNobre'}
          </h2>
          <p className="text-xs text-[#8EA092]">
            Entre para salvar receitas, planejar refeições e sincronizar sua lista.
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={() => handleOAuthLogin('Google')}
            className="w-full py-3 px-4 rounded-xl bg-white hover:bg-gray-100 text-[#172019] font-semibold text-sm flex items-center justify-center gap-3 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continuar com Google</span>
          </button>

          <button
            type="button"
            onClick={() => handleOAuthLogin('Apple')}
            className="w-full py-3 px-4 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-white font-semibold text-sm flex items-center justify-center gap-3 transition-colors border border-[#1B472C]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-.95 2.76 1.01.08 2.05-.51 2.67-1.26z" />
            </svg>
            <span>Continuar com Apple</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex-1 h-[1px] bg-[#1B472C]" />
          <span className="text-[11px] uppercase tracking-wider text-[#8EA092]">ou com e-mail</span>
          <span className="flex-1 h-[1px] bg-[#1B472C]" />
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {!isLogin && (
            <div>
              <label className="text-xs text-[#8EA092] mb-1 block">Nome completo</label>
              <div className="flex items-center bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2.5 focus-within:border-[#63B532]">
                <UserIcon size={16} className="text-[#8EA092] mr-2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="bg-transparent text-sm text-white w-full outline-none"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs text-[#8EA092] mb-1 block">E-mail</label>
            <div className="flex items-center bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2.5 focus-within:border-[#63B532]">
              <Mail size={16} className="text-[#8EA092] mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="bg-transparent text-sm text-white w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-[#8EA092] mb-1 block">Senha</label>
            <div className="flex items-center bg-[#071A0E] border border-[#1B472C] rounded-xl px-3 py-2.5 focus-within:border-[#63B532]">
              <Lock size={16} className="text-[#8EA092] mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha secreta"
                className="bg-transparent text-sm text-white w-full outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#63B532] hover:bg-[#529e28] active:scale-[0.99] text-[#082817] font-bold text-sm shadow-lg shadow-[#63B532]/25 flex items-center justify-center gap-2 transition-all"
          >
            <span>{isLogin ? 'Entrar com e-mail' : 'Criar minha conta'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="text-center pt-1">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs text-[#A8D94D] hover:underline font-semibold"
          >
            {isLogin
              ? 'Ainda não tem uma conta? Criar agora'
              : 'Já tem uma conta? Entrar'}
          </button>
        </div>
      </div>
    </div>
  );
};
