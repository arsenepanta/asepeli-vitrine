/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F3A6E',    // Bleu [cite: 12]
        secondary: '#2E7586',  // Turquoise [cite: 13]
        gold: '#C99728',       // Accent/Or [cite: 14]
        success: '#1E7A4A',    // Vert [cite: 15]
      },
      fontFamily: {
        title: ['Montserrat', 'Raleway', 'sans-serif'], // [cite: 18]
        body: ['Inter', 'Poppins', 'sans-serif'],      // [cite: 19]
      },
    },
  },
  plugins: [],
}