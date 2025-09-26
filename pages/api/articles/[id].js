import dbConnect from "@/lib/dbConnect";
import Article from "@/models/Article";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "PUT") {
    upload.single("image")(req, res, async function (err) {
      if (err) return res.status(400).json({ error: err.message });

      const { title, content, isPremium } = req.body;
      const slug = title.toLowerCase().replace(/ /g, "-");
      const updateData = { title, content, isPremium, slug };

      if (req.file) updateData.image = `/uploads/${req.file.filename}`;

      try {
        const article = await Article.findByIdAndUpdate(id, updateData, { new: true });
        return res.status(200).json(article);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    });
    return;
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
