import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import OneBeer from './OneBeer';

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
      <div>
        <Header />
        <OneBeer beer={beerDetails} />;
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
