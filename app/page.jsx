import dbConnect from "../lib/dbConnect";
import Article from "../models/Article";
import ArticleCard from "../components/ArticleCard";
import StockTicker from "@/components/StockTicker";
import TopicsSection from "@/components/TopicsSection";

// helper to shuffle an array
function shuffleArray(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


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

  // Shuffle layouts (10 layouts)
  const layoutsOrder = shuffleArray([...Array(10).keys()]); // [0..9] shuffled


  return (
    <div>
       <div className=" my-[-20px] ">
        <StockTicker />
      </div>
       <div className="mt-10">
        <TopicsSection/> 
       </div>

     

      {/* Articles Section */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Recent Articles</h3>
         {plainArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plainArticles.map((article, i) => (
              <ArticleCard
                key={article._id}
                article={article}
                layoutIndex={layoutsOrder[i % 10]} // pick layout based on shuffled order
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
