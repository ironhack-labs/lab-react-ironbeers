import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function SpecificBeer() {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
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
      <div>
        <div>
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div>
          <h2>{beer.name}</h2>
          <h2>{beer.attenuation_level}</h2>
        </div>
        <div>
          <h4>{beer.tagline}</h4>
          <h4>{beer.first_brewed}</h4>
        </div>
        <div>
            <p>{beer.description}</p>
        </div>
        <div>
            {beer.contributed_by}
        </div>
      </div>
    </div>
  );
}

export default SpecificBeer;
