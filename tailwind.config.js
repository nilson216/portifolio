/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#7c3aed',
        accent: '#22d3ee',
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        glow: 'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.15), transparent 25%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.12), transparent 20%), radial-gradient(circle at 60% 70%, rgba(14,165,233,0.12), transparent 25%)',
      },
      boxShadow: {
        glass: '0 10px 50px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
