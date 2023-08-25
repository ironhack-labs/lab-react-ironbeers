import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const [foundBeer, setfoundBeer] = useState(null);
  const [fetching, setFetching] = useState(true);

  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setfoundBeer(response.data);
        console.log(response.data);
        setFetching(false);
      });
  }, [beerId]);

  return (
    <div>
      {fetching && <p>Loading...</p>}

      {!fetching && !foundBeer && <p>No Beer found...</p>}

      {foundBeer && (
        <div>
          <img src={foundBeer.image_url} />
          <h3>{foundBeer.name}</h3>
          <p>{foundBeer.tagline}</p>
          <p>{foundBeer.first_brewed}</p>
          <p>{foundBeer.attenuation_level}</p>
          <p>{foundBeer.description}</p>
          <p>{foundBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
