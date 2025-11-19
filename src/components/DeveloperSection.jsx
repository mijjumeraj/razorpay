import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function DeveloperSection() {
  useScrollReveal();

  return (
    <section className="mt-32 bg-[#022536] text-white py-20 px-6 md:px-12 rounded-3xl reveal">

      {/* Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Razorpay is built
        </h2>

        <h3 className="text-3xl md:text-5xl font-extrabold text-green-400 mt-2 break-words">
          &lt;for developers by developers&gt;
        </h3>
      </div>

      {/* 3 Feature Columns */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* Integrations */}
        <div className="bg-[#063044] p-6 rounded-xl border border-gray-700 shadow-md">
          <div className="text-4xl mb-4">💻</div>
          <h4 className="text-xl font-semibold">Integrations</h4>
          <p className="text-gray-300 mt-2">
            Find platform SDKs, plugins & server integrations.
          </p>
          <button className="mt-3 text-indigo-400 hover:text-indigo-300 transition">
            View Docs →
          </button>
        </div>

        {/* API Reference */}
        <div className="bg-[#063044] p-6 rounded-xl border border-gray-700 shadow-md">
          <div className="text-4xl mb-4">📘</div>
          <h4 className="text-xl font-semibold">API Reference</h4>
          <p className="text-gray-300 mt-2">
            Documentation to build powerful payment solutions.
          </p>
          <button className="mt-3 text-indigo-400 hover:text-indigo-300 transition">
            View Docs →
          </button>
        </div>

        {/* Webhooks */}
        <div className="bg-[#063044] p-6 rounded-xl border border-gray-700 shadow-md">
          <div className="text-4xl mb-4">⚡</div>
          <h4 className="text-xl font-semibold">Webhooks</h4>
          <p className="text-gray-300 mt-2">
            Real-time notifications for transactions & events.
          </p>
          <button className="mt-3 text-indigo-400 hover:text-indigo-300 transition">
            View Docs →
          </button>
        </div>
      </div>

      {/* Try it Out Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left Text */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Try it out <br className="hidden sm:block"/> for yourself →
          </h3>
        </div>

        {/* Code Box */}
        <div className="bg-[#052b3f] border border-gray-700 rounded-2xl p-6 shadow-xl w-full overflow-auto">

          {/* Code header */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm">
              Curl
            </span>
            <span className="text-sm text-gray-400 cursor-pointer">
              change language ▾
            </span>
          </div>

          {/* Code block */}
          <pre className="text-green-300 text-xs sm:text-sm md:text-base leading-6 whitespace-pre-wrap">
{`curl -X POST https://api.razorpay.com/v1/orders
-U [YOUR_KEY_ID]:[YOUR_KEY_SECRET]
-H 'content-type:application/json'
-d '{
  "amount": 500,
  "currency": "INR",
  "receipt": "qwsqq1",
  "partial_payment": true,
  "first_payment_min_amount": 230
}'`}
          </pre>
        </div>
      </div>

    </section>
  );
}
