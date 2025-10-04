"use client";
import Image from "next/image";

export default function HealthPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Story */}
      <section className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[300px] lg:h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/images/health-hero.jpg"
            alt="Hero Health Story"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Breakthrough in Cancer Research Offers New Hope
          </h1>
          <p className="text-gray-700 mb-6">
            Scientists announce promising results in early trials that could reshape cancer treatment in the coming decade.
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline"
          >
            Read full story →
          </a>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid lg:grid-cols-3 gap-12">
        {/* Left - Latest News */}
        <div className="lg:col-span-2 space-y-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex gap-4">
              <div className="relative w-40 h-28 rounded-lg overflow-hidden">
                <Image
                  src={`/images/health${item}.jpg`}
                  alt="Health News"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold hover:underline">
                  Health Story Title {item}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Short excerpt about the story. Covers medical, nutrition, or lifestyle updates.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Sidebar */}
        <aside className="space-y-6">
          <h2 className="text-xl font-bold border-b pb-2">Most Read</h2>
          <ul className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline text-gray-700">
                  Popular health article headline {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Category Sections */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Nutrition</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-40">
                <Image
                  src={`/images/nutrition${item}.jpg`}
                  alt="Nutrition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold hover:underline">
                  Nutrition Headline {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-20 bg-green-50 py-10 text-center rounded-xl">
        <h2 className="text-2xl font-bold text-green-800">
          Stay Updated on Health News
        </h2>
        <p className="mt-2 text-gray-700">
          Get the latest health insights delivered straight to your inbox.
        </p>
        <form className="mt-6 flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 w-64"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
