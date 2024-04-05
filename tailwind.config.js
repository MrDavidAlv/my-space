// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          customColor: '#0a0c10',
        },
        backgroundImage: {
          'hero-home': "url('/src/Assets/img/life/grillo.jpg')",
          'hero-semillero': "url('/src/Assets/img/background/semillero2.png')",
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  