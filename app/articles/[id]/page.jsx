import dbConnect from "../../../lib/dbConnect";
import Article from "../../../models/Article";
import PaywallCTA from "../../../components/PaywallCTA";
import { isValidObjectId } from "mongoose";

// Optional: pre-generate static params
export async function generateStaticParams() {
  await dbConnect();
  const articles = await Article.find({}).lean();
  return articles.map((article) => ({
    id: article._id.toString(),
  }));
}

// ✅ Next 15 App Router: await route params properly
export default async function ArticlePage(props) {
  const params = await props.params; // ⚠️ await params here
  const id = params.id;

  if (!isValidObjectId(id)) return <p>Invalid Article ID</p>;

  await dbConnect();
  const article = await Article.findById(id).lean();

  if (!article) return <p>Article not found</p>;

  const user = { subscriptionStatus: "free" };

  return (
    <div>
      <h2>{article.title}</h2>
      {article.isPremium && user.subscriptionStatus !== "active" ? (
        <PaywallCTA />
      ) : (
        <p>{article.content}</p>
      )}
    </div>
  );
}
