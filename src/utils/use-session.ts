import { useEffect, useState } from "react";
import { SessionData } from "./auth";

export function useSession() {
  const [session, setSession] = useState<SessionData | null>(null);
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

  return { session, isLoading };
}
