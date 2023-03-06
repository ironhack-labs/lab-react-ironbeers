import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

// Get from API

function Beers() {
  const [beers, setBeers] = useState([]); // Get all
  const [query, setQuery] = useState(""); // Search
  const [searchResult, setSearchResult] = useState(null);

  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers`
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  console.log(beers);

  // Search on API

  const handleSearch = (e) => setQuery(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <Navbar />

      <form onChange={handleSubmit}>
        <label htmlFor="query">Search Beer</label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleSearch}
        ></input>
      </form>

      <h1>All Beers</h1>

      {searchResult &&
        searchResult.map((beer) => {
          return (
            <div>
              <img className="images" src={beer.image_url} alt="BeerImage" />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>

              <Link to={`/${beer._id}`}>
                <p>Go to Details</p>
              </Link>
            </div>
          );
        })}

      {beers.length &&
        !searchResult &&
        beers.map((beer) => {
          return (
            <>
              <img className="images" src={beer.image_url} alt="BeerImage" />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>

              <Link to={`/${beer._id}`}>
                <p>Go to Details</p>
              </Link>
            </>
          );
        })}
    </div>
  );
}

export default Beers;