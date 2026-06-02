import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary — trust navy-blue: buttons, links, icons, section accents
          primary: "#1E4E8C",
          primaryDark: "#143764",
          primaryLight: "#3A6FB0",
          // Secondary — gold: hover, callouts, premium accents
          accent: "#C9A24B",
          accentDark: "#A8842F",
          // Surfaces — deep navy ink scale
          ink: "#0A1A30",
          charcoal: "#0E2238",
          graphite: "#142B45",
          steel: "#1E3A57",
          // Light surfaces
          mist: "#F4F6F9",
          bone: "#E6EBF2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30,78,140,0.28), transparent 70%)",
        "gold-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,162,75,0.18), transparent 70%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(30,78,140,0.45)",
        accent: "0 20px 60px -20px rgba(201,162,75,0.40)",
        ink: "0 30px 80px -30px rgba(5,15,30,0.85)",
        card: "0 20px 50px -25px rgba(10,26,48,0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
