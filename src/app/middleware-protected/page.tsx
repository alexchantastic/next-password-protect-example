import Link from "next/link";

export default function Protected() {
  return (
    <main>
      <h1>🔒 Protected page</h1>
      <p>This page is password protected with middleware!</p>
      <ul>
        <li>
          <Link href="/middleware-protected/nested-middleware-protected">🔒 Nested page protected with middleware</Link>
        </li>
      </ul>
    </main>
  )
}