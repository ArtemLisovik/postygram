/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                revealButton: {
                    '0%': {transform: 'scale(0)'},
                    '50%': {transform: 'scale(1.2)'},
                    '100%': {transform: 'scale(1)'}
                },
                exitButton: {
                    '0%': {transform: 'scale(1)'},
                    '50%': {transform: 'scale(1.2)'},
                    '100%': {transform: 'scale(0)'}
                },
                pulsex: {
                    '0%, 100%': {transform: 'scale(0.4) translate(-50% -50%)'},
                    '50%': {transform: 'scale(2) translate(-50% -50%)'}
                }
            },
            animation: {
                revealButton: 'revealButton 1s ease',
                exitButton: 'exitButton 1s ease',
                pulsex: 'pulsex 1s ease infinite'
            }
        },
    },
    plugins: [],
};
