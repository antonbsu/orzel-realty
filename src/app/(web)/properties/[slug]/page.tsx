'use client';

import useSWR from 'swr';
import toast from 'react-hot-toast';
import { FaArrowsToCircle, FaLocationDot, FaHouseCircleCheck, FaCoins, FaElevator, FaMoneyBill, FaBoxArchive, FaChalkboard, FaSquareParking } from "react-icons/fa6";
// import PropertyPhotoGallery from '@/components/PropertyPhotoGallery/PropertyPhotoGallery';
// import BookPropertyCta from '@/components/BookPropertyCta/BookPropertyCta';
import HotelPhotoGallery from '@/components/HotelPhotoGallery/HotelPhotoGallery';
import LoadingSpinner from '../../loading';
import { getProperty } from '@/libs/apis';
import { PortableText } from '@portabletext/react'

import styles from "../../../PageStyles.module.scss";
import Contact from '@/components/Contact/Contact';
import { RichText } from '@/components/RichText/RichText';

const PropertyPage = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchProperty = async () => getProperty(slug);

  const { data: property, error, isLoading } = useSWR('/api/property', fetchProperty);

  if (error) throw new Error('Cannot fetch data');
  if (typeof property === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  if (!property) return <LoadingSpinner />;

  const scrollToSectionMap = () => {
    // Найдите элемент с указанным id
    const sectionElement = document.getElementById('map');
    if (sectionElement) {
      // Вычислите позицию элемента относительно верхней части страницы
      const offset = sectionElement.offsetTop;
      // Выполните плавный скролл
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.property}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <h1 className={styles.propertyTitle}>
              {property.name} ({property.area} m. kw.)
            </h1>
            <HotelPhotoGallery photos={property.images} />
            <section className={styles.propertyDetails}>
                <div className='md:col-span-8 md:w-full'>
                  <div>
                    <div className='mb-11'>
                    <a className={styles.scrollToMap} onClick={() => scrollToSectionMap()}>
                      <FaLocationDot fontSize="0.8rem" /> {property.address}, {property.district}, {property.city}
                    </a>
                    <div className={styles.propertyData}>
                      <FaArrowsToCircle fontSize="1rem" color="#48368d" />
                      <p className={styles.propertyDataText}>
                        Powierzchnia: <span className={styles.data}>{property.area} m²</span>
                      </p>
                    </div>
                    <div className={styles.propertyData}>
                      <FaHouseCircleCheck fontSize="1rem" color="#48368d" />
                      <p className={styles.propertyDataText}>
                        Liczba pokoi: <span className={styles.data}>{property.rooms}</span>
                      </p>
                    </div>
                    <div className={styles.propertyData}>
                      <FaElevator fontSize="1rem" color="#48368d" />
                      <p className={styles.propertyDataText}> 
                        Piętro: <span className={styles.data}>{property.floor}</span>
                      </p>
                    </div>
                    <div className={styles.propertyData}>
                      <FaMoneyBill fontSize="1rem" color="#48368d" />
                      <p className={styles.propertyDataText}>
                        Kaucja: <span className={styles.data}>{property.deposit?.toLocaleString('pl-PL')}</span>
                      </p>
                    </div>
                    <div className={styles.propertyData}>
                      <FaBoxArchive fontSize="1rem" color="#48368d" />
                      <p className={styles.propertyDataText}>
                        Umeblowany: <span className={styles.data}>{property.furnished ? 'tak' : 'nie'}</span>
                      </p>
                    </div>
                    <div className={styles.propertyData}>
                      <FaChalkboard fontSize="1rem" color="#48368d" />
                      <p className={styles.propertyDataText}>
                        Balkon / Taras / Ogród: <span className={styles.data}>{property.balconyOrTerrace}</span>
                      </p>
                    </div>
                    <div className={styles.propertyData}>
                      <FaSquareParking fontSize="1rem" color="#48368d" />
                      <p className={styles.propertyDataText}>
                        Parking: <span className={styles.data}>{property.parking ? 'tak' : 'nie'}</span>
                      </p>
                    </div>
                    </div>
                    <div className='mb-11'>
                      <h2 className={styles.propertySubtitle}>Opis</h2>
                      <PortableText
                        value={property?.body}
                        components={RichText}
                      />
                    </div>
                    <section id='map' className='w-full h-[400px]'>
                      <iframe
                        className='w-full h-[400px]'
                        loading='lazy'
                        src={`https://maps.google.com/maps?q=${property.location.lat},${property.location.lng}&t=m&z=16&output=embed&iwloc=near`}
                        title={property.name}
                        aria-label={property.name}
                      ></iframe>
                    </section>
                  </div>
                </div>
            </section>
          </div>
          <div className={styles.order}>
           <p className={styles.price}>{property.price.toLocaleString('pl-PL')} zł</p>
            <div className={styles.mb}>
              <p className={styles.propertyDataText}>
                Deweloper: <span className={styles.data}>{property.developer}</span>
              </p>
            </div>
            <div className={styles.mb}>
              <p>{property.shortDescription}</p>
            </div>
            <div className={styles.mb}>
              <p className={styles.propertyDataText}>
                Zadzwoń teraz: <span className={styles.data}>{property.phone}</span>
              </p>
            </div>
            <Contact />
          </div>
      </div>
      </div>
    </div>
  );
};

export default PropertyPage;
