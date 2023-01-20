import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const RandomBeer = () => {
  const baseURL = "https://ih-beers-api2.herokuapp.com/beers/";
  const [randomBeerDetails, setRandomBeerDetails] = useState();

  useEffect(() => {
    axios
      .get(baseURL + "random")
      .then((randomBeer) => {
        console.log(randomBeer);
        setRandomBeerDetails(randomBeer);
      })
      .catch((e) => {
        console.log("error getting random beer...", e);
      });
  }, []);

  return (
    <div>
      <div id="beerDetailCard">
        <Header />
        <h2>Random Beer</h2>
        <h3>But what a great selection!</h3>
        <img
          id="beerDetailImg"
          src={randomBeerDetails?.data.image_url}
          alt="beer"
        />
        <div class="whiteSunnies">
          <h2>{randomBeerDetails?.data.name}</h2>
          <h5>
            <i>{randomBeerDetails?.data.tagline}</i>
          </h5>
          <p>
            <b>First brewed: </b> {randomBeerDetails?.data.first_brewed}
          </p>
          <p>
            <b>Attenuation level: </b>{" "}
            {randomBeerDetails?.data.attenuation_level}
          </p>
          <p>
            <i>{randomBeerDetails?.data.description}</i>
          </p>
          <p>
            <b>Contributed by: </b> {randomBeerDetails?.data.contributed_by}
          </p>
          <Link to="/beers">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;