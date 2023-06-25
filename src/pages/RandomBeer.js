import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/random`)
      .then((response) => setRandomBeer(response.data))
      .catch((e) => console.log("Error getting random beer from the API", e));
  }, []);

  return (
    <>
      <Header />
      {randomBeer ? (
        <div>
          <div>
            {randomBeer.image_url && (
              <img src={randomBeer.image_url} alt={randomBeer.name} />
            )}
          </div>
          <div>
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.tagline}</h2>
            <h2>{randomBeer.first_brewed}</h2>
            <h2>{randomBeer.attenuation_level}</h2>
            <p>{randomBeer.description}</p>
            <p>Created by: {randomBeer.contributed_by}</p>
            <Link to={`/`}>Back</Link>
            <hr />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default RandomBeer;
