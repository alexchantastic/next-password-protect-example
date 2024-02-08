import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js Password Protect with NextAuth.js</h1>
      <ul>
        <li>
          <Link href="/protected">🔒 Protected</Link>
        </li>
        <li>
          <Link href="/middleware-protected">🔒 Protected with middleware</Link>
        </li>
        <li>
          <Link href="/unprotected">🌎 Unprotected</Link>
        </li>
      </ul>
    </main>
  );
}
