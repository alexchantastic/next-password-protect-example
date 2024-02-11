import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js Password Protect with NextAuth.js</h1>
      <ul>
        <li>
          <Link href="/protected">🔒 Protected page</Link>
        </li>
        <li>
          <Link href="/middleware-protected">🔒 Protected page with middleware</Link>
          <ul>
            <li>
              <Link href="/middleware-protected/nested-middleware-protected">🔒 Protected nested page with middleware</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/client-protected">
            🔒 Protected page (client-component)
          </Link>
        </li>
        <li>
          <Link href="/unprotected">🌎 Unprotected page</Link>
        </li>
      </ul>
    </main>
  );
}
