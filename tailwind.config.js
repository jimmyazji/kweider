const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const svgToDataUri = require('mini-svg-data-uri');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            transitionProperty: {
                'width': 'width',
                'height': 'height',
                'spacing': 'margin, spacing'
            },
            spacing: {
                '68': '17rem',
                '104': '26rem',
                '120': '30rem',
                '140': '35rem',
                '180': '45rem',
                '160': '40rem',
                '240': '60rem',
                'full': '100%'

            },
            minHeight: {
                '24': '6rem',
                '240': '60rem'
            },
            colors: {
                almond: {
                    '50': '#fefdfc',
                    '100': '#fdfcfa',
                    '200': '#fbf7f2',
                    '300': '#f9f2ea',
                    '400': '#f4e8da',
                    '500': '#EFDECA',
                    '600': '#d7c8b6',
                    '700': '#b3a798',
                    '800': '#8f8579',
                    '900': '#756d63'
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
                },
                sand: {
                    "50": "#d8c0ae",
                    "100": "#ceb6a4",
                    "200": "#c4ac9a",
                    "300": "#baa290",
                    "400": "#b09886",
                    "500": "#a68e7c",
                    "600": "#9c8472",
                    "700": "#927a68",
                    "800": "#88705e",
                    "900": "#7e6654"
                }
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: (theme) => ({
                'multiselect-caret': `url("${svgToDataUri(
                  `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`,
                )}")`,
                'multiselect-spinner': `url("${svgToDataUri(
                  `<svg viewBox="0 0 512 512" fill="${theme('colors.green.500')}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`,
                )}")`,
                'multiselect-remove': `url("${svgToDataUri(
                  `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`,
                )}")`,
            }),
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
        require("tailwindcss-flip")
    ],
    daisyui: {
        themes: [{
            'mytheme': {
                'primary': '#6b0303',
                'primary-focus': '#974f4f',
                'primary-content': '#ffffff',
                'secondary': '#974f4f',
                'secondary-focus': '#efdeca',
                'secondary-content': '#ffffff',
                'accent': '#974f4f',
                'accent-focus': '#974f4f',
                'accent-content': '#ffffff',
                'neutral': '#a68e7c',
                'neutral-focus': '#6b0303',
                'neutral-content': '#ffffff',
                'base-100': '#ffffff',
                'base-200': '#efdeca',
                'base-300': '#f9f2ea',
                'base-content': '#400202',
                'info': '#2094f3',
                'success': '#009485',
                'warning': '#ff9900',
                'error': '#f51616',
            },
        }, ],
    },
};
