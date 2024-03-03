'use client';
import { urlFor } from "@/libs/sanity";
import { Image as ImageType } from "@/models/room"
import Image from "next/image"
import { FC, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import styles from "./HotelPhotoGallery.module.scss"

const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({
  photos
}) => {

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false)

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handlePrevious = () => {
    setCurrentPhotoIndex(prevIndex =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex(prevIndex =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  }

  const maximumVisiblePhotos = 4;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;

  return (
    <section className={styles.photoGallery}>
      <div className="container">
        <div className="grid md:grid-cols-2 relative gap-5 px-3">
          <div className="h-[540px] relative rounded-2xl overflow-hidden">
            <div className="hidden md:flex justify-center items-center w-full h-full">
              <Image
                src={urlFor(photos[0]).url()}
                alt={`Room photo ${currentPhotoIndex + 1}`}
                className="img scale-animation cursor-pointer"
                width={1000}
                height={1000}
                onClick={openModal.bind(this, 0)}
              />
            </div>
            <div className="md:hidden flex justify-center items-center w-full h-full">
              <Image
                src={urlFor(photos[currentPhotoIndex]).url()}
                alt={`Room photo ${currentPhotoIndex + 1}`}
                className="img"
                width={1000}
                height={1000}
                onClick={openModal.bind(this, 0)}
              />
            </div>
          </div>
          <div className="md:hidden flex justify-between items-center">
            <div className="flex space-x-2">
              <FaArrowLeft className="cursor-pointer" onClick={handlePrevious} />
              <FaArrowRight className="cursor-pointer" onClick={handleNext} />
            </div>
            <span>
              {currentPhotoIndex + 1} / {photos.length}
            </span>
          </div>
          <div className="hidden md:grid grid-cols-2 h-full gap-5">
            {displayPhotos.map((photo, index) => (
              <div
                key={index}
                className="cursor-pointer h-64 rounded-2xl overflow-hidden"
              >
                <Image
                  src={urlFor(photo).url()}
                  alt={`Room photo ${index + 2}`}
                  className="img scale-animation"
                  width={1000}
                  height={1000}
                  // onClick={openModal.bind(this, index + 1)}
                />
              </div>
            ))}
            {remainingPhotosCount > 0 && (
              <div
                className="cursor-pointer relative h-64 rounded-2xl overflow-hidden"
                onClick={openModal.bind(this, maximumVisiblePhotos)}
              >
                <Image
                  src={urlFor(photos[maximumVisiblePhotos]).url()}
                  alt={`Room photo ${maximumVisiblePhotos}`}
                  className="img"
                  width={1000}
                  height={1000}
                />
                <div
                  className="absolute cursor-pointer text-white inset-0 flex justify-center bg-[rgba(0,0,0,0.5)] items-center text-2xl"
                >
                  + {remainingPhotosCount}
                </div>
              </div>
            )}
          </div>
          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
              <div className="h-[75vh] w-[320px] md:w-[720px] relative">
                <Image
                  src={urlFor(photos[currentPhotoIndex]).url() || ""}
                  alt={`Room photo ${currentPhotoIndex + 1}`}
                  className="img"
                  width={1000}
                  height={1000}
                />
                <div className="flex justify-between items-center py-3">
                  <div className="flex space-x-2 items-center text-white">
                    <FaArrowLeft className="cursor-pointer" onClick={handlePrevious} />
                    <FaArrowRight className="cursor-pointer" onClick={handleNext} />
                  </div>
                  <span className="text-white text-sm">
                    {currentPhotoIndex + 1} / {photos.length}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white text-lg"
                >
                  <MdCancel
                    className="font-medium text-tertiary-dark text-2xl cursor-pointer"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HotelPhotoGallery