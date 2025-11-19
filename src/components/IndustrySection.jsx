import React from "react";

export default function IndustrySection() {
  return (
    <section className="relative mt-24 px-6">

      {/* 🌈 Gradient Wallpaper Background */}
      <div
        className="w-full h-[550px] rounded-3xl shadow-xl relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #00334E, #005F73, #0A9396)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-2xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl bottom-0 right-0"></div>

        {/* ⭐ Floating White Card */}
        <div className="absolute top-1/2 -translate-y-1/2 left-16 bg-white p-10 w-[550px] rounded-2xl shadow-2xl border border-gray-200">

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Empower your <br />
            <span className="text-green-600">e-commerce business</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Streamline payment management with a unified dashboard,
            enabling both online and in-person payment collection while
            enhancing conversion rates and minimizing fraud.
          </p>

          {/* 🟩 Text-Based Brand Badges */}
          <div className="flex items-center gap-3 mt-8 flex-wrap">

            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md shadow-sm text-sm font-semibold">
              Nykaa
            </span>

            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md shadow-sm text-sm font-semibold">
              Decathlon
            </span>

            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md shadow-sm text-sm font-semibold">
              Zomato
            </span>

            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md shadow-sm text-sm font-semibold">
              Flipkart
            </span>

            <span className="text-gray-500 text-sm font-medium ml-1">
              + 70,000 others
            </span>

          </div>

          {/* CTA Button */}
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            See Solutions →
          </button>
        </div>
      </div>

    </section>
  );
}
