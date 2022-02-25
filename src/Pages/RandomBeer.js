import Navbar from "../components/Navbar";
import SingleBeerDetails from "../components/SingleBeerDetails";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const url = "https://ih-beers-api2.herokuapp.com/beers/random";
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios(url).then((data) => {
      setRandomBeer(data.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <SingleBeerDetails beer={randomBeer} />
    </div>
  );
}

export default RandomBeer;
