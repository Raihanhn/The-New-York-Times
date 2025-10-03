"use client";

import Image from "next/image";

export default function BusinessPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Market Ticker */}
      <section className="bg-gray-900 text-white text-sm py-2 px-4 rounded-md mb-6 overflow-x-auto">
        <div className="flex gap-6 whitespace-nowrap">
          <span>📈 S&P 500: <span className="text-green-400">+1.2%</span></span>
          <span>💹 Nasdaq: <span className="text-green-400">+0.9%</span></span>
          <span>🏦 Dow Jones: <span className="text-red-400">-0.3%</span></span>
          <span>💰 Bitcoin: <span className="text-green-400">+2.5%</span></span>
          <span>🛢 Oil: <span className="text-red-400">-1.1%</span></span>
        </div>
      </section>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-3">
        Business News
      </h1> 

      {/* Hero Feature */}
      <section className="relative h-80 md:h-[450px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/images/business-hero.jpg"
          alt="Business Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-2xl">
            Global Markets Rally Amid Tech Sector Boom
          </h2>
        </div>
      </section>

      {/* Top Business News */}
      <section className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Article 1 */}
          <article className="border-b pb-4">
            <Image
              src="/images/startup.jpg"
              alt="Startup"
              width={800}
              height={400}
              className="w-full h-56 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold mb-2">
              Startup Unicorn Raises $500M in Series D
            </h3>
            <p className="text-gray-700 text-sm">
              The fintech startup’s valuation soared to $5B after securing major
              funding from global investors.
            </p>
          </article>

          {/* Article 2 */}
          <article className="border-b pb-4">
            <Image
              src="/images/office.jpg"
              alt="Office Work"
              width={800}
              height={400}
              className="w-full h-56 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold mb-2">
              Remote Work Reshaping Corporate Real Estate
            </h3>
            <p className="text-gray-700 text-sm">
              As companies embrace hybrid work models, office demand shifts,
              pushing landlords to rethink spaces.
            </p>
          </article>

          {/* Article 3 */}
          <article>
            <Image
              src="/images/trade.jpg"
              alt="Trade"
              width={800}
              height={400}
              className="w-full h-56 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold mb-2">
              Global Trade Tensions Affect Emerging Markets
            </h3>
            <p className="text-gray-700 text-sm">
              Tariff disputes and supply chain disruptions are impacting
              economies dependent on exports.
            </p>
          </article>
        </div>

        {/* Sidebar: Insights */}
        <aside className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Market Insight</h4>
            <p className="text-sm text-gray-700">
              Analysts predict a strong quarter for tech, but inflation remains
              a key concern for investors.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">CEO Spotlight</h4>
            <p className="text-sm text-gray-700">
              Tesla’s CEO outlines new sustainability goals at the annual
              shareholder meeting.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Crypto Watch</h4>
            <p className="text-sm text-gray-700">
              Ethereum surges 4% ahead of its much-anticipated network upgrade.
            </p>
          </div>
        </aside>
      </section>

      {/* More Business Articles */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Article 4 */}
        <article>
          <Image
            src="/images/economy.jpg"
            alt="Economy"
            width={600}
            height={350}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Inflation Drops to 2-Year Low
          </h3>
          <p className="text-gray-700 text-sm">
            Latest government report shows inflation cooling faster than
            expected, easing pressure on consumers.
          </p>
        </article>

        {/* Article 5 */}
        <article>
          <Image
            src="/images/tech.jpg"
            alt="Tech Business"
            width={600}
            height={350}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Big Tech Firms Post Record Earnings
          </h3>
          <p className="text-gray-700 text-sm">
            Apple, Google, and Microsoft report stronger-than-expected revenue
            despite economic uncertainties.
          </p>
        </article>

        {/* Article 6 */}
        <article>
          <Image
            src="/images/energy.jpg"
            alt="Energy"
            width={600}
            height={350}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">
            Renewable Energy Investments Hit Record High
          </h3>
          <p className="text-gray-700 text-sm">
            Global renewable energy funding surpasses fossil fuels for the first
            time in history.
          </p>
        </article>
      </section>
    </main>
  );
}
