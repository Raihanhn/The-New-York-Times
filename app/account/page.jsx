"use client";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session } = useSession();

  if (!session) return <p>Please log in.</p>;

  const handleSubscribe = async () => {
    const res = await fetch("/api/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: session.user.email }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <p>Email: {session.user.email}</p>
      <p>Status: {session.user.subscriptionActive ? "Premium" : "Free"}</p>

      {!session.user.subscriptionActive && (
        <button
          onClick={handleSubscribe}
          className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
        >
          Subscribe Now
        </button>
      )}
    </div>
  );
}
