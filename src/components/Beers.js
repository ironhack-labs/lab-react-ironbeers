import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

import { useState, useEffect } from "react";

export default function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        console.log(res.data);
        setBeers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="beer-list-container">
      <Header />
      <label htmlFor="search">Search</label>
      <input
        style={{ marginLeft: "10px" }}
        type="text"
        name="search"
        id="search"
      ></input>
      {beers.map((beer) => {
        return (
          <Link
            key={beer._id}
            to={`/beers/${beer._id}`}
            style={{
              textDecoration: "none",
              color: "black",
              marginTop: "20px",
              display: "block",
            }}
          >
            <div className="beer-list-card card">
              <div className="beer-list-item card-body">
                <img src={beer.image_url}></img>
                <div>
                  <h4>{beer.name}</h4>
                  <h5>{beer.tagline}</h5>
                  <p>Created By: {beer.contributed_by}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
