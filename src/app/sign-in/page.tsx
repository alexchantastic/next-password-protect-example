import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();

  if (session) {
    const callbackUrl = cookieStore.get('next-auth.callback-url')?.value.split('|')[0];
    redirect(callbackUrl ? callbackUrl : '/');
  }

  const csrfToken = cookieStore.get('next-auth.csrf-token')?.value.split('|')[0];

  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}