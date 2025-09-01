import localFont from 'next/font/local'

export const bricolageGrotesqueFont = localFont({
  src: '@/fonts/BricolageGrotesque.ttf',
  variable: '--font-primary', // crea una CSS variable
  display: 'swap',
})

export const robotoFont = localFont({
  src: '@/fonts/Roboto.ttf',
  variable: '--font-secondary', // crea una CSS variable
  display: 'swap',
})
