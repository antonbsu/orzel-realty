import Image from 'next/image';
import styles from './AboutSection.module.scss';

import aboutIcon1 from '../../images/about-1.png';
import aboutIcon2 from '../../images/about-2.png';
import aboutIcon3 from '../../images/about-3.png';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <h2 className={styles.title}>O Nas</h2>
        <div className={styles.aboutWrapper}>
          <div className={styles.leftBlock}>
            <div className={`${styles.contentBlock} ${styles.centerBlock}`}>
              <div className={styles.contentBlockIcon}>
                <Image
                  src={aboutIcon1}
                  alt="Kim jesteśmy Orzeł Realty"
                  width={65}
                  height={65}
                />
              </div>
              <h3 className={styles.contentBlockTitle}>Kim jesteśmy?</h3>
              <p className={styles.contentBlockText}>
                Jesteśmy agencją nieruchomości z wieloletnim doświadczeniem, która łączy ekspertów najwyższej klasy. Naszą misją jest uczynienie procesu kupna, sprzedaży i wynajmu nieruchomości jak najbardziej przejrzystym i wygodnym dla każdego klienta. Cenimy zaufanie i dążymy do tego, aby każda transakcja była korzystna i bezpieczna.
              </p>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.rightBlockWrapper}>
              <div className={styles.contentBlock}>
                <div className={styles.contentBlockIcon}>
                  <Image
                    src={aboutIcon2}
                    alt="Czym się zajmujemy Orzeł Realty"
                    width={65}
                    height={65}
                  />
                </div>
                <h3 className={styles.contentBlockTitle}>Czym się zajmujemy?</h3>
                <p className={styles.contentBlockText}>
                  Oferujemy pełen zakres usług na rynku nieruchomości: od konsultacji i doboru obiektów po prawne wsparcie transakcji i obsługę posprzedażową. Nasze podejście jest indywidualne, dokładnie analizujemy potrzeby klientów i proponujemy rozwiązania idealnie odpowiadające ich zapytaniom.
                </p>
              </div>
              <div className={styles.contentBlock}>
                <div className={styles.contentBlockIcon}>
                  <Image
                    src={aboutIcon3}
                    alt="Dlaczego my Orzeł Realty"
                    width={65}
                    height={65}
                  />
                </div>
                <h3 className={styles.contentBlockTitle}>Dlaczego my?</h3>
                <p className={styles.contentBlockText}>
                  Wybierając nas, zyskujesz nie tylko agencję nieruchomości, ale niezawodnego partnera na wszystkich etapach interakcji z rynkiem nieruchomości. Jesteśmy dumni z naszego doświadczenia i wiedzy, które pozwalają nam zapewniać najwyższy poziom usług. Naszym celem jest Twoje zadowolenie z przeprowadzonej transakcji i komfort na wszystkich etapach współpracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection