import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {
  const [fetchedRandomBeer, setFetchedRandomBeer] = useState("");

  useEffect(() => {
    const fetchRandomBeer = async () => {
      const { data } = await axios(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setFetchedRandomBeer(data);
    };
    fetchRandomBeer();
  }, []);

  console.log(fetchedRandomBeer);

  return (
    <div>
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>

      <div>
        <img src={fetchedRandomBeer.image_url} alt="beer" />
        <h1>{fetchedRandomBeer.name}</h1>
        <p>{fetchedRandomBeer.tagline}</p>
        <p>{fetchedRandomBeer.contributed_by}</p>
        <p>{fetchedRandomBeer.first_brewed}</p>
        <p>{fetchedRandomBeer.attenuation_level}</p>
        <p>{fetchedRandomBeer.description}</p>
      </div>
    </div>
  );
}

export default RandomBeer;
