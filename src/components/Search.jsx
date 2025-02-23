import { useState } from "react";

function Search( { handleSearch } ) {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);

    handleSearch(value);

  };

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search bearsies"
          value={query}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}

export default Search;
