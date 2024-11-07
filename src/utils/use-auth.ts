import { useEffect, useState } from "react";
import { SessionData } from "./auth";
import { redirect } from "next/navigation";

export function useAuth() {
  const [session, setSession] = useState<SessionData | null>(null);
  const isAuthenticated = session && session.isAuthenticated;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchSession() {
      setIsLoading(true);

      try {
        const res = await fetch("/api/session");
        setSession(await res.json());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSession();
  }, []);

  useEffect(() => {
    if (isAuthenticated != null && !isAuthenticated) {
      const redirectPath = window.location.pathname;

      redirect(`/sign-in?redirect=${encodeURIComponent(redirectPath)}`);
    }
  }, [isAuthenticated]);

  return { isAuthenticated, isLoading };
}
