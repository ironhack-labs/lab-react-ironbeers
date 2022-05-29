import React, { useState } from "react";

function BeerSearch(props) {
  const { searchBeer } = props;
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchBeer(e.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </>
  );
}

export default BeerSearch;
