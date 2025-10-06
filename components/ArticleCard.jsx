import Link from "next/link";

// Single Layout: Full image top
export default function ArticleCard({ article }) {
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{article.title}</h3>
        <p className="text-sm text-gray-600">
          {article.content.slice(0, 100)}...
        </p>
        <Link
          href={`/articles/${article._id}`}
          className="text-blue-500 mt-2 block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
