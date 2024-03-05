"use client";

import { getCommercialRent } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";

import styles from "../../PageStyles.module.scss";
import LatestProperty from "@/components/LatestProperty/LatestProperty";

const LivingRentPage = () => {

  const [comRentProperties, setComRentProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchLivingRentProperty = async () => {
      try {
        const properties = await getCommercialRent();
        setComRentProperties(properties);
      } catch (error) {
        console.error('Error fetching living rent properties:', error);
      }
    };

    fetchLivingRentProperty();
  }, []);

  return (
    <section className={styles.propertiesSection}>
      <div className="container">
        <h2 className="h2">Wynajem lokali komercyjnych</h2>
        <div>
          <ul className={styles.propertiesWrapper}>
            {comRentProperties.map((property) => (
              <li key={property._id}>
                <LatestProperty property={property} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LivingRentPage;