import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);
  const [searchBeers, setSearchBeers] = useState("");
  const handleSearch = (e) => setSearchBeers(e.target.value);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const queryBeers = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeers}`
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  useEffect(() => {
    queryBeers();
  }, [searchBeers]);

  return (
    <div>
      <input
        type='text'
        name='searchBeers'
        onChange={handleSearch}
        value={searchBeers}
        placeholder='Search your favorite beer!'
      />
      {beers &&
        beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <h2>
                <Link to={`/beer/${beer._id}`}>{beer.name}</Link>
              </h2>
              <h4>{beer.tagline}</h4>
              <p>Created be: {beer.contributed_by}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Beers;
