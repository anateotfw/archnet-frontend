/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JavaScript/TypeScript extensions
    "./src/**/*.html",
    "./public/index.html"          // Include the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Optional: Add DaisyUI config if needed
  daisyui: {
    themes: true, // Enable all themes or specify the ones you want
    // darkTheme: "dark", // Set default dark theme
    base: true, // Apply base styles
    styled: true, // Apply themed styles
    utils: true, // Apply utility styles
  }
}