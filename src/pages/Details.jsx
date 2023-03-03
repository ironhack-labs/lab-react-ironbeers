import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Details() {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();

  const getThisBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThisBeer();
  }, []);

  return (
      <div>
    <NavBar/>
    {beer && (
      <div>
        <img src={beer.image_url} alt="" />
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Created by: {beer.contributed_by}</p>
        <hr />
      </div>
    )}

    </div>
  );
}

export default Details;
