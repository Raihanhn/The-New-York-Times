// components/TopicsSection.jsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const topicsData = [
  { name: "Sports", image: "/images/sports.jpg", path: "/sports" },
  { name: "Politics", image: "/images/politics.jpg", path: "/politics" },
  { name: "Technology", image: "/images/technology.jpg", path: "/technology" },
  { name: "Health", image: "/images/health.jpg", path: "/health" },
  { name: "Business", image: "/images/business.jpg", path: "/business" },
  {
    name: "Entertainment",
    image: "/images/entertainment.jpg",
    path: "/entertainment",
  },
  { name: "Travel", image: "/images/travel.jpg", path: "/travel" },
  { name: "Science", image: "/images/science.jpg", path: "/science" },
];

// Utility function to shuffle array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const TopicsSection = () => {
  const [topics, setTopics] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(null); // ✅ added
  const router = useRouter();

  useEffect(() => {
    setTopics(shuffleArray(topicsData));
  }, []);

  const handleClick = (path, index) => {
    setLoadingIndex(index); // ✅ show loader
    router.push(path);
  };

  return (
    <div className="my-8 px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <div
            key={topic.name}
            onClick={() => handleClick(topic.path, index)}
            className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <Image
              src={topic.image}
              alt={topic.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />

            {/* ✅ Loader overlay (only visible for clicked div) */}
            {loadingIndex === index && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                {topic.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsSection;
