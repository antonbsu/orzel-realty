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
    marketType,
    buildingMaterial,
    buildingYear,
    buildingElevator,
    buildingOwnership,
    finishCondition,
    heating,
    mediaPayment,
    security,
    isActual
}`;

export const getPropertyQuery = groq`*[_type == "property" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    images,
    city,
    district,
    pageTitle,
    metaDescription,
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
    furnitureList,
    balconyOrTerrace,
    garden,
    parking,
    body,
    iframeUrl,
    marketType,
    buildingMaterial,
    buildingYear,
    buildingElevator,
    buildingOwnership,
    finishCondition,
    heating,
    mediaPayment,
    security,
    additionalInfo,
    isActual
}`;

export const getBlogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc)[0..4] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
}`;

export const getBlogPostQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    body
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

export const getLivingRentQuery = groq`*[_type == "property" && propertyType == "Mieszkalny" && purpose == "Wynajem" ]  | order(_createdAt desc) {
    _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    isBooked
}`;

export const getLivingSaleQuery = groq`*[_type == "property" && propertyType == "Mieszkalny" && purpose == "Sprzedaż" ]  | order(_createdAt desc) {
    _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    isBooked
}`;

export const getSalesBlockQuery = groq`*[_type == "property" && purpose == "Sprzedaż" ][0..4]  | order(_createdAt desc) {
    _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    isBooked
}`;

export const getCommercialRentQuery = groq`*[_type == "property" && propertyType == "Komercyjny" && purpose == "Wynajem" ]  | order(_createdAt desc) {
    _id,
    name,
    slug,
    images,
    city,
    district,
    price,
    isBooked
}`;

export const getCommercialSaleQuery = groq`*[_type == "property" && propertyType == "Komercyjny" && purpose == "Sprzedaż" ]  | order(_createdAt desc) {
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