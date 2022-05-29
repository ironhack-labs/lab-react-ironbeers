import axios from "axios";
import React, { useState, useEffect } from "react";
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
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default BeerDetails;
