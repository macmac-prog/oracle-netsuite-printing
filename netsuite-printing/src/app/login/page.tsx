"use client";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    login(username, password);
    if (username && password) {
        router.push('/dashboard');
      }
  };

  return (
    <>
    <div className="flex flex-col w-full items-center mt-20 text-[#333]">
      <h3 className="font-semibold text-2xl">LOGIN</h3>
      <div className="flex mt-3 items-center gap-2">
        <label htmlFor="username" className="font-medium">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border-2 px-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex mt-3 items-center gap-2">
        <label htmlFor="password" className="font-medium">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 px-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="mt-5 bg-[#607799] text-white border px-3 rounded-sm">Login</button>
    </div>
      </>
  );
}