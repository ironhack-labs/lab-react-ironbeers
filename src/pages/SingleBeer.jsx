import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const SingleBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState("");

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((res) => {
      setBeer(res.data);
    });
  }, [id]);

  return (
    <div>
      <Header />
      {beer && (
        <div>
          <img src={beer.image_url} alt={beer.name} />
          <h1>{beer.name}</h1>
          <h2>{beer.tagline}</h2>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
};

export default SingleBeer;
