/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Times New Roman',  'sans-serif'],
        new: ['Urbanist',  'sans-serif'],
      },
      lineHeight: {
        'custom': '29.8px', // Custom line height
      },
    },
  },
  plugins: [],
}

