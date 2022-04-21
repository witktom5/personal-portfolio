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
          'base-100': 'hsl(24, 100%, 98%)',
          'base-200': 'hsl(20, 100%, 97%)',
          'base-300': 'hsl(25, 75%, 89%)',
          info: '#6f5e53',
        },
        night: {
          ...require('daisyui/src/colors/themes')['[data-theme=night]'],
          info: '#121212',
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
