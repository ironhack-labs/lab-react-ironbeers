import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const BeerDetails = () => {
  const [beer, setBeer] = useState({});
  
  let { id } = useParams();
  useEffect(() => {

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(({ data }) => {
        setBeer(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div className="beer-details">
      <Navbar />
      <img src={beer.image_url} alt={beer.name} height="250px" />

      <div className="head">
        <div className="h-t">
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
        </div>

        <div className="prod">
          <p>{beer.attenuation_level}</p>
          <p>{beer.first_brewed}</p>
        </div>
      </div>

      <p className="description">{beer.description}</p>
      <p className="creator">{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
