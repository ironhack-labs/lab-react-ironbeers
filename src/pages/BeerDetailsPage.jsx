import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);

  let { beerId } = useParams();
  console.log("yo", beerId);

  useEffect(() => {
    axios
      .get(`${apiURL}/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, [beerId]);

  if (!beer) {
    return "loading...";
  }

  return (
    <div className="detailsPage">
      <div className="img-wrapper">
        <img src={beer.image_url} alt={beer.name} />
      </div>

      <div className="details-info">
        <h2>
          {beer.name} <span>{beer.attenuation_level}</span>
        </h2>
        <h3>
          {beer.tagline} <span>{beer.first_brewed}</span>
        </h3>
        <p className="description">{beer.description}</p>
        <p className="creator">{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
