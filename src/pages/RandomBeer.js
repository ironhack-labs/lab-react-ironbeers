import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  if (!randomBeer) {
    return <h2>LOADING.....</h2>;
  } else {
    return (
      <div>
        <Header />
        <Navbar />

        <div className="singleBear">
          <img src={randomBeer.image_url} alt="" />
          <h3>Name: {randomBeer.name}</h3>
          <h3>Tagline:{randomBeer.tagline}</h3>
          <h3>First Brewed :{randomBeer.first_brewed}</h3>
          <h3>attenuation_level :{randomBeer.attenuation_level}</h3>
          <h3>description :{randomBeer.description}</h3>
          <h3>contributed_by :{randomBeer.contributed_by}</h3>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
