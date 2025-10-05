import Link from "next/link";

// 10 layout designs
const layouts = [
  // Layout 0: Full image top
  ({ article }) => (
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
        <p className="text-sm text-gray-600">{article.content.slice(0, 100)}...</p>
        <Link href={`/articles/${article._id}`} className="text-blue-500 mt-2 block">
          Read More →
        </Link>
      </div>
    </div>
  ),

  // Layout 1: Side image, text right
  ({ article }) => (
    <div className="flex flex-col sm:flex-row border rounded-lg overflow-hidden shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full sm:w-1/2 h-48 object-cover"
        />
      )}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-bold">{article.title}</h3>
        <p className="text-sm text-gray-600">{article.content.slice(0, 120)}...</p>
        <Link href={`/articles/${article._id}`} className="text-blue-500 mt-2 block">
          Read More →
        </Link>
      </div>
    </div>
  ),

  // Layout 2: Text overlay on image
  ({ article }) => (
    <div className="relative border rounded-lg overflow-hidden shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover brightness-75"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 via-transparent">
        <h3 className="text-white text-lg font-bold">{article.title}</h3>
        <p className="text-gray-200 text-sm">{article.content.slice(0, 80)}...</p>
        <Link href={`/articles/${article._id}`} className="text-blue-300 mt-2 block">
          Read More →
        </Link>
      </div>
    </div>
  ),

  // Layout 3: Circular image
  ({ article }) => (
    <div className="border rounded-lg p-4 text-center shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
      )}
      <h3 className="text-lg font-bold">{article.title}</h3>
      <p className="text-sm text-gray-600">{article.content.slice(0, 80)}...</p>
      <Link href={`/articles/${article._id}`} className="text-blue-500 mt-2 block">
        Read More →
      </Link>
    </div>
  ),

  // Layout 4: Small inline image
  ({ article }) => (
    <div className="flex items-center gap-4 border rounded-lg p-3 shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-20 h-20 object-cover rounded"
        />
      )}
      <div>
        <h3 className="font-bold">{article.title}</h3>
        <p className="text-xs text-gray-500">{article.content.slice(0, 60)}...</p>
      </div>
    </div>
  ),

  // Layout 5: Overlay bottom
  ({ article }) => (
    <div className="relative border rounded-lg overflow-hidden shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="absolute bottom-0 w-full bg-black/60 text-white p-3">
        <h3 className="font-bold">{article.title}</h3>
      </div>
    </div>
  ),

  // Layout 6: Split top/bottom
  ({ article }) => (
    <div className="border rounded-lg shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{article.title}</h3>
        <Link href={`/articles/${article._id}`} className="text-blue-500 mt-2 block">
          Read More →
        </Link>
      </div>
    </div>
  ),

  // Layout 7: Tall image
  ({ article }) => (
    <div className="border rounded-lg shadow overflow-hidden">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{article.title}</h3>
      </div>
    </div>
  ),

  // Layout 8: Background color card
  ({ article }) => (
    <div className="border rounded-lg shadow bg-gray-100 p-4">
      <h3 className="text-lg font-bold mb-2">{article.title}</h3>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-40 object-cover mb-2"
        />
      )}
      <p className="text-sm text-gray-700">{article.content.slice(0, 70)}...</p>
    </div>
  ),

  // Layout 9: Large text focus
  ({ article }) => (
    <div className="border rounded-lg shadow p-6 text-center">
      <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
      <p className="text-gray-600 text-sm">{article.content.slice(0, 120)}...</p>
    </div>
  ),
];

export default function ArticleCard({ article, layoutIndex }) {
  const Layout = layouts[layoutIndex];
  return <Layout article={article} />;
}
