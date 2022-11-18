import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";

function RandomBeer() {
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
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
    getBeer();
  }, []);

  return (
    <div className="cards-section">
      <Navbar />
      <div className="single-beer-card">
        <div>
          <img src={beer.image_url} alt="beer" />
        </div>
        <div>
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
