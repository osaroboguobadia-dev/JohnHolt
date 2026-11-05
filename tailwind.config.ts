/** @type {import('tailwindcss').Config} */
function scale(name: string) {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return steps.reduce((acc, step) => {
    acc[step] = `oklch(var(--${name}-${step}) / <alpha-value>)`;
    return acc;
  }, {} as Record<number, string>);
}

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: scale("background"),
        primary: scale("primary"),
        accent: scale("accent"),
        secondary: scale("secondary"),
        foreground: scale("foreground"),
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        display: ["var(--font-heading)"],
        serif: ["var(--font-heading)"],
        label: ["var(--font-label)"],
      },
    },
  },
  plugins: [],
}