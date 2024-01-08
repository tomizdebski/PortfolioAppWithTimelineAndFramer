import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tom | Personal Portfolio',
  description: 'Tom is a software engineer based in Warsaw, PL with 2 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className="bg-[#fbe2e3] absolute top-[-1rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]">b</div>
        <div className="bg-[#dbd7fb] absolute top-[-6rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]">b</div>
        {children}

        </body>
    </html>
  )
}
