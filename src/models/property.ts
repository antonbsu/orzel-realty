type Image = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

type GeoPoint = {
  _type: string;
  lat: number;
  lng: number;
  alt?: number;
};

export type Property = {
  _id: string;
  name: string;
  slug: { _type: 'slug'; current: string };
  images: Image[];
  city: string;
  district: string;
  price: number;
  developer: string;
  shortDescription?: string;
  phone: string;
  description: string;
  type: 'flat' | 'house' | 'room' | 'office';
  purpose: 'rent' | 'sale';
  propertyType: 'living' | 'commercial';
  location: GeoPoint;
  address: string;
  area: number;
  rooms: number;
  floor: string;
  monthlyRent?: number;
  deposit?: number;
  furnished?: boolean;
  balconyOrTerrace?: 'balcony' | 'terrace' | 'garden';
  garden?: boolean;
  parking?: boolean;
  isFeatured: boolean;
  isBooked: boolean;
};
