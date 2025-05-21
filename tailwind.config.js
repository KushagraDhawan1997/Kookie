/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dynamic color mapping based on theme selection
        // This will be controlled by the colorAtom in theme/atoms.ts
        primary: ({ theme }) => {
          // We'll use blue as default, but this can be dynamically changed
          return theme("colors.blue");
        },
        success: ({ theme }) => theme("colors.green"),
        warning: ({ theme }) => theme("colors.amber"),
        danger: ({ theme }) => theme("colors.red"),
      },
      // Using Tailwind's font families with our custom fonts
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
  safelist: [
    // Add critical dynamic classes that might not be detected
    {
      pattern: /bg-(primary|success|warning|danger)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /text-(primary|success|warning|danger)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /border-(primary|success|warning|danger)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    // Add Tailwind's standard colors for dynamic theme switching
    {
      pattern: /bg-(blue|green|red|yellow|purple|pink|indigo|amber)-(500|600)/,
      variants: ["hover", "focus"],
    },
  ],
};
