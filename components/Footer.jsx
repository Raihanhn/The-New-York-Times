"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">The New York Times</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bringing you the latest news, articles, and insights with a clean
            and modern experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <nav className="flex flex-col gap-2 text-gray-300 text-sm">
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-gray-400">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-gray-400">
              <Twitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-gray-400">
              <Instagram size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-gray-400">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NYT Clone. All rights reserved.
      </div>
    </footer>
  );
}
