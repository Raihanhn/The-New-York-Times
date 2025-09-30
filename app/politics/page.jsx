// app/politics/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function PoliticsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 font-serif">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 uppercase tracking-wide">
        Politics Today
      </h1>
      <p className="text-center text-gray-600 mb-10 italic">
        Latest headlines and in-depth stories from the world of politics
      </p>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="relative h-72 md:h-auto">
          <Image
            src="/images/politics-hero.jpg"
            alt="Main Politics Highlight"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3 leading-snug">
            Parliament Approves Historic Reform Bill After Heated Debate
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In a landmark decision, lawmakers passed a sweeping reform bill that
            has been the subject of intense political debate for months. The
            move is expected to reshape policies across multiple sectors...
          </p>
          <Link
            href="#"
            className="mt-3 text-blue-700 hover:underline font-semibold"
          >
            Read Full Story →
          </Link>
        </div>
      </section>

      {/* Grid of News Articles */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Article 1 */}
        <article className="border-t pt-4">
          <Image
            src="/images/election.jpg"
            alt="Election"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            National Elections: Candidates Face Off in First Debate
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The first televised debate between the leading candidates drew
            millions of viewers as they clashed over economy, healthcare, and
            foreign policy.
          </p>
        </article>

        {/* Article 2 */}
        <article className="border-t pt-4">
          <Image
            src="/images/protest.jpg"
            alt="Protest"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Thousands Rally for Climate Policy Reform
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Demonstrators flooded the capital demanding urgent action on climate
            change, as political leaders face increasing public pressure.
          </p>
        </article>

        {/* Article 3 */}
        <article className="border-t pt-4">
          <Image
            src="/images/foreign-policy.jpg"
            alt="Foreign Policy"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            New Foreign Policy Agreement Signed
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            World leaders signed a groundbreaking agreement aimed at
            strengthening international cooperation and addressing global
            security concerns.
          </p>
        </article>

      
        <article className="border-t pt-4">
          <Image
            src="/images/policy-reform.jpg" 
            alt="Policy Reform"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Government Unveils New Education Policy
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The administration announced sweeping reforms to improve public
            schools, with plans to increase funding and expand digital learning
            programs nationwide.
          </p>
        </article>

      
        <article className="border-t pt-4">
          <Image
            src="/images/healthcare.jpg"
            alt="Healthcare"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Parliament Debates Universal Healthcare Bill
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Heated discussions erupted in parliament as lawmakers argued over a
            bill proposing free healthcare coverage for all citizens.
          </p>
        </article>

        
        <article className="border-t pt-4">
          <Image
            src="/images/trade-summit.jpg"
            alt="Trade Summit"
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Leaders Gather for Global Trade Summit
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Representatives from over 50 countries met to negotiate new trade
            deals, aiming to boost economic growth and reduce tariffs.
          </p>
        </article>
      </section>

      {/* Bottom Section */}
      <section className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">More Headlines</h2>
        <ul className="space-y-3">
          <li className="text-gray-800 hover:underline cursor-pointer">
            🗳️ Voter turnout expected to break records in upcoming elections
          </li>
          <li className="text-gray-800 hover:underline cursor-pointer">
            🏛️ Lawmakers push for transparency in campaign financing
          </li>
          <li className="text-gray-800 hover:underline cursor-pointer">
            🌍 Global summit addresses climate change and energy crisis
          </li>
          <li className="text-gray-800 hover:underline cursor-pointer">
            📊 Polls show shifting support among key demographics
          </li>
        </ul>
      </section>
    </main>
  );
}
