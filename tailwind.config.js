/* eslint-disable prettier/prettier */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            transitionProperty: {
                width: "width",
                height: "height",
                spacing: "margin, spacing",
            },
            spacing: {
                68: "17rem",
                104: "26rem",
                120: "30rem",
                140: "35rem",
                160: "40rem",
                180: "45rem",
                240: "60rem",
                full: "100%",
            },
            minHeight: {
                8: "2rem",
                24: "6rem",
                50: "12.5rem",
                240: "60rem",
            },
            colors: {
                almond: {
                    50: "#fefdfc",
                    100: "#fdfcfa",
                    200: "#fbf7f2",
                    300: "#f9f2ea",
                    400: "#f4e8da",
                    500: "#EFDECA",
                    600: "#d7c8b6",
                    700: "#b3a798",
                    800: "#8f8579",
                    900: "#756d63",
                },
                lonestar: {
                    50: "#f8f2f2",
                    100: "#f0e6e6",
                    200: "#dac0c0",
                    300: "#c49a9a",
                    400: "#974f4f",
                    500: "#6b0303",
                    600: "#600303",
                    700: "#500202",
                    800: "#400202",
                    900: "#340101",
                },
                sand: {
                    50: "#d8c0ae",
                    100: "#ceb6a4",
                    200: "#c4ac9a",
                    300: "#baa290",
                    400: "#b09886",
                    500: "#a68e7c",
                    600: "#9c8472",
                    700: "#927a68",
                    800: "#88705e",
                    900: "#7e6654",
                },
            },
            fontSize: {
                "3xs": "10px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
