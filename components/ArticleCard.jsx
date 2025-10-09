"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ArticleCard({ article }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // ✅ Added

  const handleReadMore = () => {
    setIsLoading(true); // show loader
    router.push(`/articles/${article._id}`);
  };

  return (
    <div className="relative w-full border rounded-lg overflow-hidden shadow hover:scale-[1.01] transition-transform">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover"
        />
      )}

      {/* ✅ Loader overlay (only on clicked card) */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold">{article.title}</h3>
        <p className="text-sm text-gray-600">
          {article.content.slice(0, 100)}...
        </p>

        {/* ✅ Changed from Link → button for loader control */}
        <button
          onClick={handleReadMore}
          className="text-blue-500 mt-2 block hover:underline cursor-pointer "
        >
          Read More →
        </button>
      </div>
    </div>
  );
}
