import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetails() {
  const [beer, setBeer] = useState(null);
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
      <Header />
      {beer && (
        <div>
          <img src={beer.image_url} alt="beersImg" />
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetails;
