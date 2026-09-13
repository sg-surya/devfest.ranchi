/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gdgBlue: "#4285F4",
        gdgRed: "#EA4335",
        gdgYellow: "#FBBC05",
        gdgGreen: "#34A853",
        ranchiGreen: "#0D2818",
        ranchiTerra: "#C84B31",
        ranchiSand: "#FFFBF0",
        ranchiCream: "#FFF8E7",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        spinSlow: "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}

