'use client';

import { getLatestProperties } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";
import LatestProperty from "../LatestProperty/LatestProperty";
import styles from './LatestProperties.module.scss';

const LatestProperties = () => {
  const [latestProperties, setLatestProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchLatestProperties = async () => {
      try {
        const properties = await getLatestProperties();
        setLatestProperties(properties);
      } catch (error) {
        console.error('Error fetching latest properties:', error);
      }
    };

    fetchLatestProperties();
  }, []);

  return (
    <section className={styles.latestProperties}>
      <div className="container">
        <h2 className="h2">Latest Properties</h2>
        <div>
          <ul className={styles.latestPropertiesWrapper}>
            {latestProperties.map((property) => (
              <li key={property._id}>
                <LatestProperty property={property} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LatestProperties