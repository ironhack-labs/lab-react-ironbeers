import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((e) => {
        console.log("error getting a beer from API", e);
      });
  }, [beerId]);
  return (
    <div>
      {randomBeer && (
        <>
          <div key={randomBeer._id}>
            <h1>{randomBeer.name} </h1>
            <img src={randomBeer.image_url} alt="beer" />
            <h2>{randomBeer.tagline}</h2> <br />
            <h2>{randomBeer.first_brewed}</h2>
            <h2>{randomBeer.attenuation_level}</h2>
            <h2> {randomBeer.description}</h2>
            <h2> {randomBeer.contributed_by}</h2>
            <NavLink to={"/beers"}>Back to List of Beers</NavLink>
          </div>
        </>
      )}
    </div>
  );
}
export default RandomBeer;
