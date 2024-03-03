'use client';
import Search from "../Search/Search"
import { useState } from "react"

const PageSearch = () => {

  const [propertyTypeFilter, setPropertyTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Search
      propertyTypeFilter={propertyTypeFilter}
      searchQuery={searchQuery}
      setPropertyTypeFilter={setPropertyTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  )
}

export default PageSearch