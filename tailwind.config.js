/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./*.html", 
    "./pages/**/*.{html,js}",
  ],

  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      backgroundImage: {
        'onChurchManyCenters': "url('/images/1church-banner.png')",
        'bg_image2': "url('../public/bg.svg')",
        'about_bg': "url('/images/bg5.png')",
        'centers_bg': "url('/images/centers.png')",
        'theBible': "url('/images/the-bible.svg')",
        'leadership_bg': "url('/images/leadership.svg')",
        'give_bg': "url('/images/give.svg')",
        'partner_bg': "url('/images/partnership.svg')",
        'hug': "url('/images/2hugging.svg')",
      },
      colors: {
        'primary': '#47c6fd',
        'secondary': '#0a719e',
        'accent': '#fff000',
        'button': '#ed2024',
        'background': '#eefaff',
        'background2': '#139fdd',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'medium': '68px',
      'super': '260px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}