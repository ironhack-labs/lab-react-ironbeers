import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const RandomBeer = () => {
  const [beer, setBeer] = useState([]);
  const url = `https://ih-beers-api2.herokuapp.com/beers/random`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setBeer(res.data);
      console.log(res.data);
    });
  }, [url]);

  return (
    <div>
      <Header />
      {beer && ( // if beer exists, show it
        <div className="container my-3">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card" style={{ width: "500px" }}>
                <img
                  className="card-img-top mt-2"
                  style={{
                    maxWidth: "125px",
                    maxHeight: "275px",
                    margin: "auto",
                  }}
                  src={beer.image_url}
                  alt={beer.name}
                />
                <div className="card-body">
                  <h4 className="card-title">{beer.name}</h4>
                  <p>{beer.tagline}</p>
                  <p>First brewed: {beer.first_brewed}</p>
                  <p>Attenuation level: {beer.attenuation_level}</p>
                  <p> {beer.description}</p>
                  <p>
                    <strong> {beer.contributed_by} </strong>
                  </p>
                  <Link className="btn btn-secondary" to={`/beers`}>
                    Go back to the Beers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomBeer;
