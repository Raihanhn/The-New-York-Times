import { getServerSession } from "next-auth";
import { dbConnect } from "@/lib/dbConnect";
import Article from "@/models/Article";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function ArticlePage({ params }) {
  await dbConnect();
  const article = await Article.findOne({ slug: params.slug }).lean();
  const session = await getServerSession(authOptions);

  const handleSubscribe = async () => {
    const res = await fetch("/api/create-checkout", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: session?.user?.email }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  // If article is premium and user is not subscribed
  if (article.premium && (!session || !session.user.subscriptionActive)) {
    return (
      <div className="p-6 max-w-3xl mx-auto border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        {/* Teaser content */}
        <p className="text-gray-500 mb-4">
          {article.content.slice(0, 150)}...
        </p>
        {/* Subscribe button */}
        <button
          onClick={handleSubscribe}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Subscribe to read full article
        </button>
      </div>
    );
  }

  // Free article or subscribed user
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-800">{article.content}</p>
    </div>
  );
}
