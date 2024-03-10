'use client';

import useSWR from 'swr';
import {
  FaArrowsToCircle,
  FaLocationDot,
  FaHouseCircleCheck,
  FaBuilding,
  FaElevator,
  FaMoneyBill,
  FaBoxArchive,
  FaChalkboard,
  FaSquareParking,
  FaPeopleRoof,
  FaHouseFlag,
} from "react-icons/fa6";
import HotelPhotoGallery from '@/components/HotelPhotoGallery/HotelPhotoGallery';
import LoadingSpinner from '../../loading';
import { getProperty } from '@/libs/apis';
import { motion } from 'framer-motion';

import styles from "../../../PageStyles.module.scss";
import Contact from '@/components/Contact/Contact';
import { RichText } from '@/components/RichText/RichText';
import { PortableText } from '@portabletext/react'
import { useState } from 'react';

const PropertyPage = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const [isTextExpanded, setTextExpanded] = useState(false);

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

  const enhancedPhotos = property.iframeUrl ? [{ _type: 'iframe', url: property.iframeUrl }, ...property.images] : property.images;

  return (
    <div className={styles.property}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <h1 className={styles.propertyTitle}>
              {property.name}
            </h1>
            <HotelPhotoGallery photos={property.images} iframeUrl={property.iframeUrl} />
            <section className={styles.propertyDetails}>
                <div className='md:col-span-8 md:w-full'>
                  <div>
                    <div className='mb-11'>
                    <a className={styles.scrollToMap} onClick={() => scrollToSectionMap()}>
                      <FaLocationDot fontSize="0.8rem" /> {property.address}, {property.district}, {property.city}
                    </a>

                    <div className={styles.infoBlockWrapper}>
                      <div className={styles.infoBlock}>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaArrowsToCircle fontSize="1rem" color="#48368d" />
                              <p>Powierzchnia:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.area} m²</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaHouseCircleCheck fontSize="1rem" color="#48368d" />
                              <p>Liczba pokoi:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.rooms} m²</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaBuilding fontSize="1rem" color="#48368d" />
                              <p>Piętro:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.floor}</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaMoneyBill fontSize="1rem" color="#48368d" />
                              <p>Czynsz:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.monthlyRent?.toLocaleString('pl-PL')} zł</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaPeopleRoof fontSize="1rem" color="#48368d" />
                              <p>Forma własności:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.buildingOwnership}</div>
                        </div>
                      </div>
                      <div className={styles.infoBlock}>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaHouseFlag fontSize="1rem" color="#48368d" />
                              <p>Stan wykończenia:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.finishCondition}</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaBoxArchive fontSize="1rem" color="#48368d" />
                              <p>Umeblowany:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.furnished ? 'tak' : 'nie'}</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaChalkboard fontSize="1rem" color="#48368d" />
                              <p>Balkon / Taras / Ogród:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.balconyOrTerrace}</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaSquareParking fontSize="1rem" color="#48368d" />
                              <p>Parking:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.parking ? 'tak' : 'nie'}</div>
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaElevator fontSize="1rem" color="#48368d" />
                              <p>Winda:</p>
                            </div>
                          </div>
                          <div className={styles.itemValue}>{property.buildingElevator ? 'tak' : 'nie'}</div>
                        </div>
                      </div>
                    </div>

                    </div>
                    <div className='mb-11'>
                      <h2 className={styles.propertySubtitle}>Opis</h2>
                      <div style={{ maxHeight: isTextExpanded ? 'none' : '200px', overflow: 'hidden' }}>
                        <PortableText
                          value={property?.body}
                          components={RichText}
                        />
                      </div>
                      {/* Кнопка для раскрытия текста */}
                        <button
                          className={styles.showMoreButton} // Добавьте соответствующие стили для кнопки
                          onClick={() => setTextExpanded(!isTextExpanded)}
                        >
                          {isTextExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
                        </button>
                    </div>
                    <div className={styles.additionalInfo}>
                    <h2 className={styles.propertySubtitle}>Informacje dodatkowe</h2>
                    <div className={styles.infoBlock}>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Rynek</div>
                        <div className={styles.itemValue}>{property.marketType}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Materiał budynku</div>
                        <div className={styles.itemValue}>{property.buildingMaterial}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Rok budowy</div>
                        <div className={styles.itemValue}>{property.buildingYear}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Winda</div>
                        <div className={styles.itemValue}>{property.buildingElevator}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Wyposażenie</div>
                        <div className={styles.itemValue}>{property.furnitureList}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Ogrzewanie</div>
                        <div className={styles.itemValue}>{property.heating}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Media</div>
                        <div className={styles.itemValue}>{property.mediaPayment}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Bezpieczeństwo</div>
                        <div className={styles.itemValue}>{property.security}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Informacje dodatkowe</div>
                        <div className={styles.itemValue}><p>{property.additionalInfo}</p></div>
                      </div>
                    </div>
                    </div>
                    <section id='map' className={styles.propertyMap}>
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
              <p className={styles.shortDescription}>{property.shortDescription}</p>
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
