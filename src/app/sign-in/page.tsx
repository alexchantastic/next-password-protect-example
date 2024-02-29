import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();

  if (session) {
    redirect("/");
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == "production" ? "__Host-" : ""
  }next-auth.csrf-token`;
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split("|")[0];

  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
