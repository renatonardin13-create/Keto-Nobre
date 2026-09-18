import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { SplashScreen } from './components/onboarding/SplashScreen';
import { Onboarding } from './components/onboarding/Onboarding';
import { AuthModal } from './components/auth/AuthModal';
import { BottomNav } from './components/common/BottomNav';
import { Toast } from './components/common/Toast';
import { AppShell } from './components/layout/AppShell';
import { HomeScreen } from './components/home/HomeScreen';
import { ExploreScreen } from './components/explore/ExploreScreen';
import { ScannerScreen } from './components/scanner/ScannerScreen';
import { HealthTipsScreen } from './components/tips/HealthTipsScreen';
import { PlannerScreen } from './components/planner/PlannerScreen';
import { ShoppingScreen } from './components/shopping/ShoppingScreen';
import { SavedScreen } from './components/saved/SavedScreen';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { NutritionScreen } from './components/nutrition/NutritionScreen';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { RecipeDetailModal } from './components/recipe/RecipeDetailModal';
import { CookingMode } from './components/cook/CookingMode';
import { ChefIAModal } from './components/chef/ChefIAModal';
import { PremiumModal } from './components/premium/PremiumModal';
import { WorkoutsScreen } from './components/workouts/WorkoutsScreen';
import { SettingsScreen } from './components/settings/SettingsScreen';
import { HydrationScreen } from './components/hydration/HydrationScreen';

const AppContent: React.FC = () => {
  const {
    splashFinished,
    setSplashFinished,
    onboardingFinished,
    setOnboardingFinished,
    activeTab,
    activeDetailRecipe,
    closeRecipeDetail,
    activeCookingRecipe,
    exitCooking,
    showAdminPanel,
    setShowAdminPanel,
  } = useApp();

  // 1. Splash Screen
  if (!splashFinished) {
    return <SplashScreen onFinish={() => setSplashFinished(true)} />;
  }

  // 2. Onboarding Flow (Initial user walkthrough)
  if (!onboardingFinished) {
    return <Onboarding onFinish={() => setOnboardingFinished(true)} />;
  }

  // 3. Active Cooking Mode (Full-screen immersion)
  if (activeCookingRecipe) {
    return <CookingMode recipe={activeCookingRecipe} onExit={exitCooking} />;
  }

  // 4. Admin Dashboard (Full Screen CMS & Management)
  if (showAdminPanel) {
    return <AdminDashboard onBack={() => setShowAdminPanel(false)} />;
  }

  return (
    <AppShell>
      {/* Dynamic Tab Views */}
      {activeTab === 'home' && <HomeScreen />}
      {activeTab === 'explore' && <ExploreScreen />}
      {activeTab === 'scanner' && <ScannerScreen />}
      {activeTab === 'tips' && <HealthTipsScreen />}
      {activeTab === 'planner' && <PlannerScreen />}
      {activeTab === 'shopping' && <ShoppingScreen />}
      {activeTab === 'saved' && <SavedScreen />}
      {activeTab === 'nutrition' && <NutritionScreen />}
      {activeTab === 'hydration' && <HydrationScreen />}
      {activeTab === 'workouts' && <WorkoutsScreen />}
      {activeTab === 'profile' && <ProfileScreen />}
      {activeTab === 'settings' && <SettingsScreen />}

      {/* Persistent Bottom Navigation on Mobile */}
      <BottomNav />

      {/* Global Overlays & Modals */}
      {activeDetailRecipe && (
        <RecipeDetailModal recipe={activeDetailRecipe} onClose={closeRecipeDetail} />
      )}

      <ChefIAModal />
      <PremiumModal />
      <AuthModal />
      <Toast />
    </AppShell>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
