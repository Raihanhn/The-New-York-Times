import { buffer } from "micro";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export const config = {
  api: {
    bodyParser: false, // Lemon Squeezy requires the raw body
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  try {
    const rawBody = (await buffer(req)).toString();
    const event = JSON.parse(rawBody);

    const eventName = event.meta?.event_name;
    const email = event.data?.attributes?.user_email;

    console.log("🔔 Lemon Squeezy event:", eventName);
    console.log("📧 Email:", email);

    if (!email) {
      console.log("⚠️ No email found in webhook payload");
      return res.status(400).json({ error: "Missing email in payload" });
    }

    await dbConnect();

    // ✅ Try to find user by email
    let user = await User.findOne({ email });

    // ✅ If no user found, create a new one (for first-time buyers)
    if (!user) {
      console.log("🆕 Creating new user from Lemon Squeezy purchase:", email);
      user = new User({
        name: email.split("@")[0],
        email,
        subscriptionStatus: "active",
      });
      await user.save();
      return res.status(200).json({ success: true, created: true });
    }

    // ✅ Handle subscription activation
    if (["subscription_created", "order_created", "subscription_updated"].includes(eventName)) {
      user.subscriptionStatus = "active";
      await user.save();
      console.log("✅ Subscription activated for:", email);
    }

    // ❌ Handle cancellations or expirations
    if (["subscription_cancelled", "subscription_expired"].includes(eventName)) {
      user.subscriptionStatus = "free";
      await user.save();
      console.log("❌ Subscription cancelled for:", email);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("🚨 Webhook error:", err);
    return res.status(400).send("Webhook error");
  }
}
