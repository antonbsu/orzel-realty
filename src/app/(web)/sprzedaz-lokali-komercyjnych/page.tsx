"use client";

import { getCommercialSale } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";

import styles from "../../PageStyles.module.scss";
import LatestProperty from "@/components/LatestProperty/LatestProperty";
import ContactSectionProperties from "@/components/ContactSectionProperties/ContactSectionProperties";

const LivingSalePage = () => {

  const [comSaleProperties, setComSaleProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchLivingRentProperty = async () => {
      try {
        const properties = await getCommercialSale();
        setComSaleProperties(properties);
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
          <h2 className="h2">Sprzedaż lokali mieszkalnych</h2>
          <div>
            <ul className={styles.propertiesWrapper}>
              {comSaleProperties.map((property) => (
                <li key={property._id}>
                  <LatestProperty property={property} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ContactSectionProperties />
    </>
  );
}

export default LivingSalePage;