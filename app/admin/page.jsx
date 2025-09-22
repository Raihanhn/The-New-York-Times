"use client";
import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [premium, setPremium] = useState(false);

  const handleCreate = async () => {
    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, premium }),
    });
    if (res.ok) alert("Article created!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Article</h1>
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
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={premium}
          onChange={(e) => setPremium(e.target.checked)}
        />
        Premium Article
      </label>
      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Publish
      </button>
    </div>
  );
}
