import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetails(props) {
  const [beerSelected, setBeerSelected] = useState({});
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
      .then((result) => {
        setBeerSelected(result.data);
        setFetching(false);
      });
  }, []);

  console.log('consol:',beerSelected);

  return (
    <div>
      {fetching && (
        <div className="loading">
          <h1>Loading ...</h1>
        </div>
      )}
      <div className="beer-card">
            <img src={beerSelected.image_url}/>
            <h1>{beerSelected.name}</h1>
            <h3>{beerSelected.tagline}</h3>
            <p>{beerSelected.description}</p>
            <a className="back-button" href="/beers">Back</a>
      </div>
    </div>
  );
}

export default BeerDetails;
