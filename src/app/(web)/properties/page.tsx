'use client';

import PropertiesCard from "@/components/PropertiesCard/PropertiesCard"; // Подставьте свой путь к компоненту карточки свойства
import Search from "@/components/Search/Search";
import { getProperties } from "@/libs/apis"; // Используйте вашу функцию для получения данных о свойствах
import { Property } from "@/models/property"; // Подставьте свой путь к модели свойства
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "../../PageStyles.module.scss";

const PropertiesPage = () => {
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const propertyType = searchParams.get("propertyType");

    if (propertyType) {
      setPropertyTypeFilter(propertyType);
    }
    if (searchQuery) {
      setSearchQuery(searchQuery);
    }
  }, []);

  async function fetchData() {
    return getProperties(); // Используйте вашу функцию для получения данных о свойствах
  }

  const { data, error, isLoading } = useSWR("get/properties", fetchData);

  if (error) throw new Error("Cannot fetch data from API");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data from API");

  const filterProperties = (properties: Property[]) => {
    return properties.filter(property => {
      // Примените фильтр типа свойства
      if (
        propertyTypeFilter &&
        propertyTypeFilter.toLowerCase() !== "all" &&
        property.type.toLowerCase() !== propertyTypeFilter.toLowerCase()
      ) {
        return false;
      }

      // Примените фильтр поискового запроса
      if (
        searchQuery &&
        !property.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredProperties = filterProperties(data || []);

  return (
    <section className="mx-auto">
      <Search
        propertyTypeFilter={propertyTypeFilter}
        searchQuery={searchQuery}
        setPropertyTypeFilter={setPropertyTypeFilter}
        setSearchQuery={setSearchQuery}
      />
      <div className="container">
        <div className={styles.propertiesList}>
          {filteredProperties.map(property => (
            <PropertiesCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
