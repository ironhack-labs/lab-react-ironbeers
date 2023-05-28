import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Components/Navbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random";

export default function RandomBeerSelector() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data); // Log the response data for debugging
      setRandomBeer(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <h3>Random Beer</h3>
      {!randomBeer ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Name: {randomBeer.name}</h3>
          <p>Tagline: {randomBeer.tagline}</p>
          <img src={randomBeer.image_url} alt="" />
          <p>First brewed in: {randomBeer.first_brewed}</p>
          <p>Contributed By: {randomBeer.contributed_by}</p>
          <p>Description: {randomBeer.description}</p>
          <Link to={`/beers/${randomBeer._id}`}>See details</Link>
        </div>
      )}
    </div>
  );
}