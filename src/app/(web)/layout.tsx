import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Toast from '@/components/Toast/Toast'
import Navbar from '@/components/Navbar/Navbar'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Orzel Realty - real estate agency',
  description: 'Orzel Realty is a real estate agency that helps you find the perfect property for you. We have a wide range of properties for sale and rent. Contact us today to find your dream home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>
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