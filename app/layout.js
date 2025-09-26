"use client"; // required for SessionProvider

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <SessionProvider session={session}>
          {/* ✅ Navbar is now a separate component */}
          <Navbar />

          {/* Main content */}
          <main style={{ padding: "20px" }}>{children}</main>

          {/* Footer */}
          <footer style={{ padding: "10px 20px", background: "#f0f0f0", textAlign: "center" }}>
            &copy; {new Date().getFullYear()} NYT Clone
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
