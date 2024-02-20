import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "Josefin": ["Josefin Sans"],
      },
      colors:{
        "cb-start":"#2E8BF5",
        "cb-end": "#22BBDD"
      }
    },
  },
  plugins: [],
} satisfies Config

