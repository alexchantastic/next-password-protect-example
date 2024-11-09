import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { auth } from "./actions";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SignIn(props: Props) {
  const searchParams = await props.searchParams;
  const session = await getSession();

  if (session.isAuthenticated) {
    redirect("/");
  }

  return (
    <form action={auth}>
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
