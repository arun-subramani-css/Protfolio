/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  corePlugins: {
    // Avoid overriding Chakra UI / existing CSS base resets
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        dark: "#0B0B0B",
        background: "#0B0B0B",
        border: "#2B2B2B",
        card: {
          DEFAULT: "#141414",
          foreground: "#F5F5F5",
        },
        popover: {
          DEFAULT: "#1C1C1C",
          foreground: "#F5F5F5",
        },
        primary: {
          DEFAULT: "#F5F5F5",
          foreground: "#0B0B0B",
        },
        secondary: {
          DEFAULT: "#1C1C1C",
          foreground: "#F5F5F5",
        },
        muted: {
          DEFAULT: "#1C1C1C",
          foreground: "#A3A3A3",
        },
        brand: {
          bg: "#0B0B0B",
          card: "#141414",
          elevated: "#1C1C1C",
          border: "#2B2B2B",
          text: "#F5F5F5",
          secondary: "#A3A3A3",
          muted: "#737373",
          blue: "#3B82F6",
          purple: "#A855F7",
          green: "#10B981",
          amber: "#F59E0B",
          pink: "#EC4899",
          darkGray: "#202020",
          mediumGray: "#383838",
          lightGray: "#D4D4D4",
        },
      },
    },
  },
  plugins: [],
};
