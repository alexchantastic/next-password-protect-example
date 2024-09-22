import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { auth } from "./actions";

export default async function SignIn({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getSession();

  if (session.isAuthenticated) {
    redirect("/");
  }

  return (
    <form method="post" action={auth}>
      <input
        name="redirect"
        type="hidden"
        defaultValue={searchParams.redirect}
      />
      <label>
        Password
        <input name="password" type="password" required autoFocus />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
