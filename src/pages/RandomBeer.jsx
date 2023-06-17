
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

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
    <>
      <NavBar />

      <div className="randombeer">
        <img
          className="randombeerimg"
          src={fetchedRandomBeer.image_url}
          alt="beer"
        />
        <h1>{fetchedRandomBeer.name}</h1>
        <p>{fetchedRandomBeer.tagline}</p>
        <p>{fetchedRandomBeer.contributed_by}</p>
        <p>{fetchedRandomBeer.first_brewed}</p>
        <p>{fetchedRandomBeer.attenuation_level}</p>
        <p>{fetchedRandomBeer.description}</p>
      </div>
    </>
  );
}

export default RandomBeer;