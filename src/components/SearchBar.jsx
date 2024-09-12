import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [string, setString] = useState("");

  const handleChange = (e) => {
    setString(e.target.value);
    handleSearch(string);
  };

  return (
      <div className="search-bar">
        <label>Search: </label>
        <input
          placeholder="Find beer"
          type="text"
          name="searchBar"
          value={string}
          onChange={handleChange}
        />
      </div>
  );
}

export default SearchBar;
