import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  premium: { type: Boolean, default: false }, // free vs paid
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema);
