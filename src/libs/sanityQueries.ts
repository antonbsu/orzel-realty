import { groq } from "next-sanity";

export const getNavbarQuery = groq`*[_type == "navbar"][0] {
  _id,
  logo,
  "menuItems": menuItems[]{
    "label": label,
    "link": link,
    "subMenu": subMenu[]{
      "subLabel": subLabel,
      "subLink": subLink
    }
  }
}`;

export const getFeaturedRoomQuery = groq`*[_type == "hotelRoom" && isFeatured == true][0] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage
}`;

export const getPropertiesQuery = groq`*[_type == "property"] {
     _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    developer,
    shortDescription,
    phone,
    description,
    type,
    purpose,
    propertyType,
    location,
    address,
    area,
    rooms,
    floor,
    monthlyRent,
    deposit,
    furnished,
    balconyOrTerrace,
    garden,
    parking,
    isFeatured,
    isBooked
}`;

export const getPropertyQuery = groq`*[_type == "property" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    developer,
    shortDescription,
    phone,
    description,
    type,
    purpose,
    propertyType,
    location,
    address,
    area,
    rooms,
    floor,
    monthlyRent,
    deposit,
    furnished,
    balconyOrTerrace,
    garden,
    parking,
    isFeatured,
    isBooked
}`;

export const getLatestPropertiesQuery = groq`*[_type == "property"] | order(_createdAt desc)[0..5] {
    _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    isBooked
}`

export const getLatestCommercialQuery = groq`*[_type == "property" && propertyType == "Komercyjny" ] | order(_createdAt desc)[0..2] {
    _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    isBooked
}`;

export const getReviewsQuery = groq`*[_type == "review"] {
    _id,
    personName,
    personPosition,
    personPhoto,
    content

}`;

// export const getUserBookingsQuery = groq`*[_type == "booking" && user._ref == $userId] {
//     _id,
//     hotelRoom -> {
//         _id,
//         name,
//         slug,
//         price
//     },
//     checkinDate,
//     checkoutDate,
//     numberOfDays,
//     adults,
//     children,
//     totalPrice,
//     discount
// }`;

// export const getUserDataQuery = groq`*[_type == 'user' && _id == $userId][0] {
//     _id,
//     name,
//     email,
//     isAdmin,
//     about,
//     _createdAt,
//     image,
// }`;

// export const getRoomReviewsQuery = groq`*[_type == "review" && hotelRoom._ref == $roomId] {
//     _createdAt,
//     _id,
//     text,
//     user -> {
//         name
//     },
//     userRating
// }`;