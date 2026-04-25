import { createContext, useState, type ReactNode } from 'react';

export interface AuthContextValue {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  cartItemCount: number;
  addToCart: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [cartItemCount, setCartItemCount] = useState(0);

  const login = async (email: string, password: string) => {
    void password; // mock — replace with real API call
    await new Promise((r) => setTimeout(r, 600));
    setIsAuthenticated(true);
    setUser({ name: email.split('@')[0], email });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCartItemCount(0);
  };

  const addToCart = () => setCartItemCount((n) => n + 1);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, cartItemCount, addToCart }}>
      {children}
    </AuthContext.Provider>
  );
}
