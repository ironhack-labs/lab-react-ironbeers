import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RandomBeer() {
  const [randombeer, setRandomBeer] = useState([]);

  const url = "https://ih-beers-api2.herokuapp.com/beers/random";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch();
  }, []);
  return (
    <div>
      {randombeer && (
        <div>
          <p> {randombeer.name}</p> <br />
          <p> {randombeer.tagline}</p> <br />
          <p> {randombeer.attenuation_level}</p>
          <img width="60px" src={randombeer.image_url} />
        </div>
      )}
      ;
    </div>
  );
}
