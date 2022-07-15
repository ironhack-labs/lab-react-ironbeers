import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const BeerDetail = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <header className="App-header">
        <Link to="/">🏡</Link>
      </header>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt="product-shot" />
          <h1>{beer.name}</h1>
          <p className="tagline">{beer.tagline}</p>
          <p className="contributor">
            <strong>{beer.contributed_by}</strong>
          </p>
        </div>
      ))}
    </>
  );
};

export default BeerDetail;
