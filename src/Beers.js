import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    // fetch the data from the api
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
        <div
          key={beer._id}
          style={{
            display: "flex",
            textAlign: "left",
            padding: "1rem",
          }}
        >
          <img
            className="product-shot"
            src={beer.image_url}
            alt="beer product shot"
          />
          <div style={{ marginLeft: "1rem" }}>
            <Link to={`/beers/${beer._id}`}>
              <h1 className="name">{beer.name}</h1>
            </Link>
            <p className="tagline">{beer.tagline}</p>
            <p className="contributor">
              <strong>{beer.contributed_by}</strong>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Beers;
