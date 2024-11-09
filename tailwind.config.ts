import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)',
        'gradient-hover': 'linear-gradient(45deg, #3f0028, #582300)',
        'gradient-text': 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
      },
      backgroundClip: {
        text: 'text', // Required for text gradients
      },
      textFillColor: {
        transparent: 'transparent', // Helps with proper gradient rendering on text
      },
    },
  },
  plugins: [],
} satisfies Config;
