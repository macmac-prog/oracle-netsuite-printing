'use client'
import PrivateRoute from "@/components/privateroutes";
import { useAuth } from "@/context/authcontext";

export default function Page(){
        const { logout, user } = useAuth();
      
        return (
          <PrivateRoute>
          <div>
            <h2>Welcome, {user?.username}!</h2>
            <button onClick={logout}>Logout</button>
          </div>
          </PrivateRoute>
        );
}