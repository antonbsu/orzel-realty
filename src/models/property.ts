type PropertyType = 'Mieszkanie' | 'Kawalerka' | 'Dom' | 'Pokoj' | 'Działka' | 'Garaż' | 'Magazyn' | 'Biuro' | 'Sklep' | 'Budynek';
type PropertyPurpose = 'Sprzedaż' | 'Wynajem' | 'Inwestycja';
type PropertyTypeClassification = 'Mieszkalny' | 'Komercyjny';
type MarketType = 'Pierwotny' | 'Wtórny';
type BuildingMaterial = 'Panelowy' | 'Cegła' | 'Monolit' | 'Drewno';
type OwnershipType = 'Własność' | 'Spółdzielcze' | 'Mieszkaniowe' | 'Najem';
type FinishCondition = 'Do remontu' | 'Do zamieszkania' | 'Stan deweloperski';
type HeatingType = 'Gazowe' | 'Elektryczne' | 'Miejskie' | 'Węglowe' | 'Kotłownia' | 'Klimatyzacja' | 'Inne';
type SecurityLevel = 'Ochrona' | 'Monitoring' | 'Brak';

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
  type: PropertyType;
  purpose: PropertyPurpose;
  propertyType: PropertyTypeClassification;
  location: GeoPoint;
  address: string;
  area: number;
  rooms: number;
  floor: string;
  monthlyRent?: number;
  deposit?: number;
  furnished?: boolean;
  furnitureList?: string;
  balconyOrTerrace?: 'Balkon' | 'Taras' | 'Ogród';
  garden?: boolean;
  parking?: boolean;
  iframeUrl?: string;
  body: any;
  marketType?: MarketType;
  buildingMaterial?: BuildingMaterial;
  buildingYear?: number;
  buildingElevator?: string;
  buildingOwnership?: OwnershipType;
  finishCondition?: FinishCondition;
  heating?: HeatingType;
  mediaPayment: number;
  security?: SecurityLevel;
  additionalInfo?: string;
  isActual: boolean;
};
