"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import useUserStore from "../../stores/useUserStore";

export default function AccountPage() {
  const { data: session } = useSession();
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
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
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed! Check console.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Checkout failed!");
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-32 ">
        <p className="text-center text-lg text-gray-700 bg-gray-100 px-6 py-4 rounded-lg shadow-md">
          Please log in to view your account.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Account Information
        </h2>
        <div className="flex flex-col items-center gap-4">
          <img
            src={user?.image}
            alt={user?.name}
            className="w-20 h-20 rounded-full shadow-md" 
          />
          <div className="text-center">
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {user?.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Subscription:</span>{" "}
              {user?.subscriptionStatus}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          {user?.subscriptionStatus !== "active" && (
            <button
              onClick={handleSubscribe}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
            >
              Subscribe Now
            </button>
          )}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
