/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#228B22',
        'custom-red': '#FF0000',
      },
      backgroundImage: {
        'crypto-pattern': "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832')",
      },
    },
  },
  plugins: [],
}