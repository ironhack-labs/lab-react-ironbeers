import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function BeersList() {
  const [allBeers, setAllBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(response.data);
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
      {allBeers.map((beers) => {
        return (
          <div key={beers}>
            <img src={beers.image_url} alt="beer" />
            <Link to={`/beers/${beers._id}`}>
              <h1>{beers.name}</h1>
            </Link>

            <p>{beers.tagline}</p>
            <p>{beers.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
