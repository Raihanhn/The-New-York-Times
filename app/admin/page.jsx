"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [premium, setPremium] = useState(false);
  const [image, setImage] = useState(null); // ✅ new state
  const [editId, setEditId] = useState(null);

  const fetchArticles = async () => {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSubmit = async () => {
    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/articles/${editId}` : "/api/articles";

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("isPremium", premium);
    if (image) formData.append("image", image);

    const res = await fetch(url, { method, body: formData });

    if (res.ok) {
      alert(editId ? "Article updated!" : "Article created!");
      setTitle("");
      setContent("");
      setPremium(false);
      setImage(null);
      setEditId(null);
      fetchArticles();
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
    if (res.ok) fetchArticles();
  };

  const handleEdit = (article) => {
    setTitle(article.title);
    setContent(article.content);
    setPremium(article.isPremium);
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
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId ? "Update Article" : "Publish Article"}
        </button>
      </div>
      {/* Article List */}
      <h2 className="text-2xl font-semibold mb-4">All Articles</h2>
      <div className="space-y-4">
        {articles.map((a) => (
          <div key={a._id} className="border p-4 rounded flex gap-4">
            {a.image && (
              <img src={a.image} alt={a.title} className="w-24 h-24 object-cover" />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-bold">{a.title}</h3>
              <p className="text-gray-600 line-clamp-2">{a.content}</p>
              <p className="text-sm">{a.isPremium ? "🔒 Premium" : "✅ Free"}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
