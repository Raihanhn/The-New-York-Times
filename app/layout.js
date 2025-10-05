"use client"; // required for SessionProvider

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import '../styles/globals.css'
import Footer from "@/components/Footer";

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
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
