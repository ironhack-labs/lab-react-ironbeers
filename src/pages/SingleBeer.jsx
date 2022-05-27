import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const { beerId } = useParams();

  const [beer, setBeer] = useState(null);

  const getSingleBeer = async () => {
    try {
      const result = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBeer();
  }, []);

  return (
    <div>
      {beer && (
        <div>
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created be: {beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;
