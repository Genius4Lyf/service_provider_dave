/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#818cf8',
                    DEFAULT: '#4f46e5',
                    dark: '#3730a3',
                },
                surface: {
                    light: '#f8fafc',
                    DEFAULT: '#f1f5f9',
                    dark: '#e2e8f0',
                },
                text: {
                    primary: '#1e293b',
                    secondary: '#64748b',
                    muted: '#94a3b8',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Buttler', 'serif'], // Placeholder for premium font
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
