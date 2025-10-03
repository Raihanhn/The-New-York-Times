"use client";

import Image from "next/image";

export default function TravelPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <section className="relative h-80 md:h-[450px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/images/travel-hero.jpg"
          alt="Travel Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Wander the World
          </h1>
        </div>
      </section>

      {/* Intro */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Discover breathtaking destinations, cultural experiences, and travel
        stories from around the globe. Your next adventure starts here.
      </p>

      {/* Masonry Style Grid */}
      <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">
        {/* Article 1 */}
        <article className="break-inside-avoid rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/paris.jpg"
            alt="Paris"
            width={600}
            height={400}
            className="w-full object-cover h-60"
          />
          <div className="p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">48 Hours in Paris</h2>
            <p className="text-gray-600 text-sm">
              From sunrise at the Eiffel Tower to late-night cafés, here’s how
              to make the most of two days in the City of Light.
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className="break-inside-avoid rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/bali.jpg"
            alt="Bali"
            width={600}
            height={400}
            className="w-full object-cover h-60"
          />
          <div className="p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">Bali’s Hidden Beaches</h2>
            <p className="text-gray-600 text-sm">
              Skip the crowds and discover Bali’s secret shores, where turquoise
              waters and golden sands await.
            </p>
          </div>
        </article>

        {/* Article 3 */}
        <article className="break-inside-avoid rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/tokyo.jpg"
            alt="Tokyo"
            width={600}
            height={400}
            className="w-full object-cover h-60"
          />
          <div className="p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Tokyo: Tradition Meets Futurism
            </h2>
            <p className="text-gray-600 text-sm">
              Experience the unique contrast of ancient temples and neon
              skyscrapers in the heart of Tokyo.
            </p>
          </div>
        </article>

        {/* Article 4 */}
        <article className="break-inside-avoid rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/africa-safari.jpg"
            alt="Safari"
            width={600}
            height={400}
            className="w-full object-cover h-60"
          />
          <div className="p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Safari Adventure in Kenya
            </h2>
            <p className="text-gray-600 text-sm">
              Witness the Big Five up close in an unforgettable safari
              experience across Kenya’s iconic savannahs.
            </p>
          </div>
        </article>

        {/* Article 5 */}
        <article className="break-inside-avoid rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/iceland.jpg"
            alt="Iceland"
            width={600}
            height={400}
            className="w-full object-cover h-60"
          />
          <div className="p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Iceland’s Northern Lights
            </h2>
            <p className="text-gray-600 text-sm">
              Chase the aurora borealis in Iceland for a once-in-a-lifetime
              cosmic light show.
            </p>
          </div>
        </article>

        {/* Article 6 */} 
        <article className="break-inside-avoid rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/machu-picchu.jpg"
            alt="Machu Picchu"
            width={600}
            height={400}
            className="w-full object-cover h-60"
          />
          <div className="p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Hiking Machu Picchu Trails
            </h2>
            <p className="text-gray-600 text-sm">
              Embark on the Inca Trail and discover the breathtaking citadel of
              Machu Picchu, hidden in the Andes.
            </p>
          </div>
        </article>
      </section>

      {/* Travel Tips Section */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Travel Tips</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <span className="text-3xl">🧳</span>
            <h3 className="font-semibold mt-2">Pack Light</h3>
            <p className="text-sm text-gray-600">
              Choose versatile clothing and avoid overpacking.
            </p>
          </div>
          <div className="p-4">
            <span className="text-3xl">🌍</span>
            <h3 className="font-semibold mt-2">Learn Local Phrases</h3>
            <p className="text-sm text-gray-600">
              A simple “thank you” in the local language goes a long way.
            </p>
          </div>
          <div className="p-4">
            <span className="text-3xl">📸</span>
            <h3 className="font-semibold mt-2">Capture Moments</h3>
            <p className="text-sm text-gray-600">
              Don’t forget to enjoy the moment beyond the lens too!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
