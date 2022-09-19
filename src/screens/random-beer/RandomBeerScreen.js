import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Detail from "../../components/detail/Detail";

function RandomBeerScreen() {
  const [randomBeer, setRandomBeer] = useState(null);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((randomBeer) => setRandomBeer(randomBeer.data))
        .catch(error => console.error(error))
  }, []);

  return (
    
    <div className="container">
      <Header />
      <Detail {...randomBeer} />
    </div>
  );
}

export default RandomBeerScreen;
