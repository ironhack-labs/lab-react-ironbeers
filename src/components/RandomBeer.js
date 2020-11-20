import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const RandomBeer = (props) => {
  const [beerState, setBeerState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const beer = props.match.params.id;

        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        );

        setBeerState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  return (
    <div>
      <Navbar />
      <div key={beerState._id} className="singleBeerContainer">
        <div>
          <img src={beerState.image_url} className="beerImgs" />
        </div>
        <div>
          <h3>{beerState.name}</h3>
          <p>{beerState.tagline}</p>
          <p>{beerState.attenuation_level}</p>
          <p>{beerState.first_brewed}</p>
          <p>{beerState.description}</p>

          <small>
            <p>{beerState.contributed_by}</p>
          </small>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
