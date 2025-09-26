import dbConnect from "@/lib/dbConnect";
import Article from "@/models/Article";
import multer from "multer";
import path from "path";

// Multer config
const storage = multer.diskStorage({
  destination: "./public/uploads", // ✅ make sure this folder exists
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // ✅ disable default body parser
  },
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const articles = await Article.find().sort({ createdAt: -1 });
    return res.status(200).json(articles);
  }

  if (req.method === "POST") {
    upload.single("image")(req, res, async function (err) {
      if (err) return res.status(400).json({ error: err.message });

      const { title, content, isPremium } = req.body;
      const slug = title.toLowerCase().replace(/ /g, "-");
      const image = req.file ? `/uploads/${req.file.filename}` : null;

      try {
        const article = await Article.create({ title, content, isPremium, slug, image });
        return res.status(201).json(article);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    });
    return;
  }

  return res.status(405).json({ error: "Method not allowed" });
}
