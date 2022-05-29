import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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
      <Navbar />
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            
              <img className="beerimg" src={beer.image_url} alt="beerimg" />
              <Link to={`/beers/${beer._id}`}> 
              <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;