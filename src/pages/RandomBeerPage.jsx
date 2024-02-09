import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((result) => {
        setRandomBeer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="beerDetailsContainer">
      <img style={{width:'100px'}} src={randomBeer.image_url} alt="" />
      <h1 className="oneBeerDetail" style={{marginTop: `20px`}}>{randomBeer.name}</h1>
      <h2 className="oneBeerDetail" >{randomBeer.attenuation_level}</h2>
      <h2 className="oneBeerDetail">{randomBeer.tagline}</h2>
      <h3 className="oneBeerDetail">{randomBeer.first_brewed}</h3>
<div className="oneBeerDescriptionContainer">
      <p className="oneBeerDetail1" style={{width:`75%`}} >{randomBeer.description}</p>
      </div>
      <p className="oneBeerDetail" style={{paddingBottom: `20px`}} >{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
