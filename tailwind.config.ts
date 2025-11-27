import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Importa o plugin de animação (obrigatório pro shadcn/ui)
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'], // shadcn/ui recomenda isso
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/**/*.{ts,tsx,js,jsx,mdx}',
    './pages/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
    // caso tenha adicionado componentes do shadcn em outra pasta:
    './src/components/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        mid: 'var(--color-mid)',
        warm: 'var(--color-warm)',
        soft: 'var(--color-soft)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [animate], // ← ESSA LINHA É OBRIGATÓRIA!
}

export default config