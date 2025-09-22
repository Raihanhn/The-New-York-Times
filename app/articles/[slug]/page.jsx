import { getServerSession } from "next-auth";
import { dbConnect } from "@/lib/dbConnect";
import Article from "@/models/Article";

export default async function ArticlePage({ params }) {
  await dbConnect();
  const article = await Article.findOne({ slug: params.slug }).lean();
  const session = await getServerSession();

  if (article.premium && (!session || !session.user.subscriptionActive)) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <p className="text-gray-500">This is a premium article.</p>
        <a href="/account" className="text-blue-600 underline">Subscribe to read more</a>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
