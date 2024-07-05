import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-noto-sans)'],
                mono: ['var(--font-noto-sans-mono)'],
            },
            // fontSize: (theme: any) => ({
            //     '9xl': [
            //         '3.563rem',
            //         {
            //             lineHeight: '1.4',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     '8xl': [
            //         '2.813rem',
            //         {
            //             lineHeight: '1.4',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     // h1
            //     h1: [
            //         '2.25rem',
            //         {
            //             lineHeight: '1.4',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     'h1-m': [
            //         '2rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '500',
            //         },
            //     ],
            //     // h2
            //     h2: [
            //         '2rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     'h2-m': [
            //         '1.75rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '500',
            //         },
            //     ],
            //     // h3
            //     h3: [
            //         '1.75rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     'h3-m': [
            //         '1.5rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '500',
            //         },
            //     ],
            //     // h4
            //     h4: [
            //         '1.5rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     'h4-m': [
            //         '1.25rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '500',
            //         },
            //     ],
            //     // h5
            //     h5: [
            //         '1.25rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     'h5-m': [
            //         '1.125rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '500',
            //         },
            //     ],
            //     // h6
            //     h6: [
            //         '1.125rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     'h6-m': [
            //         '1rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '500',
            //         },
            //     ],
            //     base: [
            //         '1rem',
            //         {
            //             lineHeight: '1.7',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     sm: [
            //         '0.875rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '400',
            //         },
            //     ],
            //     xs: [
            //         '0.75rem',
            //         {
            //             lineHeight: '1.5',
            //             letterSpacing: '0.04rem',
            //             fontWeight: '500',
            //         },
            //     ],
            // }),
            // fontSize: [
            //     h1: ['Std-36B-4']
            // ],
            // typography: (theme: any) => ({
            //     DEFAULT: {
            //         class: {
            //             h1:theme('fontSize.h1'),
            //             h2: theme('fontSize.h2'),
            //             h3: theme('fontSize.h3'),
            //             h4: theme('fontSize.h4'),
            //             h5: theme('fontSize.h5'),
            //             h6: theme('fontSize.h6'),
            //             p: theme('fontSize.base'),
            //         },
            //     },
            // }),
        },
    },
    daisyui: {
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'dim',
            'nord',
            'sunset',
        ],
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        // require('@tailwindcss/forms'),
        require('@digital-go-jp/tailwind-theme-plugin'),
    ],
}
export default config
