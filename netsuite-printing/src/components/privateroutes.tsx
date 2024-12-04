'use client'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authcontext';
import { PrivateRouteProps } from '@/types/types';
import { useEffect } from 'react';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default PrivateRoute;