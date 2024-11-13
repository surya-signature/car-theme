

module.exports = {
  darkMode: 'class', // Ensure this is set to 'class' for class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'black-100': '#000000',
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
      },
    },
  },
  plugins: [],
};
