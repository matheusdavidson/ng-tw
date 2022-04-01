const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: ['projects/sandbox/src/**/*.{html,ts,scss}', 'projects/sandbox/src/**/*.{html,ts}', 'projects/ng-tw/src/**/*.{html,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['"Inter"'],
        },
        extend: {
            colors: {
                primary: { ...colors.indigo, DEFAULT: colors.indigo[500] },
                secondary: { ...colors.pink, DEFAULT: colors.pink[500] },
                danger: { ...colors.red, DEFAULT: colors.red[500] },
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            backgroundColor: ['disabled'],
        },
    },
    plugins: [],
};
