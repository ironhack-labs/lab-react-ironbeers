import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ListBeer.css";

const axios = require("axios");

const ListBeers = () => {
  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeersData(response.data);
      })
      .catch((err) => console.log("Error en fetching api on App.js", err));
  }, []);

  return (
    <div className="list-beer-container">
      {beersData.map((beer) => {
        return (
          <div>
            <div class="uk-card uk-card-default uk-card-body list-beers">
              <img src={beer.image_url} alt="" />
              <Link to={`/single-beer/${beer._id}`}>
                <h3 className="uk-card-title">{beer.name}</h3>
              </Link>
              <h4>{beer.description}</h4>
              <p>
                <strong>Created by: </strong>
                {beer.contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListBeers;
