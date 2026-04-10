import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';

// Lazy loading das páginas para garantir Code Splitting e máxima performance (Core Web Vitals)
const Home = lazy(() => import('./pages/Home'));
const AreaPage = lazy(() => import('./pages/AreaPage'));
const PageNotFound = lazy(() => import('./lib/PageNotFound'));
const UserNotRegisteredError = lazy(() => import('@/components/UserNotRegisteredError'));

// Importando as novas páginas de serviços otimizadas
const ServiceDesentupimentoPage = lazy(() => import('./pages/services/ServiceDesentupimentoPage'));
const ServiceHidrojateamentoPage = lazy(() => import('./pages/services/ServiceHidrojateamentoPage'));
const ServiceLimpaFossaPage = lazy(() => import('./pages/services/ServiceLimpaFossaPage'));
const ServiceVideoInspecaoPage = lazy(() => import('./pages/services/ServiceVideoInspecaoPage'));
const ServiceCacaVazamentoPage = lazy(() => import('./pages/services/ServiceCacaVazamentoPage'));
const ServiceHidraulicaPage = lazy(() => import('./pages/services/ServiceHidraulicaPage'));

// Componente de Loading com React.memo para estabilidade de renderização
const LoadingFallback = React.memo(() => (
  <div className="fixed inset-0 flex items-center justify-center bg-slate-50/80 backdrop-blur-sm z-50">
    <div 
      className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
      role="status"
      aria-label="A carregar aplicação"
    />
  </div>
));
LoadingFallback.displayName = 'LoadingFallback';

const AuthenticatedApp = React.memo(() => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return <LoadingFallback />;
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <UserNotRegisteredError />
        </Suspense>
      );
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rotas exatas para as páginas de Serviços SEO */}
        <Route path="/servicos/desentupimento" element={<ServiceDesentupimentoPage />} />
        <Route path="/servicos/hidrojateamento" element={<ServiceHidrojateamentoPage />} />
        <Route path="/servicos/limpeza-de-fossa" element={<ServiceLimpaFossaPage />} />
        <Route path="/servicos/video-inspecao" element={<ServiceVideoInspecaoPage />} />
        <Route path="/servicos/caca-vazamento" element={<ServiceCacaVazamentoPage />} />
        <Route path="/servicos/servicos-hidraulicos" element={<ServiceHidraulicaPage />} />

        {/* ROTA DINÂMICA DE SEO LOCAL (Gera as 400+ páginas de bairros e serviços).
          Deve ficar obrigatoriamente AQUI, depois das rotas estáticas e antes do Not Found (*)
        */}
        <Route path="/:slug" element={<AreaPage />} />

        {/* Fallback para páginas não encontradas */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
});
AuthenticatedApp.displayName = 'AuthenticatedApp';

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}