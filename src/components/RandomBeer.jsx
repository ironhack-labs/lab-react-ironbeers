import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const getOneBeer = async () => {
      const { data } = await axios(apiURL);
      setBeer(data);
    };
    getOneBeer();
  }, []);

  return (
    <div>
      <Navbar />
      <h3>Random Beer</h3>
      {!beer ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Name: {beer.name}</h3>
          <p>Tagline: {beer.tagline}</p>
          <img src={beer.image_url} alt="" />
          <p>First brewed in: {beer.first_brewed}</p>
          <p>Contributed By: {beer.contributed_by}</p>
          <p>Description: {beer.description}</p>
          <Link to={`/beers/${beer._id}`}>See details</Link>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
