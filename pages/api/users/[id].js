import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const { isAdmin } = req.body;
      const user = await User.findByIdAndUpdate(
        id,
        { isAdmin },
        { new: true, runValidators: true } // ✅ return updated doc
      );

      if (!user) return res.status(404).json({ error: "User not found" });
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update user" });
    }
  }

  if (req.method === "GET") {
    const user = await User.findById(id);
    return res.status(200).json(user);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
