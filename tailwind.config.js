/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  // This ensures unused CSS is purged in the production build
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom font families matching index.html Google Fonts imports
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      // Custom colors matching the design spec
      colors: {
        bg: {
          DEFAULT: '#0d1117',   // main page background
          surface: '#161b22',   // card / section surfaces
          border: '#30363d',    // subtle borders
        },
        teal: {
          DEFAULT: '#2dd4bf',   // primary accent
          dim: '#0d9488',       // darker accent for active/pressed states
          glow: 'rgba(45,212,191,0.15)', // subtle glow for hover effects
        },
        text: {
          primary: '#e6edf3',   // main text
          muted: '#8b949e',     // secondary / metadata text
        },
      },
      // Custom box shadows for card hover glow effect
      boxShadow: {
        'teal-glow': '0 0 20px rgba(45,212,191,0.15)',
        'teal-glow-lg': '0 0 40px rgba(45,212,191,0.2)',
      },
    },
  },
  plugins: [],
}
