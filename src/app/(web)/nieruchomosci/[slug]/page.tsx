import { Metadata } from "next";
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

import styles from "../../../PageStyles.module.scss";
import Contact from '@/components/Contact/Contact';
import { Property } from "@/models/property";
import PropertyContentBlock from "@/components/PropertyContentBlock/PropertyContentBlock";

import dynamic from "next/dynamic";

const ScrollToMapLink = dynamic(() => import('@/components/ScrollToMapLink/ScrollToMapLink'), { ssr: false });

type Props = {
  params: {
    slug: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project: Property = await getProperty(slug);

  return {
    title: `${project.pageTitle} | Orzeł Realty`,
    description: project.metaDescription,
  };
}

const PropertyPage = async ({ params }: Props) => {
  const slug = params.slug;
  const property: Property = await getProperty(slug);

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
                      <div className={styles.propertyFlexBlock}>
                        <div className={styles.adressBlock}>
                        <FaLocationDot fontSize="0.8rem" />
                        <p className={styles.adressText}>{property.address}, {property.district}, {property.city}&nbsp;</p>
                        </div>
                        <span>|</span>
                        <ScrollToMapLink />
                      </div>
                    <div className={styles.infoBlockWrapper}>
                      <div className={styles.infoBlock}>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaArrowsToCircle fontSize="1rem" color="#48368d" />
                              <p>Powierzchnia:</p>
                            </div>
                          </div>
                          {property.area ? (
                            <div className={styles.itemValue}>{property.area} m²</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaHouseCircleCheck fontSize="1rem" color="#48368d" />
                              <p>Liczba pokoi:</p>
                            </div>
                          </div>
                          {property.rooms ? (
                            <div className={styles.itemValue}>{property.rooms}</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaBuilding fontSize="1rem" color="#48368d" />
                              <p>Piętro:</p>
                            </div>
                          </div>
                          {property.floor ? (
                            <div className={styles.itemValue}>{property.floor}</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaMoneyBill fontSize="1rem" color="#48368d" />
                              <p>Czynsz:</p>
                            </div>
                          </div>
                          {property.monthlyRent ? (
                            <div className={styles.itemValue}>{property.monthlyRent.toLocaleString('pl-PL')} zł</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaPeopleRoof fontSize="1rem" color="#48368d" />
                              <p>Forma własności:</p>
                            </div>
                          </div>
                          {property.buildingOwnership ? (
                            <div className={styles.itemValue}>{property.buildingOwnership}</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}
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
                          {property.finishCondition ? (
                            <div className={styles.itemValue}>{property.finishCondition}</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaBoxArchive fontSize="1rem" color="#48368d" />
                              <p>Umeblowany:</p>
                            </div>
                          </div>
                          {property.furnished ? (
                            <div className={styles.itemValue}>{property.furnished ? 'tak' : 'nie'}</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}                          
                        </div>
                        <div className={styles.infoItem}>
                          <div className={styles.itemKey}>
                            <div className={styles.itemKeyFlex}>
                              <FaChalkboard fontSize="1rem" color="#48368d" />
                              <p>Balkon / Taras / Ogród:</p>
                            </div>
                          </div>
                          {property.balconyOrTerrace ? (
                            <div className={styles.itemValue}>{property.balconyOrTerrace}</div>
                          ) : (
                            <div className={styles.itemNoValue}>Brak danych</div>
                          )}
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
                    <PropertyContentBlock property={property} />
                    </div>
                    <div className={styles.additionalInfo}>
                    <h2 className={styles.propertySubtitle}>Informacje dodatkowe</h2>
                    <div className={styles.infoBlock}>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Rynek</div>
                        {property.marketType ? (
                          <div className={styles.itemValue}>{property.marketType}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Materiał budynku</div>
                        {property.buildingMaterial ? (
                          <div className={styles.itemValue}>{property.buildingMaterial}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Rok budowy</div>
                        {property.buildingYear ? (
                          <div className={styles.itemValue}>{property.buildingYear}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Winda</div>
                        <div className={styles.itemValue}>{property.buildingElevator}</div>
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Wyposażenie</div>
                        {property.furnitureList ? (
                          <div className={styles.itemValue}>{property.furnitureList}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Ogrzewanie</div>
                        {property.heating ? (
                          <div className={styles.itemValue}>{property.heating}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Media</div>
                        {property.mediaPayment ? (
                          <div className={styles.itemValue}>{property.mediaPayment}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Bezpieczeństwo</div>
                        {property.security ? (
                          <div className={styles.itemValue}>{property.security}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
                      </div>
                      <div className={styles.infoItem}>
                        <div className={styles.itemKey}>Informacje dodatkowe</div>
                        {property.additionalInfo ? (
                          <div className={styles.itemValue}>{property.additionalInfo}</div>
                        ) : (
                          <div className={styles.itemNoValue}>Brak danych</div>
                        )}
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
