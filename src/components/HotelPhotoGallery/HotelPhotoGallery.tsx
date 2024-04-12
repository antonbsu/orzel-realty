'use client';
import { urlFor } from "@/libs/sanity";
import { Image as ImageType } from "@/models/room";
import Image from "next/image";
import { FC, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import styles from "./HotelPhotoGallery.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Обновляем тип ImageType для поддержки iframe
type ExtendedImageType = ImageType | { _type: 'iframe', url: string };

type HotelPhotoGalleryProps = {
  photos: ImageType[];
  iframeUrl?: string; // Добавьте новый пропс iframeUrl
};

const HotelPhotoGallery: FC<HotelPhotoGalleryProps> = ({
  photos: initialPhotos, iframeUrl
}) => {
  // Сначала создаем массив фотографий, затем, если есть iframeUrl, добавляем iframe в начало
  let photos: ExtendedImageType[] = [...initialPhotos];
  if (iframeUrl) {
    const iframe: ExtendedImageType = { _type: 'iframe', url: iframeUrl };
    photos.unshift(iframe);
  }

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePrevious = () => {
    setCurrentPhotoIndex(prevIndex => prevIndex === 0 ? photos.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentPhotoIndex(prevIndex => prevIndex === photos.length - 1 ? 0 : prevIndex + 1);
  };

  const maximumVisiblePhotos = 3;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(0, maximumVisiblePhotos);
  const remainingPhotosCount = totalPhotos > maximumVisiblePhotos ? totalPhotos - maximumVisiblePhotos : 0;

  function isIframe(photo: ExtendedImageType): photo is { _type: 'iframe', url: string } {
    return (photo as any)._type === 'iframe';
  }

  return (
    <section className={styles.photoGallery}>
      <div className={styles.wrapper}>
        <div className={styles.firstRow}>
          {isIframe(photos[0]) ? (
            <div onClick={() => openModal(0)} className={styles.iframeContainer}>
              <div className={styles.iframeOverlay}></div>
              <iframe src={iframeUrl} allowFullScreen className={styles.iframeMini}></iframe>
            </div>
          ) : (
            <Image src={urlFor(photos[0]).url()} alt="Photo 1" className={styles.imageMini} width={1000} height={1000} onClick={() => openModal(0)} />
          )}
        </div>
        <div className={styles.secondRow}>
          {photos.slice(1, maximumVisiblePhotos).map((photo, index) => (
            <div key={index + 1} className={styles.sectionRowPhoto} onClick={() => openModal(index + 1)}>
              <Image src={urlFor(photo).url()} alt={`Photo ${index + 2}`} className={styles.photoImage} width={1000} height={1000} />
            </div>
          ))}
          {remainingPhotosCount > 0 && (
            <div className={styles.remainingCount} onClick={() => openModal(maximumVisiblePhotos)}>
              <div className={styles.remainingOverlay}>
                +{remainingPhotosCount} więcej
              </div>
            </div>
          )}
        </div>
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
            <div className="h-[75vh] w-[320px] md:w-[720px] relative overflow-hidden">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.nextBtnNews',
                  prevEl: '.prevBtnNews',
                }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => setCurrentPhotoIndex(swiper.activeIndex)}
                initialSlide={currentPhotoIndex}
              >
                {photos.map((photo, index) => (
                  <SwiperSlide
                    className={styles.swiperSlide}
                    key={index}
                  >
                    {isIframe(photo) ? (
                      <iframe src={photo.url} frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
                    ) : (
                      <Image src={urlFor(photo).url()} alt={`Photo ${index + 1}`} className="img" width={1000} height={1000} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="navButtonsGallery">
                <button className="prevBtnNews">
                  <FaChevronLeft color="#fff" fontSize="1.5em" />
                </button>
                <button className="nextBtnNews">
                  <FaChevronRight color="#fff" fontSize="1.5em" />
                </button>
              </div>
              <button onClick={closeModal} className="absolute top-2 right-2 text-white text-lg z-20">
                <MdCancel className="text-2xl cursor-pointer" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelPhotoGallery;
