import React, { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const products = [
  { icon: "💳", title: "Payment Gateway", desc: "Accept payments from cards, UPI, wallets & more with high success rates.", link: "Learn more →" },
  { icon: "🔗", title: "Payment Links", desc: "Share links and collect payments instantly.", link: "Create Link →" },
  { icon: "🧾", title: "Payment Pages", desc: "Beautiful hosted checkout pages for your business.", link: "Explore Pages →" },
  { icon: "🔁", title: "Subscriptions", desc: "Automate recurring payments for subscription businesses.", link: "Manage Plans →" },
  { icon: "📨", title: "Invoices", desc: "Send smart GST-compliant invoices and get paid faster.", link: "Send Invoice →" },
  { icon: "🏦", title: "RazorpayX Banking", desc: "Smart business banking with payouts & automation.", link: "Open Account →" },
];

export default function Products() {

  useScrollReveal();

  const parallaxRef = useRef();

  // ⭐ PARALLAX BACKGROUND MOVEMENT
  const handleParallax = (e) => {
    const rect = parallaxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = x * 0.02;
    const moveY = y * 0.02;

    parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
  };

  const resetParallax = () => {
    parallaxRef.current.style.transform = "translate(0px, 0px) scale(1.1)";
  };

  // ⭐ INDIVIDUAL CARD 3D TILT
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / 18) * -1;
    const rotateY = x / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    const glow = card.querySelector(".shadow-glow");
    glow.style.opacity = 0.4;
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    const glow = card.querySelector(".shadow-glow");
    glow.style.opacity = 0;
  };

  return (
    <section
      className="mt-28 max-w-7xl mx-auto px-6 relative"
      onMouseMove={handleParallax}
      onMouseLeave={resetParallax}
    >
      {/* PARALLAX BACKGROUND */}
      <div
        ref={parallaxRef}
        className="
          absolute inset-0 rounded-3xl opacity-30 blur-3xl
          bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600
          transition-transform duration-300
        "
        style={{ transform: "scale(1.1)" }}
      />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Razorpay Product Suite
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl text-center mx-auto">
          A complete ecosystem designed to power your business end-to-end.
        </p>

        {/* Product Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((p, i) => (
            <div
              key={i}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="
                group relative tilt-card
                bg-white/80 backdrop-blur-xl
                p-8 rounded-2xl 
                border border-gray-200
                shadow-xl hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* Glow Shadow */}
              <div className="shadow-glow absolute inset-0 bg-blue-300/30 rounded-2xl blur-xl opacity-0 transition"></div>

              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900">{p.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 leading-relaxed">{p.desc}</p>

              {/* Button */}
              <button className="mt-5 font-semibold text-indigo-600 group-hover:text-indigo-800 transition">
                {p.link}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
