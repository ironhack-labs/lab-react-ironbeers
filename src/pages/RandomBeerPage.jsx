import axios from "axios";
import { useEffect, useState } from "react";
import BeerDetailsPage from "./BeerDetailsPage";

function RandomBeersPage() {
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/beers/random`)
      .then((response) => {
        setBeerDetails(response.data);
      })
      .catch((e) => console.log("Error finding random beer from Api", e));
  }, []);

  const renderedBeer = () => {
    return (
      <div>
        <h2>
          Name: <p>{beerDetails.name}</p>
        </h2>
        <img src={beerDetails.image_url} alt="image" />
        <h3>{beerDetails.tagline}</h3>
        <h3>Alcohol level:{beerDetails.attenuation_level}</h3>
        <h3>Brewers tips: {beerDetails.brewers_tips}</h3>
        <h4>Contributed by: {beerDetails.contributed_by}</h4>
      </div>
    );
  };

  // Return the renderedBeer content
  return <div>{beerDetails === null ? <p>Loading...</p> : renderedBeer()}</div>;
}

export default RandomBeersPage;
