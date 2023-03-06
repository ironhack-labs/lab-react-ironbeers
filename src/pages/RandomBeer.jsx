import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  console.log(beer);

  return (
    <div>
      RandomBeer
      <Navbar />
      {beer && (
        <div>
          <p>{beer.name}</p>
          <img className="images" src={beer.image_url} alt="BeerImage" />
          <p>Tagline: {beer.tagline}</p>
          <p>First Brewed:{beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>

          <Link to={`/${beer._id}`}>
            <p>Go to Details</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;