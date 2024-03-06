import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import { propertyTypes, propertyPurpose } from "../../../schemaTypes/property";

type Props = {
  propertyTypeFilter: string;
  searchQuery: string;
  propertyPurposeFilter: string;
  propertyCity: string;
  propertyDistrict: string;
  propertyRooms: number | string;
  propertyFurnished: boolean | undefined;
  propertyParking: boolean | undefined;
  priceFrom: number | string;
  priceTo: number | string;
  setPropertyTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
  setPropertyPurposeFilter: (value: string) => void;
  setPropertyCity: (value: string) => void;
  setPropertyDistrict: (value: string) => void;
  setPropertyRooms: (value: number | string) => void;
  setPropertyFurnished: (value: boolean | undefined) => void;
  setPropertyParking: (value: boolean | undefined) => void;
  setPriceFrom: (value: number | string) => void;
  setPriceTo: (value: number | string) => void;
};

const Search: FC<Props> = ({
  propertyTypeFilter,
  searchQuery,
  propertyPurposeFilter,
  propertyCity,
  propertyDistrict,
  propertyRooms,
  propertyFurnished,
  propertyParking,
  priceFrom,
  priceTo,
  setPropertyTypeFilter,
  setSearchQuery,
  setPropertyPurposeFilter,
  setPropertyRooms,
  setPropertyFurnished,
  setPropertyParking,
  setPriceFrom,
  setPriceTo,
}) => {
  const router = useRouter();

  const handlePropertyTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPropertyTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handlePropertyPurposeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setPropertyPurposeFilter(event.target.value);
  };

  const handlePropertyRoomsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPropertyRooms(event.target.value);
  };

  const handlePropertyFurnishedChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPropertyFurnished(event.target.checked);
  };

  const handlePropertyParkingChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPropertyParking(event.target.checked);
  };

  const handlePriceFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceFrom(event.target.value);
  };

  const handlePriceToChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceTo(event.target.value);
  };

  const handleFilterClick = () => {
    const furnishedQueryParam = propertyFurnished !== undefined ? `&propertyFurnished=${propertyFurnished}` : '';
    const propertyParkingParam = propertyParking !== undefined ? `&propertyParking=${propertyParking}` : '';
    const priceFromQueryParam = priceFrom !== "" ? `&priceFrom=${priceFrom}` : '';
    const priceToQueryParam = priceTo !== "" ? `&priceTo=${priceTo}` : '';

    router.push(
      `/properties?propertyType=${propertyTypeFilter}&searchQuery=${searchQuery}&propertyPurpose=${propertyPurposeFilter}&propertyCity=${propertyCity}&propertyDistrict=${propertyDistrict}&propertyRooms=${propertyRooms}${furnishedQueryParam}${propertyParkingParam}${priceFromQueryParam}${priceToQueryParam}`
    );
  };

  return (
    <section className={styles.search}>
      <Image
        src="/images/search-bg.jpg"
        alt="Background"
        width={1920}
        height={1080}
        className={styles.imageBg}
      />
      <div className={styles.overlay}></div>
      <div className={`container ${styles.searchForm}`}>
        <div className={styles.searchFormWrapper}>
          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Rodzaj
            </label>
            <div className="relative">
              <select
                value={propertyTypeFilter}
                onChange={handlePropertyTypeChange}
                className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none"
              >
                <option value="">Rodzaj</option>
                {propertyTypes.map((propertyType) => (
                  <option key={propertyType.value} value={propertyType.value}>
                    {propertyType.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Tytuł
            </label>
            <input
              type="search"
              id="search"
              placeholder="Tytuł..."
              className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder-white"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Cel
            </label>
            <div className="relative">
              <select
                value={propertyPurposeFilter}
                onChange={handlePropertyPurposeChange}
                className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none"
              >
                <option value="">Wybierz cel</option>
                {propertyPurpose.map((purposeOption) => (
                  <option
                    key={purposeOption.value}
                    value={purposeOption.value}
                  >
                    {purposeOption.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Комнаты
            </label>
            <input
              type="number"
              placeholder="Введите количество комнат"
              className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder-white"
              value={propertyRooms}
              onChange={handlePropertyRoomsChange}
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Меблировано
            </label>
            <input
              type="checkbox"
              checked={propertyFurnished || false}
              onChange={handlePropertyFurnishedChange}
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Парковка
            </label>
            <input
              type="checkbox"
              checked={propertyParking || false}
              onChange={handlePropertyParkingChange}
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Price From
            </label>
            <input
              type="number"
              placeholder="Enter minimum price"
              className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder-white"
              value={priceFrom}
              onChange={handlePriceFromChange}
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Price To
            </label>
            <input
              type="number"
              placeholder="Enter maximum price"
              className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder-white"
              value={priceTo}
              onChange={handlePriceToChange}
            />
          </div>

          <button
            className={styles.searchButton}
            type="button"
            onClick={handleFilterClick}
          >
            Szukaj
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
