import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function RandomBeer() {
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <Navbar />
      {beer && (
        <>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt="beer" />
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}
      <Link to="/beers">
        <button>Back to Beers</button>
      </Link>
    </div>
  );
}

export default RandomBeer;
