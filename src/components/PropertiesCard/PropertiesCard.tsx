import { urlFor } from "@/libs/sanity";
import { Property } from "@/models/property";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./PropertiesCard.module.scss";

interface Props {
  property: Property;
}

const PropertiesCard: FC<Props> = (props) => {
  const {
    property: { images, name, price, type, description, slug },
  } = props;

  // Если у вас есть функция для формирования URL изображения, вы можете использовать ее здесь
  // const imageUrl = images.length > 0 ? images[0].url : "/placeholder-image.jpg";

  return (
    <div className={styles.card}>
      <div className="h-60 overflow-hidden">
        <Image
          src={urlFor(images[0]).url()}
          alt={name}
          width={250}
          height={250}
          className="img scale-animation"
        />
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between text-xl font-semibold">
          <p>{name}</p>
          <p>{price.toLocaleString('pl-PL')} zł</p>
        </div>
        <p className="pt-2 text-xs">{type}</p>
        {/* <p className="pt-3 pb-6">{description}</p> */}
        <Link
          href={`/properties/${slug.current}`}
          className={styles.link}
        >
          {/* {isBooked ? "Booked" : "Book Now"} */}
          Pokaż
        </Link>
      </div>
    </div>
  );
};

export default PropertiesCard;
