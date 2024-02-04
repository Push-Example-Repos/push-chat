import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "bubble-gum": "#e03dc1",
        purple: "#8247E5",
        "coral-pink": "#FF94a6",
      },

      backgroundImage: {
        "gradient-push": "linear-gradient(225deg, #e03dc1, #8247E5)",
        "gradient-push-light":
          "linear-gradient(to right, #e03dc11a, #8147e51a)",
        "gradient-linear": "linear-gradient(to right, #ffcfd7, #bfa8e8)",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".gradient-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
