import crypto from "crypto";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export const config = {
  api: {
    bodyParser: false, // important for raw body verification
  },
};

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const rawBody = await buffer(req);
  const signature = req.headers["x-signature"];
  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;

  // Verify the webhook signature
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(rawBody);
  const digest = hmac.digest("hex");

  if (digest !== signature) {
    console.error("Invalid Lemon Squeezy signature");
    return res.status(400).json({ error: "Invalid signature" });
  }

  // Parse the verified body
  let event;
  try {
    event = JSON.parse(rawBody.toString());
  } catch (error) {
    console.error("Webhook JSON parse error:", error);
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const eventType = event.meta?.event_name;
  console.log("🔔 Lemon Squeezy event:", eventType);

  try {
    await dbConnect();

    const customerEmail = event.data?.attributes?.user_email;
    const subscriptionStatus = event.data?.attributes?.status || "inactive";

    if (!customerEmail) {
      console.warn("No email found in event data");
      return res.status(400).json({ error: "Missing user email" });
    }

    // Update the user’s subscription in MongoDB
    const updatedUser = await User.findOneAndUpdate(
      { email: customerEmail },
      { subscriptionStatus },
      { new: true }
    );

    if (!updatedUser) {
      console.warn("User not found:", customerEmail);
      return res.status(404).json({ error: "User not found" });
    }

    console.log("✅ Subscription updated:", updatedUser.email, subscriptionStatus);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
