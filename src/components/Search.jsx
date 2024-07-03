import React, { useState } from "react";

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    handleSearch(query); // Pass the search query to the parent component
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
          placeholder="Search for a beer..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
