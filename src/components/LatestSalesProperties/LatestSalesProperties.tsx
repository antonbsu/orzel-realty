'use client';

import { getSalesBlock } from "@/libs/apis";
import { Property } from "@/models/property";
import { useEffect, useState } from "react";
import LatestProperty from "../LatestProperty/LatestProperty";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";

import styles from './LatestSalesProperties.module.scss';

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
        <h2 className="h2">Nieruchomości na sprzedaż</h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.nextBtn',
            prevEl: '.prevBtn',
          }}
          grabCursor={true}
          draggable={true}
          // centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            576: {
              slidesPerView: 1, // Override slidesPerView for screens >= 576px
            },
            768: {
              slidesPerView: 2,
            },
            980: {
              slidesPerView: 3,
            },
          }}
        >
          {latestSalesProperties.map((property) => (
            <SwiperSlide key={property._id}>
              <LatestProperty property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestSalesProperties