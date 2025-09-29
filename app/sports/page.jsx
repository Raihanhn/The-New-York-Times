// app/sports/page.jsx
"use client";

import Image from "next/image";

export default function SportsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 font-serif">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 uppercase tracking-wide">
        Sports Daily
      </h1>
      <p className="text-center text-gray-600 mb-10 italic">
        Latest updates and stories from the world of sports
      </p>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="relative h-72 md:h-auto">
          <Image
            src="/images/sports-hero.jpg" // put your image in public/images
            alt="Main Sports Highlight"
            fill  
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3 leading-snug">
            Champions League Final Ends in Dramatic Penalty Shootout
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In one of the most thrilling matches of the decade, the Champions
            League final ended with a nail-biting penalty shootout. Fans from
            around the globe witnessed history as the underdogs claimed the
            trophy in unforgettable fashion...
          </p>
        </div>
      </section>

      {/* Grid of News Articles */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Article 1 */}
        <article className="border-t pt-4">
          <Image
            src="/images/tennis.jpg"
            alt="Tennis"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Rising Star Wins First Grand Slam Title
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The 19-year-old sensation stunned the world by winning her first
            Grand Slam, defeating the defending champion in straight sets.
          </p>
        </article>

        {/* Article 2 */}
        <article className="border-t pt-4">
          <Image
            src="/images/basketball.jpg"
            alt="Basketball"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            NBA Finals: A Game to Remember
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Last night’s NBA Finals clash will be talked about for years as two
            titans battled it out on the hardwood, leaving fans breathless.
          </p>
        </article>

        {/* Article 3 */}
        <article className="border-t pt-4">
          <Image
            src="/images/cricket.jpg"
            alt="Cricket"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Cricket World Cup: Upset of the Tournament
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            In a shocking turn of events, the defending champions were knocked
            out early after a stunning performance by the underdogs.
          </p>
        </article>
      </section>

      {/* Bottom Section */}
      <section className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">More Headlines</h2>
        <ul className="space-y-3">
          <li className="text-gray-800 hover:underline cursor-pointer">
            ⚽ Local team secures dramatic victory in final seconds
          </li>
          <li className="text-gray-800 hover:underline cursor-pointer">
            🏀 Rookie breaks record in debut game
          </li>
          <li className="text-gray-800 hover:underline cursor-pointer">
            🎾 Wimbledon set for epic showdown this weekend
          </li>
          <li className="text-gray-800 hover:underline cursor-pointer">
            🏏 Rain interrupts thrilling cricket match
          </li>
        </ul>
      </section>
    </main>
  );
}
