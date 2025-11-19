import React from "react";

export default function InnovationSection() {
  return (
    <section className="mt-24 px-6 max-w-7xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
        We have innovated at every instance, creating a disruption.
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT BIG CARD */}
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 relative">

          <h4 className="text-sm font-semibold text-gray-600 mb-4">
            MoneySaver Export Account
          </h4>

          <h3 className="text-4xl font-extrabold text-blue-600 leading-tight mb-4">
            Open a virtual account in 200+ countries,
          </h3>

          <h3 className="text-3xl font-bold text-gray-800 leading-snug">
            save up to 50% on international bank transfer charges.  
            Receive ACH/SWIFT/SEPA/BACS payments
          </h3>

          <p className="text-gray-600 mt-6">
            Receive international wire transfers with ease with a smart account
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Sign Up →
            </button>
            <button className="text-blue-600 font-semibold hover:underline">
              Know More
            </button>
          </div>

          {/* Icon top-right */}
          <div className="absolute top-6 right-6 text-gray-400 text-2xl">
            🌐
          </div>
        </div>

        {/* RIGHT SMALL CARD */}
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 relative">

          <h4 className="text-sm font-semibold text-gray-600 mb-4">
            Turbo UPI
          </h4>

          <h3 className="text-3xl font-extrabold leading-snug text-blue-600">
            Experience a 5X faster checkout,
          </h3>

          <p className="text-gray-800 mt-2 text-xl leading-relaxed">
            achieve a 10% success rate boost,  
            all without any redirections to UPI apps.
          </p>

          <p className="text-gray-600 mt-6">
            Get India’s fastest one-step UPI payment solution for businesses
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Sign Up →
            </button>
            <button className="text-blue-600 font-semibold hover:underline">
              Know More
            </button>
          </div>

          {/* Arrow Icon */}
          <div className="absolute top-6 right-6 text-gray-400 text-2xl">
            ➤
          </div>
        </div>
      </div>
    </section>
  );
}
