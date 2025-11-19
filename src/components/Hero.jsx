import React, { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  // ⭐ RIPPLE FUNCTION (ERROR-FREE)
  const createRipple = (e) => {
    const button = e.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight); // FIXED
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

    circle.classList.add("ripple-span"); // CSS class

    const oldRipple = button.getElementsByClassName("ripple-span")[0];
    if (oldRipple) oldRipple.remove();

    button.appendChild(circle);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Demo Email Submitted: " + email);
    setEmail("");
  };

  return (
    <section
      className="relative overflow-hidden py-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center
      bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white"
    >
      {/* 🔵 BACKGROUND SHAPES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl bottom-0 right-0 animate-ping"></div>
      </div>

      {/* LEFT SIDE */}
      <div className="relative lg:col-span-7 animate-[fadeIn_1.2s_ease-in-out]">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Powering Payments for India’s <br /> Fastest Growing Businesses
        </h1>

        <p className="text-blue-100 mt-4 text-lg max-w-xl">
          Accept payments, automate payouts, manage business banking, and
          supercharge your business with Razorpay’s powerful suite.
        </p>

        {/* CTA BUTTONS WITH RIPPLE */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={createRipple}
            className="ripple bg-white text-blue-700 px-6 py-3 rounded-md font-medium shadow hover:bg-blue-50 
            relative overflow-hidden"
          >
            Sign up Now
          </button>

          <button
            onClick={createRipple}
            className="ripple border border-blue-200 px-6 py-3 rounded-md font-medium hover:bg-white/10
            relative overflow-hidden"
          >
            Contact Sales
          </button>
        </div>

        {/* EMAIL FORM */}
        <form onSubmit={onSubmit} className="mt-6 flex gap-2 max-w-md">
          <input
            type="email"
            required
            placeholder="Work Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border px-4 py-2 rounded-md bg-white text-gray-900"
          />

          <button
            onClick={createRipple}
            className="ripple bg-white text-blue-700 px-4 py-2 rounded-md font-semibold relative overflow-hidden"
          >
            Get Started
          </button>
        </form>

        <p className="text-sm text-blue-200 mt-2">
          No credit card required • Free for 14 days
        </p>

        {/* TRUSTED BY */}
        <div className="mt-10 flex items-center gap-6">
          <span className="uppercase text-blue-200 text-xs">Trusted by</span>

          <div className="flex gap-3 flex-wrap text-white/80">
            <span className="logo-pill">Zomato</span>
            <span className="logo-pill">Swiggy</span>
            <span className="logo-pill">Flipkart</span>
            <span className="logo-pill">BookMyShow</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE PAYMENT CARD — BOUNCE ANIMATION */}
      <div className="relative lg:col-span-5 animate-[fadeIn_1.6s_ease-in-out]">
        <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 text-gray-900 animate-cardBounce">
          <div className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-md font-medium mb-4">
            Live
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Order #2042</h4>
                <p className="text-gray-600 text-sm">Payment Processing</p>
              </div>
              <div className="font-semibold text-lg">₹1,499</div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-white shadow-sm p-3 rounded-md">UPI</div>
              <div className="bg-white shadow-sm p-3 rounded-md">Card</div>
              <div className="bg-white shadow-sm p-3 rounded-md">Wallet</div>
              <div className="bg-white shadow-sm p-3 rounded-md">Netbanking</div>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            Fast, secure & reliable online payments for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
