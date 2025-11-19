import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 dark:text-white backdrop-blur-md shadow-sm transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ⭐ TEXT LOGO (Razorpay style) */}
        <div className="flex items-center gap-2 select-none">
          <div className="w-3 h-6 bg-blue-600 transform -skew-x-12 opacity-90"></div>

          <span className="text-[26px] font-bold tracking-tight text-blue-700 dark:text-blue-400">
            Razor
          </span>
          <span className="text-[26px] font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
            pay
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {["Payments", "Banking+", "Payroll", "Partners", "Support", "Pricing"].map((item, i) => (
            <a key={i} className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#">
              {item}
            </a>
          ))}
        </nav>

        {/* CTA BUTTONS + DARK MODE */}
        <div className="hidden md:flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition"
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transform transition-all ${
                dark ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </button>

          <button className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition">
            Login
          </button>

          <button className="text-sm px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Sign Up →
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* ⭐ MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-4 shadow-lg">
          {["Payments", "Banking+", "Payroll", "Partners", "Support", "Pricing"].map((item, i) => (
            <a key={i} href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle Mobile */}
          <button
            onClick={() => setDark(!dark)}
            className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition"
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transform transition-all ${
                dark ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </button>

          <button className="w-full border px-4 py-2 rounded-md dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Login
          </button>

          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Sign Up →
          </button>
        </div>
      )}
    </header>
  );
}
