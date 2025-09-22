import Link from "next/link";

export default function PaywallCTA() {
  return (
    <div style={{ border: "2px dashed red", padding: "20px", margin: "20px 0", textAlign: "center" }}>
      <h3>Premium Article</h3>
      <p>You need an active subscription to read this article.</p>
      <Link href="/account">
        <button style={{ padding: "10px 20px", background: "red", color: "#fff", border: "none", cursor: "pointer" }}>
          Subscribe Now
        </button>
      </Link>
    </div>
  );
}
