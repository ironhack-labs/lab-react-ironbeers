import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details(props) {

    const [beer, setBeer] = useState({});
    const { beerId } = useParams();

    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/:id")
          .then((response) => {
            console.log("response.data", response.data);
            setBeer(response.data);
          });
      }, [beerId]);

  return (
    <div >
        <Navbar />
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h2>{beer.first_brewed}</h2>
            <h2>{beer.attenuation_level}</h2>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default Details;

