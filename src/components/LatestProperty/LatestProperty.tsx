import { urlFor } from "@/libs/sanity";
import { Property } from "@/models/property";
import Image from "next/image";

import styles from './LatestProperty.module.scss';
import Link from "next/link";

type LatestPropertyProps = {
  property: Property;
};

const LatestProperty: React.FC<LatestPropertyProps> = ({ property }) => {
  return (
    <Link
      href={`/properties/${property.slug.current}`}
      className={styles.latestProperty}
    >
      <Image
        src={urlFor(property.images[0]).url()}
        alt={property.name}
        width={500}
        height={400}
        className={styles.latestPropertyImage}
      />
      <div className={styles.latestPropertyData}>
        <h3 className={styles.latestPropertyTitle}>{property.name.slice(0, 25)}...</h3>
        <p className={styles.latestPropertyLocation}>{property.city}</p>
        <p className={styles.latestPropertyPrice}>{property.price.toLocaleString('pl-PL')} zł</p>
      </div>
      {/* Добавьте другие свойства, которые вы хотите отобразить */}
    </Link>
  );
};

export default LatestProperty;