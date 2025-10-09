import { buffer } from "micro";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Lemon Squeezy first sends a HEAD request to check if endpoint exists
  if (req.method === "HEAD") {
    return res.status(200).end("OK");
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const rawBody = (await buffer(req)).toString();
    const event = JSON.parse(rawBody);

    const eventName = event.meta?.event_name;
    const email = event.data?.attributes?.user_email;

    console.log("📦 Incoming Event:", eventName, "for", email);

    await dbConnect();

    if (!email) {
      console.log("⚠️ No email found in payload");
      return res.status(400).json({ error: "Missing email" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("⚠️ No user found:", email);
      return res.status(404).json({ error: "User not found" });
    }

    // ✅ Handle active subscriptions
    if (
      ["subscription_created", "subscription_updated", "order_created"].includes(eventName)
    ) {
      user.subscriptionStatus = "active";
      await user.save();
      console.log("✅ Subscription activated for:", email);
    }

    // ❌ Handle cancellations or expirations
    if (
      ["subscription_cancelled", "subscription_expired"].includes(eventName)
    ) {
      user.subscriptionStatus = "free";
      await user.save();
      console.log("❌ Subscription cancelled for:", email);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("🚨 Webhook Error:", err);
    res.status(400).send("Webhook Error");
  }
}
