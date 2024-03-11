import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import Select from "react-select"
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

  const handlePropertyTypeChange = (selectedOption: any) => {
    setPropertyTypeFilter(selectedOption ? selectedOption.value : "");
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handlePropertyPurposeChange = (selectedOption: any) => {
    setPropertyPurposeFilter(selectedOption ? selectedOption.value : "");
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
          <div className={styles.topFormPart}>
            <div className={styles.sort}>
              <div className="relative">
                <Select
                  value={propertyTypeFilter ? { value: propertyTypeFilter, label: propertyTypeFilter } : null}
                  onChange={handlePropertyTypeChange}
                  options={[
                    { value: "", label: "Wybierać" },
                    ...propertyTypes.map((propertyType) => ({ value: propertyType.value, label: propertyType.title })),
                  ]}
                  placeholder="Rodzaj"
                />
              </div>
            </div>
            <div className={styles.sort}>
              <div className="relative">
                <Select
                  value={propertyPurposeFilter ? { value: propertyPurposeFilter, label: propertyPurposeFilter } : null}
                  onChange={handlePropertyPurposeChange}
                  options={[
                    { value: "", label: "Wybierać" },
                    ...propertyPurpose.map((purposeOption) => ({ value: purposeOption.value, label: purposeOption.title })),
                  ]}
                  placeholder="Cel"
                />
              </div>
            </div>
            <div className={styles.sort}>
              <input
                type="search"
                id="search"
                placeholder="Tytuł..."
                className={styles.input}
                value={searchQuery}
                onChange={handleSearchQueryChange}
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
          <div className={styles.bottomFormPart}>
              {/* <div className={styles.checkbox}>
                <label className="block text-sm font-medium mb-2 text-white">
                  Umeblowany
                </label>
                <input
                  type="checkbox"
                  checked={propertyFurnished || false}
                  onChange={handlePropertyFurnishedChange}
                />
              </div> */}
              {/* <div className={styles.checkbox}>
                <label className="block text-sm font-medium mb-2 text-white">
                  Parking
                </label>
                <input
                  type="checkbox"
                  checked={propertyParking || false}
                  onChange={handlePropertyParkingChange}
                />
              </div> */}
            <div className={styles.sort}>
              {/* <label className="block text-sm font-medium mb-2 text-white">
                Комнаты
              </label> */}
              <input
                type="number"
                placeholder="Pokoje"
                className={styles.input}
                value={propertyRooms}
                onChange={handlePropertyRoomsChange}
              />
            </div>
            <div className={styles.sort}>
              {/* <label className="block text-sm font-medium mb-2 text-white">
                Price From
              </label> */}
              <input
                type="number"
                placeholder="Cena od"
                className={styles.input}
                value={priceFrom}
                onChange={handlePriceFromChange}
              />
            </div>

            <div className={styles.sort}>
              {/* <label className="block text-sm font-medium mb-2 text-white">
                Price To
              </label> */}
              <input
                type="number"
                placeholder="Cena do"
                className={styles.input}
                value={priceTo}
                onChange={handlePriceToChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
