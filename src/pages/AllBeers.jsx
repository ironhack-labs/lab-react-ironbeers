import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SiHomebrew } from "react-icons/si";

function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const { data } = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setAllBeers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBeers();
  }, []);

  useEffect(() => {
    const searchBeers = async () => {
      try {
        if (searchQuery) {
          const { data } = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
          );
          setSearchResults(data);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    searchBeers();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (!allBeers) {
    return <p>Loading...</p>;
  }

  const beersToDisplay = searchQuery ? searchResults : allBeers;

  return (
    <div>
      <header className="header">
        <Link to={"/"}>
          <SiHomebrew className="home-icon" />
        </Link>
      </header>
      <h1>Beers</h1>
      <label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search beers..."
          className="search-input"
        />
      </label>
      <div className="beers-container">
        {beersToDisplay.length > 0 ? (
          beersToDisplay.map((beer) => (
            <div key={beer._id} className="beer-card">
              <img src={beer.image_url} alt="beer" className="all-beer-img" />
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <h4>{beer.contributed_by}</h4>
              <Link to={`/beers/${beer._id}`}>Check Beer Details</Link>
            </div>
          ))
        ) : (
          <p>No beers found</p>
        )}
      </div>
    </div>
  );
}

export default AllBeers;
