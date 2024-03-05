'use client';

import { getLatestCommercial } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";
import LatestProperty from "../LatestProperty/LatestProperty";

import styles from './LatestCommercialProperties.module.scss';

const LatestCommercialProperties = () => {
  const [latestCommercialProperties, setLatestCommercialProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchLatestCommercialProperties = async () => {
      try {
        const properties = await getLatestCommercial();
        setLatestCommercialProperties(properties);
      } catch (error) {
        console.error('Error fetching latest properties:', error);
      }
    };

    fetchLatestCommercialProperties();
  }, []);

  return (
    <section className={styles.latestCommercialProperties}>
      <h2 className="h2">Nieruchomość komercyjna</h2>
      <ul className={styles.latestCommercialPropertiesWrapper}>
        {latestCommercialProperties.map((property) => (
          <li key={property._id}>
            <LatestProperty property={property} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestCommercialProperties