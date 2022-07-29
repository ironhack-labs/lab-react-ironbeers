import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RandomBeer(props) {
  let randomBeerIndex = 0 + Math.floor(props.beers.length * Math.random());

  let id = props.beers[randomBeerIndex]._id;

  const [details, setDetails] = useState(null);

  const baseURL = "https://ih-beers-api2.herokuapp.com";

  useEffect(() => {
    axios
      .get(baseURL + "/beers/" + id)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const renderDetails = () => {
    return (
      <div className="beer">
        <h2>{details.name}</h2>
        {details.image_url ? (
          <img src={details.image_url} alt={details.name} />
        ) : (
          <p>No Image!</p>
        )}
        <p>Tagline: {details.tagline}</p>
        <p>First brewed: {details.first_brewed}</p>
        <p>Attenuation level: {details.attenuation_level}</p>
        <p>Description: {details.description}</p>
        <p>Contributed by: {details.contributed_by}</p>

        <Link to="/beers">Back</Link>
      </div>
    );
  };

  return <>{details === null ? <p>loading...</p> : renderDetails()}</>;
}

export default RandomBeer;
