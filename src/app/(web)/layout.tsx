import './globals.css'
import { Poppins, Manrope } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Toast from '@/components/Toast/Toast'
import Navbar from '@/components/Navbar/Navbar'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: '--font-poppins',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: '--font-manrope',
})

export const metadata = {
  title: 'Orzeł Realty - Agencja Nieruchomości',
  description: 'Orzeł Realty to agencja nieruchomości, która pomoże Ci znaleźć idealną nieruchomość dla Ciebie. Posiadamy szeroką gamę nieruchomości na sprzedaż i wynajem.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={manrope.className}>
            <Toast />
            <main className='font-normal'>
              {/* <Header /> */}
              <Navbar />
              {children}
              <Footer />
            </main>
      </body>
    </html>
  )
}