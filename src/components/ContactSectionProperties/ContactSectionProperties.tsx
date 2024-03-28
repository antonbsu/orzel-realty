import Contact from '../Contact/Contact';
import styles from './ContactSectionProperties.module.scss';

const ContactSectionProperties = () => {
  return (
    <section className={styles.contactSectionProperties}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            
            <p className={styles.description}>
              Nie czekaj, skontaktuj się z naszym doradcą lub wyślij zapytanie poprzez formularz.
            </p>
            <p className={styles.description}>
              Przygotujemy dla Ciebie kilka odpowiednich ofert i odpowiemy na wszystkie Twoje pytania.
            </p>
          </div>
          <div className={styles.form}>
            <div className={styles.formWrapper}>
              <h2 className={styles.title}>Skontaktuj się z nami</h2>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSectionProperties;