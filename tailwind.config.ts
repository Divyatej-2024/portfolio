import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#07121f',
        panel: '#0d1d2f',
        panelContrast: '#0f2344',
        accent: '#5bd8ff',
        accentSoft: '#125bbf',
        glow: 'rgba(91, 216, 255, 0.15)',
        muted: '#9bb3cc'
      },
      boxShadow: {
        glow: '0 18px 50px rgba(56, 189, 248, 0.16)',
        panel: '0 24px 80px rgba(6, 15, 29, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
