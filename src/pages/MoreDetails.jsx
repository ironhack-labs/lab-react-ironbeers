import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function MoreDetails() {
  const [singleBeer, setSingleBeer] = useState("");
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data);
        setSingleBeer(response.data);
      })
      .catch((error) => console.log("Error retrieving beer details", error));
  }, [beerId]);

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <img
          src={singleBeer.image_url}
          alt={singleBeer.name}
          id="single-beer-img"
        />
        <h1>{singleBeer.name}</h1>
        <h2>{singleBeer.tagline}</h2>
        <h3>{singleBeer.first_brewed}</h3>
        <h1>{singleBeer.attenuation_level}</h1>
        <p>{singleBeer.description}</p>
        <p>
          <b>{singleBeer.contributed_by}</b>
        </p>
      </div>
    </div>
  );
}

export default MoreDetails;
