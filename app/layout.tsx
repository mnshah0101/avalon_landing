import './css/style.css'

import { Inter, Inter_Tight } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const inter_tight = Inter_Tight({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap'
})

export const metadata = {
  title: 'Avalon',
  description: 'The World’s Most Advanced AI Paralegal'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" sizes="180x180" href="/images/icon_logo_white.png"></link>
      <link rel='apple-touch-icon' sizes='180x180' href='/images/icon_logo_black.png'></link>


      <body className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-white text-zinc-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
