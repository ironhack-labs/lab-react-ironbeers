import axios from "axios";
import { useEffect, useState } from "react";
import "./BeerDetails.css";

function RandomBeer(props) {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    fetchingRandom();
  });

  const fetchingRandom = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/beers/random")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => error);
  };
  const renderDetails = () => {
    return (
      <div>
        <img src={beers?.image_url} alt="individual-beer" />
        <h2>Name: {beers?.name}</h2>
        <div className="line"></div>
        <p className="tagline">{beers?.tagline}</p>
        <div className="container">
          <p>Its first: {beers?.first_brewed}</p>
          <p>Attenuation: {beers?.attenuation_level}</p>
        </div>
        <p className="description">{beers?.description}</p>
        <span>Created by: {beers?.contributed_by}</span>
      </div>
    );
  };
  return (
    <div>{beers === null ? <p>Wait a second...</p> : renderDetails()}</div>
  );
}

export default RandomBeer;
