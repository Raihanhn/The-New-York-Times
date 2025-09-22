"use client"; // required for SessionProvider

import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import AuthButtons from "@/components/AuthButtons";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* Wrap everything inside SessionProvider */}
        <SessionProvider session={session}>
          {/* Header */}
          <header style={{ padding: "10px 20px", background: "#1a1a1a", color: "#fff" }}>
            <h1>NYT Clone</h1>
            <nav>
              <Link href="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
              <Link href="/articles" style={{ marginRight: "15px", color: "#fff" }}>Articles</Link>
              <Link href="/account" style={{ marginRight: "15px", color: "#fff" }}>Account</Link>
              <Link href="/admin" style={{ color: "#fff" }}>Admin</Link>
              <AuthButtons/>
            </nav>
          </header>

          {/* Main content */}
          <main style={{ padding: "20px" }}>
            {children}
          </main>

          {/* Footer */}
          <footer style={{ padding: "10px 20px", background: "#f0f0f0", textAlign: "center" }}>
            &copy; {new Date().getFullYear()} NYT Clone
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
