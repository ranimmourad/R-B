import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5C1A1B",
          50: "#FAF3E8",
          100: "#F5EFE0",
          200: "#E8C9C9",
          300: "#C97A7C",
          500: "#8A2728",
          700: "#5C1A1B",
          800: "#411213",
          900: "#2A0B0C",
          cream: "#F5EFE0",
          ink: "#1A1A1A",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.15em",
      },
    },
  },
  plugins: [],
} satisfies Config;
