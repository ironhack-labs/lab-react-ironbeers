import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Beer from "../components/Beer";
import Navigation from "../components/Navigation";

function SingleBeer() {
  const [beer, setBeer] = useState({});
  const beerId = useParams().beerId;

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      const { data } = result;
      console.log("Result: ", data);
      const singleBeer = data.find((e) => e._id === beerId);
      console.log("Ein Bier: ", singleBeer);
      setBeer(singleBeer);
    });
  }, []);

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = beer;

  return (
    <div>
      <Navigation />
      <article>
        <div style={{ height: "125px" }}>
          <img style={{ height: "100%" }} src={image_url} alt={name} />
        </div>
        <div>
          <div>
            <h2>{name}</h2>
            <p>{attenuation_level}</p>
          </div>
          <div>
            <h3>{tagline}</h3>
            <p>{first_brewed}</p>
          </div>
          <div>{description}</div>
          <div>{contributed_by}</div>
        </div>
      </article>
    </div>
  );
}

export default SingleBeer;
