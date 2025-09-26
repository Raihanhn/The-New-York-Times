import dbConnect from "../../../lib/dbConnect";
import Article from "../../../models/Article";
import PaywallCTA from "../../../components/PaywallCTA";
import { isValidObjectId } from "mongoose";

// ✅ Pre-generate static params
export async function generateStaticParams() {
  await dbConnect();
  const articles = await Article.find({}).lean();
  return articles.map((article) => ({
    id: article._id.toString(),
  }));
}

export default async function ArticlePage({ params }) {
  // ✅ params is async → must await
  const { id } = await params;

  if (!isValidObjectId(id)) return <p>Invalid Article ID</p>;

  await dbConnect();
  const article = await Article.findById(id).lean();

  if (!article) return <p>Article not found</p>;

  // TODO: Replace this with real user subscription status from DB/session
  const user = { subscriptionStatus: "free" };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      {article.isPremium && user.subscriptionStatus !== "active" ? (
        <PaywallCTA />
      ) : (
        <p className="leading-relaxed text-lg">{article.content}</p>
      )}
    </div>
  );
}
