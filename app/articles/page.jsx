import dbConnect from "../../lib/dbConnect";
import Article from "../../models/Article";
import ArticleCard from "../../components/ArticleCard";

// helper to shuffle an array
function shuffleArray(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default async function ArticlesPage() {
  await dbConnect();

  // Fetch all articles
  const articles = await Article.find({})
    .sort({ createdAt: -1 })
    .lean();

  // Convert Mongoose objects to plain objects
  const plainArticles = articles.map((a) => ({
    ...a,
    _id: a._id.toString(),
    createdAt: a.createdAt?.toISOString?.() || null,
  }));

  // Shuffle layouts for first 10
  const layoutsOrder = shuffleArray([...Array(10).keys()]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">All Articles</h2>

      {plainArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plainArticles.map((article, i) => (
            <ArticleCard
              key={article._id}
              article={article}
              layoutIndex={layoutsOrder[i % 10]}
            />
          ))}
        </div>
      ) : (
        <p>No articles yet. Admin can add some!</p>
      )}
    </div>
  );
}
