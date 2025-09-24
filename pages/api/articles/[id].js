import  dbConnect  from "@/lib/dbConnect";
import Article from "@/models/Article";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const { title, content, premium } = req.body;
      const slug = title.toLowerCase().replace(/ /g, "-");
      const article = await Article.findByIdAndUpdate(
        id,
        { title, content, premium, slug },
        { new: true }
      );
      return res.status(200).json(article);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      await Article.findByIdAndDelete(id);
      return res.status(200).json({ message: "Article deleted" });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
