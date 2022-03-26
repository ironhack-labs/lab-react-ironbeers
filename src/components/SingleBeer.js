import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const SingleBeer = () => {
  const { beerId } = useParams();

  const [oneBeer, setOneBeer] = useState({});

  useEffect(() => {
    const getBeer = async () => {
      const beerFromApi = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setOneBeer(beerFromApi.data);
      console.log(beerFromApi.data);
    };
    getBeer();
  }, [beerId]);

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
          src={oneBeer.image_url}
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
            {oneBeer.name}
          </h1>
          <h4
            className="card-text text-center"
            style={{ color: "grey", fontWeight: "bolder" }}
          >
            {oneBeer.tagline}
          </h4>
          <p className="card-text" style={{ marginTop: "20px" }}>
            <small>Attenuation level: {oneBeer.attenuation_level}</small>
          </p>
          <p className="card-text">
            <small>First brewed: {oneBeer.first_brewed}</small>
          </p>
          <p className="card-text" style={{ fontSize: "1.5rem" }}>
            {oneBeer.description}
          </p>
          <p className="card-text">
            <small>
              Created by:
              <i> {oneBeer.contributed_by}</i>
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
