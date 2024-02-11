"use client";

import { useSession } from "next-auth/react";

export default function Protected() {
  const { status } = useSession({ required: true });

  if (status == "loading") {
    return "Loading...";
  }

  return (
    <main>
      <h1>🔒 Protected page</h1>
      <p>This page is password protected!</p>
    </main>
  );
}
