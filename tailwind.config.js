/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-display': ['Clash Display', 'sans-serif'],
        'clash-grotesk': ['Clash Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A0B1F',
          dark: '#070814',
        },
        gray: {
          "100": "#fafafa",
          "200": "#141416",
          "300": "#121214",
          "400": "#0c0c0f",
          "500": "#010409",
          "600": "#010101",
          "700": "rgba(20, 20, 22, 0.92)",
          "800": "rgba(255, 255, 255, 0.7)",
          "900": "rgba(0, 0, 0, 0.6)",
          "1000": "rgba(255, 255, 255, 0.1)",
        },
        white: "#fff",
        indigo: "#3e2d9b",
        midnightblue: "#13113c",
        darkgray: "#a1a1aa",
        stroke: "#363538",
        black: "#000",
      },
      spacing: {
        "container-gap": "10px",
        "button-size": "36px",
        "button-icon-size": "16px",
      },
      borderRadius: {
        "13xl": "32px",
        "11xl": "30px",
        "3xs": "10px",
        "8xs": "5px",
        sm: "14px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      "23xl": "42px",
      "6xl": "25px",
      "15xl": "34px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
