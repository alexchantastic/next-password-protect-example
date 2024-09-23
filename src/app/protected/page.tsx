import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Protected() {
  const session = await getSession();

  if (!session.isAuthenticated) {
    redirect("/sign-in");
  }

  return (
    <main>
      <h1>🔒 Protected page</h1>
      <p>This page is password protected!</p>
    </main>
  );
}
