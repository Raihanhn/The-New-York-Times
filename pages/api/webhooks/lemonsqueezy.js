import { buffer } from "micro";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export const config = {
  api: {
    bodyParser: false, // Raw body required for webhook
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  try {
    const rawBody = (await buffer(req)).toString();
    const event = JSON.parse(rawBody);

    console.log("Webhook received:", event.meta?.event_name);

    // Connect to MongoDB
    await dbConnect();

    // Handle subscription creation
    if (event.meta?.event_name === "subscription_created") {
      const email = event.data.attributes.user_email;
      if (email) {
        const user = await User.findOne({ email });
        if (user) {
          user.subscribed = true;
          await user.save();
          console.log("✅ User subscription updated:", email);
        } else {
          console.log("⚠️ User not found:", email);
        }
      }
    }

    // Handle subscription cancellation if needed
    if (event.meta?.event_name === "subscription_cancelled") {
      const email = event.data.attributes.user_email;
      if (email) {
        const user = await User.findOne({ email });
        if (user) {
          user.subscribed = false;
          await user.save();
          console.log("❌ User subscription cancelled:", email);
        }
      }
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(400).send("Webhook error");
  }
}
