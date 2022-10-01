import Header from "../components/Header";
import axios from "axios";

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => console.log("err:", err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {beers.map((beer) => {
          return (
            <div
              class="card mb-3 py-3 mx-auto"
              style={{
                maxWidth: "540px",
              }}
            >
              <div className="row">
                <div className="col-sm-4">
                  <img src={beer.image_url} alt="img_url" height="150px" />
                </div>
                <div className="col-sm-8 text-start">
                  <div className="card-body">
                    <h2 className="card-title mt-2 mb-3">
                      <Link
                        to={`/beers/${beer._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {beer.name}
                      </Link>
                    </h2>
                    <h5 className="card-text text-muted">{beer.tagline}</h5>
                    <p style={{ fontSize: "0.8rem" }}>
                      <b>Created by: </b>
                      {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeers;
