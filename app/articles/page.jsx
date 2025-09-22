import Link from "next/link";

async function getArticles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`, { cache: "no-store" });
  return res.json();
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Articles</h1>
      <div className="space-y-4">
        {articles.map((a) => (
          <Link key={a._id} href={`/articles/${a.slug}`} className="block border-b pb-2">
            <h2 className="text-xl font-semibold">{a.title}</h2>
            {a.premium && <span className="text-sm text-red-600">Premium</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
