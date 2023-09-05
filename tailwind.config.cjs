/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Borel", "cursive"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      height: {
        "100-dvh": "100dvh",
      },
    },
  },
  plugins: [],
};
