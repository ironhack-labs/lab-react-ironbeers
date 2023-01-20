import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function SingleBeer() {
  const beerId = useParams();
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    getBeersFromApi();
  }, []);

  const url = "https://ih-beers-api2.herokuapp.com/beers/random";

  const getBeersFromApi = () => {
    axios
      .get(url)
      .then((response) => {
        setBeerDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const renderDetails = () => {
    return (
      <div>
        <img src={beerDetails.image_url} alt="beer"></img> <br />
        <h1>{beerDetails.name} </h1> <br />
        <h2>{beerDetails.tagline}</h2> <br />
        <p>{beerDetails.first_brewed}</p>
        <br />
        <p>{beerDetails.attenuation_level}</p>
        <br />
        <p>{beerDetails.description}</p>
        <br />
        <p>{beerDetails.contributed_by}</p>
        <br />
      </div>
    );
  };

  return (
    <>
      {beerDetails === null ? "loading...." : renderDetails()}
      <Link to="/beers">Back</Link>
    </>
  );
}

export default SingleBeer;