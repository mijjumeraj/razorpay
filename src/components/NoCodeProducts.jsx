import React, { useEffect } from "react";

export default function NoCodeProducts() {
  const items = [
    {
      title: "Payment Links",
      desc: (
        <>
          Accept payments instantly:{" "}
          <span className="text-blue-600 font-semibold">
            Share links
          </span>{" "}
          via email, text, or social.
        </>
      ),
      icon: "💳",
    },
    {
      title: "Payment Pages",
      desc: (
        <>
          Accept payments without coding on a{" "}
          <span className="text-blue-600 font-semibold">
            custom-branded store
          </span>
          .
        </>
      ),
      icon: "📄",
    },
    {
      title: "Payment Buttons",
      desc: (
        <>
          Effortlessly{" "}
          <span className="text-blue-600 font-semibold">
            add a Pay Now button
          </span>{" "}
          without any coding knowledge.
        </>
      ),
      icon: "🔘",
    },
  ];

  // ⭐ Slide-in animation
  useEffect(() => {
    const cards = document.querySelectorAll(".slide-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("slide-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">

      {/* Razorpay style small gray tag */}
      <p className="text-gray-500 text-lg">&lt;no-code products&gt;</p>

      {/* Green heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mt-2">
        Not a developer?
      </h2>

      {/* Main heading */}
      <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
        Our No-Code products have you covered
      </h3>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 0.2}s` }}
            className="
              slide-card opacity-0 translate-y-10
              bg-white rounded-2xl p-8 shadow-md
              border border-gray-200
              hover:shadow-xl transition-all duration-300
              relative overflow-hidden
            "
          >
            {/* Icon */}
            <div className="absolute top-6 right-6 text-4xl opacity-80">
              {item.icon}
            </div>

            {/* Title */}
            <h4 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h4>

            {/* Description */}
            <p className="mt-4 text-gray-700 text-[18px] leading-relaxed">
              {item.desc}
            </p>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-8 text-blue-600 font-semibold">
              <button className="hover:text-blue-800 transition">
                Sign Up →
              </button>

              <button className="hover:text-blue-800 transition">
                Know More ↗
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
