"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import useUserStore from "../../stores/useUserStore";

export default function AccountPage() {
  const { data: session } = useSession();
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  // Fetch user from backend when session exists
  useEffect(() => {
    const fetchUser = async () => {
      if (session?.user?.email) {
        try {
          const res = await fetch(`/api/users/${session.user.email}`);
          const dbUser = await res.json();
          setUser(dbUser);
        } catch (err) {
          console.error("Failed to fetch user:", err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false); // ✅ stop loading after fetch
    };

    fetchUser();
  }, [session, setUser]);

  async function handleSubscribe() {
    if (!session?.user?.email) {
      alert("Email not found");
      return;
    }

    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email }),
      });

      const data = await res.json();
      console.log("🔥 Checkout Response:", data);

      if (data?.url) {
        window.location.href = data.url; // Redirect to LemonSqueezy checkout
      } else {
        console.error("Checkout failed:", data);
        alert("Checkout failed! Check console for details.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Checkout failed!");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>Please log in to view your account.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2>Account Info</h2>
      <img
        src={user?.image}
        alt={user?.name}
        style={{ width: "80px", borderRadius: "50%" }}
      />
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Subscription:</strong> {user?.subscriptionStatus}</p>

      {user?.subscriptionStatus !== "active" && (
        <button
          style={{
            padding: "10px 20px",
            background: "#1a1a1a",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "15px",
          }}
          onClick={handleSubscribe}
        >
          Subscribe Now
        </button>
      )}

      <button
        style={{
          padding: "10px 20px",
          background: "#e63946",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginTop: "15px",
        }}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Logout
      </button>
    </div>
  );
}
