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
  const [propertyPurpose, setPropertyPurposeFilter] = useState(""); // Новый стейт для цели недвижимости
  const [propertyCity, setPropertyCity] = useState(""); // Новый стейт для города
  const [propertyDistrict, setPropertyDistrict] = useState(""); // Новый стейт для района
  const [propertyRooms, setPropertyRooms] = useState<number | string>("");
  const [propertyFurnished, setPropertyFurnished] = useState<boolean | undefined>(undefined); // Новый стейт для меблированности
  const [propertyParking, setPropertyParking] = useState<boolean | undefined>(undefined); // Новый стейт для парковки
  const [priceFrom, setPriceFrom] = useState<number | string>("");
  const [priceTo, setPriceTo] = useState<number | string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const propertyType = searchParams.get("propertyType");
    const purpose = searchParams.get("propertyPurpose"); // Получаем цель недвижимости из параметров URL
    const city = searchParams.get("propertyCity"); // Получаем город из параметров URL
    const district = searchParams.get("propertyDistrict"); // Получаем район из параметров URL
    const rooms = searchParams.get("propertyRooms"); // Получаем количество комнат из параметров URL
    const furnished = searchParams.get("propertyFurnished") === "true"; // Получаем меблированность из параметров URL
    const parking = searchParams.get("propertyParking") === "true"; // Получаем наличие парковки из параметров URL
    const priceFrom = searchParams.get("priceFrom");
    const priceTo = searchParams.get("priceTo");

    if (propertyType) {
      setPropertyTypeFilter(propertyType);
    }
    if (searchQuery) {
      setSearchQuery(searchQuery);
    }
    if (purpose) {
      setPropertyPurposeFilter(purpose);
    }
    if (city) {
      setPropertyCity(city);
    }
    if (district) {
      setPropertyDistrict(district);
    }
    if (rooms) {
      setPropertyRooms(Number(rooms));
    }
    if (!isNaN(Number(rooms))) {
      setPropertyRooms(Number(rooms));
    }
    if (furnished !== undefined) {
      setPropertyFurnished(furnished);
    }
    if (parking !== undefined) {
      setPropertyParking(parking);
    }
    if (priceFrom) {
      setPriceFrom(priceFrom);
    }
    if (priceTo) {
      setPriceTo(priceTo);
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

      // Примените фильтр цели недвижимости
      if (
        propertyPurpose &&
        propertyPurpose.toLowerCase() !== "all" &&
        property.purpose.toLowerCase() !== propertyPurpose.toLowerCase()
      ) {
        return false;
      }

      if (
        propertyRooms &&
        propertyRooms !== "all" &&
        property.rooms !== Number(propertyRooms)
      ) {
        return false;
      }
      
      if (propertyFurnished !== undefined) {
        if (propertyFurnished && !property.furnished) {
          return false;
        }
      }

      if (propertyParking !== undefined) {
        if (propertyParking && !property.parking) {
          return false;
        }
      }

      if (
        (priceFrom && property.price < Number(priceFrom)) ||
        (priceTo && property.price > Number(priceTo))
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
        propertyPurposeFilter={propertyPurpose}
        propertyCity={propertyCity}
        propertyDistrict={propertyDistrict}
        propertyRooms={propertyRooms}
        propertyFurnished={propertyFurnished}
        propertyParking={propertyParking}
        priceFrom={priceFrom}
        priceTo={priceTo}
        setPropertyTypeFilter={setPropertyTypeFilter}
        setSearchQuery={setSearchQuery}
        setPropertyPurposeFilter={setPropertyPurposeFilter}
        setPropertyCity={setPropertyCity}
        setPropertyDistrict={setPropertyDistrict}
        setPropertyRooms={setPropertyRooms}
        setPropertyFurnished={setPropertyFurnished}
        setPropertyParking={setPropertyParking}
        setPriceFrom={setPriceFrom}
        setPriceTo={setPriceTo}
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
