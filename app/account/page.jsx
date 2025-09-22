"use client";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session } = useSession(); 

  if (!session) return <p className="p-6">Please log in to view your account.</p>;

  const handleSubscribe = async () => {
    const res = await fetch("/api/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: session.user.email }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  const handleCancel = async () => {
    alert("Cancel subscription logic goes here"); 
    // Optional: integrate with LemonSqueezy API to cancel subscription
  };

  return (
    <div className="p-6 max-w-2xl mx-auto border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Account</h1>

      <div className="mb-4">
        <p className="mb-2"><strong>Email:</strong> {session.user.email}</p>
        <p>
          <strong>Subscription Status:</strong>{" "}
          <span className={session.user.subscriptionActive ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
            {session.user.subscriptionActive ? session.user.subscriptionTier : "Free"}
          </span>
        </p>
      </div>

      {!session.user.subscriptionActive && (
        <button
          onClick={handleSubscribe}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mr-2"
        >
          Subscribe Now
        </button>
      )}

      {session.user.subscriptionActive && (
        <button
          onClick={handleCancel}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Cancel Subscription
        </button>
      )}
    </div>
  );
}
