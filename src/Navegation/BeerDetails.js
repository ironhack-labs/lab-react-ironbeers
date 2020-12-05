import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetails(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    async function getBeers() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`
        );
        setBeer(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getBeers();
  }, [props]);

  return (
    <div className="dfc-jc-ac beerDetail">
      <img src={beer.image_url} alt="Beer" />
      <div>
        <div className="df-jc-ac beeerTitlesAndPoints">
          <div className="beerTitles">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
          </div>
          <div className="beerPoints">
            <h2>{beer.attenuation_level}</h2>
            <h3>{beer.first_brewed}</h3>
          </div>
        </div>
        <p>{beer.description}</p>
        <h4>{beer.contributed_by}</h4>
      </div>
    </div>
  );
}

export default BeerDetails;
