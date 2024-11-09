"use client";

import { useAuth } from "@/utils/use-auth";

export default function Protected() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return "Loading...";
  }

  return (
    <main>
      <h1>🔒 Protected page</h1>
      {isAuthenticated ? "authed" : "not authed"}
      <p>This page is password protected!</p>
    </main>
  );
}
