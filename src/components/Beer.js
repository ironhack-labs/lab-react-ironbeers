import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from "react-router";

export default function Beer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({})

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/beers/${beerId}`)
      .then((singleBeer) => setBeer(singleBeer.data))
      .catch((err) => console.log(err));
  }, []);


  return (
          <div className="main">
          <Header />
        <img
          className="beer-photo"
          src={beer.image_url}
          alt={beer.name + 'image'}
        />
        <div className="beer-header">
          <div className="left">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
          </div>
          <div className="right">
            <h3>{beer.attenuation_level}</h3>
            <p>{beer.first_brewed}</p>
          </div>
        </div>
        <div className="beer-content">
          <p>{beer.description}</p>
          <h5>{beer.contributed_by}</h5>
        </div>
      </div>
  )
}
