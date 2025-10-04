"use client";
import Image from "next/image";

export default function TechnologyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Technology News
      </h1>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white rounded-xl overflow-hidden mb-12">
        <div className="relative h-[400px]">
          <Image
            src="/images/tech-hero.jpg"
            alt="Tech Hero"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-3xl font-bold mb-3">
              AI Breakthrough: Machines Now Write Better Code Than Humans
            </h2>
            <p className="max-w-2xl text-gray-200 mb-4">
              Researchers at a leading lab announce a generative AI system capable of producing bug-free applications at scale.
            </p>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
              Read More →
            </a>
          </div>
        </div>
      </section>

      {/* Tech Grid Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <article
            key={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col"
          >
            <div className="relative h-44 rounded-lg overflow-hidden mb-4">
              <Image
                src={`/images/tech${item}.jpg`}
                alt={`Tech news ${item}`}
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 hover:underline">
              Tech Innovation Headline {item}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
              Short description of the article — covers gadgets, AI, space tech, or futuristic inventions.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Read More →
            </a>
          </article>
        ))}
      </section>

      {/* Featured Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-72 rounded-xl overflow-hidden">
            <Image
              src="/images/tech-feature1.jpg"
              alt="Quantum Computing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">
                Quantum Computing Set to Revolutionize Data Security
              </h3>
            </div>
          </div>
          <div className="relative h-72 rounded-xl overflow-hidden">
            <Image
              src="/images/tech-feature2.jpg"
              alt="Space Tech" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">
                Private Companies Race to Build Next-Gen Space Stations
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-20 bg-blue-50 dark:bg-gray-900 py-12 text-center rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Stay Ahead with Tech Insights
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Get the latest technology stories and innovations delivered straight to your inbox.
        </p>
        <form className="mt-6 flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 w-64"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
