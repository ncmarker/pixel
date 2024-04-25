/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 10px rgba(255, 255, 255, 0.5)',
        light: '0 0 12px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
}

