import Contact from '../Contact/Contact';
import styles from './ContactSection.module.scss';
import dynamic from 'next/dynamic';

const ContactSection = () => {

  const MapWithNoSSR = dynamic(() => import("../Map/Map"), {
    ssr: false
  });

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactSectionWrapper}>
        <div className={styles.contactSectionBlock}>
          <div className={styles.mapBlock}>
            <MapWithNoSSR />
          </div>
        </div>
        <div className={styles.contactSectionBlock}>
          <div className={styles.contactFormContainer}>
            <h2 className={styles.contactFormTitle}>Skontaktuj się z nami</h2>
            <p className={styles.contactFormDescription}>
              Podaj swoje dane, a my oddzwonimy tak szybko, jak to możliwe
            </p>
            <div className={styles.formWrapper}>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection