/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'sans-serif'],
                playfair: ['var(--font-playfair)', 'serif'],
            },
            colors: {
                cream: '#FDF8F0',
                ink: '#1A1208',
                gold: '#C8860A',
                'gold-light': '#F5D98A',
                'gold-pale': '#FEF7E0',
                saffron: '#E8760A',
                rust: '#8B3A0F',
                'green-deep': '#0F4E2A',
                'green-mid': '#1A7A40',
                'green-light': '#D4EDDF',
                'text-muted': '#6B5C3E',
            },
            animation: {
                marquee: 'marquee 22s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}