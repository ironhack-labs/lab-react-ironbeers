import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [string, setString] = useState("");

  const handleChange = (e) => {
    setString(e.target.value);
    handleSearch(stringgit );
  };

  return (
      <div>
        <label>Search: </label>
        <input
          type="text"
          name="searchBar"
          value={string}
          onChange={handleChange}
        />
      </div>
  );
}

export default SearchBar;
