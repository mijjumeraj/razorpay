import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-[#0d1b3d] text-gray-300 pt-32 pb-14 px-10 rounded-t-3xl overflow-hidden">

      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-20"
        >
          <path
            d="M0,0V27.35C95.21,65,187.46,89.49,321.39,56.26S554.79-2,639.3,0s168.2,26.2,283.46,48.77C1016.72,71.24,1113.71,65.35,1200,27.35V0Z"
            fill="#4f46e5"
          ></path>
        </svg>
      </div>

      {/* GRID CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Partners</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Payment Gateway</li>
            <li>RazorpayX Banking</li>
            <li>Subscriptions</li>
            <li>Invoices</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Developers</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>API Docs</li>
            <li>Integrations</li>
            <li>Webhooks</li>
            <li>SDKs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Blog</li>
            <li>Guides</li>
            <li>Glossary</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Help Center</li>
            <li>Raise a Ticket</li>
            <li>Status</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm px-6">

        <p>© 2024 Razorpay Clone • Made for Project Practice</p>

        <div className="flex items-center gap-4 text-xl mt-4 sm:mt-0">
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaFacebook className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaLinkedin className="cursor-pointer hover:text-white" />
        </div>

      </div>
    </footer>
  );
}
