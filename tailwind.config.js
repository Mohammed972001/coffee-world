
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'deep-brown': '#3E2723',
        'warm-beige': '#D7CCC8',
        'off-white': '#F5F5F5',
        'gold': '#C5A059',
        'matte-black': '#1A1A1A',
        'cream': '#FAF8F5',
        'dark-gold': '#A8863A',
        'coffee-dark': '#2C1A12',
        'coffee-medium': '#5D4037',
        'coffee-light': '#8D6E63',
        'espresso': '#1B0E07',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        'layered': '0 1px 2px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 12px 24px rgba(0,0,0,0.1)',
        'layered-lg': '0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.12)',
        'gold-glow': '0 0 20px rgba(197,160,89,0.15), 0 0 40px rgba(197,160,89,0.08)',
        'inner-depth': 'inset 0 2px 8px rgba(0,0,0,0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
}
