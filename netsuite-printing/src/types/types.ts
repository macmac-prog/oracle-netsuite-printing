import { ReactNode } from 'react';

export interface User {
    username: string;
  }
export interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
    user: User | null;
  }

export interface PrivateRouteProps {
    children: ReactNode;
  }