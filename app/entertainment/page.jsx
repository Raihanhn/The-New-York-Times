"use client";

import Image from "next/image";

export default function EntertainmentPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-serif">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 uppercase tracking-wide">
        Entertainment News
      </h1>

      {/* Hero Feature */}
      <section className="relative mb-10"> 
        <Image
          src="/images/ent-oscars.jpg"
          alt="Oscars Red Carpet"
          width={1200}
          height={600}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end rounded-lg">
          <div className="p-6 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Oscars 2025: Red Carpet Highlights & Surprises
            </h2>
            <p className="text-sm md:text-base max-w-2xl">
              From stunning fashion statements to unexpected award winners, this
              year’s Oscars kept audiences around the world glued to their
              screens.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Article 1 */}
        <article className="bg-white shadow rounded-lg overflow-hidden">
          <Image
            src="/images/ent-concert.jpg"
            alt="Concert"
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              Global Pop Star Launches World Tour
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The highly anticipated world tour kicked off in Paris last night,
              with sold-out arenas and fans singing every word.
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className="bg-white shadow rounded-lg overflow-hidden">
          <Image
            src="/images/ent-movie.jpg"
            alt="Movie Release"
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              Sci-Fi Blockbuster Breaks Box Office Records
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The latest sci-fi epic smashed opening weekend records, earning
              over $500 million worldwide in just three days.
            </p>
          </div>
        </article>
      </section>

      {/* List Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">More Entertainment Stories</h2>
        <div className="space-y-6">
          {/* Article 3 */}
          <article className="flex flex-col md:flex-row items-start gap-4 border-b pb-4">
            <Image
              src="/images/ent-tv.jpg"
              alt="TV Series"
              width={200}
              height={140}
              className="w-full md:w-48 h-32 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Hit TV Series Renewed for Another Season
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Fans are thrilled as the streaming giant confirms another season
                of its most-watched drama series.
              </p>
            </div>
          </article>

          {/* Article 4 */}
          <article className="flex flex-col md:flex-row items-start gap-4 border-b pb-4">
            <Image
              src="/images/ent-celebrity.jpg"
              alt="Celebrity"
              width={200}
              height={140}
              className="w-full md:w-48 h-32 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Celebrity Couple Announces Engagement
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Social media went into a frenzy as the beloved Hollywood couple
                shared their engagement news with fans.
              </p>
            </div>
          </article>

          {/* Article 5 */}
          <article className="flex flex-col md:flex-row items-start gap-4 border-b pb-4">
            <Image
              src="/images/ent-festival.jpg"
              alt="Film Festival"
              width={200}
              height={140}
              className="w-full md:w-48 h-32 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                International Film Festival Showcases Indie Talent
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Independent filmmakers shined on the global stage with unique
                storytelling and groundbreaking visuals.
              </p>
            </div>
          </article>

          {/* Article 6 */}
          <article className="flex flex-col md:flex-row items-start gap-4">
            <Image
              src="/images/ent-music.jpg"
              alt="Music Album"
              width={200}
              height={140}
              className="w-full md:w-48 h-32 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Rising Artist Drops Chart-Topping Album
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The breakout artist’s debut album has quickly climbed the
                streaming charts, winning critical acclaim and fan love.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
