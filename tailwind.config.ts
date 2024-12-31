import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#f4e6d5', // Custom primary color
        'secondary': '#3e3128', // secondary color
      },
      textColor:{
        'primary':'#f4e6d5',
        'secondary':'#e1af87',
        'secondary2':'#8B4513'
      }
    },
  },
  plugins: [],
} satisfies Config;
