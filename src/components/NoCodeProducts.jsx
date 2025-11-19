import React, { useEffect } from "react";

export default function NoCodeProducts() {
  const items = [
    {
      title: "Payment Links",
      desc: (
        <>
          Accept payments instantly: <br />
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
          Accept payments without coding <br /> on a{" "}
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

  // ⭐ Slide-in animation on scroll
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
      <p className="text-gray-500 text-lg">&lt;what html?&gt;</p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mt-2">
        Not a developer?
      </h2>

      <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
        Our No-Code products have you covered
      </h3>

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
            <div className="absolute top-6 right-6 text-4xl opacity-80">
              {item.icon}
            </div>

            <h4 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h4>

            <p className="mt-4 text-gray-700 leading-relaxed text-[17px]">
              {item.desc}
            </p>

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
