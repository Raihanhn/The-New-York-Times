import { dbConnect } from "@/lib/dbConnect";
import Article from "@/models/Article";

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === "PUT") {
    const { title, content, premium } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    const updated = await Article.findByIdAndUpdate(
      id,
      { title, content, premium, slug },
      { new: true }
    );

    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await Article.findByIdAndDelete(id);
    return res.status(200).json({ message: "Article deleted" });
  }

  res.status(405).json({ message: "Method not allowed" });
}
