import  dbConnect  from "@/lib/dbConnect";
import Article from "@/models/Article";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const articles = await Article.find().sort({ createdAt: -1 });
    return res.status(200).json(articles);
  }

  if (req.method === "POST") {
    try {
      const { title, content,  isPremium } = req.body;
      const slug = title.toLowerCase().replace(/ /g, "-");
      const article = await Article.create({ title, content,  isPremium, slug });
      return res.status(201).json(article);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
