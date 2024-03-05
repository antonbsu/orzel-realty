'use client';
import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import { propertyTypes } from "../../../schemaTypes/property";

type Props = {
  propertyTypeFilter: string;
  searchQuery: string;
  setPropertyTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
}

const Search: FC<Props> = ({
  propertyTypeFilter,
  searchQuery,
  setPropertyTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handlePropertyTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPropertyTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(
      `/properties?propertyType=${propertyTypeFilter}&searchQuery=${searchQuery}`
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
              {/* Rodzaj */}
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