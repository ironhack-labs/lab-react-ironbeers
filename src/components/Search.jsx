import { useState } from "react";

function Search({ searchHandler }) {
  const [string, setString] = useState("");

  const handleSearch = (e) => {
    setString(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15px" }}
      >
        <label>Search for Beers</label>
        <input
          type="text"
          className="search-bar"
          value={string}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default Search;
