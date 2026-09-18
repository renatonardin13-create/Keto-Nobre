import React, { useState } from 'react';
import { Home, Search, Calendar, Heart, User, Menu } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MobileMoreMenu } from './MobileMoreMenu';
import { NavigationTab } from '../../types';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const primaryTabs = [
    { id: 'home' as NavigationTab, label: 'Início', icon: Home },
    { id: 'explore' as NavigationTab, label: 'Explorar', icon: Search },
    { id: 'planner' as NavigationTab, label: 'Planejar', icon: Calendar },
    { id: 'saved' as NavigationTab, label: 'Salvos', icon: Heart },
    { id: 'profile' as NavigationTab, label: 'Perfil', icon: User },
  ];

  const isMoreTabActive = [
    'scanner',
    'nutrition',
    'chef',
    'tips',
    'workouts',
    'shopping',
    'settings',
    'premium',
    'admin',
  ].includes(activeTab);

  return (
    <>
      <nav
        id="bottom-navigation-bar"
        aria-label="Navegação Inferior Mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 max-w-lg mx-auto px-2 sm:px-4 pb-3 pt-2 bg-gradient-to-t from-[#071A0E] via-[#071A0E]/95 to-transparent pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between rounded-2xl bg-[#0D2817]/95 backdrop-blur-xl border border-[#1B472C] py-1.5 px-1 sm:px-2 shadow-2xl shadow-black/80">
          {primaryTabs.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => {
                  setMoreMenuOpen(false);
                  setActiveTab(item.id);
                }}
                className={`relative flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B532] min-h-[44px] ${
                  isActive ? 'text-[#63B532]' : 'text-[#8EA092] hover:text-[#F5F8F2]'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1.5 w-6 h-1 bg-[#63B532] rounded-full shadow-[0_0_8px_#63B532]" />
                )}
                <div
                  className={`p-1 rounded-lg transition-transform duration-200 ${
                    isActive ? 'scale-110 bg-[#63B532]/20 text-[#63B532]' : 'group-hover:scale-105'
                  }`}
                >
                  <Icon
                    size={18}
                    className={`transition-colors duration-200 ${
                      isActive ? 'stroke-[2.5px]' : 'stroke-[2px]'
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] font-medium tracking-tight mt-0.5 whitespace-nowrap ${
                    isActive ? 'font-extrabold text-[#A8D94D]' : 'text-[#8EA092]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* "Mais" Menu Button */}
          <button
            id="nav-tab-more"
            aria-label="Mais funcionalidades"
            onClick={() => setMoreMenuOpen(true)}
            className={`relative flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B532] min-h-[44px] ${
              isMoreTabActive || moreMenuOpen
                ? 'text-[#A8D94D]'
                : 'text-[#8EA092] hover:text-[#F5F8F2]'
            }`}
          >
            {(isMoreTabActive || moreMenuOpen) && (
              <span className="absolute -top-1.5 w-6 h-1 bg-[#A8D94D] rounded-full shadow-[0_0_8px_#A8D94D]" />
            )}
            <div
              className={`p-1 rounded-lg transition-transform duration-200 ${
                isMoreTabActive || moreMenuOpen
                  ? 'scale-110 bg-[#63B532]/20 text-[#A8D94D]'
                  : 'group-hover:scale-105'
              }`}
            >
              <Menu size={18} className="stroke-[2.2px]" />
            </div>
            <span
              className={`text-[10px] font-medium tracking-tight mt-0.5 whitespace-nowrap ${
                isMoreTabActive || moreMenuOpen ? 'font-extrabold text-[#A8D94D]' : 'text-[#8EA092]'
              }`}
            >
              Mais
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile "Mais" Drawer Modal */}
      <MobileMoreMenu isOpen={moreMenuOpen} onClose={() => setMoreMenuOpen(false)} />
    </>
  );
};
