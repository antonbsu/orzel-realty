'use client';

import { getSalesBlock } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";
import LatestProperty from "../LatestProperty/LatestProperty";

import styles from './LatestSalesProperties.module.scss';
import Link from "next/link";

const LatestSalesProperties = () => {
  const [latestSalesProperties, setLatestSalesProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchLatestSalesProperties = async () => {
      try {
        const properties = await getSalesBlock();
        setLatestSalesProperties(properties);
      } catch (error) {
        console.error('Error fetching latest properties:', error);
      }
    };

    fetchLatestSalesProperties();
  }, []);

  return (
    <section className={styles.latestSalesProperties}>
      <div className="container">
        <h2 className="h2">Mieszkania na sprzedaż</h2>
        <div className={styles.propertiesList}>
          {latestSalesProperties.map((property) => (
            <div key={property._id} className={styles.propertyItem}>
              <LatestProperty property={property} />
            </div>
          ))}
        </div>
        <Link
          href="/mieszkania-na-sprzedaz"
          className={styles.seeAllBtn}
        >
          Zobacz wszystkie
        </Link>
      </div>
    </section>
  );
};

export default LatestSalesProperties