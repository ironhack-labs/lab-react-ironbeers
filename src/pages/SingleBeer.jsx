import React from "react";
import { useState, useEffect } from "react";
import headerImg from "../assets/header.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function SingleBeer() {
  const [beer, setOneBeer] = useState(null);
  const [loading, setLoading] = useState(false);
  const { beerId } = useParams();
  const getOneBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log(response.data);
      setOneBeer(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOneBeer();
  }, [beerId]);
  console.log(beer);
  return (
    <div>
      <header>
        <Link to={"/"}>
          <img src={headerImg}></img>
        </Link>
      </header>

      {loading && <h2>Loading...</h2>}

      <h1>Check the details!</h1>
      {beer && (
        <div>
          <img src={beer.image_url} alt="image of a single beer" />
          <p>{beer.name}</p>
          <p>Tagline:{beer.tagline}</p>
          <p>First Brewed:{beer.first_brewed}</p>
          <p>Attenuation Level:{beer.attenuation_level}</p>
          <p>Description:{beer.description}</p>
          <p>Contributed by:{beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}
export default SingleBeer;

