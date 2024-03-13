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
            <div className={styles.footerData}>
              <p>01-234, Warszawa,</p>
              <p>ul. Marcina Kasprzaka 31/126</p>
            </div>
            <div className={styles.footerData}>
              <p>NIP: 5223275251</p>
              <p>REGON: 526756570</p>
            </div>
            <div className={styles.footerData}>
              <div className={styles.footerDataWrapper}>
                <BsTelephoneOutbound />
                <p className='ml-2'>+48 667 240 191</p>
              </div>
            </div>
          </div>

          <div className={`${styles.textRight} ${styles.footerColumn}`}>
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
                  src="/images/orzel-realty-logo-2.png"
                  width={250}
                  height={250}
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