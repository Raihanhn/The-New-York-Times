import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import PaywallCTA from "../../../components/PaywallCTA";
import dbConnect from "../../../lib/dbConnect";
import Article from "../../../models/Article";
import { isValidObjectId } from "mongoose";

export default async function ArticlePage({ params }) {
  const { id } = await params;
  if (!isValidObjectId(id)) return <p>Invalid Article ID</p>;

  await dbConnect();
  const article = await Article.findById(id).lean();
  if (!article) return <p>Article not found</p>;

  // ✅ Fetch real user session
  const session = await getServerSession(authOptions);
  const subscriptionStatus = session?.user?.subscriptionStatus || "free";

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">

        {/* ✅ Article Image (centered) */}
      {article.image && (
        <div className="flex justify-center mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="rounded-lg max-h-[400px] w-auto object-cover shadow"
          />
        </div>
      )}


      <h2 className="text-3xl font-bold mb-4 text-center ">{article.title}</h2>

      {article.isPremium && subscriptionStatus !== "active" ? (
        <PaywallCTA />
      ) : (
        <p className="leading-relaxed text-lg">{article.content}</p>
      )}
    </div>
  );
}

// ✅ (Optional but recommended)
export async function generateStaticParams() {
  await dbConnect();
  const articles = await Article.find({}).lean();
  return articles.map((article) => ({
    id: article._id.toString(),
  }));
}
