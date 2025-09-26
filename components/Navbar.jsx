"use client";

import Link from "next/link";
import AuthButtons from "@/components/AuthButtons";

export default function Navbar() {
  return (
    <header style={{ padding: "10px 20px", background: "#1a1a1a", color: "#fff" }}>
      <h1>NYT Clone</h1>
      <nav>
        <Link href="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
        <Link href="/articles" style={{ marginRight: "15px", color: "#fff" }}>Articles</Link>
        <Link href="/account" style={{ marginRight: "15px", color: "#fff" }}>Account</Link>
        <Link href="/admin" style={{ marginRight: "15px", color: "#fff" }}>Admin</Link>
        <AuthButtons />
      </nav>
    </header>
  );
}
