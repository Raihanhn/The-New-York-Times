import { dbConnect } from "@/lib/dbConnect";
import Article from "@/models/Article";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const articles = await Article.find().sort({ createdAt: -1 });
    return res.status(200).json(articles);
  }

  if (req.method === "POST") {
    const { title, content, premium } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    const article = await Article.create({ title, content, premium, slug });
    return res.status(201).json(article);
  }

  res.status(405).json({ message: "Method not allowed" });
}
