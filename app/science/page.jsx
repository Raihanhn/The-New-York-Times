"use client";

import Image from "next/image";

export default function SciencePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl text-center text-cyan-300 font-bold mb-8 border-b pb-3">
        Science & Discoveries
      </h1>

      {/* Hero Section - Featured Story */}
      <section className="grid md:grid-cols-2 gap-6 mb-12 items-center">
        <div>
          <Image
            src="/images/science-space.jpg"
            alt="Space Discovery"
            width={600}
            height={400}
            className="w-full h-72 md:h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            NASA Discovers Earth-Like Exoplanet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Astronomers have identified a planet strikingly similar to Earth,
            orbiting in the habitable zone of a nearby star. The discovery has
            reignited hopes of finding extraterrestrial life.
          </p>
          <p className="text-sm text-gray-500">Published: Oct 2025</p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="grid lg:grid-cols-3 gap-10">
        {/* Articles Column */}
        <div className="lg:col-span-2 space-y-10">
          {/* Article 1 */}
          <article className="grid md:grid-cols-2 gap-6 items-center">
            <Image
              src="/images/science-medicine.jpg"
              alt="Medical Research"
              width={500}
              height={300}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Breakthrough in Cancer Treatment
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Scientists have developed a new therapy that trains the immune
                system to target cancer cells more effectively, showing promise
                in early trials.
              </p>
            </div>
          </article>

          {/* Article 2 */}
          <article className="grid md:grid-cols-2 gap-6 items-center md:flex-row-reverse">
            <Image
              src="/images/science-ocean.jpg"
              alt="Ocean Discovery"
              width={500}
              height={300}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Deep Sea Expedition Reveals New Species
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Marine biologists uncovered several new deep-sea species during
                an expedition to the Pacific Ocean’s unexplored trenches.
              </p>
            </div>
          </article>

          {/* Article 3 */}
          <article className="grid md:grid-cols-2 gap-6 items-center">
            <Image
              src="/images/science-ai.jpg"
              alt="AI Research"
              width={500} 
              height={300}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Artificial Intelligence Predicts Protein Structures
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A new AI model is revolutionizing biology by accurately
                predicting the structure of proteins, paving the way for faster
                drug discovery.
              </p>
            </div>
          </article>
        </div>

        {/* Sidebar Column */}
        <aside className="bg-gray-50 border rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Quick Reads</h2>
          <ul className="space-y-4 text-sm">
            <li className="border-b pb-2">
              🌍 Climate report warns of faster ice melt in Antarctica.
            </li>
            <li className="border-b pb-2">
              🧬 Gene editing breakthrough could eliminate inherited diseases.
            </li>
            <li className="border-b pb-2">
              🚀 SpaceX successfully tests next-generation rocket engine.
            </li>
            <li className="border-b pb-2">
              🔬 Scientists develop biodegradable plastic alternative.
            </li>
            <li>
              ☄️ Rare meteor shower set to light up skies this weekend.
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
