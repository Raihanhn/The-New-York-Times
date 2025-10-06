import dbConnect from "../lib/dbConnect";
import Article from "../models/Article";
import ArticleCard from "../components/ArticleCard";
import StockTicker from "@/components/StockTicker";
import TopicsSection from "@/components/TopicsSection";

export default async function HomePage() {
  // Connect to MongoDB
  await dbConnect();

  // Fetch latest 30 articles
  const articles = await Article.find({})
    .sort({ createdAt: -1 })
    .limit(30)
    .lean();

  // Convert to plain objects
  const plainArticles = articles.map((a) => ({
    ...a,
    _id: a._id.toString(),
    createdAt: a.createdAt?.toISOString?.() || null,
  }));

  return (
    <div>
      <div className="my-[-20px]">
        <StockTicker />
      </div>
      <div className="mt-10">
        <TopicsSection />
      </div>

      {/* Articles Section */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Recent Articles</h3>
        {plainArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plainArticles.map((article) => (
              <ArticleCard
                key={article._id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <p>No articles yet. Admin can add some!</p>
        )}
      </section>
    </div>
  );
}
