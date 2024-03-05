"use client";

import { getLivingRent } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";

import styles from "../../PageStyles.module.scss";
import LatestProperty from "@/components/LatestProperty/LatestProperty";

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
    <section className={styles.propertiesSection}>
      <div className="container">
        <h2 className="h2">Wynajem lokali mieszkalnych</h2>
        <div>
          <ul className={styles.propertiesWrapper}>
            {livingRentProperties.map((property) => (
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