// components/StockTicker.jsx
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const stocks = [
  { name: "Tesla", symbol: "TSLA", price: 284.32, change: 1.5 },
  { name: "Microsoft", symbol: "MSFT", price: 331.12, change: -0.8 },
  { name: "Apple", symbol: "AAPL", price: 194.55, change: 2.1 },
  { name: "Amazon", symbol: "AMZN", price: 150.22, change: -1.2 },
  { name: "Google", symbol: "GOOGL", price: 134.67, change: 0.5 },
  { name: "Nvidia", symbol: "NVDA", price: 460.13, change: 3.0 },
  { name: "Meta", symbol: "META", price: 312.44, change: -0.9 },
  { name: "Netflix", symbol: "NFLX", price: 455.78, change: 1.8 },
  { name: "Intel", symbol: "INTC", price: 54.23, change: 0.7 },
  { name: "IBM", symbol: "IBM", price: 138.45, change: -0.5 },
  { name: "Adobe", symbol: "ADBE", price: 515.33, change: 1.2 },
  { name: "Salesforce", symbol: "CRM", price: 222.11, change: -0.9 },
  { name: "PayPal", symbol: "PYPL", price: 74.55, change: 0.3 },
  { name: "Oracle", symbol: "ORCL", price: 95.12, change: -1.1 },
  { name: "Spotify", symbol: "SPOT", price: 187.44, change: 2.5 },
  { name: "Twitter", symbol: "TWTR", price: 62.33, change: -0.8 },
  { name: "Snap", symbol: "SNAP", price: 48.77, change: 1.0 },
];

const StockTicker = () => {
  // Duplicate the stock list to create a seamless loop
  const loopedStocks = [...stocks, ...stocks];

  return (
    <div className=" left-0 right-0 bg-white shadow-md overflow-hidden">
      <div className="relative flex items-center h-12">
        <div className="absolute left-0 h-full bg-red-600 text-white font-bold px-6 flex items-center z-20">
         Live Stocks
        </div>
        <ul className="flex animate-marquee space-x-8 pl-40">
          {loopedStocks.map((stock, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-gray-800 whitespace-nowrap"
            >
              <span className="font-semibold">{stock.symbol}</span>
              <span>${stock.price.toFixed(2)}</span>
              <span
                className={`flex items-center ${
                  stock.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {stock.change >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                {Math.abs(stock.change)}%
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default StockTicker; 
