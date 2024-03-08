import Link from "next/link"
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs"
import { BiMessageDetail } from "react-icons/bi"
import styles from './Footer.module.scss';
import Image from "next/image";
import { urlFor } from "@/libs/sanity";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container mx-auto px-4'>

        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <p>123 Road</p>
            <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className='ml-2'>codewithlari</p>
            </div>
            <div className='flex items-center'>
              <BsTelephoneOutbound />
              <p className='ml-2'>000-000-00</p>
            </div>
            <div className='flex items-center pt-4'>
              <BiMessageDetail />
              <p className='ml-2'>codewithlari</p>
            </div>
          </div>

          <div className={`text-right ${styles.footerColumn}`}>
            <div className={styles.footerLinks}>
              <Link 
                href='/wynajem-lokali-mieszkalnych'
                className={styles.footerLink}
                >
                Mieszkania na wynajem
              </Link>
              <Link 
                href='/sprzedaz-lokali-mieszkalnych'
                className={styles.footerLink}
                >
                Mieszkania na sprzedaż
              </Link>
              <Link 
                href='/properties'
                className={styles.footerLink}
                >
                Wszystkie oferty
              </Link>
            </div>
          </div>

          <div className={`text-right ${styles.footerColumn}`}>
            <div className={styles.logoLink}>
                <Image
                  alt="Orzel-Realty Logo"
                  src="/images/logo.webp"
                  width={100}
                  height={100}
                  className={styles.logoImage}
                />
              </div>
          </div>
        </div>
        <div className={styles.copyrigth}>
          <p>&copy; 2024 Orzel Realty. All rights reserved</p>
        </div>
      </div>

      {/* <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' /> */}
    </footer>
  )
}

export default Footer