import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetail() {
  const [beer, setBeer] = useState();
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setBeer(res.data);
      })
      .catch((err) => console.log(err));
  }, [beerId]);
  return (
    <>
      {beer && (
        <div className="beer">
          <img src={beer.image_url} alt="beer" />
          <h2>{beer.name}</h2>
          <h3> {beer.tagline}</h3>
          <p>{beer.description}</p>
          <h4>{beer.first_brewed}</h4>
          <h5>{beer.attenuation_level}</h5>
          <h7>Created by:{beer.contributed_by}</h7>
        </div>
      )}
    </>
  );
}

export default BeerDetail;
