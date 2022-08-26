import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBeer = ({ beer }) => {
  const { beerId } = useParams();
  // const { random } = useParams();

  console.log("aajhjdshjshs", beer);

  const foundBeer = beer.find((beer) => {
    return beer._id === beerId;
  });

  // let foundBeer = {};

  // if (beer) {
  //   foundBeer = beer.find((beer) => {
  //   return beer._id === beerId;
  // })

  return (
    <div>
      <Navbar />
      <div className="single-beer-page">
        <img src={foundBeer.image_url} alt={foundBeer.name} />
        <div className="single-beer-tittle">
          <div className="left-col">
            <h2>{foundBeer.name}</h2>
            <h3>{foundBeer.tagline}</h3>
          </div>
          <div className="right-col">
            <span>{foundBeer.attenuation_level}</span>
            <span>{foundBeer.first_brewed}</span>
          </div>
        </div>
        <p>{foundBeer.description}</p>
        <p>{foundBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default SingleBeer;
