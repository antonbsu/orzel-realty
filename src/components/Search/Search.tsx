'use client';
import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

import styles from "./Search.module.scss";
import Image from "next/image";

interface Props {
  // roomTypeFilter: string;
  propertyTypeFilter: string;
  searchQuery: string;
  // setRoomTypeFilter: (value: string) => void;
  setPropertyTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
}

const Search: FC<Props> = ({
  // roomTypeFilter,
  propertyTypeFilter,
  searchQuery,
  // setRoomTypeFilter,
  setPropertyTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  // const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setRoomTypeFilter(event.target.value);
  // };

  const handlePropertyTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPropertyTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(
      `/properties?propertyType=${propertyTypeFilter}&propertyType=${propertyTypeFilter}&searchQuery=${searchQuery}`
    );
  };

  return (
    <section className={styles.search}>
      <Image
        src="/images/search-bg.jpg" // Устанавливаем путь к изображению
        alt="Background" // Добавляем альтернативный текст для изображения
        width={1920} // Устанавливаем ширину изображения
        height={1080} // Устанавливаем высоту изображения
        className={styles.imageBg}
      />
      <div
        className={styles.overlay}
        
      ></div>
      <div className={`container ${styles.searchForm}`}>
        <div className={styles.searchFormWrapper}>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Property Type
            </label>
            <div className="relative">
              <select
                value={propertyTypeFilter}
                onChange={handlePropertyTypeChange}
                className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none"
              >
                {/* Опции для Property Type */}
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2 text-white">
              Name
            </label>
            <input
              type="search"
              id="search"
              placeholder="Search..."
              className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder-white"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>

          <button
            className="btn-primary"
            type="button"
            onClick={handleFilterClick}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;