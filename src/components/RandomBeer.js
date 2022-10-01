import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

import { useState, useEffect } from "react";

export default function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        console.log(res.data);
        setRandomBeer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {randomBeer ? (
        <div className="beer-details-container">
          <div className="card-body">
            <img src={randomBeer.image_url} style={{ height: "300px" }}></img>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0",
              }}
            >
              <div style={{ textAlign: "left", marginRight: "20px" }}>
                <h4>{randomBeer.name}</h4>
                <h6 style={{ color: "gray" }}>{randomBeer.tagline}</h6>
              </div>
              <div style={{ textAlign: "right", marginLeft: "20px" }}>
                <h4 style={{ color: "gray" }}>
                  {randomBeer.attenuation_level}
                </h4>
                <h6>{randomBeer.first_brewed}</h6>
              </div>
            </div>
            <p style={{ width: "40%", margin: "0 auto" }}>
              {randomBeer.description}
            </p>
            <p style={{ marginTop: "20px", color: "gray" }}>
              {randomBeer.contributed_by}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
