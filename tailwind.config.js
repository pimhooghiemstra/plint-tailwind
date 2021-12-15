const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
                'oswald': ['Oswald', 'sans-serif']
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'green': {
                100: '#eef7ee',
                200: '#dbf8ac',
                'old': '#1da025',
                500: '#53975e',
            },
            'purple': {
                100: '#f3f4f7',
                200: '#e8e8f1',
                300: '#43408a',
                500: '#1D197B',
            },
            'grey': '#8b8b94',
            'white': '#ffffff'
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
