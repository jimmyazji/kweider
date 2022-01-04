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
            transitionProperty: {
                'width': 'width',
                'height': 'height',
            },
            spacing: {
                '68': '17rem',
                '104': '26rem',
                '120': '30rem',
                '140': '35rem',
                '240': '60rem',
                'full': '100%'

            },
            minHeight: {
                '24': '6rem',
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
