
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BeerDetails(props) {
    
   let [beer, setBeer] = useState({});
 
  useEffect(() => {
    console.log('use effect')
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`
      )
      .then((resApi) => {
        console.log(resApi);
        setBeer(resApi.data);
      });
  }, []);

//   console.log(props.match.params.beerId);
  return (
    <div className="beer-info">
      <div>
        <h1>{props.match.params.beerId}</h1>
        <img
          style={{ maxWidth: '2rem', height: 'auto' }}
          src={beer.image_url}
        />
      </div>
      <div>
        <h2>{beer.name}</h2>
      </div>
    </div>
  );
};

export default BeerDetails;
