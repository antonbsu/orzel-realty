'use client';

import { useState, useEffect } from "react";
import { getReviews } from "@/libs/apis";
import { Review } from "@/models/review";
import Image from "next/image";
import { urlFor } from "@/libs/sanity";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";

import styles from './Reviews.module.scss';

const Reviews = () => {

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews();
        setReviews(reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="h2">Reviews</h2>
        <Swiper
          loop={true}
          modules={[Navigation, EffectCoverflow]}
          navigation={{
            nextEl: '.nextCarouselBtn',
            prevEl: '.prevCarouselBtn',
          }}
          grabCursor={true}
          draggable={true}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          slidesPerView={'auto'} // Set the default slidesPerView to 'auto'
          breakpoints={{
            576: {
              slidesPerView: 'auto', // Override slidesPerView for screens >= 576px
            },
            768: {
              slidesPerView: 2,
            },
            980: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="review">
                <Image
                  src={urlFor(review.personPhoto).url()}
                  alt={review.personName}
                  width={300}
                  height={300}
                  className={styles.photo}
                />
                <h3 className={styles.name}>{review.personName}</h3>
                <p className={styles.position}>{review.personPosition}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="nextCarouselBtn"></div>
          <div className="prevCarouselBtn"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews