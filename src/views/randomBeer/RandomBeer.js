import { useState, useEffect } from "react";
import Navbar from "../../components/misc/Navbar";
import axios from 'axios';
import './RandomBeer.css';
/* import BeerDetail from "../beerDetail/BeerDetail"; */

const RandomBeer = () => {
  const [random, setRandom] = useState();

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((randomResult) => {
      setRandom(randomResult.data);
    });
  }, []);
  console.log(`Soy ${random} 🍺`)

  //Reuse beerDetail for this view pending

  return random ? (
    <>
    <Navbar />
    {random &&
      <div className="beerDetailCard">
  <img src={random.image_url} className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-title text-end fs-5 text-muted">{random.attenuation_level}</p>
    <h5 className="card-title text-start fs-2">{random.name}</h5>
    <p className="card-text text-start text-muted">{random.tagline}</p>
    <p className="card-text text-end fw-bold fs-6">{random.first_brewed}</p>
    <p className="card-text text-start fw-bold">{random.description}</p>
    <p className="card-text text-start fs-6 text-muted">{random.contributed_by}</p>
  </div>
  <div className="card-body">
  </div>
</div>
    }
    </>
  ) : (
    <div>
      <div className="spinner-border text-secondary mt-3" role="status">
      </div>
    </div>
  );
};
export default RandomBeer;
