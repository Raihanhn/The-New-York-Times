import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  author: String,
  isPremium: { type: Boolean, default: false },
  image: String, // ✅ new field
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema);
