"use client";

import { useSession } from "@/utils/use-session";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Protected() {
  const { session, isLoading } = useSession();

  useEffect(() => {
    if (session && !session.isAuthenticated) {
      redirect("/sign-in");
    }
  }, [isLoading, session]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <main>
      <h1>🔒 Protected page</h1>
      <p>This page is password protected!</p>
    </main>
  );
}
