/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Banner": "url('/src/assets/storeProducts.jpg')",
      },
      backgroundSize: {
        "Banner": "cover",
      },
      brightness: {
        50: ".5",
      },
      boxShadow: {
        'right': '15px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

