/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        "soft-grey": "var(--soft-grey)",
        "trench-kid100": "var(--trench-kid100)",
        "trench-kid200": "var(--trench-kid200)",
        "trench-kid300": "var(--trench-kid300)",
        "trench-kid400": "var(--trench-kid400)",
        "trench-kid50": "var(--trench-kid50)",
        "trench-kid500": "var(--trench-kid500)",
        "trench-kid600": "var(--trench-kid600)",
        "trench-kid700": "var(--trench-kid700)",
        "trench-kid800": "var(--trench-kid800)",
        "trench-kid900": "var(--trench-kid900)",
        white: "var(--white)",
        "trench-kid099": "var(--trench-kid099)",
      },
      fontFamily: {
        custom: ['Louis George Cafe', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url('/src/assets/hero.png')",

        'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow: {
        'head': '0 0.375rem 0.875rem #0000001a',
        '3xl': '0px 4px 6px 0px rgba(0, 0, 0, 0.04)',
        '4xl': '2.489px 2.489px 13.689px 0px rgba(0, 0, 0, 0.08);',
        '5xl': '2.309px 4.619px 14px 0px rgba(0, 0, 0, 0.10)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}

