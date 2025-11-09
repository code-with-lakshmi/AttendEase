// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff', // main blue
          50:  '#e9f2ff',
          100: '#d6e9ff',
        },
        surface: '#ffffff',
        muted: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        border: '#dee2e6',
        heading: '#343a40'
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 6px 18px rgba(20,24,40,0.06)',
      },
      borderRadius: {
        'xl': '12px'
      }
    }
  },
  plugins: [],
}