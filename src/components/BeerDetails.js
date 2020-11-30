import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';

function BeerDetails(props) {
  const [beerDetails, setBeerDetails] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { params } = props.match;

  function getBeerDetails() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((beerData) => {
        setBeerDetails(beerData.data);
      })
      .catch((error) => console.error(`Something went wrong: ${error}`));
  }

  if (loaded) {
    return (
      <div className="beerDetails">
        <h2>{beerDetails.name}</h2>
        <img src={beerDetails.image_url} alt={beerDetails.name} />
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.attenuation_level}</p>
        <p>{beerDetails.description}</p>
        <p>{beerDetails.contributed_by}</p>
      </div>
    );
  } else {
    getBeerDetails();
    setLoaded(true);
    return (
      <div>
        <Header />
        <div>Loading beer</div>
      </div>
    );
  }
}

export default BeerDetails;
