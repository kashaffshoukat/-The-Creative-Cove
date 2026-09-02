/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cove: {
          50: "#fdf8f3",
          100: "#faeee0",
          200: "#f4d9c0",
          300: "#ecbd97",
          400: "#e29a6d",
          500: "#d97f4e",
          600: "#cb6a3e",
          700: "#a85234",
          800: "#87432c",
          900: "#6d3927",
        },
        sage: {
          50: "#f5f7f4",
          100: "#e8eee5",
          200: "#d2ddcd",
          300: "#b0c6a8",
          400: "#8baa80",
          500: "#6e8d62",
          600: "#56714c",
          700: "#455a3d",
          800: "#384932",
          900: "#2f3d2b",
        },
        ink: {
          50: "#f6f6f4",
          100: "#e7e7e3",
          200: "#d1d1cb",
          300: "#b1b1a8",
          400: "#8e8e83",
          500: "#72726a",
          600: "#5d5d56",
          700: "#4d4d48",
          800: "#40403c",
          900: "#33332f",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
