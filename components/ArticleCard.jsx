import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "150px", height: "100px", objectFit: "cover", marginBottom: "10px" }}
        />
      )}
      <h3>{article.title}</h3>
      <p>{article.content.slice(0, 100)}...</p>
      <Link href={`/articles/${article._id}`}>Read More</Link>
    </div>
  );
}
