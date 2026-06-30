/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['Unbounded', 'sans-serif'],
                mono: ['"Azeret Mono"', 'ui-monospace', 'monospace'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                surface: 'hsl(var(--surface))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                brand: {
                    DEFAULT: '#00F5FF',
                    hover: '#22d6e8',
                    soft: 'rgba(0,245,255,0.10)',
                },
                neon: {
                    blue: '#00F5FF',
                    cyan: '#00FFFF',
                    purple: '#8B5CF6',
                    magenta: '#D946EF',
                },
                obsidian: {
                    900: '#020207',
                    800: '#050510',
                    700: '#0A0A18',
                    600: '#10101F',
                    500: '#16162A',
                },
            },
            backgroundImage: {
                'grid-pattern':
                    "linear-gradient(to right, rgba(0,245,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,245,255,0.06) 1px, transparent 1px)",
                'grid-pattern-fine':
                    "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                'radial-glow':
                    "radial-gradient(circle at center, rgba(0,245,255,0.25) 0%, transparent 60%)",
                'scanlines':
                    "repeating-linear-gradient(180deg, rgba(0,245,255,0.04) 0 1px, transparent 1px 3px)",
            },
            keyframes: {
                'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
                'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
                blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
                float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
                'gradient-x': {
                    '0%,100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'pulse-glow': {
                    '0%,100%': { boxShadow: '0 0 0 0 rgba(0,245,255,0.5)' },
                    '50%': { boxShadow: '0 0 30px 6px rgba(0,245,255,0.35)' },
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                'border-rotate': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '300% 50%' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(6px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                blink: 'blink 1s steps(2) infinite',
                float: 'float 6s ease-in-out infinite',
                'gradient-x': 'gradient-x 8s ease infinite',
                'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
                scan: 'scan 3s linear infinite',
                'border-rotate': 'border-rotate 6s linear infinite',
                'fade-in': 'fade-in 0.5s ease-out forwards',
            },
            boxShadow: {
                'neon': '0 0 18px rgba(0,245,255,0.55), 0 0 60px rgba(0,245,255,0.25)',
                'neon-soft': '0 0 12px rgba(0,245,255,0.30)',
                'neon-purple': '0 0 18px rgba(139,92,246,0.55), 0 0 60px rgba(139,92,246,0.25)',
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
};
