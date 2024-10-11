/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#0077cc",
        secondary: "#6c757d",
        brandYellow: "#ffc107",
        brandGreen: "#28a745",
        brandRed: "#dc3545",
        brandBlue: "#007bff",
        brandWhite: "#fff",
      },
      container:{
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          
        }

      }
    },
  },
  plugins: [],
}
