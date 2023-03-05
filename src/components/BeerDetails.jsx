import React, { useState } from "react";
import homepage from "../assets/homepage.png";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function BeerDetails() {
  const [oneBeer, setOneBeer] = useState(null);
  const { beerId } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setOneBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, [beerId]);

  return (
    <>
      <Link to="/">
        <img src={homepage} alt="" />
      </Link>
      {oneBeer && (
        <div className="myBeer">
          <img src={oneBeer.image_url} alt={oneBeer.name} />
          <h2>{oneBeer.name}</h2>
          <h4>{oneBeer.tagline}</h4>
          <h4>{oneBeer.first_brewed}</h4>
          <h4>{oneBeer.attenuation_level}</h4>
          <p>{oneBeer.description}</p>
          <p>{oneBeer.contributed_by}</p>
        </div>
      )}
    </>
  );
}

export default BeerDetails;
