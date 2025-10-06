import dbConnect from "../../lib/dbConnect";
import Article from "../../models/Article";
import ArticleCard from "../../components/ArticleCard";

export default async function ArticlesPage() {
  // Connect to MongoDB
  await dbConnect();

  // Fetch all articles sorted by newest first
  const articles = await Article.find({})
    .sort({ createdAt: -1 })
    .lean();

  // Convert Mongoose objects to plain JS objects
  const plainArticles = articles.map((a) => ({
    ...a,
    _id: a._id.toString(),
    createdAt: a.createdAt?.toISOString?.() || null,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">All Articles</h2>

      {plainArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plainArticles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      ) : (
        <p>No articles yet. Admin can add some!</p>
      )}
    </div>
  );
}
