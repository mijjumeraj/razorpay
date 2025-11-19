import Navbar from "./components/Navbar.jsx";

import Hero from "./components/Hero.jsx";
import TestimonialsSection from "./components/TestimonialsSection";

import IndustrySection from "./components/IndustrySection";
import InnovationSection from "./components/InnovationSection";
import Products from "./components/products.jsx";
import Features from "./components/Features.jsx";
import RazorpayX from "./components/RazorpayX";
import Footer from "./components/Footer.jsx";
import DeveloperSection from "./components/DeveloperSection";
import NoCodeProducts from "./components/NoCodeProducts";

export default function App() {
  return (
    // ⭐ Body wrapper for smooth gradient background
    <div className="min-h-screen text-white">

      {/* ⭐ Navbar always visible on gradient */}
      <Navbar />

      {/* ⭐ Page content wrapper */}
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <TestimonialsSection />
        <IndustrySection /> 
        <InnovationSection /> 
        <Products />
        <Features />
        <RazorpayX />
        <DeveloperSection /> 
        <NoCodeProducts />

      </main>

      {/* ⭐ Footer also inside main wrapper */}
      <Footer />
    </div>
  );
}
