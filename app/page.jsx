import dbConnect from "../lib/dbConnect";
import Article from "../models/Article";
import ArticleCard from "../components/ArticleCard";

export default async function HomePage() {
  // Connect to MongoDB
  await dbConnect();

  // Fetch latest 5 articles
  const articles = await Article.find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  return (
    <div>
      <h2>Welcome to NYT Clone</h2>
      <p>Your go-to place for articles and subscriptions!</p>

      <h3>Recent Articles:</h3>
      {articles.length > 0 ? (
        <div>
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      ) : (
        <p>No articles yet. Admin can add some!</p>
      )}
    </div>
  );
}
