import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const RandomBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    image_url: "",
    tagline: "",
    contributed_by: "",
    first_brewd: "",
    attenuation_level: "",
    description: "",
  });

  const {
    name,
    image_url,
    tagline,
    contributed_by,
    first_brewed,
    attenuation_level,
    description,
  } = beer;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );

        setBeer(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  const imgStyle = {
    height: "45vh",
    backgroundImage: `url(${image_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    margin: "10px",
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div>
          <div style={imgStyle} className="mb-2"></div>
          <div className="d-flex justify-content-between mb-2">
            <p className="h2">
              <strong>{name}</strong>
            </p>
            <p className="h2 text-muted">{attenuation_level}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between  mb-2">
          <p className="h5 text-muted">{tagline}</p>
          <p className="h5">
            <strong>{first_brewed}</strong>
          </p>
        </div>
        <p>
          <strong>{description}</strong>
        </p>
        <p className="h5 text-muted">{contributed_by}</p>
      </div>
    </div>
  );
};

export default RandomBeer;
