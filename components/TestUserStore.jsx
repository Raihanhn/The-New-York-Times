// components/TestUserStore.jsx
"use client";
import useUserStore from "../stores/useUserStore";

export default function TestUserStore() {
  const { user, setUser, clearUser } = useUserStore();

  return (
    <div>
      <p>User: {user ? user.name : "Not logged in"}</p>
      <button onClick={() => setUser({ name: "Alfen" })}>Login</button>
      <button onClick={clearUser}>Logout</button>
    </div>
  );
}
