const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                oyster: {
                    '50': '#fefdfd',
                    '100': '#fdfbfb',
                    '200': '#fbf5f5',
                    '300': '#f8efef',
                    '400': '#f2e2e2',
                    '500': '#edd6d6',
                    '600': '#d5c1c1',
                    '700': '#b2a1a1',
                    '800': '#8e8080',
                    '900': '#746969'
                },
                lonestar: {
                    '50': '#f8f2f2',
                    '100': '#f0e6e6',
                    '200': '#dac0c0',
                    '300': '#c49a9a',
                    '400': '#974f4f',
                    '500': '#6b0303',
                    '600': '#600303',
                    '700': '#500202',
                    '800': '#400202',
                    '900': '#340101'
                }
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'),
        require('daisyui'),
    ],
    daisyui: {
        themes: [
          {
            'mytheme': {
              'primary': '#6b0303',
              'primary-focus': '#974f4f',
              'primary-content': '#ffffff',
              'secondary': '#974f4f',
              'secondary-focus': '#f8efef',
              'secondary-content': '#ffffff',
              'accent': '#974f4f',
              'accent-focus': '#974f4f',
              'accent-content': '#ffffff',
              'neutral': '#a68e7c',
              'neutral-focus': '#6b0303',
              'neutral-content': '#ffffff',
              'base-100': '#ffffff',
              'base-200': '#f8efef',
              'base-300': '#edd6d6',
              'base-content': '#400202',
              'info': '#2094f3',
              'success': '#009485',
              'warning': '#ff9900',
              'error': '#f51616',
            },
          },
        ],
      },
};
