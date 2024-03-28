"use client";

import { getLivingRent } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";

import styles from "../../PageStyles.module.scss";
import LatestProperty from "@/components/LatestProperty/LatestProperty";
import ContactSectionProperties from "@/components/ContactSectionProperties/ContactSectionProperties";
import Image from "next/image";

import nothingImage from "/src/images/icon-house.png";

const LivingRentPage = () => {

  const [livingRentProperties, setLivingRentProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchLivingRentProperty = async () => {
      try {
        const properties = await getLivingRent();
        setLivingRentProperties(properties);
      } catch (error) {
        console.error('Error fetching living rent properties:', error);
      }
    };

    fetchLivingRentProperty();
  }, []);

  return (
    <>
      <section className={styles.propertiesSection}>
        <div className="container">
          <h2 className="h2">Wynajem lokali mieszkalnych</h2>
          <div>
            {/* Check if livingRentProperties is empty and render accordingly */}
            {livingRentProperties.length > 0 ? (
              <ul className={styles.propertiesWrapper}>
                {livingRentProperties.map((property) => (
                  <li key={property._id}>
                    <LatestProperty property={property} />
                  </li>
                ))}
              </ul>
            ) : (
                <div
                  className='nothing-block'
                >
                  <Image
                    src={nothingImage}
                    alt='Nothing found'
                    width={250}
                    height={250}
                    className="nothing-image"
                  />
                  <h3 className="nothing-text">Ogłoszenia pojawią się tutaj wkrótce</h3>
                </div>
            )}
          </div>
        </div>
      </section>
      <ContactSectionProperties />
    </>
  );
}

export default LivingRentPage;