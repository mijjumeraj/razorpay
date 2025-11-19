import React, { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

// ⭐ Feature Data
const features = [
  {
    icon: "🛡️",
    title: "100% Secure Payments",
    desc: "Level-1 PCI DSS certified secure platform for safe transactions."
  },
  {
    icon: "⚡",
    title: "Instant Settlements",
    desc: "Fast bank settlements with industry-leading speed."
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    desc: "Track payment performance & business insights in real-time."
  },
  {
    icon: "💻",
    title: "Developer Friendly",
    desc: "Clean APIs, SDKs & top-notch documentation."
  },
  {
    icon: "🌐",
    title: "Multiple Payment Methods",
    desc: "UPI, Cards, Wallets, EMI & more for your customers."
  },
  {
    icon: "📞",
    title: "24×7 Support",
    desc: "Round-the-clock assistance from experts."
  },
];

export default function Features() {
  useScrollReveal();

  const bgRef = useRef();

  // ⭐ PARALLAX BACKGROUND
  const handleParallax = (e) => {
    const rect = bgRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.02;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.02;

    bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.15)`;
  };

  const resetParallax = () => {
    bgRef.current.style.transform = "translate(0px, 0px) scale(1.15)";
  };

  // ⭐ 3D TILT
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;

    card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.07)`;
    card.querySelector(".glow").style.opacity = 0.4;
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.querySelector(".glow").style.opacity = 0;
  };

  return (
    <section
      className="mt-32 relative max-w-7xl mx-auto px-6"
      onMouseMove={handleParallax}
      onMouseLeave={resetParallax}
    >
      {/* ⭐ PARALLAX BG GRADIENT */}
      <div
        ref={bgRef}
        className="
          absolute inset-0 rounded-3xl opacity-40 blur-3xl
          bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500
          transition-transform duration-300
        "
        style={{ transform: "scale(1.15)" }}
      />

      <div className="relative z-10">
        
        {/* ⭐ Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Powerful Features For Your Business
        </h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mt-3">
          Industry-leading tools designed to help your business grow smoothly.
        </p>

        {/* ⭐ FEATURE GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="
                relative tilt-card bg-white/80 backdrop-blur-xl 
                border border-gray-200 p-8 rounded-2xl 
                shadow-xl hover:shadow-2xl 
                transition-all duration-300 cursor-pointer
              "
            >
              {/* Glow Effect */}
              <div className="glow absolute inset-0 bg-blue-300/30 rounded-2xl blur-xl opacity-0 transition"></div>

              {/* Icon */}
              <div className="text-5xl mb-4">{f.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
