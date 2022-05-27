import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BeersList() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}> 
              <img className="beerimg" src={beer.image_url} alt="beerimg" />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
