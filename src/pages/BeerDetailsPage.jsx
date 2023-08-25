import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage(props) {
  const [fetching, setFetching] = useState(true);
  const [beers, setBeers] = useState([]);
  const [foundBeer, setFoundBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId} `)
      .then((response) => {
        setFoundBeer(response.data);
        setFetching(false);
        console.log(response.data);
      });
  }, [beerId]);

  return (
    <div>
      <h4>Beer Details</h4>
      {!foundBeer && <h3>Beer not found!</h3>}
      {foundBeer && (
        <div>
          <img src={foundBeer.image_url} alt="" />
          <h2>{foundBeer.name}</h2>
          <h3>{foundBeer.tagline}</h3>
          <h3>{foundBeer.first_brewed}</h3>
          <h3>{foundBeer.attenuation_level}</h3>
          <h3>{foundBeer.description}</h3>
          <h4>Created by: {foundBeer.contributed_by}</h4>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
