import { useState } from "react";

function Search({ searchHandler }) {
  const [string, setString] = useState("");

  const handleSearch = (e) => {
    setString(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <>
      <label>Search for Beers</label>
      <input
        type="text"
        className="search-bar"
        value={string}
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;