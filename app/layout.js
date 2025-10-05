"use client"; // required for SessionProvider

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className="m-0 font-sans">
        <SessionProvider session={session}>
          {/* Full-page flex container */}
          <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main content takes remaining space */}
            <main className="flex-grow p-5">{children}</main>

            {/* Footer sticks to bottom */}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
