import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ApiContext } from "../contexts/api.context";

function Search() {
  const { apiUrl } = useContext(ApiContext);
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState(null);

  const getBeers = async () => {
    try {
      let response = await axios.get(apiUrl);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBeers();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`
      );
      setSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Search Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default Search;
