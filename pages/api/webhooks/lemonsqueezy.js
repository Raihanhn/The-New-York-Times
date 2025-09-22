import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  const event = req.body;

  if (event.meta.event_name === "order_created") {
    await dbConnect();
    const email = event.data.attributes.user_email;
    await User.findOneAndUpdate({ email }, { subscriptionActive: true, subscriptionTier: "premium" });
  }

  res.status(200).json({ received: true });
}
