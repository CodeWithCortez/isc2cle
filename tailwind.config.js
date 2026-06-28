/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                white: 'rgb(var(--tw-color-white) / <alpha-value>)',
                black: 'rgb(var(--tw-color-black) / <alpha-value>)',
                gray: {
                    300: 'rgb(var(--tw-color-gray-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-gray-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-gray-500) / <alpha-value>)',
                    600: 'rgb(var(--tw-color-gray-600) / <alpha-value>)',
                },
                isc: {
                    dark: 'rgb(var(--isc-dark) / <alpha-value>)',
                    card: 'rgb(var(--isc-card) / <alpha-value>)',
                    primary: 'rgb(var(--isc-primary) / <alpha-value>)',
                    accent: 'rgb(var(--isc-accent) / <alpha-value>)',
                    neon: 'rgb(var(--isc-neon) / <alpha-value>)',
                    cyan: 'rgb(var(--isc-cyan) / <alpha-value>)',
                    purple: 'rgb(var(--isc-purple) / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['Avenir', '"Avenir Next"', 'Nunito', 'sans-serif'],
                cyber: ['"Gill Sans"', '"Gill Sans MT"', 'Calibri', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
