// pages/api/articles.js
import dbConnect from "../../lib/dbConnect";
import Article from "../../models/Article";

export default async function handler(req, res) {
  await dbConnect();
  const articles = await Article.find({});
  res.status(200).json(articles);
}
