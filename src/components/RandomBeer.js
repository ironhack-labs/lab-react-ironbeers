import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const RandomBeer = () => {
  const [randoBeer, setRandoBeer] = useState({});

  useEffect(() => {
    const getRandoBeer = async () => {
      const randoBeerFromApi = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandoBeer(randoBeerFromApi.data);
    };
    getRandoBeer();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="card"
        style={{
          width: "90%",
          borderRadius: "30px",
          boxShadow: "20px 20px 25px lightgrey",
          marginTop: "40px",
          padding: "35px",
        }}
      >
        <img
          src={randoBeer.image_url}
          className="card-img-top"
          alt="single beer"
          style={{ width: "10%", alignSelf: "center" }}
        />
        <div className="card-body text-start">
          <h1
            style={{
              color: "#4db8ff",
              fontSize: "5rem",
              marginTop: "20px",
            }}
            className="text-center"
          >
            {randoBeer.name}
          </h1>
          <h4
            className="card-text text-center"
            style={{ color: "grey", fontWeight: "bolder" }}
          >
            {randoBeer.tagline}
          </h4>
          <p className="card-text" style={{ marginTop: "20px" }}>
            <small>Attenuation level: {randoBeer.attenuation_level}</small>
          </p>
          <p className="card-text">
            <small>First brewed: {randoBeer.first_brewed}</small>
          </p>
          <p className="card-text" style={{ fontSize: "1.5rem" }}>
            {randoBeer.description}
          </p>
          <p className="card-text">
            <small>
              Created by:
              <i> {randoBeer.contributed_by}</i>
            </small>
          </p>
          <Link to="/beers">
            <p>Go back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
