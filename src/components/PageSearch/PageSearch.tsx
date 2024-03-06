'use client';
import Search from "../Search/Search"
import { useState } from "react"

const PageSearch = () => {

  const [propertyTypeFilter, setPropertyTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyPurpose, setPropertyPurposeFilter] = useState(""); 
  const [propertyCity, setPropertyCity] = useState(""); 
  const [propertyDistrict, setPropertyDistrict] = useState(""); 
  const [propertyRooms, setPropertyRooms] = useState<number | string>("");
  const [propertyFurnished, setPropertyFurnished] = useState<boolean | undefined>(undefined); 
  const [propertyParking, setPropertyParking] = useState<boolean | undefined>(undefined);
  const [priceFrom, setPriceFrom] = useState<number | string>("");
  const [priceTo, setPriceTo] = useState<number | string>("");

  return (
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
  )
}

export default PageSearch