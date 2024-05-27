import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const [foundBeer, setFoundBeer] = useState(null);
  const [fetching, setfetching] = useState(true);
  const { beerId } = useParams();

  useEffect(() => {
    console.log("useEffect BeerDetailsPage- Initial render (Mounting)");
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setFoundBeer(response.data);
        setfetching(false);
      });
  }, [beerId]);
  console.log("foundbeer", foundBeer);

  return (
    <div>
      {fetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={foundBeer.image_url} alt={foundBeer.name}></img>
          <div className="beerdetailspage-inline-info">
            <h2>{foundBeer.name}</h2>
            <p>{foundBeer.attenuation_level}</p>
          </div>
          <div className="beerdetailspage-inline-info">
            <p>{foundBeer.tagline}</p>
            <p>{foundBeer.first_brewed}</p>
          </div>

          <p>{foundBeer.description}</p>
          <p>{foundBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
