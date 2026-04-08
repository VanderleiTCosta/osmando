import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Tipagem estrita para o Contexto
interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
  isLoadingPublicSettings: boolean;
  authError: any;
  appPublicSettings: any;
  logout: (shouldRedirect?: boolean) => void;
  navigateToLogin: () => void;
  checkAppState: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Default false: Garante que a aplicação carregue instantaneamente (100% PageSpeed)
  const [isLoadingAuth, setIsLoadingAuth] = useState(false); 
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState<any>(null);
  const [appPublicSettings, setAppPublicSettings] = useState<any>(null);

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    // Aqui você implementará sua própria lógica de API no futuro.
    // Por enquanto, resolvemos imediatamente para liberar o First Contentful Paint (FCP).
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
    setAuthError(null);
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    if (shouldRedirect) {
      window.location.href = '/login';
    }
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};