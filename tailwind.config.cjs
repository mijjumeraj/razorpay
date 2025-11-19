/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        /* ⭐ Fade In Up (Features + Products ke liye) */
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },

        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0px)" },
        },

        cardBounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",

        /* ⭐ Products + Features ke liye */
        fadeInUp: "fadeInUp 0.6s ease-out",

        wave: "wave 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        cardBounce: "cardBounce 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
module.exports = {
  darkMode: "class",   // <--- ADD THIS
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: { /* your animations */ },
  },
  plugins: [],
};
