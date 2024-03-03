'use client';

import useSWR from 'swr';
import { useState } from 'react';
import axios from 'axios';

import { getProperty } from '@/libs/apis';
import LoadingSpinner from '../../loading';
// import PropertyPhotoGallery from '@/components/PropertyPhotoGallery/PropertyPhotoGallery';
// import BookPropertyCta from '@/components/BookPropertyCta/BookPropertyCta';
import HotelPhotoGallery from '@/components/HotelPhotoGallery/HotelPhotoGallery';
import toast from 'react-hot-toast';

import styles from "../../../PageStyles.module.scss";

const PropertyPage = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const fetchProperty = async () => getProperty(slug);

  const { data: property, error, isLoading } = useSWR('/api/property', fetchProperty);

  if (error) throw new Error('Cannot fetch data');
  if (typeof property === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  if (!property) return <LoadingSpinner />;

  const calcMinCheckoutDate = () => {
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return null;
  };

  const handleBookNowClick = async () => {
    if (!checkinDate || !checkoutDate)
      return toast.error('Please provide checkin / checkout date');

    if (checkinDate > checkoutDate)
      return toast.error('Please choose a valid checkin period');

    const numberOfDays = calcNumDays();

    const propertySlug = property.slug.current;

    try {
      const { data: bookingDetails } = await axios.post('/api/book-property', {
        checkinDate,
        checkoutDate,
        adults,
        children,
        numberOfDays,
        propertySlug,
      });

      // Handle booking confirmation or redirection to payment gateway if needed

      toast.success(`Property booked successfully! Booking ID: ${bookingDetails.bookingId}`);
    } catch (error) {
      console.error('Error: ', error);
      toast.error('An error occurred while booking the property');
    }
  };

  const calcNumDays = () => {
    if (!checkinDate || !checkoutDate) return;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };

  return (
    <section className={styles.property}>
      <HotelPhotoGallery photos={property.images} />

      <div className='container mx-auto mt-20'>
        <div className='md:grid md:grid-cols-12 gap-10 px-3'>
          <div className='md:col-span-8 md:w-full'>
            <div>
              <h2 className='font-bold text-left text-lg md:text-2xl'>
                {property.name} ({property.area} sq. m)
              </h2>
              <div className='mb-11'>
                <h2 className='font-bold text-3xl mb-2'>Property Details</h2>
                <p>City: {property.city}</p>
                <p>District: {property.district}</p>
                <p>Price: {property.price}</p>
                <p>Developer: {property.developer}</p>
                <p>Short Description: {property.shortDescription}</p>
                <p>Phone: {property.phone}</p>
                <p>Type: {property.type}</p>
                <p>Purpose: {property.purpose}</p>
                <p>Property Type: {property.propertyType}</p>
                <p>Area: {property.area} sq. m</p>
                <p>Rooms: {property.rooms}</p>
                <p>Floor: {property.floor}</p>
                <p>Monthly Rent: {property.monthlyRent}</p>
                <p>Deposit: {property.deposit}</p>
                <p>Furnished: {property.furnished ? 'Yes' : 'No'}</p>
                <p>Balcony / Terrace / Garden: {property.balconyOrTerrace}</p>
                <p>Garden: {property.garden ? 'Yes' : 'No'}</p>
                <p>Parking: {property.parking ? 'Yes' : 'No'}</p>
                {/* Add more details as needed */}
              </div>
              <div className='mb-11'>
                <h2 className='font-bold text-3xl mb-2'>Location</h2>
                <p>{property.address}</p>
              </div>
              <div className='mb-11'>
                <h2 className='font-bold text-3xl mb-2'>Description</h2>
                <p>{property.description}</p>
              </div>
              <div className='w-full h-[400px]'>
                <iframe
                  className='w-full h-[400px]'
                  loading='lazy'
                  src={`https://maps.google.com/maps?q=${property.location.lat},${property.location.lng}&t=m&z=16&output=embed&iwloc=near`}
                  title={property.name}
                  aria-label={property.name}
                ></iframe>
    </div>
            </div>
          </div>

          {/* <div className='md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto'>
            <BookPropertyCta
              price={property.price}
              checkinDate={checkinDate}
              setCheckinDate={setCheckinDate}
              checkoutDate={checkoutDate}
              setCheckoutDate={setCheckoutDate}
              calcMinCheckoutDate={calcMinCheckoutDate}
              adults={adults}
              children={children}
              setAdults={setAdults}
              setChildren={setChildren}
              isBooked={property.isBooked}
              handleBookNowClick={handleBookNowClick}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PropertyPage;
