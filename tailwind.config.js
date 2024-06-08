/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "exp-blue": "#4D869C",
        "exp-light-blue": "#EEF7FF",
        "exp-gray": "#B0CBD4",
        "exp-dark-blue": "#2D3E50",
        "exp-light-gray": "#F4F4F4",
      },
    },
  },
  plugins: [],
};
