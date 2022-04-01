import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Beers.css";

const BeerList = () => {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const beersFromApi = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeersList(beersFromApi.data);
    };
    getBeers();
  }, []);

  console.log(beersList);

  return (
    <div>
      {beersList.map((beer) => {
        return (
          <div key={beer._id} className="card mb-3 text-start">
            <div className="card">
              <div className="card-img">
                <img src={beer.image_url} className="beer-img" alt="beer" />
              </div>
              <div className="card-content">
                <div>
                  <Link
                    to={`/beers/${beer._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h1 className="card-title">{beer.name}</h1>
                  </Link>
                  <h3
                    className="card-text"
                    style={{ color: "grey", fontSize: "1.1rem" }}
                  >
                    {beer.tagline}
                  </h3>
                  <p>
                    <small>
                      Created by:
                      {beer.contributed_by}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BeerList;
