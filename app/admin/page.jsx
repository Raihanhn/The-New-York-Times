"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [premium, setPremium] = useState(false);

  // Fetch all articles
  const fetchArticles = async () => {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Create article
  const handleCreate = async () => {
    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, premium }),
    });
    if (res.ok) {
      alert("Article created!");
      setTitle("");
      setContent("");
      setPremium(false);
      fetchArticles(); // Refresh list
    }
  };

  // Delete article
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
    if (res.ok) fetchArticles();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Create Article Form */}
      <div className="mb-6 p-4 border rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Create Article</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={premium}
            onChange={(e) => setPremium(e.target.checked)}
          />
          Premium Article
        </label>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Publish
        </button>
      </div>

      {/* Article List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">All Articles</h2>
        {articles.length === 0 && <p>No articles found.</p>}
        {articles.map((a) => (
          <div
            key={a._id}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{a.title}</h3>
              {a.premium && <span className="text-red-600 text-sm">Premium</span>}
            </div>
            <div className="flex gap-2">
              {/* Optional: implement edit later */}
              <button
                onClick={() => handleDelete(a._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
