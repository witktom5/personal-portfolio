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
          'base-200': 'hsl(210, 75%, 83%)',
          'base-300': 'hsl(213, 40%, 88%)',
          info: 'hsl(214, 70%, 62%)',
        },
        night: {
          ...require('daisyui/src/colors/themes')['[data-theme=night]'],
          info: 'hsl(221, 48%, 4%)',
          'primary-content': '#B3C5EF',
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
