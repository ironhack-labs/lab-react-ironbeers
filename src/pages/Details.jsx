import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import baseURL from "../utils/constants";

const Details = () => {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState({});

  useEffect(() => {
    axios.get(`${baseURL}/beers/${beerId}`).then((response) => {
      console.log("Beer Details:", response.data);
      setBeerDetails(response.data);
    });
  }, [beerId]);

  return (
    <div>
      <header className="home-link">
        <Link to="/" className="home-link">
          Home
        </Link>
      </header>
      <div className="beer-detail-card">
        <img
          className="details-img"
          src={beerDetails.image_url}
          alt={beerDetails.name}
        />
        <h2>{beerDetails.name}</h2>
        <p className="tagline">{beerDetails.tagline}</p>
        <p>First Brewed: {beerDetails.first_brewed}</p>
        <p>Attenuation Level: {beerDetails.attenuation_level}</p>
        <p className="description">{beerDetails.description}</p>
        <p className="contributor">
          Contributed by: {beerDetails.contributed_by}
        </p>
      </div>
    </div>
  );
};

export default Details;
