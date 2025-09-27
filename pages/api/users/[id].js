import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query; // email from session.user.email
  const query = { email: id };

  if (req.method === "GET") {
    try {
      const user = await User.findOne(query).select("-__v");
      if (!user) return res.status(404).json({ error: "User not found" });
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  if (req.method === "PUT") {
  try {
    const { subscriptionStatus, isAdmin } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      query,
      {
        ...(subscriptionStatus && { subscriptionStatus }),
        ...(isAdmin !== undefined && { isAdmin }),
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to update user" });
  }
}


  return res.status(405).json({ error: "Method not allowed" });
}
