import { buffer } from "micro";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export const config = {
  api: {
    bodyParser: false, // Required for raw webhook body
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed"); 
  }

  try {
    const rawBody = (await buffer(req)).toString();
    const event = JSON.parse(rawBody);

    console.log("🧩 Webhook Event:", event.meta?.event_name);
    console.log("📦 Full Event Data:", JSON.stringify(event, null, 2));

    await dbConnect();

    const eventName = event.meta?.event_name;
    const email = event.data?.attributes?.user_email;

    if (!email) {
      console.log("⚠️ Missing user email in webhook payload");
      return res.status(400).json({ error: "Missing user email" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("⚠️ No user found for:", email);
      return res.status(404).json({ error: "User not found" });
    }

    // ✅ Handle subscription or order creation
    if (["subscription_created", "order_created"].includes(eventName)) {
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

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("🚨 Webhook error:", err);
    res.status(400).send("Webhook error");
  }
}
