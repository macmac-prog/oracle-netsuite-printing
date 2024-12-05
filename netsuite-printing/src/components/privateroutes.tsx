"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { PrivateRouteProps } from "@/types/types";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else if (isAuthenticated) {
      setIsLoading(false);
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <><Navbar/>{children}</>;
};

export default PrivateRoute;
