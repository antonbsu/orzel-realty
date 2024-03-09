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
  type: 'Mieszkanie' | 'Kawalerka' | 'Dom' | 'Pokoj' | 'Działka' | 'Garaż' | 'Inne' | 'Działka' | 'Garaż' | 'Magazyn' | 'Biuro' | 'Sklep' | 'Budynek';
  purpose: 'Sprzedaż' | 'Wynajem' | 'Dzierżawa' | 'Inwestycja';
  propertyType: 'Mieszkalny' | 'Komercyjny';
  location: GeoPoint;
  address: string;
  area: number;
  rooms: number;
  floor: string;
  monthlyRent?: number;
  deposit?: number;
  furnished?: boolean;
  balconyOrTerrace?: 'Balkon' | 'Taras' | 'Ogród';
  garden?: boolean;
  parking?: boolean;
  iframeUrl?: string;
  body: any;
  // isFeatured: boolean;
  // isBooked: boolean;
};
