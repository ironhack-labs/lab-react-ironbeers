import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import axios from "axios";

function RandoBeer() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((result) => {
        setRandom(result.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);
  return (
    <div>
      <div>
        <Link to={"/"}>
          <Header />
        </Link>
      </div>
      <div style={{ padding: "20px" }}>
        <img
          src={random.image_url}
          alt="beerimage"
          style={{ height: "300px" }}
        />
        <h2>{random.name}</h2>
        <p>{random.tagline}</p>
        <p>{random.first_brewed}</p>
        <p>{random.attenuation_level}</p>
        <p>{random.description}</p>
        <p>{random.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandoBeer;
