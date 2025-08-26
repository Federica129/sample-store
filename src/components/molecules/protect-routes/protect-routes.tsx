"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";

interface Props {
  children: React.ReactNode;
  isLoginPage?: boolean;
}

export function ProtectedRoute({ children, isLoginPage = false }: Props) {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    if (!isLoginPage && !user.isLogged) {
      router.replace("/login");
    }

    if (isLoginPage && user.isLogged) {
      router.replace("/");
    }
  }, [hydrated, user, isLoginPage]);

  if (!hydrated)
    return <div className="mt-[65px] md:min-h-[calc(100dvh-65px)]" />;
  if (!isLoginPage && !user.isLogged)
    return <div className="mt-[65px] md:min-h-[calc(100dvh-65px)]" />;
  if (isLoginPage && user.isLogged)
    return <div className="mt-[65px] md:min-h-[calc(100dvh-65px)]" />;

  return <>{children}</>;
}
