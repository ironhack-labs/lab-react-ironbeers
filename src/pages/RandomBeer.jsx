import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/RandomBeer.css';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!randomBeer) return <p>Loading...</p>;

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="random-beer-wrapper">
        <img src={randomBeer.image_url} alt="beer" />
        <div className="random-beer-content-container">
          <div className="random-beer-name-container">
            <h1>{randomBeer.name}</h1>
            <h2 className="color-grey">{randomBeer.tagline}</h2>
          </div>
          <div className="random-beer-info-container">
            <h2 className="color-grey">{randomBeer.attenuation_level}</h2>
            <h2>{randomBeer.first_brewed}</h2>
          </div>
        </div>
        <div className="random-beer-description-container">
          <h2>{randomBeer.description}</h2>
          <h3 className="color-grey">{randomBeer.contributed_by}</h3>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
