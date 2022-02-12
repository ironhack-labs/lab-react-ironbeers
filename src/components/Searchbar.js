import React from "react";
import { useState, useEffect } from "react";

function Searchbar({ filterBeerList }) {
  const [search, setSearch] = useState();

  //search input handle

  const handleSearch = (event) => {
    setSearch(event.target.value);
    filterBeerList(event.target.value);
  };

  return (
    <div>
      <h2>Searchbar</h2>

      <input
        type="text"
        placeholder="Search for a Beer"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Searchbar;
