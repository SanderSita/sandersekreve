/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 13px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ],
        box: [
          "0 0px 10px rgba(255,255, 255, 0.35)",
          "0 0px 20px rgba(255, 255,255, 0.2)"
        ],
        text: [
          "0 0px 10px #0f638e",
          "0 0px 20px #0f638e"
        ]
      }
    },
  },
  plugins: [],
}

