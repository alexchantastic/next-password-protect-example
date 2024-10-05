"use client";

import { useSession } from "@/utils/use-session";

export default function Protected() {
  const { isLoading } = useSession();

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
