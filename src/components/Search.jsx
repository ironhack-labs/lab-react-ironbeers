import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        const filteredResults = response.data.filter((beer) =>
          beer.name.toLowerCase().includes(query.toLowerCase())
        );
        onSearch(filteredResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    if (query.trim() !== "") {
      fetchData();
    }
  }, [query, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
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
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
