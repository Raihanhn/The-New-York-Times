"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [premium, setPremium] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all articles
  const fetchArticles = async () => {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Create or Update Article
  const handleSubmit = async () => {
    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/articles/${editId}` : "/api/articles";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, premium }),
    });

    if (res.ok) {
      alert(editId ? "Article updated!" : "Article created!");
      setTitle("");
      setContent("");
      setPremium(false);
      setEditId(null);
      fetchArticles();
    }
  };

  // Delete Article
  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("Article deleted!");
      fetchArticles();
    }
  };

  // Load article into form for editing
  const handleEdit = (article) => {
    setTitle(article.title);
    setContent(article.content);
    setPremium(article.premium);
    setEditId(article._id);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Form */}
      <div className="mb-6">
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
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId ? "Update Article" : "Publish Article"}
        </button>
        {editId && (
          <button
            onClick={() => {
              setEditId(null);
              setTitle("");
              setContent("");
              setPremium(false);
            }}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Article List */}
      <h2 className="text-2xl font-semibold mb-4">All Articles</h2>
      <div className="space-y-4">
        {articles.map((a) => (
          <div key={a._id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{a.title}</h3>
            <p className="text-gray-600 line-clamp-2">{a.content}</p>
            <p className="text-sm">
              {a.premium ? "🔒 Premium" : "✅ Free"}
            </p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(a)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(a._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
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
