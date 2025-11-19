import React, { useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Anusree Goenka",
      role: "Co-founder, Spark Studio",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=900&q=60",
    },
    {
      name: "Nischay AG",
      role: "Co-founder, Jar",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&w=900&q=60",
    },
    {
      name: "Aditya Shankar",
      role: "Co-founder, Doubtnut",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&w=900&q=60",
    },
    {
      name: "Pragya Verma",
      role: "Founder, GrowthLabs",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&w=900&q=60",
    },
  ];

  // ⭐ Smooth slide-in effect
  useEffect(() => {
    const cards = document.querySelectorAll(".testimonial-slide");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((c) => observer.observe(c));
  }, []);

  return (
    <section className="mt-32 px-6 py-16 bg-gray-950 text-white">
      {/* Heading */}
      <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Razorpay grows with <span className="text-blue-600">you!</span>
        </h2>

        <p className="text-xl font-semibold text-gray-300">
          1,50,000+ Businesses
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 0.15}s` }}
            className="
              testimonial-slide 
              opacity-0 translate-y-10
              bg-gray-900 rounded-2xl overflow-hidden shadow-lg
              transition-all duration-700
            "
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
