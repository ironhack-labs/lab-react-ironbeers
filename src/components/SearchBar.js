import React from "react";
import { useState } from "react";

function SearchBar({ searchFilter }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);

    searchFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search beer"
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default SearchBar;
