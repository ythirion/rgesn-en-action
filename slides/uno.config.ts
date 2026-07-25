import { defineConfig } from 'unocss'

// Palette extraite de img/rgesn-en-action.webp (bannière de l'atelier)
export default defineConfig({
  theme: {
    colors: {
      navy: {
        DEFAULT: '#3B5A8B',
        light: '#5B7BAD',
      },
      gold: {
        DEFAULT: '#E8C468',
        dark: '#C9A23E',
      },
      accent: {
        DEFAULT: '#D9121A',
      },
    },
  },
})
