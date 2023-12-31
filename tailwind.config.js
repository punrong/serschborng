const defaultTheme = require('tailwindcss/defaultTheme');
const FormKitVariants = require('@formkit/themes/tailwindcss')


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            'sm': '640px',
            'custom-sm': '740px',
            'md': '768px',      
            'lg': '1024px',      
            'xl': '1280px',      
            '2xl': '1536px',
          }
    },

    plugins: [require('@tailwindcss/forms'), require("tw-elements/dist/plugin.cjs"), FormKitVariants],
};
