import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./App.css";

const BeerDetail = () => {
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { id } = useParams();
  console.log(id);

  /* let { beerId } = useParams(); */

  return (
    <>
      <header className="App-header">
        <Link to="/">🏡</Link>
      </header>
      <div key={beer._id} style={{ padding: "1rem", textAlign: "left" }}>
        <img
          src={beer.image_url}
          alt="product-shot"
          className="beer-shot-detail"
        />
        <h1>{beer.name}</h1>
        <p className="tagline">{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p className="beer-description">{beer.description}</p>
        <p className="contributor">
          <strong>{beer.contributed_by}</strong>
        </p>
      </div>
    </>
  );
};

export default BeerDetail;
