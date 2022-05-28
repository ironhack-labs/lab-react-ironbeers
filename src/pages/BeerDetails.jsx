import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function BeerDetails() {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <Navbar />

      <Link to="/beers">
        <button>Back to the beers list</button>
      </Link>
      {beer && (
        <>
          <img src={beer.image_url} alt="" srcset="" />
          <h1>{beer.name}</h1>
          <h3>{beer.tagline}</h3>
          <h5>{beer.first_brewed}</h5>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default BeerDetails;
