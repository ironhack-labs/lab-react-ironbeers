import React, { useState } from "react";
import homepage from "../assets/homepage.png";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const { beerId } = useParams();

  const getRandomBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, [beerId]);

  return (
    <>
      <Link to="/">
        <img src={homepage} alt="" />
      </Link>
      {randomBeer && (
        <div className="myBeer">
          <h4>{randomBeer.tagline}</h4>
          <h4>{randomBeer.first_brewed}</h4>
          <h4>{randomBeer.attenuation_level}</h4>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
          <h2>{randomBeer.name}</h2>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
        </div>
      )}
    </>
  );
}

export default RandomBeer;
