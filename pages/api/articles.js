import { dbConnect } from "@/lib/dbConnect";
import Article from "@/models/Article";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { title, content, premium } = req.body;
    const slug = title.toLowerCase().replace(/ /g, "-");
    const article = await Article.create({ title, content, premium, slug });
    return res.status(201).json(article);
  }

  if (req.method === "GET") {
    const articles = await Article.find().sort({ createdAt: -1 });
    return res.status(200).json(articles);
  }

  res.status(405).end();
}
