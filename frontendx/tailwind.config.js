/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  
  theme: {
    extend: {},
  },
  plugins: [],
}

