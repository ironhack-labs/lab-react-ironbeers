import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});
  const { beerId } = useParams();
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios
      .get(`${API_URL}/random`)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => console.log("err:", err));
  }, [beerId]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 mx-auto">
            <div className="card">
              <img
                className="py-5"
                src={randomBeer.image_url}
                alt="img-url"
                style={{
                  width: "120px",
                  maxWidth: "30%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div className="card-body text-start mx-5 mb-4">
                <h1 className="card-title">{randomBeer.name}</h1>
                <h5 className="card-text text-muted">{randomBeer.tagline}</h5>
                <p className="card-text">{randomBeer.description}</p>
                <p className="card-text text-muted">
                  <b>{randomBeer.contributed_by}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
