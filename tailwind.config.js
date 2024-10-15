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
    },
  },
  plugins: [],
}

