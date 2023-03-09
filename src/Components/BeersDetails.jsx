import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from "react-router-dom";

function BeerDetails() {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    console.log("Fetching beer data...");
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("Beer data fetched successfully.", response.data);
        setBeer(response.data);
      })
      .catch((error) => console.error(error));
  }, [beerId]);

  return (
    <div>
      <Header />
      {beer.name && (
        <>
          <img
            src={beer.image_url}
            alt={beer.name}
            style={{ height: "200px" }}
          />
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default BeerDetails;
