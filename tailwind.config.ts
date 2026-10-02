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
        surface: '#f7f7f4',
        panel: '#ffffff',
        panelContrast: '#f0f2ee',
        accent: '#285b47',
        accentSoft: '#dce8df',
        glow: 'rgba(40, 91, 71, 0.08)',
        muted: '#59665f'
      },
      boxShadow: {
        glow: '0 8px 24px rgba(23, 35, 30, 0.06)',
        panel: '0 8px 28px rgba(23, 35, 30, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
