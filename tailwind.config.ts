import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101820",
        graphite: "#18242f",
        gold: "#c8a35f",
        sand: "#f6f1e8"
      },
      boxShadow: {
        business: "0 24px 70px rgba(16, 24, 32, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
