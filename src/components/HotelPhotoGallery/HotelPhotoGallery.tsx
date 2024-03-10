'use client';
import { urlFor } from "@/libs/sanity";
import { Image as ImageType } from "@/models/room";
import Image from "next/image";
import { FC, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import styles from "./HotelPhotoGallery.module.scss";

// Обновляем тип ImageType для поддержки iframe
type ExtendedImageType = ImageType | { _type: 'iframe', url: string };

type HotelPhotoGalleryProps = {
  photos: ImageType[];
  iframeUrl?: string; // Добавьте новый пропс iframeUrl
};

const HotelPhotoGallery: FC<HotelPhotoGalleryProps> = ({
  photos: initialPhotos, iframeUrl
}) => {
  const iframeSrc = "https://my.matterport.com/show/?m=i6uCTNPjBeq";
  const iframe: ExtendedImageType = { _type: 'iframe', url: iframeSrc };

  // Вставляем iframe в начало массива фотографий
  const photos = [iframe, ...initialPhotos] as ExtendedImageType[];

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
        {/* Первый элемент в своём ряду */}
        <div className={styles.firstRow}>
          {isIframe(photos[0]) ? (
            <div onClick={() => openModal(0)} className={styles.iframeContainer}>
              {/* Здесь может быть ваше превью для iframe */}
              <div className={styles.iframeOverlay}></div>
              <iframe src={iframeUrl} allowFullScreen className={styles.iframeMini}></iframe>
          </div>
          ) : (
            <Image src={urlFor(photos[0]).url()} alt="Photo 1" className={styles.imageMini} width={1000} height={1000} onClick={() => openModal(0)} />
          )}
        </div>
        {/* Второй ряд для оставшихся фотографий */}
        <div className={styles.secondRow}>
          {photos.slice(1, maximumVisiblePhotos).map((photo, index) => (
            <div key={index + 1} className={styles.sectonRowPhoto} onClick={() => openModal(index + 1)}>
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
        {/* {displayPhotos.map((photo, index) => (
          <div key={index} className="cursor-pointer h-[200px] rounded-2xl overflow-hidden" onClick={() => openModal(index)}>
            {isIframe(photo) ? (
              // Рендер превью для iframe, если нужно использовать кастомное изображение или иконку
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src="https://images.unsplash.com/photo-1682695795931-a546abdb6733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt="3D tour preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ) : (
              <Image src={urlFor(photo).url()} alt={`Photo ${index + 1}`} className="img scale-animation" width={1000} height={1000} />
            )}
          </div>
        ))}
        {remainingPhotosCount > 0 && (
          <div className="cursor-pointer relative h-[200px] rounded-2xl overflow-hidden" onClick={() => openModal(maximumVisiblePhotos)}>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center text-white text-2xl">
              +{remainingPhotosCount}
            </div>
          </div>
        )} */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
            <div className="h-[75vh] w-[320px] md:w-[720px] relative">
              {isIframe(photos[currentPhotoIndex]) ? (
                <iframe src={photos[currentPhotoIndex].url} frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
              ) : (
                <Image src={urlFor(photos[currentPhotoIndex]).url() || ""} alt={`Photo ${currentPhotoIndex + 1}`} className="img" width={1000} height={1000} />
              )}
              <div className="absolute -bottom-12 left-0 p-4 flex justify-between w-full">
                <FaArrowLeft className="cursor-pointer text-white text-2xl" onClick={handlePrevious} />
                <FaArrowRight className="cursor-pointer text-white text-2xl" onClick={handleNext} />
              </div>
              <button onClick={closeModal} className="absolute top-2 right-2 text-white text-lg">
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
