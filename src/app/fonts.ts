import { Noto_Sans_Javanese, Noto_Sans_Mono } from 'next/font/google'

export const noto = Noto_Sans_Javanese({
    subsets: ['latin'],
    variable: '--font-noto-sans',
    display: 'swap',
})

export const mono = Noto_Sans_Mono({
    subsets: ['latin'],
    variable: '--font-noto-sans-mono',
    display: 'swap',
})
