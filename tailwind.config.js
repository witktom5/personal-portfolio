module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-100': 'hsl(210, 95%, 99%)',
          'base-200': 'hsl(210, 75%, 93%)',
          'base-300': 'hsl(213, 100%, 91%)',
          info: 'hsl(214, 55%, 58%)',
          primary: 'hsl(214, 70%, 50%)',
        },
        night: {
          ...require('daisyui/src/colors/themes')['[data-theme=night]'],
          info: 'hsl(221, 48%, 4%)',
          primary: 'hsl(220, 50%, 30%)',
          'primary-content': '#B3C5EF',
          'accent-content': '#000000',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'night',
  },
};
